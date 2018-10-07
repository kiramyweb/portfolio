import React, {Component} from 'react';
import images from "../images";
import '../styles/mainPage.scss';

import industrialLogo from "../img/industrialLogo.png";

class MainPage extends Component {
    render() {
        return (
            <div id="mainPage">
                <section id="top">
                    <div id="header">
                        <a href="/">
                            <img src={images.webProgramming} id="programmingIcon"/>
                        </a>
                        <button id="contactButtonHeader" onClick={this.props.handleClick}>Contact Me</button>
                    </div>

                    <div id="headerInfo">
                        <h2>Hello, I'm Ivan Manuhin</h2>
                        <h3>A Front-end Developer</h3>
                    </div>

                    <div id="headerSvg">
                        <img src={images.headerGraphic}/>
                    </div>
                </section>

                <section id="info">
                    <h3>Hey, what's up? Let me say you a few words about me.</h3>
                    <p>I make sites and I really enjoy this craft. Yet i'm just starting my professional activity, I've
                        already done some web sites, which you can see below in portfolio section. I'm very reliable
                        person
                        and always try to meet interests of other people.</p>

                    <img id="managerSvg" src={images.manager}/>

                    <div id="skills">
                        <h3>Stuff I know and apply:</h3>
                        <div id="technologies">
                            <div id="toolkit">
                                <img src={images.languages} alt="My languages"/>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>HTML</li>
                                    <li>CSS (SASS)</li>
                                </ul>
                            </div>

                            <p>NodeJS</p>

                            <div id="otherTools">
                                <img src={images.toolkit} alt="My Toolkit"/>
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
                            <div className="projectPreview">
                                <p><img src={industrialLogo}/></p>
                            </div>
                            <div className="projectHover">
                                <p>Landing page for industrial company</p>
                                <a href="/"><button>Visit Website &nbsp; &#10140;</button></a>
                            </div>
                        </div>

                        <div id="project2">
                            <p>Project 2</p>
                        </div>
                        <div id="project3">
                            <p>Project 3</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default MainPage;