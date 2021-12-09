import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';


function App() {

  let [ pageNumber , setPageNumber ] = useState(1);
  let [ search , setSearch ] = useState("");
  let [ fetchedData , updateFetchedData] = useState([]);


  let { results } = fetchedData;




  let api = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8f07a4b2c5f1f75b0b97651552c54856&page=${pageNumber}`;

  useEffect(()=>{

    (async function(){
      let data = await fetch(api).then(res=>res.json());
      updateFetchedData(data);
      })()

  }, [api])

  return (
    <div className="App">
      <Header/>
      <Search setSearch={setSearch}/>
      <div className="container">
        <div className="row">
          <div className="col-2">
            hello world
          </div>
          <div className="col-10">
            <div className="row">
            <Cards results={results}/>
            </div>
            <div className="row">
            <Pagination setPageNumber={setPageNumber}/>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;
