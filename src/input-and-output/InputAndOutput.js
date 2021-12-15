import React, { useEffect } from "react";
import { useState } from 'react';
import { SketchPicker } from 'react-color'
import './App.css';
import { makeStyles, withStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { AbilitySearch } from "./AbilitySearch2";
import { Slider } from "@material-ui/core";
import { PokemonTextField } from './TextField';
// import PokeLogo from './img/pokemonLogo.svg.webp';
import { SecondaryButton, PrimaryButton, SearchButton } from "./Button";
import Axios from "axios";
import SearchIcon from './img/searchIcon.svg';
import Basic from './img/type_Basic.svg';
import Bug from './img/type_Bug.svg';
import Dark from './img/type_Dark.svg';
import Dragon from './img/type_Dragon.svg';
import Electric from './img/type_Electric.svg';
import Fairy from './img/type_Fairy.svg';
import Fighting from './img/type_Fighting.svg';
import Fire from './img/type_Fire.svg';
import Flying from './img/type_Flying.svg';
import Ghost from './img/type_Ghost.svg';
import Grass from './img/type_Grass.svg';
import Ground from './img/type_Ground.svg';
import Ice from './img/type_Ice.svg';
import Poison from './img/type_Poison.svg';
import Psychic from './img/type_Psychic.svg';
import Rock from './img/type_Rock.svg';
import Steel from './img/type_Steel.svg';
import Water from './img/type_Water.svg';
import BGOne from './img/BGOne.svg';
import BGTwo from './img/BGTwo.svg';
import html2canvas from "html2canvas";

const useStyles = makeStyles(({
  wrap: {
    padding: "100px 0 100px 5vw",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    boxSizing: "border-box",
    overflow: "hidden",
  },
  userInfo: {
    fontFamily: "DMSans-Regular",
    color: "#333333",
    fontSize: 'clamp(14px, .875rem, 20px)',
    width: "220px",
  },
  label: {
    marginBottom: "10px",
  },
  input: {
    marginBottom: "24px",
  },
  picker: {
    boxShadow: "#FF0000 0px 0px 0px 1px, rgb(0 0 0 / 10%) 0px 8px 16px",
    marginBottom: "24px",
  },
  empty: {
    maxWidth: "39%",
    minWidth: "30%",
  },
  pokemonCard: {
    width: "500px",
    height: "700px",
    borderRadius: "20px",
    boxShadow: "#E2E2E2 0px 0px 0px 1px, rgb(0 0 0 / 15%) 4px 4px 16px",
    padding: "60px 40px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  },
  userName: {
    fontFamily: "DMSans-Bold",
    fontSize: "clamp(24px, 1.5rem, 30px)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userAge: {
    fontFamily: "DMSans-Bold",
    fontSize: "clamp(18px, 1.125rem, 24px)",
  },
  pokeLogo:{
    height: "30px",
    marginBottom: "10px",
    marginTop: "-16px",
  },
  navBar: {
    position: "absolute",
    height: "60px",
    width: "100vw",
    backgroundColor: "#FF6C6C",
    top: "0",
    marginLeft: "-5vw",
    zIndex: "2",
  },
  pokeBall: {
    position: "absolute",
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    border: "10px solid #333333",
    top: "15px",
    left: "calc(50% - 50px)",
    boxSizing: "border-box",
    zIndex: "2",
  },
  pokeBall2: {
    position: "absolute",
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    border: "5px solid #333333",
    top: "40px",
    left: "calc(50% - 25px)",
    boxSizing: "border-box",
    zIndex: "2",
  },
  line: {
    height: "10px",
    width: "100%",
    marginTop: "60px",
    position: "absolute",
    backgroundColor: "#333333",
  },
  btn: {
    marginTop: "5%",
  },
  btns: {
    display: "flex",
    flexDirection: "column-reverse",
  },
  pokemonInput: {
    width: "70%",
  },
  searchButton: {
    width: "25%",
  },
  pokemonImg: {
    height: "250px",
    maxWidth: "400px",
  },
  pokemonImgContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "24px 0"
  },
  typeIcon: {
    width: "30px",
    height: "30px",
    right: "0",
  },
  checkAndCard: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginRight: "3vmin",
  },
  abilitiesText: {
    fontFamily: "DMSans-Medium",
    fontSize: "clamp(16px, 1rem, 22px)",
    height: "fit-content",
    borderRadius: '30px',
    padding: "16px",
    width: "100%",
    marginBottom: "12px",
    display: "flex",
    flexDirection: "row",
    textTransform: "capitalize",
    boxSizing: "border-box",
  },
  caption: {
    opacity: "0.75",
    minWidth: "80px",
  },
  pokemonDrawer: {
    height: "100vh",
    width: "fit-content",
    position: "absolute",
    backgroundImage: `url(${BGOne})`,
    boxSizing: "border-box",
    right: "0",
    top: "0",
    padding: "100px 3vmin 100px 8vmin",
    zIndex: "1",
  },
  userDrawer: {
    height: "100vh",
    width: "fit-content",
    position: "absolute",
    backgroundImage: `url(${BGTwo})`,
    boxSizing: "border-box",
    right: "calc(220px + 5.5vmin)",
    top: "0",
    padding: "100px 6vmin 100px 8vmin",
    overflowY: "hidden",
    overflowX: "hidden",
  },
  menu: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    marginLeft: "calc(5vw - 2vmin)",
  },
  menuItem: {
    fontFamily: "DMSans-Bold",
    fontSize: "clamp(20px, 1.25rem, 26px)",
    margin: "0 2vmin",
    color: "#FFFFFF",
    cursor: "pointer",
  },
  sectionName: {
    transform: "rotate(-90deg)",
    left: "-1.5rem",
    position: "absolute",
    fontFamily: "DMSans-Bold",
    fontSize: "clamp(16px, 1rem, 22px)",
  }
}));

function rgbaObjToStr(obj) {
  return `rgb(${obj.r},${obj.g},${obj.b})`;
}

function rgbaObjToStr2(obj) {
  return `rgb(${obj.r},${obj.g},${obj.b})`;
}

const presetColors = [
  "rgb(208,2,27)",
  "rgb(245,166,35)",
  "rgb(248,231,28)",
  "rgb(126,211,33)",
  "rgb(74,144,226)",
  "rgb(189,16,224)",
  "rgb(144,19,254)",
  "rgb(255,255,255)",
];

const StyledSlider = withStyles({
  root: {
      color: '#333333',
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
      color: "#333333",
      marginLeft: "-3px"
  },
  track: {
      height: 2,
      borderRadius: 1,
  },
  rail: {
      height: 2,
      borderRadius: 1,
      color: "rgba(255, 255, 255, 0.5)",
      opacity: 1,
  },
  PrivateValueLabel: {
    backgroundColor: 'red',
    fontSize: 'clamp(12px, .75rem, 18px)',
  },

})(Slider);

export default function App(props) {
  const classes = useStyles();
  const [color, setColor] = useState({
    r: 255,
    g: 255,
    b: 255,
  });
  const [textColor, setTextColor] = useState({
    r: 0,
    g: 0,
    b: 0,
  });
  const handleColor = e => {
    setColor(e.rgb);
  };
  const handleTextColor = e => {
    setTextColor(e.rgb);
  };
  
  const [name, setName] = useState("");
  const [age, setAge] = useState(-1);

  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({
    name: "",
    img: "", 
    type: "",
    abilities: "",
    ability1: "",
    ability2: "",
  });
  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (res) => {
        setPokemon({
          name: pokemonName,
          img: res.data.sprites.other.dream_world.front_default, 
          type: res.data.types[0].type.name,
          abilities: res.data.abilities,
          ability1: res.data.abilities[0].ability.name.replace("-", " "),
          ability2: res.data.abilities[1].ability.name.replace("-", " "),
        });
        console.log(res)
      }
    )
  };

  const randomNum = Math.floor(Math.random() * 898) + 1;
  const randomHex1 = Math.floor(Math.random() * 255) + 1;
  const randomHex2 = Math.floor(Math.random() * 255) + 1;
  const randomHex3 = Math.floor(Math.random() * 255) + 1;
  const randomHex4 = Math.floor(Math.random() * 255) + 1;
  const randomHex5 = Math.floor(Math.random() * 255) + 1;
  const randomHex6 = Math.floor(Math.random() * 255) + 1;

  const names = [
    "John Doe",
    "Jane Solomon",
    "Tina Waters",
    "Mariella Villegas",
    "Keenan Bass",
    "Greta O'Quinn",
    "Usmaan Harding",
    "Muneeb Wilkinson",
    "Viola Beattie",
    "Jamal Mccartney",
    "Mckenzie Mahoney",
    "Mcauley Mueller",
    "Mia-Rose Stevens",
    "Helen Cain",
    "Jana Johnston",
    "Jermaine Schneider",
    "Gordon Arnold",
    "Stacey Lowe",
    "Marcus Fitzgerald",
    "Leo Banks",
    "Laura Ferguson",
    "Dave Silva",
    "Justin Daniels",
    "Clarence Hernandez",
    "Jessica Luna",
    "Timothy Daniel",
    "Kelli Strickland",
    "Tasha Ellis",
    "Steve Newman",
    "Jill Reese",
    "Salvatore Saunders",
    "Holly Dawson",
    "Viola Bell",
    "Brooke Hopkins",
    "Johnathan Delgado",
    "Kirk Jones",
    "Elsa Herrera",
    "Krystal Caldwell",
  ]
  
  const randomSearch = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`).then(
      (res) => {
        if (res.data.abilities.length > 1 && res.data.sprites.other.dream_world.front_default !== null) {
          setPokemon({
            name: res.data.name,
            img: res.data.sprites.other.dream_world.front_default, 
            type: res.data.types[0].type.name,
            abilities: res.data.abilities,
            ability1: res.data.abilities[0].ability.name.replace("-", " "),
            ability2: res.data.abilities[1].ability.name.replace("-", " "),
          });
        } else if (res.data.abilities.length == 1 && res.data.sprites.other.dream_world.front_default !== null) {
          setPokemon({
            name: res.data.name,
            img: res.data.sprites.other.dream_world.front_default, 
            type: res.data.types[0].type.name,
            abilities: res.data.abilities,
            ability1: res.data.abilities[0].ability.name.replace("-", " "),
          });
        } else {};
      }
    );
    setColor({
      r: randomHex1,
      g: randomHex2,
      b: randomHex3,
    });
    setTextColor({
      r: randomHex4,
      g: randomHex5,
      b: randomHex6,
    });
    console.log(color);
    setName(names[Math.floor(Math.random() * 37) + 1]);
    setAge(Math.floor(Math.random() * 100) + 1);
  }

  const pokemonCheck = (pokemon == null) ? <div>Oh no! {pokemonName} seems to not be in our Pokédex.</div> : [];
  const abilityOne = (pokemon.abilities.length > 0) ? <div style={{backgroundColor: rgbaObjToStr2(textColor), border: "1px solid", borderColor: rgbaObjToStr2(textColor), color: rgbaObjToStr(color)}} className={classes.abilitiesText}><div style={{color: rgbaObjToStr(color)}} className={classes.caption}>Ability 1: </div>{pokemon.ability1}</div> : [];
  const abilityTwo = (pokemon.abilities.length >= 1) ? <div style={{backgroundColor: rgbaObjToStr2(textColor), border: "1px solid", borderColor: rgbaObjToStr2(textColor), color: rgbaObjToStr(color)}} className={classes.abilitiesText}><div style={{color: rgbaObjToStr(color)}} className={classes.caption}>Ability 2: </div>{(pokemon.abilities.length > 0) ? pokemon.ability2 : []}</div> : [];

  const pokemonTypeImg = (pokemon.type === "normal") ? <img alt="normal" className={classes.typeIcon} src={Basic}/> :
  (pokemon.type === "bug") ? <img className={classes.typeIcon} alt="bug" src={Bug}/> :
  (pokemon.type === "dark") ? <img className={classes.typeIcon} alt="dark" src={Dark}/> :
  (pokemon.type === "dragon") ? <img className={classes.typeIcon} alt="dragon" src={Dragon}/> :
  (pokemon.type === "electric") ? <img className={classes.typeIcon} alt="electric" src={Electric}/> :
  (pokemon.type === "fairy") ? <img className={classes.typeIcon} alt="fairy" src={Fairy}/> :
  (pokemon.type === "fighting") ? <img className={classes.typeIcon} alt="fighting" src={Fighting}/> :
  (pokemon.type === "fire") ? <img className={classes.typeIcon} alt="fire" src={Fire}/> :
  (pokemon.type === "flying") ? <img className={classes.typeIcon} alt="flying" src={Flying}/> :
  (pokemon.type === "ghost") ? <img className={classes.typeIcon} alt="ghost" src={Ghost}/> :
  (pokemon.type === "grass") ? <img className={classes.typeIcon} alt="grass" src={Grass}/> :
  (pokemon.type === "ground") ? <img className={classes.typeIcon} alt="ground" src={Ground}/> :
  (pokemon.type === "ice") ? <img className={classes.typeIcon} alt="ice" src={Ice}/> :
  (pokemon.type === "poison") ? <img className={classes.typeIcon} alt="poison" src={Poison}/> :
  (pokemon.type === "psychic") ? <img className={classes.typeIcon} alt="psychic" src={Psychic}/> :
  (pokemon.type === "rock") ? <img className={classes.typeIcon} alt="rock" src={Rock}/> :
  (pokemon.type === "steel") ? <img className={classes.typeIcon} alt="steel" src={Steel}/> :
  (pokemon.type === "water") ? <img className={classes.typeIcon} alt="water" src={Water}/> : [];

  useEffect(() => {
    const node = document.getElementById("pokemon-card");
    let image = new Image();

    // useCors to draw image from different origin
    html2canvas(node, { useCORS: true }).then((canvas) => {
      let a = document.createElement("a");
      document.body.appendChild(a);
      a.download = "test.png";
      a.href = canvas.toDataURL();
      a.click();
    });
  });

  return (
    <div className={classes.wrap}>
      <div className={classes.checkAndCard}>
        <div>{pokemonCheck}</div>
        <div
          className={classes.pokemonCard}
          style={{backgroundColor: rgbaObjToStr(color)}}
        >
          <div className={classes.userName} style={{color: rgbaObjToStr2(textColor)}}>
            {name}
            {pokemonTypeImg}
          </div>
          <div className={classes.userAge} style={{color: rgbaObjToStr2(textColor)}}>
          <svg style={{height: "13px", width: "auto", marginRight: "5px"}} class="heart" viewBox="0 0 32 29.6">
            <path style={(age > 0) ? {fill: rgbaObjToStr2(textColor)} : {opacity: "0"}} d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
          </svg> 
            {(age === -1)? "" : (age + 1)}
          </div>
          <div className={classes.pokemonImgContainer}>
            <img className={classes.pokemonImg} alt="" src={pokemon.img}/>
          </div>
          {abilityOne}
          {abilityTwo}
        </div>
      </div>
      <div className={classes.btns}>
        <PrimaryButton className={classes.btn}>Download</PrimaryButton>
        <SecondaryButton onClick={randomSearch} className={classes.btn}>Randomize!</SecondaryButton>
        <SecondaryButton onClick={() => window.location.reload(false)} className={classes.btn}>Reset</SecondaryButton>
      </div>
      <div className={classes.navBar}>
        <div className={classes.pokeBall}/>
        <div className={classes.pokeBall2}/>
        <div className={classes.line}/>
        <div className={classes.menu}>
          <div onClick={() => window.location.reload(false)} className={classes.menuItem}> POKÉMON CARD MAKER </div>
          <div className={classes.menuItem}> About </div>
        </div>
      </div>
      <div className={classes.pokemonDrawer}>
        <div className={classes.userInfo}>
          <div className={classes.sectionName} style={{top: "650px"}}> Pokémon Search </div>
          <div className={classes.label}> Search Pokémon </div>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "24px"}}>
            <div className={classes.pokemonInput}>
              <PokemonTextField onChange={(event) => setPokemonName(event.target.value)}/>
            </div>
            <div className={classes.searchButton}>
              <SearchButton onClick={searchPokemon}><img alt="Search" src={SearchIcon}/></SearchButton>
            </div>
          </div>
          <div className={classes.label}> Search by Ability </div>
          <AbilitySearch/>
        </div>
      </div>
      <div className={classes.userDrawer}>
      <div className={classes.userInfo}>
          <div className={classes.sectionName} style={{top: "310px"}}> Your Information </div>
          <div className={classes.label}> Your Name </div>
          <div className={classes.input}><PokemonTextField onChange={(e) => setName(e.target.value)} value={name}/></div>
          <div className={classes.label}> Your Age </div>
          <div className={classes.input}>
            <StyledSlider
              value={age}
              defaultValue={19}
              min={-1}
              step={1}
              max={99}
              scale={(x) => x + 1}
              onChange={(e, sliderValue) => {setAge(sliderValue);}}
              valueLabelDisplay="auto"
              aria-labelledby="non-linear-slider"
            />
          </div>
          <div className={classes.label}> Your Favorite Color </div>
          <SketchPicker
            className={classes.picker}
            style={{
              color: {
                height: "100%",
              }
            }}
            color={color}
            width="calc(100% - 20px)"
            presetColors={presetColors}
            onChange={handleColor}
            disableAlpha
          />
          <div className={classes.label}> Your Second Favorite Color </div>
          <SketchPicker
            className={classes.picker}
            color={textColor}
            width="calc(100% - 20px)"
            presetColors={presetColors}
            onChange={handleTextColor}
            disableAlpha
          />
        </div>
      </div>
    </div>
  );
}
