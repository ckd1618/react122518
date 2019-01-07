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
            <label className="label" htmlFor="name">Enter name: </label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>{clickHere()}</button>
        </div>
    );
};

//take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);


