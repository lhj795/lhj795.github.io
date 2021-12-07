import React from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core';

const StyledSlider = withStyles({
    root: {
        color: '#FFFFFF',
        height: 8,
        padding: 0,
    },
    thumb: {
        height: 10,
        width: 10,
        color: "#333333",
        marginTop: -4,
        '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        fontFamily: 'DMSans-Bold',
        fontSize: 'clamp(12px, .75rem, 18px)',
        left: 'calc(-85%)',
        color: "#FFFFFF",
        marginLeft: "-3px"
    },
    track: {
        height: 2,
        borderRadius: 1,
    },
    rail: {
        height: 2,
        borderRadius: 1,
        color: "white",
        opacity: 1,
    },

    PrivateValueLabel: {
      backgroundColor: 'red',
    },

})(Slider);

export default function PokemonSlider() {
  const [value, setValue] = React.useState(19);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <StyledSlider
        value={value}
        min={0}
        step={1}
        max={99}
        scale={(x) => x + 1}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </div>
  );
}
