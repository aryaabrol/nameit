import React from 'react';
import './App.css';
import Header from './Header';
import Results from './results';
import Searchbox from './searchbox';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    state = {
        name: "Name  it",
        bool: true,
        suggestnames: [],
    };

    changeinput = (text) => {
        console.log(text);
        this.setState({ bool: !(text.length > 0), suggestnames: text ? name(text) : [] });
    };
    render() {
        return (
            <div>
                <Header hexpand={this.state.bool} htext={this.state.name}></Header>
                <Searchbox change={this.changeinput}></Searchbox>
                <Results suggestnames={this.state.suggestnames}></Results>

                {/* <button onClick={() => {
                    this.setState({
                        name: "abrol",
                    });
                }}>Click me pls</button> */}
            </div>

        )
    }
}


export default App