import React, { useEffect, useState } from 'react';
import './App.css';

function Card({ name, description, image_url, id }) {
  return (
    <div className="card">
      <img src={image_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

function Beers() {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);


  useEffect(() => {
    const game = async () => await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=9`)
      .then(data => data.json())
      .then(data => setBeers(prev => [...prev, ...data]));
    game();
  }, [page]);

  window.onscroll = function() {if (document.documentElement.getBoundingClientRect().bottom - window.innerHeight < 1) setPage(page + 1); }

  return (
    <>
     <div className="container">
       {beers.map(beer => <Card {...beer} key={beer.id} />)}
      </div> 
    </>
  );
}

export default Beers;
