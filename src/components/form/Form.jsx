import React, { useEffect, useState } from "react";
import { Button } from "../UI/buttons/Button";
import { useDispatch } from "react-redux";
import { nouteCreate, editNouteSave } from "../../redux/acshions";
import uniqid from "uniqid";
import {P} from '../';
import { useSelector } from "react-redux";
import "./Form.scss";


export const Form = () => {
  const dispatch = useDispatch();
  const editText = useSelector((state) => {
    return  state.EditReducer.editNoutes;
   });
  const [generaltext, setGeneralText] = useState("");
  const [textComment, setTextComment] = useState("");
  const [editId, setEditId] = useState("");
  const [blur, setBlur] = useState(false);

  const [tagText, setTagText] = useState('');
  
  console.log('tag>>',tagText);
  
  const handlerGeneralChange = (e) => {
    setGeneralText(e.target.value);
  };
  const handleTextChange = (e) => {
     setTextComment(e.target.value);
        
    let val = textComment.split(/(#[a-z\d-]+)/ig);
    for (let i = 0; i < val.length; i++) {
        if (val[i].charAt(0) === "#") {
            let arr = [];
            arr.push(val[i]);
            setTagText(...tagText,arr);
      }
    }
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editId) {
     const  id = uniqid();
      dispatch(nouteCreate(id, generaltext, textComment));
  } else {
      dispatch(editNouteSave(editId, generaltext, textComment));
  }
    setGeneralText("");
    setTextComment("");
    setEditId("");
  };
  
  const handleBlur = () => {
    console.log(tagText)
  }

  useEffect(() => {
    if (Object.keys(editText).length) {
      const {text,generalText,id } = editText; 
        setTextComment(text);
        setGeneralText(generalText);
        setEditId(id);
    }
  },[editText])
  
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
            onBlur={handleBlur}
          ></textarea>
        </p>
        { blur && !!tagText.length 
        ? tagText.map((tag, index) => {
          return <P size="m" key={index}>{tag}</P>
        })
        : null
        }
         
        <p>
          <Button type={"submit"} appearance="primary">Сохранить </Button>
        </p>
      </form>
    </div>
  );
};
