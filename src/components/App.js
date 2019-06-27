import React, {Component} from 'react';
import Footer from "./Footer";
import MainPage from "./Main";
import Contact from "./Contact";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'isMainPage': true
        };

        this.onHandleContactClick = this.onHandleContactClick.bind(this);
    }

    onHandleContactClick() {
        this.setState({
            'isMainPage': !this.state.isMainPage
        });
    }

    render() {
        return (
            <main id="mainDiv">
                {this.state.isMainPage ? <MainPage handleClick={this.onHandleContactClick}/> : <Contact handleClick={this.onHandleContactClick}/>}
                <Footer/>
            </main>
        )
    }
}

export default App;