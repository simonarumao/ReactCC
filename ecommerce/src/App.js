// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

import Category from './components/Category';

function App() {
  const [results, setResults] = useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then(response => response.json())
      .then(data => {
    })
  },[])

  const renderCategories = () =>{

    return results.map(c=>
      <Category key={c.id} id={c.id} title={c.title}/>
    );
  }
   
  return (
    <>
      <header>My store </header>
      <section>
        <nav>
          {
          renderCategories()
          }
        </nav>
      <article>
        main area
      </article>
      </section>

      <footer>
        <article>main area</article>
      </footer>
    </>
  );
  

}

export default App;
