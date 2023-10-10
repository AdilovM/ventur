import {React, useEffect} from "react";
// import Header from "../../components/header/Header";

// import "./home.css";

const Home = () => {
  useEffect(() => {
    document.body.style.backgroundImage = 'url(/background.jpeg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.height = '100vh';
    document.body.style.width = '100vw';
    document.body.style.overflow = 'hidden';

    return () => {
        document.body.style.backgroundImage = null;
        // ... you can reset other styles here if needed
    };
}, []);
  return (
    <div>
      {/* <Header/> */}
    </div>
  );
};

export default Home;