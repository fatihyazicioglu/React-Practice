import User from './components/User';
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
    <User/>
    <User/>

    
    <div>
      {
        isAuth ? <p>it exists</p> : null
      }
    </div>



    </div>
       

  );
}

export default App;
