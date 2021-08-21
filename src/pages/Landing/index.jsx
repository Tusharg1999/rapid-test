import Pic1 from "../../assets/images/pic1.png";
import loginForm from "../../assets/images/loginForm.png";
import Yoga from "../../assets/images/yoga.png";
import Styles from "./styles";
import { IoMdSwitch } from "react-icons/io";
import { RiDashboardLine } from "react-icons/ri";
import { BsCodeSlash } from "react-icons/bs";
import { Partners } from "../../constants";

const Landing = () => {
  return (
    <Styles.Wrapper>
      <Styles.FirstContainer>
        <Styles.LeftContainer>
          <h1>
            Welcome to <span style={{ color: "#2563eb" }}>Landkit</span>. <br />{" "}
            Develop Anything
          </h1>
          <p>
            Build a beautiful, modern website with flexible <br /> Bootstrap
            components build from scratch.
          </p>
          <div className="button-Container">
            <Styles.Button background={"#2563eb"} color="white">
              View all pages
            </Styles.Button>
            <Styles.Button color={"#2563eb"} background="lightgray">
              Documentation
            </Styles.Button>
          </div>
        </Styles.LeftContainer>
        <Styles.RightContainer>
          <img src={Pic1} alt="" />
        </Styles.RightContainer>
      </Styles.FirstContainer>
      <Styles.SecondContainer>
        <div className="features">
          <IoMdSwitch size={40} />
          <h3>Build For Developers</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            excepturi dicta error ut asperiores nemo sapiente amet modi ullam
            ex.
          </p>
        </div>
        <div className="features">
          <RiDashboardLine size={40} />
          <h3>Design to be morden</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            excepturi dicta error ut asperiores nemo sapiente amet modi ullam
            ex.
          </p>
        </div>
        <div className="features">
          <BsCodeSlash size={40} />
          <h3>Documentation for everything </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            excepturi dicta error ut asperiores nemo sapiente amet modi ullam
            ex.
          </p>
        </div>
      </Styles.SecondContainer>
      <Styles.PartnersContainer>
        <div className="line"></div>
        <div className="container">
          {Partners.map((partner, index) => (
            <div className="logo-container">
              <img key={index} src={partner.url} alt="" />
            </div>
          ))}
        </div>
      </Styles.PartnersContainer>
      <Styles.LoginContainer>
        <div className="left-container">
          <img src={loginForm} alt="" />
        </div>
        <div className="right-container">
          <h1>
            The most useful resource <br />
            <b>ever created for dev</b>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            officiis odio quo vero veritatis praesentium magnam in dolorum
            ducimus quam iste totam dolores, tempora odit modi? Eveniet harum
            quasi obcaecati!
          </p>
        </div>
      </Styles.LoginContainer>
      <Styles.FocusContainer>
        <div className="left-container">
          <h1>
            Stay focused on your bussiness. <br />
            <b>Let us handle the design.</b>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            officiis odio quo vero veritatis praesentium magnam in dolorum
            ducimus quam iste totam dolores, tempora odit modi? Eveniet harum
            quasi obcaecati!
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div
              style={{ borderRight: "1px solid rgba(0,0,0,0.2)" }}
              className="key-div"
            >
              <span>100%</span>
              <p>Satisfaction</p>
            </div>
            <div
              style={{ borderRight: "1px solid rgba(0,0,0,0.2)" }}
              className="key-div"
            >
              <span>24/7</span>
              <p>Support</p>
            </div>
            <div className="key-div">
              <span>100k+</span>
              <p>Sales</p>
            </div>
          </div>
        </div>
        <div className="right-container">
          <img src={Yoga} alt="" />
        </div>
      </Styles.FocusContainer>
    </Styles.Wrapper>
  );
};
export default Landing;
