import React, { useEffect, useState } from 'react';
import Catalogue from '../../components/catalogue/Catalogue';

const BrowsePage = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Assume fetchData is a function that fetches your listings data
    const fetchData = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('https://api.example.com/listings');

        if (!response.ok) {
          throw Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error('Failed to fetch listings', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData().then((data) => {
      setListings(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>; // or render a spinner

  return <Catalogue listings={listings} />;
};

export default BrowsePage;
