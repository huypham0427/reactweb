import { useState, useEffect } from 'react';
import './App.css';

// Create components 
const Person = (props) =>{
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.LastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}



function App() {
  // Declare variables
  const name = 'React';
  const isNameShowing = true;
  // React State
  const [counter, setCounter] = useState(0);
  
  // useEffect()
  useEffect(() => {
    // Never modify State manualy
    alert('You change the counter to ' + counter)
  }, [counter])

  return (
    // This is React not HTML
    <div className="App">
      
      {/*<h1>Hello, {isNameShowing ? name : 'someone'}!</h1>*/}
      <h1>Hello, {name}</h1>

      <h1>**Calling components**</h1>
      {/*Calling components*/}
        <Person/>

      <h1>**Using props**</h1>
      {/*Using props*/}
        <Person name={'Huy'} LastName={'Pham'} age={'20'}/>
        <Person name={'John'} LastName={'Smith'} age={'30'}/>

      <h1>**React State**</h1>
      {/*event -> trigger as a result/active*/}
        <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter((nextCount) => nextCount +1)}>+</button>


      <h1>**If-else statement**</h1>
      {/*If-else statement*/}
      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ) : (
        <>
        <h1>test</h1>
        <h1>There is no name</h1>
        </>
      )
      }


    </div>
  );
}

export default App;
