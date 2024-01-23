import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import DialogBox from './DialogBox';

function CardComponent({ arr ,d}) {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleOpenDialog = (item) => {
        setSelectedItem(item);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <div style={{
            // border: "2px solid red",
            color: "white",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
        }}>
            {arr.map((item, index) => (
                <div key={index}>
                    <div>
                        <Card
                            onClick={() => handleOpenDialog(item)}
                            sx={{
                                maxWidth: 345,
                                margin: 5,
                                borderRadius: "10px",
                                backgroundColor: d?"#1e1e1e":'white',
                                boxShadow: "0px 5px 7px 2.5px #565656",
                                color: d?"white":'black',
                            }}>
                            <CardActionArea style={{
                                borderRadius: "10px",
                                backgroundColor: d?"#1e1e1e":'white',
                                display: "flex",
                                justifyContent: "center",
                                width: "400px",
                                height: "200px",
                            }}>
                                <CardMedia style={{
                                    borderRadius: "50%",
                                    width: "150px",
                                    height: "160px",
                                }}
                                    component="img"
                                    height="140"
                                    src={item.g === 'M' ? "images/male.jpeg" : "images/female.jpeg"}
                                    alt="green iguana"
                                />
                                <CardContent style={{
                                    backgroundColor: d?"#1e1e1e":'white',
                                    width: "150px",
                                    height: "150px",
                                    marginRight: "20px",
                                    color: d?"white":'black',
                                }}>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {item.n}
                                    </Typography>
                                    <Typography variant="body2">
                                        {item.d}
                                    </Typography>
                                    <Typography variant="body2">
                                        {item.i}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            ))}
            <DialogBox d={d} selectedItem={selectedItem} open={openDialog} handleClose={handleCloseDialog} />
        </div>
    );
}

export default CardComponent;
