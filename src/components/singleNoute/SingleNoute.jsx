import React, { useEffect, useState } from "react";
import { formatDateTime } from "../../helpers/FormatDataTime";
import { Htag } from "../UI/Htag/Htag";
import { P } from "..";
import { Button } from "../UI/buttons/Button";
import { removeNoute, editNoute, activeOn } from "../../redux/acshions";
import { useDispatch } from "react-redux";
import $ from "jquery";
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
  function handleEdit(id) {
    dispath(editNoute(id, textId, generalTextId));
    dispath(activeOn());
    if (text.length) {
      //const res = document.querySelector(".togle");
      //const newRes = res.innerHTML;
      const el = text.match(/(#.+ ?)/g).join();
      $(".togle").html(function (index, text) {
        return text.replace(el, `<span>${el}</span>`);
      });
    }
  }

  useEffect(() => {
    setTextId(text);
    setGeneralTextId(generalText);
  }, [text, generalText]);
  return (
    <div className="noute">
      <Htag tag="h6">
        {dataNow} {generalText}
      </Htag>
      <P>{text}</P>
      <Button
        type={"button"}
        appearance="primary"
        onClick={(e) => handleEdit(id, text, generalText)}
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
