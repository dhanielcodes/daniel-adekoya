import '../styles/header.css'
import { toonDaniel, line, line2, dot } from "../images/images"
import { arrow } from "../icons/icons"

const Header = () => {
    const stacks = ["Javascript", "Vue Js", "Nuxt Js", "React Js", "CSS", "SASS", "Tailwind", "HTML", "EJS"]
    return ( 
        <div className='main'>
            
            <div className="header">
                <img className='daniel' src={toonDaniel} alt="" />
                <img className='squigy' src={line2} alt="" />
                <img className='line' src={line} alt="" />
            <img className='line2' src={line} alt="" />
                <div>
                    <div className='header_text'>
                        I’m a <span>Frontend Engineer</span><br/> and <span>UI/UX Developer</span>
                    </div>
                    <p className='header_p'>I help support establishments with my frontend web expertise</p>
                </div>
            <img className='arrow' src={arrow} alt="" />

            </div>
            <div className='about'>
                <h2 className='about_heading'>About Me</h2>
                <p className='about_p'>
                    Am a solution focused frontend developer with experience in web-based
                    applications. Participated in development and implementation of web based solutions,
                    while gaining real World experience. Learning multiple systems and efficient
                    development techniques also 🙂.
                    <br></br>
                    <br></br>
                    Here are some technologies I use:
                </p>

                <div className='about_stacks'>
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
     );
}
 
export default Header;