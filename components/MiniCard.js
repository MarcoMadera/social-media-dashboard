import React from 'react';
import './css/MiniCard.css';

class MiniCard extends React.Component {
  render(){
      return(
        <div className="minicard">
          <div className="minicard-cont">
            <p>Pages Views</p>
            <p className="minicard-views">90</p>
          </div>
        </div>
  )}
}

export default MiniCard;