import ShowMap from '../maps/ShowMap'
import './filter.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Filter = () => {
  const [isTypeExpanded, setTypeExpanded] = useState(false);
  const [isTimeExpanded, setTimeExpanded] = useState(false);
  const [isPeopleExpanded, setPeopleExpanded] = useState(false);
  const [isRatingExpanded, setRatingExpanded] = useState(false);
  const [showMap, setShowMap] = useState(false);
  return (
    <div className="filterContainer">
        {showMap && <ShowMap />}
        {/* <button className="headerBtn" onClick={() => setShowMap(true)}>Show map</button> */}
        <Link to="/showmap" className="headerBtn">Show Map</Link>

      <div className="filterHeader">
        <h2>Filter by</h2>
      </div>
      <div className="filterSection">
        <h3 onClick={() => setTypeExpanded(!isTypeExpanded)}>Type</h3>
        {isTypeExpanded && (
          <ul>
          <li>All <span>23540</span></li>
          <li>Atv <span>8510</span></li>
          <li>Dirt bike <span>8423</span></li>
          <li>Utv <span>5600</span></li>
          <li>Dune Buggy <span>450</span></li>
          <li>Mountain bike <span>8510</span></li>
          <li>Jet ski <span>5410</span></li>
          <li>Kayak <span>4590</span></li>
          <li className="seeMore">See more</li>
          </ul>
        )}
      </div>
      <div className="filterSection">
        <h3 onClick={() => setTimeExpanded(!isTimeExpanded)}>Time</h3>
        {isTimeExpanded && (
          <ul>
            {/* ... your time filters ... */}
          </ul>
        )}
      </div>
      <div className="filterSection">
        <h3 onClick={() => setPeopleExpanded(!isPeopleExpanded)}>How many people</h3>
        {isPeopleExpanded && (
          <ul>
            {/* ... your people filters ... */}
          </ul>
        )}
      </div>
      <div className="filterSection">
        <h3 onClick={() => setRatingExpanded(!isRatingExpanded)}>Rating</h3>
        {isRatingExpanded && (
          <ul>
            {/* ... your rating filters ... */}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Filter;
