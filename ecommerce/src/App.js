// import logo from './logo.svg';
// json-server --watch src/db/db.json --port 3001
import React, {useState} from 'react';
import './App.css';

import Category from './components/Category';
import CategoryProduct from './components/category_product';
import { getCategories, getProducts } from './fetcher';

function App() {

  // set for the categories and prodcuts
  const [categorie, setCategories] = useState({ errorMessage: '', data: [] });
  const [products, setProducts] = useState({ errorMessage: '', data: [] });

  // using fetch from db to fetch categories, we use fetch.js to fetch the data 
  React.useEffect(() => {
    const fetchdata = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchdata();
  },[])

  // when user click on a category it opne the prodcuts 
  const handleCategoryClick = id => {
    const fetchdata = async () => {
      const responseObject = await getProducts(id);
      setProducts(responseObject);
    }
    fetchdata();
  }

  //render categories
  const renderCategories = () => {
    
    return categorie.data.map(c =>
      <Category key={c.id} id={c.id} title={c.title} onCategoryClick={() => handleCategoryClick(c.id)}/>
      );
  }


  // this is to render prodcuts
  const renderProducts = () => {
    return products.data.map(p => <CategoryProduct{...p}>{p.title}</CategoryProduct>
    )
  }
   
  return (
    <>
      <header>My store </header>
      <section>
        <nav>
          
          {categorie.errorMessage && <div>Error :{ categorie.errorMessage}</div>}
            { categorie.data && renderCategories() }
          
        </nav>
      <main>
          <h1>Products</h1>
          {products.errorMessage && <div>Error :{products.errorMessage}</div>}
            { products.data && renderProducts() }
          
      </main>
      </section>

      <footer>
        <article>main area</article>
      </footer>
    </>
  );
  

}

export default App;
