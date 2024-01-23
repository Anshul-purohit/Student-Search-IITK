import { Card, TextField } from '@mui/material';
import SelectVariants from './SelectVariants';
import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent';
import Button from '@mui/material/Button';
import { Dialog, DialogContent } from '@mui/material';

const batch = ["OTHER","Y9","Y10","Y11","Y12","Y13","Y14","Y15","Y16","Y17","Y18","Y19","Y20","Y21","Y22","Y23"]
const gender = ["Any","Female","Male"]
const hall = ["ACES","CPWD","DAY","GH","HALL1","HALL2","HALL3","HALL4","HALL5","HALL6","HALL7","HALL8","HALL9","HALLX","HALLXI","HALL12","HALL13","HALL14","NRA","Not Available","RA","SBRA","TYPE1","TYPE1B","TYPE5","UNKN"]
const program = ["BS","BS-MBA","BS-MA","BS-MT","BT-M.Des","BT-MBA","BT-MS","BTech","DIIT","Exchng Prog.","MBA","MDes","MS-Research","MSc(2 yr)","MSc(int)","MSc-PhD(Dual)","MT(Dual)","MTech","MTech-PhD","PGPEX-VLM","PhD","Prep.","SURGE","eMasters"]
const dept = ["Areospace Engineering","Biological Science and Bioengineering","Chemical Engineering","Chemistry","Civil Engineering","Cognitive Science","Computer Science and Engineering","Dean Of Academic Affairs","Dean Of Research & Development","Dean Of Resource & Alumni","Design","Earth Science","Economics","Electrical Engineering","Environmental Engineering and Management","Humanities and Social Sciences","Industrial and Management Engineering","Laser Technology","Materials Science Programme","Materials Science and Engineering","Mathematics","Mathematics and Scientific Computing","Mathematics and Statistics","Mechanical Engineering","Nuclear Engineering and Technology Programme","Photonics Science and Engineering","Physics","Space Science and Astronomy","Statistics","Statistics and Data Science","Sustainable Energy Engineering"]
const bloodGroup = ["A+","A-","AB+","AB-","B+","B-","Not","Not Available","O+","O-"]
const wing = ["A","B","C","D"]


const response = await fetch('response.json'); 
const data = await response.json();
console.log(data);


function App() {
  // console.log(props)
  const[arr,setArr] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  document.body.style.backgroundColor = darkMode ? 'black' : 'rgb(239, 239, 239)';

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div style={{
      display:"flex",
      justifyContent:"center"
    }}>
      <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        // marginRight:"100px  "
      }}
    >
      <Card
        style={{
          padding: 20,
          width: '60vw',
          backgroundColor: darkMode?'#1e1e1e':"white",
          margin: '10px auto', // Center horizontally
          boxShadow:"0px 5px 7px 2.5px #565656"
        }}
      >
        <br />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}
        >
          <SelectVariants d={darkMode} inputfield="Batch" dropdown={batch}/>
          <SelectVariants d={darkMode} inputfield="Gender" dropdown={gender}/>
          <SelectVariants d={darkMode} inputfield="Hall" dropdown={hall}/>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}
        >
          <SelectVariants d={darkMode} inputfield="Programme" dropdown={program}/>
          <SelectVariants d={darkMode} inputfield="Department" dropdown={dept}/>
          <SelectVariants d={darkMode} inputfield="Blood group" dropdown={bloodGroup}/>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <SelectVariants d={darkMode} inputfield="Wing" dropdown={wing}/>

          <TextField
            onChange={(e) => {
              console.log(e.target.value)
              let x = e.target.value
              let newArr = []
              for(let index=0;index<data.documents.length;index++){
                let y = data.documents[index].a;

                let lenx = x.length
                if(lenx<=y.length){
                  let suby = y.substring(0,x.length);
                  suby = suby.toLowerCase();
                  x = x.toLowerCase();
                  if(suby == x){
                    newArr.push(data.documents[index])
                  }
                }
              }
              setArr(newArr)
              if(x=='')
              setArr([])
          }}
            id="outlined-basic"
            style={{
              backgroundColor: darkMode?'#1e1e1e':'white',
              width: '260px',
              // height: '2px',
              margin: '10px',
              boxShadow: 'inset 0 0 2px #c2c2c2',
              borderRadius: "5px"
            }}
            label="Hometown"
            variant="outlined"
            InputLabelProps={{
              style: {  backgroundColor: darkMode?'#1e1e1e':'white', color: darkMode?'white':'grey', },
            }}
            inputProps={{
              style: {height: '40px', color: darkMode?'white':'black' },
            }}
            autoComplete="off"
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <TextField
            onChange={(e) => {
              console.log(e.target.value)
              let x = e.target.value
              let newArr = []
              for(let index=0;index<data.documents.length;index++){
                let y = data.documents[index].n;

                let lenx = x.length
                if(lenx<=y.length){
                  let suby = y.substring(0,x.length);
                  suby = suby.toLowerCase();
                  x = x.toLowerCase();
                  if(suby == x){
                    newArr.push(data.documents[index])
                  }
                }
              }
              setArr(newArr)
              if(x=='')
                setArr([])
          }}
            id="outlined-basic"
            style={{
              backgroundColor: darkMode?'#1e1e1e':'white',
              width: '90%',
              margin: '10px',
              boxShadow: 'inset 0 0 2px #c2c2c2',
              borderRadius: "5px"
            }}
            label="Enter name, username or roll no."
            variant="outlined"
            InputLabelProps={{
              style: { backgroundColor: darkMode?'#1e1e1e':'white', color: darkMode?'white':'grey' },
            }}
            inputProps={{
              style: { color: darkMode?'white':'black' },
            }}
            
            autoComplete="off"
          />
        </div>
      </Card>
          <br />
          <div style={{
            margin: "0 auto",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '40px',
            backgroundColor: darkMode?'#1e1e1e':'white',
            width: '130px',
            color: darkMode?'white':'black',
            borderRadius:"4px"
          }}>
            {arr.length} results found
          </div>
    
          {arr.length > 0 && <CardComponent arr={arr} d = {darkMode} />}
    
    </div>
    <div style={{
      position:"absolute",
      display:"flex",
      justifyContent:"center",
      flexDirection:"column",
      // border:"2px solid red",
      marginLeft:"85%"
    }}>
      <div>
        <Button variant="contained" style={{
          borderRadius:"50%",
          height:"70px",
          width:"70px",
          marginBottom:"30px",
          backgroundColor:'#e0e0e0',
        }}onClick={handleToggleDarkMode}>
            {darkMode ? <img src="images/sun.svg"></img> : <img src="images/moon.svg"></img>}
        </Button>
      </div>
      <div>
        <Button variant="contained" style={{
          borderRadius:"50%",
          height:"70px",
          width:"70px",
          backgroundColor:"#e0e0e0"
        }}onClick={handleOpenDialog}>
          <img src="images/question.svg" alt="" />
        </Button>
      </div>
    </div>
    <Dialog style={{
      margin:"auto",
      width:"100%",
      // boxShadow: "0px 5px 7px 2.5px #565656",
      // height:"600px",
      // border:"2px solid red",
    }} open={openDialog} onClose={handleCloseDialog} maxWidth="x1">
        <DialogContent style={{
          padding:"50px",
          width:"94%",
          backgroundColor:darkMode?"#1e1e1e":'white',
          color:darkMode?"white":'black',
          overflow: "hidden",
          boxShadow: 'inset 2px 0 10px #565656',
          // boxShadow: "0px 5px 7px 2.5px ",
          // border:"2px solid blue"
        }}>


          <h1>Setting a custom DP</h1>
          <h3>You can customise the image shown here by placing a custom image in your iitk webhome folder called dp.jpg/dp.png such that going to http://home.iitk.ac.in/~yourusername/dp opens up that particular picture. </h3>

        <h1>How do I update the data shown here?</h1>
        <h3>The data here is scraped from the Office Automation Portal. The data there can be updated via the Login Based Services - Student Profile - PI form . If you have had a branch change, please go to the ID Cell and update your ID Card to update your branch.</h3>

        <h3>The changes if any will be reflected in about a week.</h3>

        <h1>I can't see students' pictures/I can't access student data.</h1>
        <h3>Access to student data is restricted to those currently on campus or connecting via VPN. Please visit the website once via either method so that the data can be stored locally. After this, you will be able to access student data from anywhere (as long as you don't wipe your cache or local files.)</h3>
        </DialogContent>
      </Dialog>
    </div>
  );
}


export default App;