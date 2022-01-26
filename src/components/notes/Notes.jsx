import React from "react";
import { SingleNote } from "../singleNoute/SingleNoute";
import { createdNoutes } from "../../redux/selectors";
import { useSelector } from "react-redux";

import "./Notes.scss";

export const Notes = () => {
  const noutes = useSelector(createdNoutes);
  console.log("noutess>>", noutes);
  return (
    <div>
      {!!noutes.length &&
        noutes.map((item) => {
          return <SingleNote key={item.id} data={item} />;
        })}
    </div>
  );
};
