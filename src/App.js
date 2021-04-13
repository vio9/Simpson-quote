import React from 'react'
import Quote from './components/QuoteCard.js'
import './App.css';
import axios from 'axios'




function App() {

  const [quote, SetQuote] = useState('')

  const getQuote = () =>{

      axios.get(`https://simpsons-quotes-api.herokuapp.com/quotes`)
      .then((response) => response.data)
      .then((data) => {
          console.log([data.results]);
          }) }

  return (
    <div className="App">
        <quoteCard 
        quote={quote.quote}
        character={quote.character} />
        <button>Get a new quote</button>
    </div>
  );
}

export default App;
