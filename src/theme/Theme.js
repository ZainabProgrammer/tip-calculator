import { createTheme } from "@mui/system";

const Theme = createTheme({
  components: {
    Typography: {
      styleOverrides: {
        root: {
          fontFamily: "unset",
        },
      },
    },
  },
});

export default Theme;
