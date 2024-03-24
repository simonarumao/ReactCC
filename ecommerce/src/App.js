// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [results, setResults] = useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setResults(data);
    })
  },[])
  

  return (
    <div className="App">
      {
      results.map(d => (
       <div key={d.id}>{d.title}</div>
      ))
      }
     
    </div>
  );
}

export default App;
