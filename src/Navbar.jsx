import { twitter, dribbble, figma, github, linkedIn, spotify, twitch } from "./icons/icons"
import '../src/styles/navbar.css';

const navBar = () => {
    return ( 
        <nav>
            <div className="name">
                daniel adekoya.
            </div>
            <div className="icons">
                <a href="http://">
                    <img src={twitter} alt="" srcset="" />
                </a>
                <a href="http://">
                    <img src={dribbble} alt="" srcset="" />
                </a>
                <a href="http://">
                    <img src={figma} alt="" srcset="" />
                </a>
                <a href="http://">
                    <img src={github} alt="" srcset="" />
                </a>
                <a href="http://">
                    <img src={linkedIn} alt="" srcset="" />
                </a>
                <a href="http://">
                    <img src={spotify} alt="" srcset="" />
                </a>
                <a href="http://">
                    <img src={twitch} alt="" srcset="" /> 
                </a>
            </div>
            <div className="burger">
                <div></div>
                <div></div>
            </div>
            <div className="mobile-nav">
                <div>
                    <a href="">Linkedin</a>
                    <a href="">Github</a>
                    <a href="">Dribbble</a>
                    <a href="">Figma</a>
                    <a href="">Twitch</a>
                    <a href="">Spotify</a>
                    <a href="">Twitter</a>
                </div>
            </div>
        </nav>
     );
}
 
export default navBar;