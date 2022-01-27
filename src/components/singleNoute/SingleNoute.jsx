import React,{useEffect, useState} from "react";
import { formatDateTime } from "../../helpers/FormatDataTime";
import { Htag } from "../UI/Htag/Htag";
import { Button } from "../UI/buttons/Button";
import {activ} from '../../redux/selectors';
import {removeNoute, editNoute,activeOn } from '../../redux/acshions';
import { useDispatch } from "react-redux";

import "./SingleNote.scss";
import { useSelector } from "react-redux";

export const SingleNote = ({ data }) => {
  const {id, generalText, text } = data;
  const [textId, setTextId] = useState('');
  const [generalTextId, setGeneralTextId] = useState('');
  const dispath = useDispatch();
  const active = useSelector(activ);
  const currTime = new Date();
  const dataNow = formatDateTime(currTime);

 const  handleDelete = (id) => {
  dispath(removeNoute(id));
 }
 const handleEdit = (id) => {
  dispath(editNoute(id, textId, generalTextId));
  dispath(activeOn())
 }
const activeText = (text) => {
  console.log(text)
  let arr = text.split(" ");
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === "#") {
      array.push( '&lt;span&gt;'+ arr[i] +'&lt;/span&gt;' );
    } else {
      array.push(arr[i]);
    }
  }
  console.log(array)
  return array.join();
}



  useEffect(() => {
    setTextId(text)
    setGeneralTextId(generalText)
  },[data])
  return (
    <div className="note">
      <div>
        <Htag tag="h6">
          {dataNow} {generalText}
        </Htag>
      </div>
      <p>{ activ ? activeText(text) : text}</p>
      <Button
       type={"button"} 
       appearance="primary"
       onClick = {() => handleEdit(id, text, generalText)} 
       >
        Изменить
      </Button>
      <Button
       type={"button"}
       appearance="ghost"
       onClick = {() => handleDelete(id)}  
        >
        Удалить
      </Button>
    </div>
  );
};
