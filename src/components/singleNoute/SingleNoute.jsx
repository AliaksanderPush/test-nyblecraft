import React, { useEffect, useState } from "react";
import { formatDateTime } from "../../helpers/FormatDataTime";
import { Htag } from "../UI/Htag/Htag";
import { Button } from "../UI/buttons/Button";
import { removeNoute, editNoute, activeOn } from "../../redux/acshions";
import { useDispatch } from "react-redux";
import "./SingleNote.scss";

export const SingleNote = ({ data }) => {
  const { id, generalText, text } = data;
  const [textId, setTextId] = useState("");
  const [generalTextId, setGeneralTextId] = useState("");
  const dispath = useDispatch();
  const currTime = new Date();
  const dataNow = formatDateTime(currTime);

  const handleDelete = (id) => {
    dispath(removeNoute(id));
  };
  const handleEdit = (id) => {
    dispath(editNoute(id, textId, generalTextId));
    dispath(activeOn());
  };

  useEffect(() => {
    setTextId(text);
    setGeneralTextId(generalText);
  }, [text, generalText]);
  return (
    <div className="note">
      <div>
        <Htag tag="h6">
          {dataNow} {generalText}
        </Htag>
      </div>
      <p>{text}</p>
      <Button
        type={"button"}
        appearance="primary"
        onClick={() => handleEdit(id, text, generalText)}
      >
        Изменить
      </Button>
      <Button
        type={"button"}
        appearance="ghost"
        onClick={() => handleDelete(id)}
      >
        Удалить
      </Button>
    </div>
  );
};
