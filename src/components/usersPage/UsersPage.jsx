import React, { useContext } from "react";
import { data } from "../context/Contextdata";

function UsersPage() {
  const { userData, page, totalPage, gotoNextPage, gotoPrevPage } =
    useContext(data);
  return (
    <>
      <div>
        {userData.length > 0 && (
          <div>
            {userData.map((data) => {
              const { avatar, email, first_name, id, last_name } = data;
              return (
                <div key={id}>
                  <div>
                    <img src={avatar} alt={first_name} />
                  </div>
                  <div>{first_name}</div>
                  <div>{last_name}</div>
                  <div>{email}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div>
        {page === totalPage ? (
          <button onClick={gotoPrevPage}>Prev</button>
        ) : (
          <button onClick={gotoNextPage}>Next</button>
        )}
      </div>
    </>
  );
}

export default UsersPage;
