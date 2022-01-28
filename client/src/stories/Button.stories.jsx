import React from 'react';

import { Button } from '../ui';
import { Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Zadanie 1/Button',
  component: Button,
  description: 'ahaha',
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ['contained', 'outlined'],
    },
    size: {
      control: {
        type: 'radio',
      },
      options: ['large', 'medium', 'small'],
    },
    color: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'error', 'success', 'warning'],
    },
    disabled: {
      control: {
        default: false,
        type: 'boolean',
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => <Button {...args}>{label}</Button>;
const All = () => (
  <>
    <Grid container>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Contained</Typography>
      </Grid>
      <Button variant={'contained'} color={'primary'}>
        Button
      </Button>
      <Button variant={'contained'} color={'error'}>
        Button
      </Button>
      <Button variant={'contained'} color={'success'}>
        Button
      </Button>
      <Button variant={'contained'} color={'warning'}>
        Button
      </Button>
      <Grid item xs={12} sx={{ mb: 2 }}></Grid>
      <Button variant={'contained'} color={'primary'} disabled>
        Button
      </Button>
      <Button variant={'contained'} color={'error'} disabled>
        Button
      </Button>
      <Button variant={'contained'} color={'success'} disabled>
        Button
      </Button>
      <Button variant={'contained'} color={'warning'} disabled>
        Button
      </Button>
      <Grid item xs={12} sx={{ mb: 2 }}></Grid>
      <Button variant={'contained'} color={'primary'}>
        <AddIcon></AddIcon>
        Button
      </Button>
      <Button variant={'contained'} color={'error'}>
        <AddIcon></AddIcon>
        Button
      </Button>
      <Button variant={'contained'} color={'success'}>
        <AddIcon></AddIcon>
        Button
      </Button>
      <Button variant={'contained'} color={'warning'}>
        <AddIcon></AddIcon>
        Button
      </Button>
      <Grid item xs={12} sx={{ mb: 2 }}></Grid>
      <Button variant={'contained'} color={'primary'}>
        Button
        <ChevronLeftIcon sx={{transform: "rotate(-180deg)"}}></ChevronLeftIcon>
      </Button>
      <Button variant={'contained'} color={'error'}>
        Button
        <ChevronLeftIcon sx={{transform: "rotate(-180deg)"}}></ChevronLeftIcon>
      </Button>
      <Button variant={'contained'} color={'success'}>
        Button
        <ChevronLeftIcon sx={{transform: "rotate(-180deg)"}}></ChevronLeftIcon>
      </Button>
      <Button variant={'contained'} color={'warning'}>
        Button
        <ChevronLeftIcon sx={{transform: "rotate(-180deg)"}}></ChevronLeftIcon>
      </Button>
    </Grid>

    <Grid container sx={{ mt: 5 }}>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Outlined</Typography>
      </Grid>
      <Button variant={'outlined'} color={'primary'}>
        Button
      </Button>
      <Button variant={'outlined'} color={'error'}>
        Button
      </Button>
      <Button variant={'outlined'} color={'success'}>
        Button
      </Button>
      <Button variant={'outlined'} color={'warning'}>
        Button
      </Button>
      <Grid item xs={12} sx={{ mb: 2 }}></Grid>
      <Button variant={'outlined'} color={'primary'} disabled>
        Button
      </Button>
      <Button variant={'outlined'} color={'error'} disabled>
        Button
      </Button>
      <Button variant={'outlined'} color={'success'} disabled>
        Button
      </Button>
      <Button variant={'outlined'} color={'warning'} disabled>
        Button
      </Button>
      <Grid item xs={12} sx={{ mb: 2 }}></Grid>
      <Button variant={'outlined'} color={'primary'}>
        <AddIcon></AddIcon>
        Button
      </Button>
      <Button variant={'outlined'} color={'error'}>
        <AddIcon></AddIcon>
        Button
      </Button>
      <Button variant={'outlined'} color={'success'}>
        <AddIcon></AddIcon>
        Button
      </Button>
      <Button variant={'outlined'} color={'warning'}>
        <AddIcon></AddIcon>
        Button
      </Button>
      <Grid item xs={12} sx={{ mb: 2 }}></Grid>
      <Button variant={'outlined'} color={'primary'}>
        Button
        <ChevronLeftIcon sx={{transform: "rotate(-180deg)"}}></ChevronLeftIcon>
      </Button>
      <Button variant={'outlined'} color={'error'}>
        Button
        <ChevronLeftIcon sx={{transform: "rotate(-180deg)"}}></ChevronLeftIcon>
      </Button>
      <Button variant={'outlined'} color={'success'}>
        Button
        <ChevronLeftIcon sx={{transform: "rotate(-180deg)"}}></ChevronLeftIcon>
      </Button>
      <Button variant={'outlined'} color={'warning'}>
        Button
        <ChevronLeftIcon sx={{transform: "rotate(-180deg)"}}></ChevronLeftIcon>
      </Button>
    </Grid>
  </>
);

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  label: 'Button',
};

export const AllStories = All.bind({});
