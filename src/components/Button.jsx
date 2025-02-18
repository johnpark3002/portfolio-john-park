import Resume from "../../public/resume/john-park-software-engineering-resume.pdf";
import { DOWNLOAD_RESUME } from "../constants";
import { useLanguage } from "../languageContext";

const Button = () => {
  const { language } = useLanguage();

  return (
    <button className="cursor-pointer bg-gradient-to-b from-indigo-500 to-indigo-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group">
      <div className="relative overflow-hidden">
        <a
          href="/resume/john-park-software-engineering-resume.pdf?url"
          download="john-park-software-engineering-resume.pdf"
        >
          <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            {DOWNLOAD_RESUME[language]}
          </p>
          <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            {DOWNLOAD_RESUME[language]}
          </p>
        </a>
      </div>
    </button>
  );
};

export default Button;
