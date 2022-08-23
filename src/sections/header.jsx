import '../styles/header.css'
import { toonDaniel, line, line2, dot } from "../images/images"
import { useEffect } from 'react'
//import SplitText from "../../utils/Split3.min"
import { arrow } from "../icons/icons"

const Header = () => {

    /* //BANNER ANIMATIONS
    let banner = useRef(null)
    let bannerInner = useRef(null)
    let bannerText = useRef(null)

    //HEADER ANIMATIONS
    let heading = useRef(null)
    let heading2 = useRef(null)
    let text = useRef(null)
    let line1 = useRef(null)
    let lineTwo = useRef(null)

    let about = useRef(null)
    let aboutText = useRef(null)
    let aboutP = useRef(null)
    let aboutS = useRef(null) */

    useEffect(() => {
       /*  tl.to(bannerText, {
            delay: 1,
            duration: 1,
            transform: "translateY(0%)",
            ease: "expo",
        })
        tl.to(bannerText, {
            delay:1,
            duration: 1,
            transform: "translateY(-100%)",
            ease: "expo",
        })
        tl.to(bannerInner, {
            duration: 1.4,
            transform: "translateY(-100%)",
            ease: "expo",
        })
        tl.to(banner, {
            duration: 1,
            transform: "translateY(-100%)",
            ease: "expo",
        },"-=1")
        tl.from(heading, {
            duration: 1,
            transform: "translateY(100%)",
            ease: "expo",
        },"-=.6")
        tl.from(heading2, {
            duration: 1,
            transform: "translateY(100%)",
            ease: "expo",
        },"-=.8")
        tl.from(text, {
            duration: 1,
            transform: "translateY(100%)",
            ease: "expo",
        },"-=.8")
        tl.to(line1, {
            duration: 1,
            transform: "translateX(0%)",
            ease: "expo",
        })
        tl.to(lineTwo, {
            duration: 1,
            transform: "translateX(0%)",
            ease: "expo",
        },"-=1")
 */
        //About
/* 
        gsap.from(aboutText, {
            duration: 1,
            transform: "translateY(100%)",
            ease: "expo",
            scrollTrigger: {
                trigger: about,
                start: "center bottom"
            }
        }) */
        
    })
    const stacks = ["Javascript", "Vue Js", "Nuxt Js", "React Js", "CSS", "SASS", "Tailwind", "HTML", "EJS"]
    return ( 
        <div className='main'>
            {/* <div className='banner' ref={el => banner = el}></div>
            <div className='banner_inner' ref={el => bannerInner = el}>
                    <div className='banner_text'>
                        <div ref={el => bannerText = el}>
                            Daniel Adekoya.
                        </div>
                    </div>
                </div> */}
            
            <div className="header">
                <img className='daniel' src={toonDaniel} alt="" />
                <img className='squigy' src={line2} alt="" />
                <img className='line' /* ref={el => line1 = el} */  src={line} alt="" />
                <img className='line2' /* ref={el => lineTwo = el} */ src={line} alt="" />
                <div>
                    <div className='header_text'>
                            I’m a <span>Frontend Engineer</span> <br />
                            and <span>UI/UX Developer</span>
                    </div>
                    <p className='header_p'>
                            I help support establishments with my frontend web expertise
                    </p>
                </div>
            <img className='arrow' src={arrow} alt="" />

            </div>
            <div className='about' /* ref={el => about = el} */>
                <div style={{overflow: "hidden"}}>
                    <h2 className='about_heading' /* ref={el => aboutText = el} */>About Me</h2>
                </div>
                <div style={{overflow: "hidden"}}>
                    <p className='about_p' /* ref={el => aboutP = el} */>
                        Am a solution focused frontend developer with experience in web-based
                        applications. Participated in development and implementation of web based solutions,
                        while gaining real World experience. Learning multiple systems and efficient
                        development techniques also 🙂.
                        <br></br>
                        <br></br>
                        Here are some technologies I use:
                    </p>
                </div>

                <div style={{overflow: "hidden"}}>
                    <div className='about_stacks' /* ref={el => aboutS = el} */>
                        { stacks.map((item) => {
                            return (
                                <div>
                                    <img src={dot} alt="" />
                                    <span>{item}</span>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Header;