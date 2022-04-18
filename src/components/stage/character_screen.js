import { Box, Button, Fade, Grid, IconButton, Modal, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import characterList from "../../data/character";
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import char1 from '../../assets/images/Character_1_Iris-18.png'
import char2 from '../../assets/images/Character_2_Thee.png'
import char3 from '../../assets/images/Character_3_Ongsa.png'
import char4 from '../../assets/images/Character_4_Thanwa.png'


export default function CharaterScreen(props) {

    const [currCharIndex, setCurrCharIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [showStartButton, setShowStartButton] = useState(false);
    const imagesList = [char1, char2, char3, char4]

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        
        var limit = document.body.offsetHeight - window.innerHeight;
        
        if (limit * 0.9 < position) {
            
            setShowStartButton(true);
        } else {

            setShowStartButton(false);
        }

    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function characterDisplay() {
        return (
            characterList.map((value, index) => {

                return (
                    <Grid
                        key={index}
                        item
                        xs
                        sx={{
                            width: "300px",
                            height: "600px",
                            margin: "1px",
                            backgroundColor: "#000000",
                            cursor: "pointer"
                        }}
                        onClick={() => {
                            console.log(index)
                            setCurrCharIndex(index);
                            setModalOpen(true)
                        }}
                    >
                        <Grid container direction={"column"} >
                            <Grid item>
                                <Typography color={"#FFFFFF"}>

                                    {value.name}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography color={"#FFFFFF"}>

                                    {value.bd}
                                </Typography>

                            </Grid>
                            <Grid item>
                                <Typography color={"#FFFFFF"}>

                                    {value.bm}
                                </Typography>

                            </Grid>
                            <Grid item>
                                <Typography color={"#FFFFFF"}>

                                    {value.detail}
                                </Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                )
            })
        );
    }


    const onNextCharacter = () => {
        if (currCharIndex < characterList.length - 1) {
            setCurrCharIndex(currCharIndex + 1);
        }
    }

    const onPreviousCharacter = () => {
        if (currCharIndex > 0) {

            setCurrCharIndex(currCharIndex - 1);
        }
    }

    function displayCharacterCard(index) {
        return (

            <Fade in={currCharIndex === index} timeout={{ enter: 1000, exit: 1000 }} >
                <img src={imagesList[index]} width="100%" />
            </Fade>
        )
    }

    function displayByIndex() {
        switch (currCharIndex) {
            case 0:
                return displayCharacterCard(0)
            case 1:
                return displayCharacterCard(1)
            case 2:
                return displayCharacterCard(2)
            case 3:
                return displayCharacterCard(3)
            default:
                break;
        }
    }

    return (
        <Grid container
            direction={"column"}
            alignItems="center"
            // justifyContent={"center"}
            sx={{
                backgroundColor: "#253B3A",
            }}
        >
            <Grid item sx={{ padding: "50px", paddingBottom: "150px" }}>
                <Typography color={"#FFFFFF"} fontSize="100px">
                    CHARACTER
                </Typography>
            </Grid>
            <Grid item sx={{ marginBottom: "50px", }}>
                <Grid container direction={"row"} >
                    {characterDisplay()}
                </Grid>

            </Grid>
            <Grid item>
                <Fade in={showStartButton} timeout={{ enter: 1000, exit: 1000 }}>
                    <Button variant="contained" sx={{ position: "", bottom: "100px", right: "-40vw", }} onClick={()=>props.onNext()}>
                        CH 0
                    </Button>

                </Fade>
            </Grid>



            <Modal
                open={modalOpen}
            >

                <Paper sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: "80vw",
                    bgcolor: '#000000',
                    boxShadow: 24,
                }}
                >


                    {displayByIndex()}

                    <IconButton
                        disableRipple
                        sx={{ padding: "0px", color: "#FFFFFF", top: 0, right: 0, position: "absolute" }}
                        onClick={() => {
                            setModalOpen(false);
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    <IconButton
                        disableRipple
                        sx={{ padding: "0px", color: "#FFFFFF", bottom: 0, left: 0, position: "absolute" }}
                        onClick={onPreviousCharacter}
                    >
                        <ChevronLeftIcon sx={{ width: "70px", height: "70px" }} />

                    </IconButton>

                    <IconButton
                        disableRipple
                        sx={{ padding: "0px", color: "#FFFFFF", bottom: 0, right: 0, position: "absolute" }}
                        onClick={onNextCharacter}
                    >
                        <ChevronRightIcon sx={{ width: "70px", height: "70px" }} />
                    </IconButton>

                </Paper>

            </Modal>
        </Grid>
    )
}