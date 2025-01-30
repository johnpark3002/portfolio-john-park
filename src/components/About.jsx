import aboutImg from "../assets/johnParkGradPhoto.JPG";
import { ABOUT_TEXT, ABOUT, ME } from "../constants";
import { motion } from "framer-motion";
import { useLanguage } from "../languageContext";

const About = () => {
  const { language } = useLanguage();

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        {ABOUT[language]}
        <span className="text-neutral-500"> {ME[language]}</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-start justify-center ">
            <div className="rounded-xl h-112 overflow-hidden">
              <img
                className="w-full max-w-[400px] h-auto object-contain"
                src={aboutImg}
                alt="about"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT[language]}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
