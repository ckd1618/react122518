import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

//Same thing but the function version instead of the class version
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log(err)
//     )
//     return <div>Hi There!</div>;
// };

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: null};

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude })
            },
            err => this.setState({errorMessage: err.message})
        );
    }

    render(){

        if (this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }else if (this.state.errorMessage){
            return <div>Error: {this.state.errorMessage} </div>;
        }
        return <div>Loading...</div>;

    }
}

ReactDom.render(<App />, document.querySelector('#root'));