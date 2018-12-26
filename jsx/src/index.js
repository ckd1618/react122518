//import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//create a react component
const clickMe = 'Click Me!';
function clickHere() {
    return 'Click Here!'
}

const App =() => {
    return (
        <div>
            <label className="label" for="name">Enter name: </label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>{clickHere()}</button>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

//take the react component and show it on the screen
