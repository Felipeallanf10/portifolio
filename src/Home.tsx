import './Home.css'
import iconComputer from './assets/computer.svg'
import iconReact from './assets/react.svg'


function Home() {
  return (
    <div>
      <header>
        <div id="header-wrap-inner">
          <h2>
            Felipe<strong id="ponto">.</strong>
            <strong id="underline">_</strong>
          </h2>
          <nav id="nav-container">
            <ul>
              <li>
                {' '}
                <a href="">// home</a>{' '}
              </li>
              <li>
                {' '}
                <a href="">// expertise</a>{' '}
              </li>
              <li>
                {' '}
                <a href="">// work</a>{' '}
              </li>
              <li>
                {' '}
                <a href="">// expertise</a>{' '}
              </li>
              <li>
                {' '}
                <a href="">// contact</a>{' '}
              </li>
            </ul>
          </nav>
        </div>
        <div id="content_title">
          <h1>Felipe Allan</h1>
          <h3>SOFTWARE ENGINEER, FRONT END & APP DEVELOPER.</h3>
        </div>

        <div className="elementor">
          <div className="elementorContainer">
            <div className="circle yel" id="circleMain"></div>
          </div>
        </div>
      </header>

      <section id="skills">
        <h2>My Expertise</h2>

        <div className="boxSkills">
          <div className="itemSkills" id="boxSkills3">
            <div className="titleBox">
              <img src={iconComputer} alt="monitor" />
              <h3>
                Software <br /> Development
              </h3>
            </div>
            <div className="contentBox">
              <div className="lineH3">
                <div className="h3">{'<h3>'}</div>
                <hr />
                <div className="h3">{'</h3>'}</div>
              </div>
              <p>
                Experienced in both functional and OOP: Dart, Python, Java,
                JavaScript, TypeScript.
              </p>
            </div>
          </div>
          <div className="itemSkills" id="boxSkills2">
            <div className="titleBox">
              <img src={iconReact} alt="monitor" />
              <h3>
                Frontend Dev <br /> React, NextJS
              </h3>
            </div>
            <div className="contentBox">
              <div className="lineH3">
                <div className="h3">{'<h3>'}</div>
                <hr />
                <div className="h3">{'</h3>'}</div>
              </div>
              <p>
                Passionate about UI/UX. Over 5 years of development experience
                in HTML, CSS, JS, React and NextJS frameworks.
              </p>
            </div>
          </div>
          <div className="itemSkills" id="boxSkills3">
            <div className="titleBox">
              <img src={iconReact} alt="monitor" />
              <h3>
                Flutter Dev <br /> Android, iOS
              </h3>
            </div>
            <div className="contentBox">
              <div className="lineH3">
                <div className="h3">{'<h3>'}</div>
                <hr />
                <div className="h3">{'</h3>'}</div>
              </div>
              <p>
                Skilled in developing hybrid mobile apps and cross-platform
                solutions using the Flutter framework.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
