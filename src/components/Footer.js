import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip';

class Footer extends Component {
    render() {
        return (
            <section id="footer">
                <div id="contacts">
                    <ul>
                        <a href="https://www.vk.com/manuhinvanya" target="_blank">
                            <li>
                                <i data-tip="My VK page" className="fab fa-vk"/>
                            </li>
                        </a>
                        <a href="mailto:kiramyweb@gmail.com" target="_blank">
                            <li>
                                <i data-tip="Email me" className="far fa-envelope"/>
                            </li>
                        </a>
                        <a id="gitHubIcon" href="https://github.com/kiramyweb" target="_blank">
                            <li>
                                <i data-tip="My GitHub" className="fab fa-github"/>
                            </li>
                        </a>
                    </ul>
                    <p>Made by Manuhin 2019</p>
                </div>

                <div id="credits">
                    <h4>Credits:</h4>
                    <p>Icons made by monkik from <a target="_blank"
                                                    href="http://www.flaticon.com">www.flaticon.com</a> | <a target="_blank" href="https://www.freepik.com/free-photos-vectors/business">Vectors created by Freepik</a></p>
                </div>

                <ReactTooltip effect="solid" delayShow={300}/>
            </section>
        )
    }
}

export default Footer;