import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>

        </ul>
        <ul className="fList">
          <li className="fListItem">AVT </li>
          <li className="fListItem">Boats </li>
          <li className="fListItem">Other Stuff </li>
          <li className="fListItem">Some More Stuff</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Some rare stuff</li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Seasonal and holiday deals </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">About Us</li>
          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Press center</li>
          <li className="fListItem">Investor relations</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2023 Ventur.</div>
    </div>
  );
};

export default Footer;