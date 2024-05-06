import React, { createContext, useEffect, useState } from "react";

export const data = createContext();

function Contextdata({ children }) {
  const [userData, setuserData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          `https://reqres.in/api/users?page=${page}`
        );
        const data = await response.json();
        setuserData(data.data);
        setTotalPage(data.total_pages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, [page]);

  const gotoNextPage = () => {
    if (page + 1 <= totalPage) {
      setPage(page + 1);
    }
  };

  const gotoPrevPage = () => {
    if (page - 1 > 0) {
      setPage(page - 1);
    }
  };

  return (
    <data.Provider
      value={{
        setuserData,
        userData,
        page,
        totalPage,
        gotoNextPage,
        gotoPrevPage,
      }}
    >
      {children}
    </data.Provider>
  );
}

export default Contextdata;
