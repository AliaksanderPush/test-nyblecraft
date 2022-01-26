import React from "react";
import { SingleNote } from "../singleNoute/SingleNoute";
import { createdNoutes } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import "./Notes.scss";

export const Notes = () => {
  const noutes = useSelector(createdNoutes);

  return (
    <div>
      {!!noutes.length &&
        noutes.map((item) => {
          return <SingleNote key={item.id} data={item} />;
        })}
    </div>
  );
};
