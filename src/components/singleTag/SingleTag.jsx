import React from "react";
import { P } from "..";
import { Button } from "..";
import { removeTag, searchTag } from "../../redux/acshions";
import { useDispatch } from "react-redux";

export const SingleTag = ({ data }) => {
  const { id, tag } = data;
  const dispatch = useDispatch();

  const handleSearch = (id) => {
    dispatch(searchTag(id));
  };

  const handleRemove = (id) => {
    dispatch(removeTag(id));
  };

  return (
    <>
      <div className="mt-2 mb-2 tags">
        <P size="m">{tag}</P>
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
