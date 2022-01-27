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

myTheme = createTheme(myTheme,{
  components: {
    MuiButton: {
      variants: [
        {
          props: {
            color: 'primary',
            variant: 'contained'
          },
          style: {
            backgroundColor: myTheme.palette.primary.main
          }
        },
        {
          props: {
            color: 'primary',
            variant: 'outlined'
          },
          style: {
            backgroundColor: myTheme.palette.secondary.main,
            "border-style": "none"
          }
        },
        {
          props: {
            color: 'error',
            variant: 'contained'
          },
          style: {
            color: myTheme.palette.error.main,
            backgroundColor: myTheme.palette.error.light
          }
        },
        {
          props: {
            color: 'error',
            variant: 'outlined'
          },
          style: {
            backgroundColor: myTheme.palette.grey.background
          }
        },
        {
          props: {
            color: 'success',
            variant: 'contained'
          },
          style: {
            backgroundColor: myTheme.palette.success.light,
            color: myTheme.palette.success.dark
          }
        },
        {
          props: {
            color: 'success',
            variant: 'outlined'
          },
          style: {
            backgroundColor: myTheme.palette.grey.background
          }
        },
        {
          props: {
            color: 'warning',
            variant: 'contained'
          },
          style: {
            backgroundColor: myTheme.palette.warning.light,
            color: myTheme.palette.warning.dark
          }
        },
        {
          props: {
            color: 'warning',
            variant: 'outlined'
          },
          style: {
            backgroundColor: myTheme.palette.grey.background
          }
        }
      ],
    },
  }
});

export function Button({ children, ...props }) {
  return <MuiButton {...props} theme={ myTheme }>{children}</MuiButton>;
}
