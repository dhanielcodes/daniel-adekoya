import "../styles/experience.css"

const experience = () => {

    const internships = [
        {
            title: "Frontend Developer Intern",
            place: "HNG",
            period: "April 2020 - August 2020",
            type: "Remote",
            site: "https://twitter.com/hnginternship"
        },
        {
            title: "Frontend Developer Intern ",
            place: "ZURI",
            period: "May 2021 - August 2021",
            type: "Remote",
            site: "https://internship.zuri.team/"
        },
        {
            title: "Frontend Engineer Intern ",
            place: "PRIFINA",
            period: "August 2022 - Present",
            type: "Remote",
            site: "https://www.prifina.com/"
        },
        
    ]

    const juniorDeveloper = [
        {
            title: "Junior Frontend Developer",
            place: "RARA",
            period: "April 2021 - June 2021",
            type: "Remote - Contract",
            site: "https://rara.social/"
        },
        {
            title: "Junior Frontend Developer",
            place: "Dork",
            period: "January 2021 - Present",
            type: "Remote - Full time",
            site: "https://www.instagram.com/dork.ng/"
        },
        
    ]

    return ( 
        <div className='experience'>
                <h2 className='experience_heading'>Experiences</h2>
                

                <div className='experience_experiences'>
                    <div className="experience_experiences_intern">
                        <div className="experience_sub_heading">Intern -</div>
                        <div className="experience_cards">
                            { internships.map((x) => {
                                return (
                                    <div className="experience_card">
                                        <div className="experience_card_title">{x.title} at <span><a target="_blank" rel="noreferrer" href={x.site}>{x.place}</a></span></div>
                                        <div className="experience_card_period">{x.period}</div>
                                        <div className="experience_card_type">{x.type}</div>
                                    </div>
                                )
                            }) }
                        </div>
                    </div>       
                    <div className="experience_experiences_intern">
                        <div className="experience_sub_heading">Junior Developer -</div>
                        <div className="experience_cards">
                        { juniorDeveloper.map((x) => {
                                return (
                                    <div className="experience_card">
                                        <div className="experience_card_title">{x.title} at <span><a target="_blank" rel="noreferrer" href={x.site}>{x.place}</a></span></div>
                                        <div className="experience_card_period">{x.period}</div>
                                        <div className="experience_card_type">{x.type}</div>
                                    </div>
                                )
                            }) }
                        </div>
                    </div>               
                </div>
            </div>
     );
}
 
export default experience;