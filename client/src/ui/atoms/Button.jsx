import * as React from 'react';
import { Button as MuiButton } from '@mui/material';
import { createTheme } from "@mui/material/styles";

let myTheme = createTheme({
  palette: {
    primary: {
      main: "#334ACC",
      dark: "#223289"
    },
    secondary: {
      main: "#E8EAF6",
      dark: "#C5CAE9"
    },
    success: {
      main: "#66BB6A",
      dark: "#00A980",
      light: "#DBEBDB"
    },
    warning: {
      main: "#FFA726",
      dark: "#B28C09",
      light: "#FFF5D2"
    },
    error: {
      main: "#FF5D5D",
      light: "#FCECE6"
    },
    grey: {
      foreground: "#333333",
      level4: "#333333f7",
      level3: "#33333340",
      level2: "#33333326",
      level1: "#33333312",
      background: "#ffffff"
    }
  }
});

myTheme = createTheme(myTheme, {
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: myTheme.palette.primary.main,
          '&:hover': {
            backgroundColor: myTheme.palette.primary.dark
          }
        },
        outlinedPrimary: {
          backgroundColor: myTheme.palette.secondary.main,
          borderStyle: "none",
          '&:hover': {
            backgroundColor: myTheme.palette.secondary.dark,
            borderStyle: "none"
          }
        },
        containedError: {
          color: myTheme.palette.error.main,
          backgroundColor: myTheme.palette.error.light,
          '&:hover': {
            backgroundColor: myTheme.palette.error.main,
            color: myTheme.palette.grey.background
          },

        },
        outlinedError: {
          backgroundColor: myTheme.palette.grey.background,
          '&:hover': {
            backgroundColor: myTheme.palette.error.light
          }
        },
        containedSuccess: {
          backgroundColor: myTheme.palette.success.light,
          color: myTheme.palette.success.dark,
          '&:hover': {
            backgroundColor: myTheme.palette.success.dark,
            color: myTheme.palette.grey.background
          }
        },
        outlinedSuccess: {
          backgroundColor: myTheme.palette.grey.background,
          borderStyle: "1px solid myTheme.palette.success.main",
          '&:hover': {
            borderStyle: "1px solid myTheme.palette.success.main"
          }
        },
        containedWarning: {
          backgroundColor: myTheme.palette.warning.light,
          color: myTheme.palette.warning.dark,
          '&:hover': {
            backgroundColor: myTheme.palette.warning.main,
            color: myTheme.palette.grey.background
          }
        },
        outlinedWarning: {
          backgroundColor: myTheme.palette.grey.background,
          '&:hover': {
            backgroundColor: myTheme.palette.warning.light,
            borderStyle: "1px solid myTheme.palette.warning.main"
          }
        },
      }
    }
  }
})

export function Button({ children, ...props }) {
  return <MuiButton {...props} theme={ myTheme }>{children}</MuiButton>;
}
