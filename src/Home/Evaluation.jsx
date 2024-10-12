import React, { useState, useEffect  , useRef} from "react";
import "./Evaluation.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ChartComponent from "./chart";
const Home = () => {
  const [Table, settable] = useState(false);
  const [Visible, setVisible] = useState(false);
  const [menuOpen, setmenuOpen] = useState(false);
  const [condition, setcondition] = useState(false);
  const [cadInfo, setcadInfo] = useState(false);
  const tergetDIVRef = useRef(null)
  const [PhonNumbar, setPhonNumbar] = useState(false);
  const [ChairmanMessage, setChairmanMessage] = useState(false);
  const [HigherInstituteofEngineering, setHigherInstituteofEngineering] = useState(false);
  
  const ToggleTable = () => {
    settable(!Table);
    if (Table) {
      window.document.body.style.overflowY = "scroll";
    } else {
      window.document.body.style.overflowY = "hidden";
    }
    if (menuOpen == true) {
      window.document.body.style.overflowY = "hidden"
    }
  };

  const TogglemenuOpen = () => {
    setmenuOpen(!menuOpen);
    if (menuOpen) {
      window.document.body.style.overflowY = "scroll";
    } else {
      window.document.body.style.overflowY = "hidden";
    }
  };

  const ToggleChairmanMessage = () => {
    setChairmanMessage(!ChairmanMessage);
    setHigherInstituteofEngineering(false)
  };

  const ToggleHigherInstituteofEngineering = () => {
    setHigherInstituteofEngineering(!HigherInstituteofEngineering);
    setChairmanMessage(false)
  };

  const Togglecondition = () => {
    setcondition(!condition);
  };

  const TogglecadInfo = () => {
    setcadInfo(!cadInfo);
  };

  const TogglePhonNumbar = () => {
    setPhonNumbar(!PhonNumbar);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 20) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      if (condition || cadInfo || PhonNumbar) {
        const menuDiv = document.getElementById("menu");
        menuDiv.style.overflowY = "scroll";
      } else {
        const menuDiv = document.getElementById("menu");
        menuDiv.style.overflowY = "hidden";
      }
    } else {
    }
  }, [menuOpen, condition, cadInfo, PhonNumbar]);

  const scrolldiv = () =>{
    tergetDIVRef.current.scrollIntoView({
      behavior:"smooth"
    })
  }

  return (
    <React.StrictMode>
      {Visible && (
        <button className="UP" onClick={scrollToTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
      {Table && (
        <div className="Educational-Map">
          <div className="fa-buh1">
            <button onClick={ToggleTable}>
              {" "}
              <i class="fa-solid fa-xmark"></i>
            </button>
            <h2>Schedule Academic </h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Event</th>
                <th>Day</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Start of First Semester</td>
                <td>Saturday</td>
                <td>30 September 2023</td>
              </tr>
              <tr>
                <td style={{ color: "#000" }}>2</td>
                <td style={{ color: "#000" }}>
                  Start of Midterm Exams (First Semester)
                </td>
                <td style={{ color: "#000" }}>Saturday</td>
                <td style={{ color: "#000" }}>11 November 2023</td>
              </tr>
              <tr>
                <td>3</td>
                <td>End of Midterm Exams (First Semester)</td>
                <td>Thursday</td>
                <td>16 November 2023</td>
              </tr>
              <tr>
                <td style={{ color: "#000" }}>4</td>
                <td style={{ color: "#000" }}>End of First Semester</td>
                <td style={{ color: "#000" }}>Thursday</td>
                <td style={{ color: "#000" }}>28 December 2023</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Start of Final Exams (First Semester)</td>
                <td>Sunday</td>
                <td>31 December 2023</td>
              </tr>
              <tr>
                <td style={{ color: "#000" }}>6</td>
                <td style={{ color: "#000" }}>
                  End of Final Exams (First Semester)
                </td>
                <td style={{ color: "#000" }}>Wednesday</td>
                <td style={{ color: "#000" }}>24 January 2024</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Start of Mid-Year Vacation</td>
                <td>Saturday</td>
                <td>27 January 2024</td>
              </tr>
              <tr>
                <td style={{ color: "#000" }}>8</td>
                <td style={{ color: "#000" }}>End of Mid-Year Vacation</td>
                <td style={{ color: "#000" }}>Thursday</td>
                <td style={{ color: "#000" }}>08 February 2024</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Start of Second Semester</td>
                <td>Saturday</td>
                <td>10 February 2024</td>
              </tr>
              <tr>
                <td style={{ color: "#000" }}>10</td>
                <td style={{ color: "#000" }}>
                  Start of Midterm Exams (Second Semester)
                </td>
                <td style={{ color: "#000" }}>Saturday</td>
                <td style={{ color: "#000" }}>23 March 2024</td>
              </tr>
              <tr>
                <td>11</td>
                <td>End of Midterm Exams (Second Semester)</td>
                <td>Thursday</td>
                <td>28 March 2024</td>
              </tr>
              <tr>
                <td style={{ color: "#000" }}>12</td>
                <td style={{ color: "#000" }}>End of Second Semester</td>
                <td style={{ color: "#000" }}>Tuesday</td>
                <td style={{ color: "#000" }}>21 May 2024</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Start of Final Exams (Second Semester)</td>
                <td>Wednesday</td>
                <td>22 May 2024</td>
              </tr>
              <tr>
                <td style={{ color: "#000" }}>14</td>
                <td style={{ color: "#000" }}>
                  End of Final Exams (Second Semester)
                </td>
                <td style={{ color: "#000" }}>Thursday</td>
                <td style={{ color: "#000" }}>13 June 2024</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Start of Graduation Project Discussions</td>
                <td>Monday</td>
                <td>01 July 2024</td>
              </tr>
              <tr>
                <td style={{ color: "#000" }}>16</td>
                <td style={{ color: "#000" }}>
                  End of Graduation Project Discussions
                </td>
                <td style={{ color: "#000" }}>Wednesday</td>
                <td style={{ color: "#000" }}>03 July 2024</td>
              </tr>
              <tr>
                <td>17</td>
                <td>Sending Final Results to Ministry for Approval</td>
                <td>Monday</td>
                <td>15 July 2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {menuOpen && (
        <div id="menu" className="menu">
          <ul>
            <li>
              <button onClick={TogglemenuOpen}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </li>
            <li>
              <div className="fa-ai">
                <a onClick={Togglecondition}>Institutes</a>
                <i className="fa-solid fa-angle-down"></i>{" "}
              </div>
              {condition && (
                <div>
                  <li>
                    <a href="#">Higher Institute of Engineering</a>
                  </li>
                  <li>
                    <a href="#">Higher Institute of Computer Science</a>
                  </li>
                  <li>
                    <a href="#">Higher Institute of Media</a>
                  </li>
                </div>
              )}
            </li>
            <li>
              <div className="fa-ai">
                <a onClick={TogglecadInfo}>Acad.Info</a>
                <i className="fa-solid fa-angle-down"></i>{" "}
              </div>
              {cadInfo && (
                <div>
                  <li>
                    <a href="#">Chairman`s Message</a>
                  </li>
                  <li>
                    <a href="#">Chairman`s Message Vice</a>
                  </li>
                  <li>
                    <a href="#">History of the Academy</a>
                  </li>
                </div>
              )}
            </li>
            <li>
              <div className="fa-ai">
                <a onClick={ToggleTable}>Educational Map</a>
                <i className="fa-solid fa-angle-down"></i>{" "}
              </div>
            </li>
            <li>
              <div className="fa-ai">
                <a onClick={TogglePhonNumbar}>Enrollment</a>
                <i className="fa-solid fa-angle-down"></i>{" "}
              </div>
              {PhonNumbar && (
                <div>
                  <li>
                    <p id="content53">Phon Numbar (1) : 0226300032</p>
                  </li>
                  <li>
                    <p id="content58">Phon Numbar (2) : 0226300033</p>
                  </li>
                  <li>
                    <p id="content59">Phon Numbar (3) : 0226300034</p>
                  </li>
                  <li>
                    <p id="content50">Phon Numbar (4) : 0226300035</p>
                  </li>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
      <div className="father">
        <header>
          <div className="AKTK">
            <div className="fsolid">
              <i className="fa-solid fa-building-columns"></i>
            </div>
            <h3 style={{ flexShrink: "0" }}>Al-Shorouk Academy</h3>
          </div>
          <nav>
            <ul>
              <li>
                <div className="flax">
                  <a onClick={ToggleHigherInstituteofEngineering}>Institutes</a>
                  <i className="fa-solid fa-angle-down"></i>{" "}
                </div>
                <div className="nav-divider"></div>
                {HigherInstituteofEngineering && (
                <ul className="ChairmansMessage">
                <li>
                    <a href="#">Higher Institute of Engineering</a>
                  </li>
                  <li>
                    <a href="#">Higher Institute of Computer Science</a>
                  </li>
                  <li>
                    <a href="#">Higher Institute of Media</a>
                  </li>
                </ul>
                )}
              </li>
              <li>
                <div className="flax">
                  <a onClick={ToggleChairmanMessage}>
                    {" "}
                    <span style={{ width: "80px" }}>Acad.Info</span>
                  </a>
                  <i className="fa-solid fa-angle-down"></i>{" "}
                </div>
                <div className="nav-divider"></div>
                {ChairmanMessage &&(
                <ul className="ChairmansMessage">
                  <li>
                    <a href="#">Chairman`s Message</a>
                  </li>
                  <li>
                    <a href="#">Chairman`s Message Vice</a>
                  </li>
                  <li>
                    <a href="#">History of the Academy</a>
                  </li>
                </ul>
                )}
              </li>
              <li>
                <div className="flax">
                  <a onClick={ToggleTable}>
                    <span>Educational </span> <span>Map</span>
                  </a>
                  <i className="fa-solid fa-angle-down"></i>{" "}
                </div>
                <div className="nav-divider"></div>
              </li>
              <li>
                <div className="flax">
                  <a onClick={scrolldiv}>Enrollment</a>
                  <i className="fa-solid fa-angle-down"></i>{" "}
                </div>
                <div id="borderDiv5" className="nav-divider"></div>
              </li>
            </ul>
          </nav>
          <button onClick={TogglemenuOpen} className="menu-button">
            <i id="content7" className="fa-solid fa-bookmark"></i>
          </button>
        </header>
        <div className="body-bordar"></div>
        <section>
          <h2 id="content9">Al-Shorouk Academy:~</h2>
          <p id="content10">
            Al-Shorouk Academy is one of the leading educational institutions in
            Egypt, established with the aim of providing high-quality education
            in various fields such as engineering, business administration,
            computer science, and media. The academy is distinguished by
            offering advanced academic programs that combine theory and
            practice, contributing to the preparation of qualified graduates
            capable of competing in both local and international job markets.
            Al-Shorouk Academy was founded in the early 1990s, and since its
            inception, it has aimed to be a distinguished academic center in
            higher education. The academy strives for academic excellence by
            providing an innovative educational environment that contributes to
            the development of students' skills and encourages them to pursue
            innovation and scientific research.
          </p>
        </section>
        <div className="body-bordar"></div>
        <ChartComponent />
        <div className="body-bordar"></div>
        <div className="Communication">
          <h3>Communication:~</h3>
          <div className="fa-link-numbar">
            <div className="link">
              <div className="facebook">
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>{" "}
                </a>
                <p>visit and connect with us on facebookc</p>
              </div>
              <div className="instagram">
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>{" "}
                </a>
                <p>visit and connect with us on instagram</p>
              </div>
              <div className="google">
                <a href="#">
                  <i class="fa-brands fa-google"></i>{" "}
                </a>
                <p>visit and connect with us on google</p>
              </div>
              <div className="twitter">
                <a href="#">
                  <i class="fa-brands fa-twitter"></i>
                  {""}
                </a>
                <p>visit and connect with us on twitter</p>
              </div>
            </div>
            <div  ref={tergetDIVRef} className="numbar">
              <div className="building">
                <div className="columns">
                  <i className="fa-solid fa-building-columns"></i>
                </div>
                <h3 style={{ display: "flex", flexShrink: "0" }}>
                  <span>Al-Shorouk </span>
                  <span>Academy</span>
                </h3>
              </div>
              <ul>
                <li>
                  <p>Phon Numbar (1) : 0226300032</p>
                </li>
                <li>
                  <p>Phon Numbar (2) : 0226300033</p>
                </li>
                <li>
                  <p>Phon Numbar (3) : 0226300034</p>
                </li>
                <li>
                  <p>Phon Numbar (4) : 0226300035</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section>
          <p id="conte56">
            Education is the cornerstone upon which modern societies are built,
            serving as the primary driver for the advancement and progress of
            nations. It plays a vital role in shaping individuals' personalities
            and developing their intellectual and practical abilities, which in
            turn has a direct impact on both personal and societal development.
          </p>
        </section>
      </div>
    </React.StrictMode>
  );
};

export default Home;
