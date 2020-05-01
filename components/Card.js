import React from 'react';
import './css/Card.css';

class Card extends React.Component {
  render(){
      return(
        <div className="card">
    <div className="card-cont">
      <p className="card-social">@marco.mad.lop</p>
      <h1 className="card-followers-count">1987</h1>
      <p className="card-followers">Followers</p>
      <p className="card-followers-today">12 Today</p>
        </div>
    </div>
  )}
}

export default Card;