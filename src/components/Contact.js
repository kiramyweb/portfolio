import React, {Component} from 'react';
import "../styles/contactPage.scss";
import {webProgramming, meeting} from "../images";
import ReactTooltip from 'react-tooltip';

class Contact extends Component {



    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            email: '',
            message: ''
        };

        this.state = this.initialState;

        this.handleChangeField = this.handleChangeField.bind(this);
        this.handleClickClear = this.handleClickClear.bind(this);
    }

    handleChangeField(el, e) {
        let newState = {};
        newState[el] = e.target.value;
        this.setState(newState);
    }

    handleClickClear() {
        this.setState(this.initialState);
    }

    render() {
        return(
            <div id="contactForm">
                <section id="headerContacts">
                    <img src={webProgramming}/>

                    <img src={meeting} id="meetingSvg"/>

                    <div id="headerButtons">
                        <i onClick={this.handleClickClear} data-tip="Reset" className="fas fa-redo-alt"/>
                        <i onClick={this.props.handleClick} data-tip="Close" className="fas fa-times"/>
                    </div>
                </section>

                <hr className="hr"/>

                <section id="form">
                    <h3>How can I help you today?</h3>
                    <form action="./mail/index.php" method="POST">
                        <div id="inputs">
                            <div id="nameField">
                                <p>Name:</p>
                                <input required value={this.state.name}
                                       onChange={(e) => this.handleChangeField("name", e)}
                                       type="text" name="name"/>
                            </div>
                            <div id="emailField">
                                <p>Email:</p>
                                <input required value={this.state.email}
                                       onChange={(e) => this.handleChangeField("email", e)}
                                       type="email" name="email" />
                            </div>
                        </div>
                        <p id="messageHint">Message:</p>
                        <textarea required value={this.state.message}
                                  onChange={(e) => this.handleChangeField("message", e)}
                                  name="msg" id="messageArea" cols="30" rows="10"/>
                        <button type="submit" name="submit">Submit</button>
                    </form>
                </section>

                <ReactTooltip place="bottom" effect="solid" delayShow={300}/>
            </div>
        )
    }
}

export default Contact;