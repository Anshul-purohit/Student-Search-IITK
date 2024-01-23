import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CardComponent from './CardComponent';

const response1 = await fetch('response.json'); 
const data = await response1.json();

function SelectVariants(props) {
  const [age, setAge] = useState('');
  const [arr, setArr] = useState([]);
  const arr1 = [null,null,null,null,null,null,null]

  const handleChange = (event) => {
    setAge(event.target.value);

    let x = event.target.value;

    let newArr = [];

    if(x === "Y23" ||x === "Y22" ||x === "Y21" ||x === "Y20" ||x === "Y19" ||x === "Y18" ||x === "Y17" ||x === "Y16" ||x === "Y15" ||x === "Y14" ||x === "Y13" ||x === "Y12" || x === "Y11" ||x === "Y10"){
      x = x.slice(1)
      for (let index = 0; index < data.documents.length; index++) {
        let xx = data.documents[index].i.substring(0, 2);
        console.log("x ",x)
        console.log("xx ",xx)
        if (xx === x) {
          newArr.push(data.documents[index]);
        }
      }
    }

    if(x === "Y9"){
      x = x.slice(1)
      for (let index = 0; index < data.documents.length; index++) {
        let xx = data.documents[index].i.substring(0, 1);
        console.log("x ",x)
        console.log("xx ",xx)
        if (xx === x) {
          newArr.push(data.documents[index]);
        }
      }
    }

    if (x === "Female") {
      for (let ii = 0; ii < data.documents.length; ii++) {
        if (data.documents[ii].g === "F") {
          newArr.push(data.documents[ii]);
        }
      }
    }

    if(x === "Male"){
      for (let ii = 0; ii < data.documents.length; ii++) {
        if (data.documents[ii].g === "M") {
          newArr.push(data.documents[ii]);
        }
      }
    }

    for(let index=0;index<data.documents.length;index++){
      if(x === data.documents[index].h){
        newArr.push(data.documents[index]);
      }
    }

    for(let index=0;index<data.documents.length;index++){
      if(x === data.documents[index].p){
        newArr.push(data.documents[index]);
      }
    }

    for(let index=0;index<data.documents.length;index++){
      if(x === data.documents[index].d){
        newArr.push(data.documents[index]);
      }
    }

    for(let index=0;index<data.documents.length;index++){
      if(x === data.documents[index].b){
        newArr.push(data.documents[index]);
      }
    }

    if(x==="A" || x==="B" ||x==="C" ||x==="D"){
      for(let index=0;index<data.documents.length;index++){
        let y = data.documents[index].r;
        y = y.substring(0,1);
        if(x === y){
          newArr.push(data.documents[index]);
        }
      }
    }

    setArr(newArr);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',  // Display children in a column
      backgroundColor: props.d ? "#323232":"rgb(239,239,239)",
      margin: "10px",
      padding: "10px",
      borderRadius: "5px",
    }}>
      <FormControl style={{ color: props.d?"#c2c2c2":"grey", backgroundColor: props.d ? "#323232":"rgb(239,239,239)", width:"100px" }} variant="filled" sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="demo-simple-select-filled-label" style={{ color: props.d?"#c2c2c2":"grey", backgroundColor: props.d ? "#323232":"rgb(239,239,239)" }}>{props.inputfield}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
          style={{ color: props.d?"#c2c2c2":"grey", backgroundColor: props.d ? "#323232":"rgb(239,239,239)", overflow: "hidden" }}
          MenuProps={{ PaperProps: { style: { color: props.d?"#c2c2c2":"black", backgroundColor: props.d ? "#323232":"white"} } }}
        >
          {props.dropdown && props.dropdown.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Render other divs or components here if needed */}

      {/* Conditionally render CardComponent based on 'arr' */}
      {arr.length > 0 && <CardComponent arr={arr} d={props.d}/>}
      {/* {arr.length > 0 && <App arr={arr}/>} */}
    </div>
  );
}

export default SelectVariants;









