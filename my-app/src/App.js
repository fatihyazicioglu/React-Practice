import User from './components/User';
import Navbar from "./components/Navbar"


import './App.css';


function App() {
  const test =123;
  const isAuth =true ;
  return (
    <div className="App">
   <h1>Hello</h1>
   <label>not Class but ClassName.</label>
   <h1>not for  but Htmlfor(label)</h1>

   <h1>there must be only 1 parent element.This h1 cannot be outside of div</h1>
    {/* for operations {} */}
    <h1>    {1+1} </h1>
    <h1>{"fatih".toUpperCase()}</h1>    
    <h1>{test}</h1>

    <User/>
    <User/>
    <hr/>
    <User/>

    
    <div className="header">
      {
        isAuth ? <p>it exists</p> : null
      }
    </div>

      <div className='container'>
        <h4 style={{color:"red", fontSize:"30px"}}>
          App Component
        </h4>
      </div>

      <div>
        <Navbar title="User App 2"/>
       
      </div>

    </div>
       

  );
}

export default App;
// 2 type of components
//1- class-based components
//2- functional components