import React, { useState } from "react";
import { Button } from "../UI/buttons/Button";
import { useDispatch } from "react-redux";
import { nouteCreate } from "../../redux/acshions";
import uniqid from "uniqid";
import "./Form.scss";

export const Form = () => {
  const dispatch = useDispatch();
  const [generaltext, setGeneralText] = useState("");
  const [textComment, setTextComment] = useState("");

  const handlerGeneralChange = (e) => {
    setGeneralText(e.target.value);
  };
  const handleTextChange = (e) => {
    setTextComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(nouteCreate(id, generaltext, textComment));
    setGeneralText("");
    setTextComment("");
  };
  return (
    <div id="form" onSubmit={handleSubmit}>
      <form action="#form" method="POST">
        <p>
          <input
            type="text"
            value={generaltext}
            onChange={handlerGeneralChange}
            className="form-control"
            placeholder="Заголовок"
          />
        </p>
        <p>
          <textarea
            className="form-control"
            placeholder="Ваша заметка"
            value={textComment}
            onChange={handleTextChange}
          ></textarea>
        </p>
        <p>
          <Button type={"submit"} appearance="primary">
            Сохранить
          </Button>
        </p>
      </form>
    </div>
  );
};
