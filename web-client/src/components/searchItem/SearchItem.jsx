import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://c8.alamy.com/comp/E0KE1R/jarctic-cat-four-wheeler-atv-all-terrain-vehicle-E0KE1R.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Bad ass 4-wheeler</h1>
        {/* <span className="siDistance">500m from center</span> */}
        <span className="siTaxiOp">Maybe renter offers some free things</span>
        <span className="siSubtitle">
          Something about this thang
        </span>
        <span className="siFeatures">
          Awesome Awesome
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$$$</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;