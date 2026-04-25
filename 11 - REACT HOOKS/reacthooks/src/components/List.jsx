import React, { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    console.log("Buscando itens do DB...");

    setMyItems(getItems);
  }, [getItems]);

  return (
    <div>
      <h2>List</h2>
      {myItems && myItems.map((item, index) => <p key={index}>{item}</p>)}
    </div>
  );
};

export default List;
