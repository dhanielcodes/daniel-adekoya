import "../styles/works.css"
import { link, arrow2, arrow3 } from "../icons/icons"
import { da } from "../images/images"

const works = () => {

    const works = [
        {
            title: "Frontend Developer Intern",
            desc: "HNG",
            link: "https://getgithubuser.vercel.app/"
        },
        {
            title: "Github Users",
            desc: "Type in a github username to see his or her stats",
            link: "https://getgithubuser.vercel.app/"
        },
        {
            title: "Frontend Developer Intern",
            desc: "HNG",
            link: "https://getgithubuser.vercel.app/"
        },
        
        
    ]

    

    return ( 
        <div className='works'>
            <div className="works_main">
                <h2 className='works_heading'>Works</h2>
            </div>
            <div className="works_cards">
                {works.map((x) => {
                    return (
                        <div className="works_card">
                            <div className="works_card_details">
                                <div>
                                    <div className="works_card_title">
                                        {x.title}
                                    </div>
                                    <div className="works_card_desc">
                                        {x.desc}
                                    </div>
                                    <div className="works_card_link">
                                        <a target="target_" href={x.link}>
                                            <img src={link} alt="" />
                                            <div>{x.link}</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="works_card_img">
                                <img src={da} alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="arrows">
                <img src={arrow2} alt="" />
                <img src={arrow3} alt="" />
            </div>
        </div>
     );
}
 
export default works;