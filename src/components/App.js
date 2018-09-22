import React, {Component} from 'react';
import webProgrammingIcon from "../img/webProgramming.svg";
import headerSvg from "../img/header.svg";
import languagesSvg from "../img/languages.svg";
import toolkitSvg from "../img/toolkit.svg";
import managerSvg from "../img/manager.svg";

class App extends Component {
    render() {
        return (
            <main id="App">
                <section id="top">
                    <div id="header">
                        <a href="/">
                            <img src={webProgrammingIcon} id="programmingIcon"/>
                        </a>
                        <button id="contactButtonHeader">Contact Me</button>
                    </div>

                    <div id="headerInfo">
                        <h2>Hello, I'm Ivan Manuhin</h2>
                        <h3>A Front-end Developer</h3>
                    </div>

                    <div id="headerSvg">
                        <img src={headerSvg}/>
                    </div>
                </section>

                <section id="info">
                    <h3>Hey, what's up? Let me say you a few words about me.</h3>
                    <p>I make sites and I really enjoy this craft. Yet i'm just starting my professional activity, I've
                    already done some web sites, which you can see below in portfolio section. I'm very reliable person
                    and always try to meet interests of other people.</p>

                    <img id="managerSvg" src={managerSvg} />

                    <div id="skills">
                        <h3>Stuff I know and apply:</h3>
                        <div id="technologies">
                            <div id="toolkit">
                                <img src={languagesSvg} alt="My languages"/>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>HTML</li>
                                    <li>CSS (SASS)</li>
                                </ul>
                            </div>

                            <p>NodeJS</p>

                            <div id="otherTools">
                                <img src={toolkitSvg} alt="My Toolkit"/>
                                <ul>
                                    <li>Webpack</li>
                                    <li>React</li>
                                    <li>Git</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="portfolio">
                    <h3>My Work</h3>
                    <p>Here are some web sites that I've done.</p>

                    <div id="projects">
                        <div id="project1">
                            <p>Project 1</p>
                        </div>
                        <div id="project2">
                            <p>Project 2</p>
                        </div>
                        <div id="project3">
                            <p>Project 3</p>
                        </div>
                    </div>
                </section>

                <section id="footer">
                    <div id="contacts">
                        <ul>
                            <li><i className="fab fa-vk"/></li>
                            <li><i className="far fa-envelope"/></li>
                        </ul>
                        <p>Made by me — kiramy</p>
                    </div>

                    <div id="credits">
                        <h4>Credits:</h4>
                        <p>Icons made by monkik from <a target="_blank" href="http://www.flaticon.com">www.flaticon.com</a>
                            | <a target="_blank" href="https://www.freepik.com/free-photos-vectors/business">Business vector in header
                            created by Freepik</a></p>
                    </div>
                </section>
            </main>
        )
    }
}

export default App;