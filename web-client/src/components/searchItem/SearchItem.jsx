import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://c8.alamy.com/comp/E0KE1R/jarctic-cat-four-wheeler-atv-all-terrain-vehicle-E0KE1R.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDetailsContainer">
        <div className="siTop">
          <h1 className="siTitle">4-wheeler</h1>
          <div className="siRating">
            <button>8.9</button>
          </div>
        </div>
        <span className="siSubtitle">Something about this thang</span>
        <span className="siFeatures">Location</span>
        <span className="siPrice">$$$</span>
        <div className="siDetailTexts">

          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};



export default SearchItem;