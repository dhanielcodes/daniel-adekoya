import "../styles/works.css"

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

    

    return ( 
        <div className='works'>
            <div className="works_main">
                <h2 className='works_heading'>Works</h2>
            </div>  
        </div>
     );
}
 
export default experience;