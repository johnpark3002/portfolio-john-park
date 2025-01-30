import React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useLanguage } from "../languageContext";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: "none",
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#ccc",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#f5f5f5",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `none`,
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "#003892",
    }),
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#e0e0e0",
    borderRadius: 20 / 2,
  },
}));

const ToggleButton = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
      <Typography>EN</Typography>
      <MaterialUISwitch
        sx={{ m: 1 }}
        checked={language === "fr"}
        onChange={toggleLanguage}
      ></MaterialUISwitch>
      <Typography>FR</Typography>
    </Stack>
  );
};

export default ToggleButton;
