import React, { useState, useEffect } from "react"
import QuoteCard from "./components/QuoteCard"
import axios from "axios"
import './App.css';





function App() {

const [quote, setQuote] = useState({});

const getQuote = () => {

  axios
  .get(`https://simpsons-quotes-api.herokuapp.com/quotes`)
  .then((response) => response.data)
  .then((data) => setQuote(data[0]));
}

useEffect(() => {
  getQuote();
}, []);

  return (
    <div className="App">

      <h1>Quote from the Simpson! </h1>
        <QuoteCard {...quote}/>

        <button type="button" onClick={getQuote}>Get a new quote</button>

    </div>
  )
}

export default App;
