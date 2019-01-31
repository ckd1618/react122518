import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//Same thing but the function version instead of the class version
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log(err)
//     )
//     return <div>Hi There!</div>;
// };

class App extends React.Component {
    state = { lat: null, errorMessage: null};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({errorMessage: err.message})
        );
    }

    renderContent() {
        if (this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
            //return <div>Latitude: {this.state.lat}</div>;
        }else if (this.state.errorMessage){
            return <div>Error: {this.state.errorMessage} </div>;
        }
        return <Spinner message="Please accept location request" />;
    }

    render() {
        return this.renderContent();
    }
    
}

ReactDom.render(<App />, document.querySelector('#root'));