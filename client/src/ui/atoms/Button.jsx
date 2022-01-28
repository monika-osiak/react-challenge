import * as React from 'react';
import { Button as MuiButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { createTheme } from '@mui/material/styles';
import '../styles.css';

function doSomething() {
  alert('I have no idea what I\'m doing honestly')
};

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
      dark: "#FF5D5D",
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
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: 15,
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          padding: '8px 12px'
        },

        contained: ({ ownerState, theme }) => ({
          ...(ownerState.color) && {
            backgroundColor: theme.palette[ownerState.color].light,
            color: theme.palette[ownerState.color].dark,
            '&:hover': {
              backgroundColor: theme.palette[ownerState.color].main,
              color: theme.palette['grey'].background
            },
            '&:active': {
              backgroundColor: theme.palette[ownerState.color].light,
              color: theme.palette[ownerState.color].dark,
            },
            '&.Mui-disabled': {
              backgroundColor: myTheme.palette.grey.level1,
              color: myTheme.palette.grey.level3,
            }
          }
        }),

        containedSuccess: {
          '&:hover': {
            backgroundColor: myTheme.palette.success.dark,
          },
          '&:active': {
            backgroundColor: myTheme.palette.success.light,
            color: myTheme.palette.success.dark,
          }
        },

        containedPrimary: {
          backgroundColor: myTheme.palette.primary.main,
          color: myTheme.palette.grey.background,
          '&:hover': {
            backgroundColor: myTheme.palette.primary.dark,
            color: myTheme.palette.grey.background
          }
        },

        outlined: ({ ownerState, theme }) => ({
          ...(ownerState.color) && {
            backgroundColor: theme.palette['grey'].background,
            color: theme.palette[ownerState.color].main,
            borderSize: 1,
            borderColor: theme.palette[ownerState.color].main,
            '&:hover': {
              backgroundColor: theme.palette[ownerState.color].light
            },
            '&.Mui-disabled': {
              backgroundColor: myTheme.palette.grey.background,
              color: myTheme.palette.grey.level2,
              borderColor: myTheme.palette.grey.level1
            }
          }
        }),

        outlinedSuccess: {
          color: myTheme.palette.success.dark
        },

        outlinedPrimary: {
          backgroundColor: myTheme.palette.secondary.main,
          color: myTheme.palette.primary.main,
          border: 'none',
          '&:hover': {
            backgroundColor: myTheme.palette.secondary.dark,
            color: myTheme.palette.primary.dark,
            border: 'none'
          },
          '&.Mui-disabled': {
            backgroundColor: myTheme.palette.grey.level1,
            color: myTheme.palette.grey.level3,
            border: 'none'
          }
        }
      }
    }
  }
})

export function PlusIcon({children, ...props}) {
  return <AddIcon
    {...props}
    sx={{transform: "rotate(-180deg)", fontSize:'1rem'}}
    theme={myTheme}
  >{children}</AddIcon>
}

export function LeftIcon({children, ...props}) {
  return <ChevronLeftIcon
    {...props}
    sx={{transform: "rotate(-180deg)", fontSize:'1rem'}}
    theme={myTheme}
  >{children}</ChevronLeftIcon>
}

export function Button({ children, ...props }) {
  return <MuiButton
    {...props}
    theme={myTheme}
    onClick={doSomething}
  >{children}</MuiButton>;
}
