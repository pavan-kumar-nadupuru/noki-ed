import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

const useAppTheme = () => {
  const themeMode = useSelector((state) => state.theme);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
          primary: {
            main: themeMode === "light" ? "#1976d2" : "#90caf9",
          },
          secondary: {
            main: themeMode === "light" ? "#dc004e" : "#f48fb1",
          },
          background: {
            default: themeMode === "light" ? "#f5f5f5" : "#303030",
            paper: themeMode === "light" ? "#ffffff" : "#424242",
          },
        },
      }),
    [themeMode]
  );

  return theme;
};

export default useAppTheme;
