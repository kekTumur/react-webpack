import React from 'react'
import ReactDOM from 'react-dom'
import bird from './bird.png';
import './main.scss';

const App = () => <p><img src={bird} /></p>;

ReactDOM.render(<App />, document.querySelector('#root'));