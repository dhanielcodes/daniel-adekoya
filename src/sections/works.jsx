import "../styles/works.css";
import { link } from "../icons/icons";
import { da } from "../images/images";
const Works = () => {
  const works = [
    {
      title: "Vue Nav UI",
      desc: "This is a custom navbar vuejs package",
      link: "https://dhanielcodes.github.io/vue-navigation-ui/",
    },
    {
      title: "MRT Management Tool",
      desc: "It used by organisations to measure, review and track employee performance",
      link: "https://mrtstaff.com/",
    },
    {
      title: "Hope Payment Service Bank",
      desc: "This is a microfinance bank, can be used to receive, send and make bill payments",
      link: "https://hopepsbank.com/",
    },
    {
      title: "Adashi Savings Platform",
      desc: "Adashi is savings platform that gives you variety of options to save up your funds.",
      link: "https://adashiesusuakawo.com/",
    },
    {
      title: "Boton",
      desc: "A simple CSS library for getting nice styled custom buttons",
      link: "https://boton.vercel.app/",
    },
  ];

  return (
    <div className="works">
      <h2 className="works_heading">Works</h2>
      <div className="works_cards">
        {works.map((x) => {
          return (
            <div className="works_card">
              <div className="works_card_details">
                <div>
                  <div className="works_card_title">{x.title}</div>
                  <div className="works_card_desc">{x.desc}</div>
                  <div className="works_card_link">
                    <a target="target_" rel="noreferrer" href={x.link}>
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
          );
        })}
      </div>
    </div>
  );
};

export default Works;
