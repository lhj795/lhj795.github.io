import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import 'aos/dist/aos.css';
import maskAnimation from "./image/maskAnimation1.mp4"
import './App.css';
import './Resume.css';
import PropTypes from 'prop-types';
import TenXLogo from './image/10xfinders/10xFinders_logo-09.png'

const useStyles = makeStyles(({
    wrap: {
        height: "100vh",
        margin: "0",
    },
    svg: {
        position: "fixed",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
    },
    text: {
        fontFamily: "ClarendonBold",
        transform: () => {
            if (window.pageYOffset > window.innerHeight*3.1) {
                return "translate(-40%, -40%)"
            } else {
                return  ""
            }
        },
        fontSize: () => {
            if (window.pageYOffset > window.innerHeight*3.1) {
                return "4rem"
            } else {
                return "14rem"
            }
        },
        textAnchor: "middle",
        position: "fixed",
        transition: "1s",
    },
    textBlack: {
        fontFamily: "ClarendonBold",
        transform: () => {
            if (window.pageYOffset > window.innerHeight*3.1) {
                return "translate(-30%, -40%)"
            } else {
                return  ""
            }
        },
        textAnchor: "middle",
        zIndex: "1",
        opacity: () =>{
            if (window.pageYOffset > 600) {
                return "1"
            } else {
                return "0"
            }
        },
        fontSize: () =>{
            if (window.pageYOffset > window.innerHeight*3.1) {
                return "4rem"
            } else {
                return "14rem"
            }
        },
        transition: "1s",
        fill: "#333333",
        height: "100Vh",
        width: "100vw",
    },
    video: {
        width: "100vw",
        height: "84vh",
        objectFit: "unset",
        opacity: () =>{
            if (window.pageYOffset > window.innerHeight*3.1) {
                return "0"
            } else {
                return "1"
            }
        },
    },
    rect: {
        fill: "white",
    },
    scrollBound: {
        height: "500vh"
    },
    titles: {
        fontFamily: "ClarendonRegular",
        fontSize: "2rem",
        position: "fixed",
        top: "41%",
        mixBlendMode: "difference",
        color: "white",
        right: "-1110px",
    },
    rect: {
        height: () =>{
            if (window.pageYOffset > window.innerHeight*3.1) {
                return "0"
            } else {
                return "100%"
            }
        },
        width: () =>{
            if (window.pageYOffset > window.innerHeight*3.1) {
                return "0"
            } else {
                return "100%"
            }
        },
    },
    scrollBound2: {
        marginTop: () =>{
            if (window.pageYOffset > window.innerHeight*3.1) {
                return "0"
            } else {
                return "100vh"
            }
        },
        transition: "2s",
        height: "400vh",
    },
    userResearch: {
        fontFamily: "AkagiSemibold",
        fontSize: "4rem",
        position: "fixed",
        top: "30%",
        color: "#333333",
        right: "-3000px",
        transform: () => {
            var num = window.innerHeight*3.1;
            if (window.pageYOffset > window.innerHeight*3.1) {
                return `translate(${num + window.pageYOffset * -1}px)`
            } else {
                return  `translate(${num + window.pageYOffset * -1}px)`
            }
        },
        display: "flex",
        flexDirection: "row",
    },
    userInterface: {
        fontFamily: "AkagiSemibold",
        fontSize: "4rem",
        position: "fixed",
        top: "42%",
        color: "#333333",
        left: "-2604px",
        transform: () => {
            var num = window.innerHeight*3.1;
            if (window.pageYOffset > window.innerHeight*3.1) {
                return `translate(${-num + window.pageYOffset * 1}px)`
            } else {
                return  `translate(${-num + window.pageYOffset * 1}px)`
            }
        },
        display: "flex",
        flexDirection: "row",
    },
    consumerProduct: {
        fontFamily: "AkagiSemibold",
        fontSize: "4rem",
        position: "fixed",
        top: "56%",
        color: "#333333",
        right: "-2674px",
        transform: () => {
            var num = window.innerHeight*3.1;
            if (window.pageYOffset > window.innerHeight*3.1) {
                return `translate(${num + window.pageYOffset * -1}px)`
            } else {
                return  `translate(${num + window.pageYOffset * -1}px)`
            }
        },
        display: "flex",
        flexDirection: "row",
    },
    threeD: {
        fontFamily: "AkagiSemibold",
        fontSize: "4rem",
        position: "fixed",
        top: "68%",
        color: "#333333",
        left: "-2901px",
        transform: () => {
            var num = window.innerHeight*3.1;
            if (window.pageYOffset > window.innerHeight*3.1) {
                return `translate(${-num + window.pageYOffset * 1}px)`
            } else {
                return  `translate(${-num + window.pageYOffset * 1}px)`
            }
        },
        display: "flex",
        flexDirection: "row",
    },
    userResearchTitle: {
        fontFamily: "AkagiBold",
        color: "#21A5C3",
        margin: "0 25px 0 25px"
    },
    userInterfaceTitle: {
        fontFamily: "AkagiBold",
        color: "#DB314D",
        margin: "0 25px 0 25px"
    },
    consumerProductTitle: {
        fontFamily: "AkagiBold",
        color: "#6ABA26",
        margin: "0 25px 0 25px"
    },
    skill: {
        margin: "0 25px 0 25px"
    },
    threeDTitle: {
        fontFamily: "AkagiBold",
        color: "#F68333",
        margin: "0 25px 0 25px"
    },
    scrollBound3: {
        marginTop: () =>{
            if (window.pageYOffset > window.innerHeight*6.5) {
                return "0"
            } else {
                return "100vh"
            }
        },
        transition: "2s",
        height: "400vh",
        height: "500vh",
        // backgroundColor: "#F5EBDE",
    },
    test: {
        width: "500px",
        height: "500px",
        border: "2px solid white",
        borderLeft: "2px solid black",
        borderRadius: "50%",
        position: "fixed",
        // bottom: "-250px",
        // left: "-250px",
        top: "100px",
        left: "600px",
        transform: "rotate(80deg)",
        transition: "1s",
        boxSizing: "border-box",
    },
    test2: {
        width: "502px",
        height: "502px",
        borderTop: "10px solid white",
        borderBottom: "10px solid white",
        borderRight: "10px solid white",
        borderLeft: "10px solid transparent",
        borderRadius: "50%",
        position: "fixed",
        // bottom: "-250px",
        // left: "-250px",
        top: "99px",
        left: "599px",
        transform: "rotate(140deg)",
        transition: "1s",
        boxSizing: "border-box",
    },
    opacity: {
        opacity: () =>{
            if (window.pageYOffset > window.innerHeight*8) {
                return "1"
            } else {
                return "0"
            }
        },
        transition: "1s",
        zIndex: "1",
    },
    boundary: {
        width: "160vh",
        height: "160vh",
        bottom: "-80vh",
        left: "-80vh",
        position: "fixed",
        border: "1px solid #dbdbdb",
        borderRadius: "50%",
        zIndex: "1",
    },
    risd: {
        width: "90vh",
        height: "90vh",
        bottom: "-45vh",
        left: "-45vh",
        position: "fixed",
        borderTop: "10px solid #f96611",
        border: "10px solid white",
        borderRadius: "50%",
        transform: () => {
            if (window.pageYOffset > window.innerHeight*12.5) {
                return "rotate(11deg)"
            } else {
                return "rotate(-47deg)"
            }
        },
        transition: "1s",
    },
    brown: {
        width: "110vh",
        height: "110vh",
        bottom: "-55vh",
        left: "-55vh",
        position: "fixed",
        borderTop: "10px solid #54301a",
        border: "10px solid white",
        borderRadius: "50%",
        transform: () => {
            if (window.pageYOffset > window.innerHeight*11.5) {
                return "rotate(41deg)"
            } else {
                return "rotate(29deg)"
            }
        },
        transition: "1s",
    },
    brownCover: {
        width: "109.5vh",
        height: "109.5vh",
        bottom: "-55vh",
        left: "-55vh",
        position: "fixed",
        borderTop: "13px solid transparent",
        border: "13px solid white",
        borderRadius: "50%",
        transform: "rotate(119.5deg)",
    },
    korea: {
        width: "105vh",
        height: "105vh",
        bottom: "-52.5vh",
        left: "-52.5vh",
        position: "fixed",
        borderTop: "10px solid #881228",
        border: "10px solid white",
        borderRadius: "50%",
        transform: () => {
            if (window.pageYOffset > window.innerHeight*12.5) {
                return "rotate(-4deg)"
            } else {
                return "rotate(-7.5deg)"
            }
        },
        transition: "1s",
    },
    koreaCover: {
        width: "104.5vh",
        height: "104.5vh",
        bottom: "-52.5vh",
        left: "-52.5vh",
        position: "fixed",
        borderTop: "13px solid transparent",
        border: "13px solid white",
        borderRadius: "50%",
        transform: "rotate(83deg)",
    },
    hongik: {
        width: "100vh",
        height: "100vh",
        bottom: "-50vh",
        left: "-50vh",
        position: "fixed",
        borderTop: "10px solid #192b66",
        border: "10px solid white",
        borderRadius: "50%",
        transform: () => {
            if (window.pageYOffset > window.innerHeight*12.5) {
                return "rotate(-18deg)"
            } else {
                return "rotate(-22deg)"
            }
        },
        transition: "1s",
    },
    hongikCover: {
        width: "99.5vh",
        height: "99.5vh",
        bottom: "-50vh",
        left: "-50vh",
        position: "fixed",
        borderTop: "13px solid transparent",
        border: "13px solid white",
        borderRadius: "50%",
        transform: "rotate(68deg)",
    },
    tenx: {
        width: "150vh",
        height: "150vh",
        bottom: "-75vh",
        left: "-75vh",
        position: "fixed",
        borderTop: "10px solid #356bba",
        border: "10px solid transparent",
        borderRadius: "50%",
        transform: () => {
            if (window.pageYOffset > window.innerHeight*8.5) {
                return "rotate(41deg)"
            } else {
                return "rotate(18deg)"
            }
        },
        transition: "1s",
    },
    tenxCover: {
        width: "149.5vh",
        height: "149.5vh",
        bottom: "-75vh",
        left: "-75vh",
        position: "fixed",
        borderTop: "13px solid transparent",
        border: "13px solid white",
        borderRadius: "50%",
        transform: "rotate(108.5deg)",
    },
    lovepop: {
        width: "140vh",
        height: "140vh",
        bottom: "-70vh",
        left: "-70vh",
        position: "fixed",
        borderTop: "10px solid #cd2334",
        border: "10px solid transparent",
        borderRadius: "50%",
        transform: () => {
            if (window.pageYOffset > window.innerHeight*9.5) {
                return "rotate(7.5deg)"
            } else {
                return "rotate(4.5deg)"
            }
        },
        transition: "1s",
    },
    lovepopCover: {
        width: "139.5vh",
        height: "139.5vh",
        bottom: "-70vh",
        left: "-70vh",
        position: "fixed",
        borderTop: "13px solid transparent",
        border: "13px solid white",
        borderRadius: "50%",
        transform: "rotate(94.5deg)",
    },
    lamontagne: {
        width: "130vh",
        height: "130vh",
        bottom: "-65vh",
        left: "-65vh",
        position: "fixed",
        borderTop: "10px solid #daac34",
        border: "10px solid transparent",
        borderRadius: "50%",
        transform: () => {
            if (window.pageYOffset > window.innerHeight*10.5) {
                return "rotate(-22deg)"
            } else {
                return "rotate(-26deg)"
            }
        },
        transition: "1s",
    },
    lamontagneCover: {
        width: "129.5vh",
        height: "129.5vh",
        bottom: "-65vh",
        left: "-65vh",
        position: "fixed",
        borderTop: "13px solid transparent",
        border: "13px solid white",
        borderRadius: "50%",
        transform: "rotate(64deg)",
    },
    experince: {
        width: "120vh",
        height: "120vh",
        left: "-60vh",
        bottom: "-60vh",
        position: "fixed",
        border: "1px solid #dbdbdb",
        borderRadius: "50%",
    },
    education: {
        width: "80vh",
        height: "80vh",
        left: "-40vh",
        bottom: "-40vh",
        position: "fixed",
        border: "1px solid #dbdbdb",
        borderRadius: "50%",
    },
    border1: {
        width: "1px",
        height: "160vh",
        bottom: "-80vh",
        left: "0",
        position: "fixed",
        borderRight: "2px dashed #dbdbdb",
        transform: "rotate(11.25deg)",
        zIndex: "1",
    },
    border2: {
        width: "1px",
        height: "160vh",
        bottom: "-80vh",
        left: "0",
        position: "fixed",
        borderRight: "2px dashed #dbdbdb",
        transform: "rotate(22.5deg)",
        zIndex: "1",
    },
    border3: {
        width: "1px",
        height: "160vh",
        bottom: "-80vh",
        left: "0",
        position: "fixed",
        borderRight: "2px dashed #dbdbdb",
        transform: "rotate(33.75deg)",
        zIndex: "1",
    },
    border4: {
        width: "1px",
        height: "160vh",
        bottom: "-80vh",
        left: "0",
        position: "fixed",
        borderRight: "2px dashed #dbdbdb",
        transform: "rotate(45deg)",
        zIndex: "1",
    },
    border5: {
        width: "1px",
        height: "160vh",
        bottom: "-80vh",
        left: "0",
        position: "fixed",
        borderRight: "2px dashed #dbdbdb",
        transform: "rotate(56.25deg)",
        zIndex: "1",
    },
    border6: {
        width: "1px",
        height: "160vh",
        bottom: "-80vh",
        left: "0",
        position: "fixed",
        borderRight: "2px dashed #dbdbdb",
        transform: "rotate(67.5deg)",
        zIndex: "1",
    },
    border7: {
        width: "1px",
        height: "160vh",
        bottom: "-80vh",
        left: "0",
        position: "fixed",
        borderRight: "2px dashed #dbdbdb",
        transform: "rotate(78.75deg)",
        zIndex: "1",
    },
    experinceText: {
        fontFamily: "AkagiSemibold",
        fontSize: "1rem",
        position: "fixed",
        bottom: "61vh",
        left: "5px",
        color: "#c4c4c4"
    },
    educationText: {
        fontFamily: "AkagiSemibold",
        fontSize: "1rem",
        position: "fixed",
        bottom: "41vh",
        left: "5px",
        color: "#c4c4c4"
    },
    tenxDesc: {
        height: "fit-content",
        width: "auto",
        // border: "2px solid #356BBA",
        position: "fixed",
        bottom: "19vh",
        left: "81vh",
        // padding: "10px",
        opacity: "1",
    },
    tenxDescHidden: {
        height: "fit-content",
        width: "auto",
        // border: "2px solid #356BBA",
        position: "fixed",
        bottom: "19vh",
        left: "81vh",
        // padding: "10px",
        opacity: "0",
    },
    tenXLogo: {
        height: "32px",
        width: "auto",
    },
    descCompany: {
        fontFamily: "AkagiBold",
        fontSize: "1.25rem",
        color: "#333333",
        marginTop: "10px",
    },
    descTitle: {
        fontFamily: "AkagiSemibold",
        fontSize: "1rem",
        color: "#333333",
        marginTop: "10px",
    },
    descDate: {
        fontFamily: "AkagiSemibold",
        fontSize: "1rem",
        color: "#757575",
    },
    desc: {
        fontFamily: "AkagiRegular",
        fontSize: "1rem",
        color: "#333333",
        width: "23rem",
        marginTop: "10px",
        lineHeight: "1.2",
    },
    tenxHover: {
        width: "4.5vh",
        height: "30vh",
        position: "fixed",
        bottom: "5.5vh",
        left: "70.5vh",
        zIndex: "2",
        cursor: "pointer",
        transform: "rotate(-20deg)",
    }
}));

function Timeline({ text, arc, radius, start, reverse, heightStyle, widthStyle, bottomStyle, leftStyle }, props) {
    const characters = reverse ? text.split('').reverse() : text.split('');
    const degree = arc / characters.length;
  
    return (
        <div 
            style={{
                position: "fixed",
                height: `${heightStyle}vh`,
                width: `${widthStyle}vh`,
                bottom: `${bottomStyle}vh`,
                left: `${leftStyle}vh`,
                color: "#c4c4c4"
            }}
        >
        {characters.map((char, i) => (
          <span
            key={`heading-span-${i}`}
            style={{
                height: `${radius}vh`,
                transform: `rotate(${degree * i - arc / 2 + start}deg)`,
                transformOrigin: `0 ${radius}vh 0`,
                position: "absolute",
                fontFamily: "AkagiSemibold",
                fontSize: "1rem",
            }}>
            {char}
          </span>
        ))}
      </div>
    );
}
  
Timeline.propTypes = {
    text: PropTypes.string.isRequired,
    arc: PropTypes.number, // how curved do you want the text
    radius: PropTypes.number, // how big do you want the curve
    heightStyle: PropTypes.number,
    widthStyle: PropTypes.number,
    leftStyle: PropTypes.number,
    bottomStyle: PropTypes.number,
};

export function Resume(props) {
    const classes = useStyles(props); 
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const [showTenX, setShowTenX] = useState(false);
    const onHover = (event) => {
        setShowTenX(true);
        console.log("hovered!");
    };
    const onLeave = (event) => {
        setShowTenX(false);
        console.log("not!!hovered!");
    };
    const hoveredStyle = (showTenX) ? classes.tenxDesc : classes.tenxDescHidden;

    return (
        <div className={classes.wrap}>
            <div className={classes.scrollBound}>
                <div style={{position: "fixed"}}>
                    <svg className={classes.svg} x="50%" y="50%" height="100%" width="100%">
                    <text className={classes.textBlack} x="50%" y="50%">nicole lee</text>
                        <defs>
                            <mask id="mask" x="0" y="0" height="100%" width="100%">
                                <rect x="0" y="0" height="100%" width="100%"/>
                                <text id="text" className={classes.text} x="50%" y="50%">nicole lee</text>
                            </mask>
                        </defs>
                        <rect className={classes.rect}/>
                    </svg>
                        <video 
                            id="v0"
                            className={classes.video} 
                            muted
                            playsInline
                            autoPlay
                            x="50%" y="50%"
                        >
                            <source src={maskAnimation} type="video/mp4"/>
                        </video>
                    <div style={{transform: `translateX(${offsetY * -1}px)`}} className={classes.titles}>
                        product designer / ux designer / frontend engineer / food connoisseur
                    </div>
                </div>
            </div>
            <div className={classes.scrollBound2}>
                <div className={classes.userResearch}>
                    <div className={classes.userResearchTitle}>User Research</div>
                    <div className={classes.skill}>Usability Testing</div>
                    <div className={classes.skill}>Persona</div>
                    <div className={classes.skill}>User Journey Map</div>
                    <div className={classes.skill}>Quant/Qualitative Analysis</div>
                    <div className={classes.skill}>Co-Design</div>
                </div>
                <div className={classes.userInterface}>
                    <div className={classes.skill}>Mockup</div>
                    <div className={classes.skill}>Prototyping</div>
                    <div className={classes.skill}>Information Architecture</div>
                    <div className={classes.skill}>Frontend Engineering</div>
                    <div className={classes.userInterfaceTitle}>User Interface</div>
                </div>
                <div className={classes.consumerProduct}>
                    <div className={classes.consumerProductTitle}>Consumer Product</div>
                    <div className={classes.skill}>Branding</div>
                    <div className={classes.skill}>Visual System</div>
                    <div className={classes.skill}>Hand Sketches</div>
                    <div className={classes.skill}>Digital Drawing/Animation</div>
                </div>
                <div className={classes.threeD}>
                    <div className={classes.skill}>CNC</div>
                    <div className={classes.skill}>3D Rendering</div>
                    <div className={classes.skill}>CAD Modeling</div>
                    <div className={classes.skill}>Plastic Prototyping</div>
                    <div className={classes.skill}>Metalwork</div>
                    <div className={classes.skill}>Woodwork</div>
                    <div className={classes.threeDTitle}>3D Prototyping</div>
                </div>
            </div>
            <div className={classes.scrollBound3}>
                <div className={classes.opacity}>
                    <div className={classes.boundary}/>
                    <div className={classes.experince}/>
                    <div className={classes.education}/>
                    <div className={classes.border1}/>
                    <div className={classes.border2}/>
                    <div className={classes.border3}/>
                    <div className={classes.border4}/>
                    <div className={classes.border5}/>
                    <div className={classes.border6}/>
                    <div className={classes.border7}/>
                    <div className={classes.years}>
                        <Timeline 
                            text="past           2016           2017           2018           2019           2020           2021           ..." 
                            arc={79} 
                            radius={83} 
                            start={41}
                            heightStyle={90}
                            widthStyle={90}
                            bottomStyle={-7.5}
                            leftStyle={-.5}
                        />
                        <div className={classes.experinceText}>Experience</div>
                        <div className={classes.educationText}>Education</div>
                        {/* <Timeline 
                            text="E X P E R IE N C E                                                                                          " 
                            arc={59} 
                            radius={63} 
                            start={31}
                            heightStyle={90}
                            widthStyle={90}
                            bottomStyle={-27.5}
                            leftStyle={-.5}
                        />
                        <Timeline
                            text="E D U C A T IO N                                  " 
                            arc={39} 
                            radius={43} 
                            start={22}
                            heightStyle={90}
                            widthStyle={90}
                            bottomStyle={-48}
                            leftStyle={-.5}
                        /> */}
                        <div className={classes.risd}/>
                        <div className={classes.brown}/>
                        <div className={classes.brownCover}/>
                        <div className={classes.korea}/>
                        <div className={classes.koreaCover}/>
                        <div className={classes.hongik}/>
                        <div className={classes.hongikCover}/>
                        <div className={classes.tenx}/>
                        <div className={classes.tenxCover}/>
                        <div className={classes.tenxHover}
                            onMouseEnter={onHover}
                            onMouseLeave={onLeave}
                        />
                        <div className={classes.lovepop}/>
                        <div className={classes.lovepopCover}/>
                        <div className={classes.lamontagne}/>
                        <div className={classes.lamontagneCover}/>
                        <div className={hoveredStyle}>
                            <img className={classes.tenXLogo} src={TenXLogo}/>
                            {/* <div className={classes.descCompany}>10xFinders</div> */}
                            <div className={classes.descTitle}>Product Desinger / Frontend Engineer</div>
                            <div className={classes.descDate}>Summer 2020 - Present</div>
                            <div className={classes.desc}>
                                As the sole designer on team, I worked on software UI design, the
                                company logo, marketing materials, and the company website.
                                I am actively working alongside the CEO and CTO on product
                                development by participating in client meetings, doing market
                                research, and then executing iteration and development.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}