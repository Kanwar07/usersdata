import React, { useContext } from "react";
import { data } from "../context/Contextdata";
import userpagestyle from "./UserPage.module.css";
import UserCard from "../card/UserCard";

function UsersPage() {
  const { userData, page, totalPage, gotoNextPage, gotoPrevPage } =
    useContext(data);
  return (
    <>
      <div className={userpagestyle.gridwrapper}>
        {userData.length ? (
          <div className={userpagestyle.grid}>
            {userData.map((data) => {
              const { avatar, email, first_name, id, last_name } = data;
              return (
                <UserCard {...{ avatar, email, first_name, id, last_name }} />
              );
            })}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className={userpagestyle.buttonouter}>
        {page === totalPage ? (
          <button onClick={gotoPrevPage} className={userpagestyle.buttoninner}>
            Prev
          </button>
        ) : (
          <button onClick={gotoNextPage} className={userpagestyle.buttoninner}>
            Next
          </button>
        )}
      </div>
    </>
  );
}

export default UsersPage;
