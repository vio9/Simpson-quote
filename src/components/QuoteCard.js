import React from 'react';
import './QuoteCard.css';

export default function QuoteCard({ quote, character,  image }) {
 
 return (
 <div className="QuoteCard">
    <img src={image} alt={character} />
    <div>
      <blockquote>{quote}</blockquote>
      <cite>{character}</cite>
    </div>
  </div>
 )
};

