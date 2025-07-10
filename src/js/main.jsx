import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import '../styles/index.css'
import Home from './components/Home';
import SimpleCounter from './components/SimpleCounter';



const reactRender = ReactDOM.createRoot(document.getElementById('root'))

let counter = 0;

setInterval(()=>{

  reactRender.render(
  <React.StrictMode>
    <Home counter={counter}/>
  </React.StrictMode>,
)

  counter++
},1000)
