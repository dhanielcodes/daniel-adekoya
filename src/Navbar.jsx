import { twitter, dribbble, figma, github, linkedIn, spotify, twitch, close } from "./icons/icons"
import { useEffect, useRef, useState } from 'react'
import logo from "./logo.svg"
import '../src/styles/navbar.css';
import  {gsap} from "gsap"


const NavBar = () => {

    let navBarOpen = useRef(null)
    let tl = gsap

    const openNav = () => {
        tl.to(navBarOpen, {
            duration: 1,
            transform: 'translateY(0%)',
            ease: "expo",
    
        })
    }
    const closeNav = () => {
        tl.to(navBarOpen, {
            duration: 1,
            transform: 'translateY(-100%)',
            ease: "expo",
    
        })
    }

    useEffect(() => {
        /* gsap.from(navBar, {
            delay: 5,
            duration: 1,
            transform: "translateY(-100%)",
            ease: "expo",
        })
        gsap.to(navBar, {
            delay: 5,
            duration: 1,
            transform: "translateY(0%)",
            ease: "expo",
        }) */
        
    })
    
    return ( 
        <div className="nav"> 
            <nav>
                <div className="name">
                    daniel adekoya.
                </div>
                <div className="icons">
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/dhaniel0x">
                        <img src={twitter} alt="" srcset="" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://dribbble.com/daniel_adekoya">
                        <img src={dribbble} alt="" srcset="" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.figma.com/@minitechbro">
                        <img src={figma} alt="" srcset="" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/dhanielcodes">
                        <img src={github} alt="" srcset="" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/daniel-adekoya-010810192/">
                        <img src={linkedIn} alt="" srcset="" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://open.spotify.com/user/ithka9tia9dzvug5so3lhghm0">
                        <img src={spotify} alt="" srcset="" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.twitch.tv/techdeadkill">
                        <img src={twitch} alt="" srcset="" /> 
                    </a>
                </div>
                <div className="burger" onClick={openNav}>
                    <div></div>
                    <div></div>
                </div>
                
            </nav>
            <div className="mobile-nav" id="m-nav" ref={el => navBarOpen = el}>
                <img className="close" src={close} onClick={closeNav} alt="" />
                    <div>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/daniel-adekoya-010810192/">Linkedin</a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/dhanielcodes">Github</a>
                        <a target="_blank" rel="noreferrer" href="https://dribbble.com/daniel_adekoya">Dribbble</a>
                        <a target="_blank" rel="noreferrer" href="https://www.figma.com/@minitechbro">Figma</a>
                        <a target="_blank" rel="noreferrer" href="https://www.twitch.tv/techdeadkill">Twitch</a>
                        <a target="_blank" rel="noreferrer" href="https://open.spotify.com/user/ithka9tia9dzvug5so3lhghm0">Spotify</a>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/dhaniel0x">Twitter</a>
                    </div>
                    <img className="logo_anim" style={{marginTop: "50px"}} src={logo} alt="" />
                </div>
        </div>
     );
}
 
export default NavBar;