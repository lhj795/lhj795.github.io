import React, { useEffect } from "react";
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { TextField } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Axios from "axios";

const autocompleteTheme = createTheme({
  overrides: {
    MuiInputLabel: {
      outlined: {
        ".MuiAutocomplete-root &:not(.MuiInputLabel-shrink)": {
          transform: "translate(14px, 12.5px) scale(1)"
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        backgroundColor: "#FFFFFF",
        borderRadius: '4px',
        boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.05)',
        fontFamily: "DMSans-Regular",
        height: '42px',
        marginTop: '0',
        padding: "0",
        "& $notchedOutline": {
          borderColor: '#c4c4c4',
          borderWidth: '1px',
        },
        "&:hover $notchedOutline": {
          borderColor: '#333333',
          borderWidth: '2px',
          transition: 'none',
        },
        "&$focused $notchedOutline": {
          borderColor: '#333333',
          borderWidth: '2px',
        }
      }
    },
    MuiAutocomplete: {
      inputRoot: {
        '&&[class*="MuiOutlinedInput-root"] $input': {
          padding: 0
        }
      }
    }
  }
});

export function AbilitySearch(props) {
  const [ability, setAbilty] = useState([]);
  
  const [abilityName, setAbilityName] = useState({
    abilityNameOne: "",
    pokemon: "",
  });

  useEffect(() => {
    Axios.get("https://pokeapi.co/api/v2/ability/?limit=327").then(res => {
      setAbilty({
        name: res.data.results
      })
    })
    // Axios.get(`https://pokeapi.co/api/v2/ability/${abilityName}`).then(
    //   (res) => {
    //     setAbilty({
    //       abilityOneName: abilityName,
    //       pokemon: res.data.results.pokemon,
    //     });
    //     console.log(res)
    //   }
    // )
  }, [])

  const searchAbility = () => {
    Axios.get(`https://pokeapi.co/api/v2/ability/${abilityName}`).then(
      (res) => {
        setAbilty({
          abilityNameOne: abilityName,
          pokemon: res.pokemon,
        });
        console.log(res)
      }
    )
  }
  
  return (
    <ThemeProvider theme={autocompleteTheme}>
        <Autocomplete
            id="search-abilty"
            options={ability.name}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => <TextField variant="outlined" {...params} InputProps={{ ...params.InputProps, endAdornment: undefined, size: (props.label !== undefined) ? props.label.length+2 : 10}}/>}
            disableClearable
            noOptionsText="Ability doesn't exist 😔"
            onChange={(event) => setAbilityName(event.target.value)}
        />
        {/* <SearchButton onClick={searchAbility}>Search</SearchButton> */}
        {/* <p>{ability.pokemon}</p> */}
    </ThemeProvider>
  )
}