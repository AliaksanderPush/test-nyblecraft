import React, { useEffect, useState } from "react";
import { Button } from "../UI/buttons/Button";
import { useDispatch } from "react-redux";
import { nouteCreate, editNouteSave, createTag } from "../../redux/acshions";
import { editNoute } from "../../redux/selectors";
import { noutesLoad } from "../../redux/acshions";
import uniqid from "uniqid";
import { P } from "../";
import { useSelector } from "react-redux";
import "./Form.scss";

export const Form = () => {
  const dispatch = useDispatch();
  const editText = useSelector(editNoute);

  const [generaltext, setGeneralText] = useState("");
  const [textComment, setTextComment] = useState("");
  const [editId, setEditId] = useState("");

  const [tagText, setTagText] = useState([]);

  const handlerGeneralChange = (e) => {
    setGeneralText(e.target.value);
  };
  const handleTextChange = (e) => {
    setTextComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editId) {
      const id = uniqid();
      dispatch(nouteCreate(id, generaltext, textComment));
      !!tagText &&
        tagText.forEach((item) => {
          dispatch(createTag(id, item));
        });
    } else {
      dispatch(editNouteSave(editId, generaltext, textComment));
      !!tagText &&
        tagText.forEach((item) => {
          dispatch(createTag(editId, item));
        });
    }
    setGeneralText("");
    setTextComment("");
    setEditId("");
  };

  const handleInput = () => {
    if (textComment) {
      let arr = textComment.split(" ");
      let array = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === "#") {
          array.push(arr[i]);
        }
      }
      setTagText(array);
    }
  };

  const handleGetNoutes = () => {
    dispatch(noutesLoad());
  };
  const handleFocus = () => {
    setTagText("");
  };

  useEffect(() => {
    if (Object.keys(editText).length) {
      const { text, generalText, id } = editText;
      setTextComment(text);
      setGeneralText(generalText);
      setEditId(id);
    }
  }, [editText]);

  return (
    <div id="form" onSubmit={handleSubmit}>
      <form action="#form" method="POST">
        <p>
          <input
            type="text"
            value={generaltext}
            onChange={handlerGeneralChange}
            className="form-control mt-3"
            placeholder="Заголовок"
          />
        </p>
        <p>
          <textarea
            className="form-control"
            placeholder="Ваша заметка"
            value={textComment}
            onChange={handleTextChange}
            onInput={handleInput}
            onFocus={handleFocus}
          ></textarea>
        </p>
        {!!tagText.length
          ? tagText.map((tag, index) => {
              return (
                <P size="m" key={index}>
                  {tag}
                </P>
              );
            })
          : null}
        <p>
          <Button type={"submit"} appearance="primary">
            Сохранить{" "}
          </Button>
          <Button
            type={"button"}
            appearance="primary"
            onClick={handleGetNoutes}
          >
            Получить все заметки
          </Button>
        </p>
      </form>
    </div>
  );
};
