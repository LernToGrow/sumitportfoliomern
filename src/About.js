import React from "react";
import "./About.css";
// import aboutImg from "./img/b1.png";
import aboutImg from "./img/Sumit_profile.jpg";
import resume from "./Resume/Sumit kamble MERN.pdf";
function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Hello, my name is Sumit Kamble, and I work as an intern
                while also being a full-stack software developer.
                I earned my BCA at Sangola College in Sangola  (2017-2020).
                and my MCA from YSPM's Yashoda Technical Campus (2020–2022).
                I'm searching for a new job right now to begin my career.
              </p>
              <br></br>
              <p className="about__text p__color">
                <h1 style={{ fontSize: "30px" }}>WORK EXPERIENCE</h1>
                <br></br>
                <p>
                  <h3>CENTER FOR MONITORING INDIAN ECONOMY PVT LTD (16 Aug 2021 to 17 Nov 2021)</h3>
                  <h3> DATABASE DEVELOPER </h3>
                </p>
                <p>
                  Work with CMIE (Centre for Monitoring Indian Economy Pvt.)
                  as a Database developer from 16 Aug 2021 to 17 Nov 2021.
                  There I learned Perl it was a new language for me and
                  also I also work on MySQL along with Perl to write scripts
                  to provide solutions as per requirements of the team.
                </p>
                </p>
                <div className="about__button d__flex align__items__center">
                  <a href={resume}>
                    <button className="about btn pointer">Download Cv</button>
                  </a>
                  <a href="#Contact">
                    <button className="about btn pointer">Hire Me</button>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
