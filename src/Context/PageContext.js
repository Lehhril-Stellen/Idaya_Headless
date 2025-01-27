import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
export const PageContext = createContext();

// Create a provider component
export const PageProvider = ({ children }) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [pages, setPages] = useState([]);

  useEffect(() => {
    axios.get(apiUrl)
      .then(res => {
        setPages(res.data);
      })
      .catch(err => {
        console.log(err); // Handle errors if any
      });
  }, []);

  return (
    <PageContext.Provider value={pages}>
      {children}
    </PageContext.Provider>
  );
};
