import "../styles/experience.css"

const experience = () => {

    const internships = [
        {
            title: "Frontend Developer Intern",
            place: "HNG",
            period: "April 2020 - August 2020",
            type: "Remote"
        },
        {
            title: "Frontend Developer Intern ",
            place: "ZURI",
            period: "May 2021 - August 2021",
            type: "Remote"
        },
        
    ]

    const juniorDeveloper = [
        {
            title: "Junior Frontend Developer",
            place: "RARA",
            period: "April 2021 - June 2021",
            type: "Remote - Contract"
        },
        {
            title: "Junior Frontend Developer",
            place: "Dork",
            period: "January 2021 - Present",
            type: "Remote - Full time"
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
                                        <div className="experience_card_title">{x.title} at <span>{x.place}</span></div>
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
                                        <div className="experience_card_title">{x.title} at <span>{x.place}</span></div>
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