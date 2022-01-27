import React from "react";
import { P } from "..";
import { Button } from "..";
import { removeTag, searchTag } from "../../redux/acshions";
import { useDispatch } from "react-redux";

export const SingleTag = ({ data }) => {
  const { id, tags } = data;
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTag(id));
  };
  const handleSearch = (id) => {
    dispatch(searchTag(id));
  };

  return (
    <>
     <div className="mt-2 mb-2 tags">
      <P size="m">{tags}</P>
         <Button appearance="primary" onClick={() => handleSearch(id)}>
          Найти
        </Button>
        <Button appearance="ghost" onClick={() => handleRemove(id)}>
          Удалить
        </Button>
      </div>
     
    </>
  );
};
