import React, { useEffect, useState } from 'react';
import './Get.css';
const Getdata = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchData = async () => {
      try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Replace with your API endpoint
          if (!response.ok) {
              console.log('Network response was not ok.');
            }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
        setError(error.message);
        setLoading(false);
    }
};


  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
    {loading ? (
      <p className="loading">Loading...</p>
    ) : error ? (
      <p className="error">Error: {error}</p>
    ) : (
      <ul className="data-list">
        {data.map((item) => (
          <li key={item.id} className="data-item">
            {item.title}
          </li>
        ))}
      </ul>
    )}
  </div>
  );
};

export default Getdata;
