import {Component, StrictMode} from 'react';
import './App.css';


const Header = () => {
  return <h2>Hello world!</h2>
}

// const Field = () => {
//   const holder = 'Enter here';
//   const styledField = {
//     width: '300px'
//   }
//   return <input 
//     type="text" 
//     placeholder={holder} 
//     style = {styledField}/>
// }

class Field extends Component {
  render() {
    const holder = 'Enter here';
    const styledField = {
    width: '300px'
    };
    return <input 
        type="text" 
        placeholder={holder} 
        style = {styledField}/>
  }
}

function Btn() {
  const text = 'Log in'
  // const res = () => {
  //   return 'Log in:';
  // }
  const logged = false;
  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header/>
      </StrictMode>
        <Field/>
        <Btn/>
    </div>
    );
  }
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
export {Header}
export default App;
