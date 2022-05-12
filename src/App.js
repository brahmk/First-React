import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("Brahm");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginLogout = () => setIsLoggedIn(!isLoggedIn);

 
  return (
    <div className="App">
      <header className="App-header">
      
      
      <h1>You clicked the button {count} times.</h1>
      <button onClick={()=> setCount(count + 1)}> + </button>&nbsp;
      <button onClick={()=> setCount(0)}> RESET </button>&nbsp;
      <button onClick={()=> {if (count > 0) {setCount(count - 1)}}}> - </button>
      
      
      <h2>Welcome { isLoggedIn ?  firstName : 'Guest'}</h2>
      <button onClick={loginLogout}>{isLoggedIn ?  'Logout' : 'Login' }</button>
      <section>


        {/* <h2 onClick={()=>setFirstName(firstName + '*')}>Hello {firstName}</h2> */}
      </section>
      </header>
     
    </div>
  );
}

export default App;
