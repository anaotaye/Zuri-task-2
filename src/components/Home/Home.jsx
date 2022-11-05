import "./home.css";
import profileImg from "../../assets/profile__img.svg";
import slackIcon from "../../assets/slack.svg";
import githubIcon from "../../assets/Icon.svg";
import shareIcon from "../../assets/Icon2.png"
import { Outlet, Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <img src={profileImg} id="profile_img" alt="profile" />
      <h1 id="profile_name">Annette Black</h1>

      <div className="share_icon">
        <img src={shareIcon} alt="Share" />
      </div>

      <div className="links">
        <a
          href="https://twitter.com/anaotaye"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          Twitter Link
        </a>
        

        <a
          href="https://training.zuri.team/"
          target="_blank"
          id="btn__zuri"
          className="link"
          rel="noreferrer"
        >
          Zuri Team
        </a>
        

        <a
          href="http://books.zuri.team/"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Zuri Books
        </a>
        

        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=anastasiaotaye"
          id="book__python"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Python Books
        </a>
        

        <a
          href="https://background.zuri.team/"
          id="pitch"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Background Check for Coders
        </a>
        

        <a
          href="https://books.zuri.team/design-rules"
          id="book_design"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Design Books
        </a>
        
        <a id="contact"><Link to="/contact" className="link">Contact Me</Link></a>
      </div>

      <div className="socials">
        <a href="https://twitter.com/anaotaye" id="twitter">
          <img src={slackIcon} alt="slack link" target="_blank"
          rel="noreferrer"/>
        </a>
        <a href="https://twitter.com/anaotaye" id="slack">
          <img src={githubIcon} alt="github link" target="_blank"
          rel="noreferrer"/>
        </a>
      </div>

      <Footer />

      <Outlet />
    </div>
  );
};

export default Home;
