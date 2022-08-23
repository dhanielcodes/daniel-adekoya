import "../styles/contact.css"

const contact = () => {
    return ( 
        <div>

            <div className="contact">
                <div className="contact_heading">
                    Get In Touch
                </div>
                <div className="contact_desc">
                    My inbox is open if you want to contact me for a role or just to<br/> get in touch with me 🙂.
                </div>
                <div>
                    <a target="_blank" rel="noreferrer" href="mailto:adekoyadaniel53@gmail.com" className="contact_button">
                        Say Hello!
                    </a>
                </div>
             </div>


            <nav>
                <div className="name">
                    daniel adekoya.
                </div>
                <div className="name">
                    © Daniel Adekoya 2022
                </div>
            </nav>
        </div>
        
     );
}
 
export default contact;