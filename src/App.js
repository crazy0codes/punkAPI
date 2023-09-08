import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('Buzz');
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${search}`)
    .then((response) => response.json())
    .then((data) => setData(data))
  }, [search]);

  function Details(props) {
    return(
      <>
      {props.props.map((beer) => {
        if(beer.error)
        return <p>{beer.error}</p>
        else {
          return(
          <div className='container' key={beer.id}>
            <div className='beer'>
            <img src={beer.image_url} alt={beer.name} />
            <div className='beer-details'>
            <h1>{beer.name}</h1>
            <p>{beer.description}</p>
            </div>
            </div>
          </div>
        )
        }
      })}
      </>
    )
  }

  return (
    <>
    <form onSubmit={(e) => {
      e.preventDefault()
      if(e.target.search.value === '') {
        alert('Please enter a valid beer name')
      }
      else setSearch(e.target.search.value)
      } }>
      <input
        type="text"
        name = "search"
        />
      <button type="submit">Search</button>
    </form>
    <Details props={data} />
    </>
  );
}

export default App;