import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function DialogBox({ d,selectedItem, open, handleClose }) {
    return (
        <Dialog open={open} onClose={handleClose} sx={{ width: "465px", height: "650px", margin: "auto", borderRadius:"40px", boxShadow: "0px 5px 7px 2.5px #565656"}}>
            <DialogTitle style={{
                width:"350px",
                backgroundColor: d?'#1e1e1e':'white',
                color: d?'white':'black',
                display: "flex",
                justifyContent: "center",
            }}>
                {selectedItem && (
                    <img style={{ borderRadius: "50%", width:"200px", height:"200px" }} src={selectedItem.g === 'M' ? "images/male.jpeg" : "images/female.jpeg"} alt="" />
                )}
            </DialogTitle>
            <DialogContent style={{ backgroundColor: d?'#1e1e1e':'white', color: d?'white':'black',width:"350px", height: '400px', display: 'flex', justifyContent: "center" }}>
                {selectedItem && (
                    <div>
                        <div>
                            <Typography gutterBottom variant="h6" component="div">
                                {selectedItem.n}
                            </Typography>
                        </div>
                        <div>{selectedItem.i}</div>
                        <div>{selectedItem.d}</div>
                        {/* Add additional properties as needed */}
                        <div>
                            <div style={{
                                display:"flex",
                                justifyContent:"flex-start",
                                marginTop:"20px"
                            }}>
                             Hall - {selectedItem.r} {selectedItem.h}
                            </div>
                            <div style={{
                                display:"flex",
                                justifyContent:"flex-start",
                                marginTop:"20px"
                            }}>
                                Home - {selectedItem.a}
                            </div>
                            <div style={{
                                display:"flex",
                                justifyContent:"flex-start",
                                marginTop:"20px"
                            }}>
                                Blood Group - {selectedItem.b}
                            </div>
                            <div style={{
                                display:"flex",
                                justifyContent:"flex-start",
                                marginTop:"20px"
                            }}>
                                
                                Mail - <a href={`mailto:${selectedItem.u}@iitk.ac.in`}>{selectedItem.u}@iitk.ac.in</a>
                            </div>
                        </div>
                    </div>
                    
                )}
            </DialogContent>
            <DialogActions style={{ backgroundColor: d?"#1e1e1e":'white',width:"382px" }}>
                <Button onClick={handleClose} style={{ color: d?"white":"black", backgroundColor : d?"#1e1e1e":'white'}}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DialogBox;
