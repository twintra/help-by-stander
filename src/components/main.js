import { Box, Button, Grid, IconButton, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import charactorList from "../data/character";
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { width } from "@mui/system";


export default function Main() {

    const currentState = localStorage.getItem("currentState")
    const [currCharIndex, setCurrCharIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    if (currentState === null) {
        window.location.replace("/")
    }

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        console.log(position)
        var limit = document.body.offsetHeight - window.innerHeight;
        if (limit === position) {
            console.log("i will show button")
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
            charactorList.map((value, index) => {

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

    function characterCard() {
        const value = charactorList[currCharIndex];
        return (
            <Grid

                item
                xs
                sx={{
                    width: "300px",
                    height: "500px",
                    margin: "1px",

                    cursor: "pointer"
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
    }

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#000000',
        border: '2px solid #000',
        boxShadow: 24,
    };

    const onNextCharacter = () => {
        if (currCharIndex < charactorList.length) {
            setCurrCharIndex(currCharIndex + 1);
        }
    }

    const onPreviousCharacter = () => {
        if (currCharIndex > 0) {

            setCurrCharIndex(currCharIndex - 1);
        }
    }

    return (
        <Grid container
            direction={"column"}
            alignItems="center"
            // justifyContent={"center"}
            sx={{
                minHeight: "100vh",
                backgroundColor: "#253B3A",
                width: "100vw"
            }}
        >
            <Grid item sx={{ padding: "50px", paddingBottom:"150px" }}>
                <Typography color={"#FFFFFF"} fontSize="100px">
                    CHARACTER
                </Typography>
            </Grid>
            <Grid item sx={{ marginBottom: "50px" }}>
                <Grid container direction={"row"} >
                    {characterDisplay()}
                </Grid>
            </Grid>
            {/* <Grid item sx={{position:"relative" , bottom:"50px",right:"0px", }}> */}
                <Button variant="contained" sx={{position:"relative" , bottom:"70px",left:"40vw", zIndex:"100" }}>
                    CH 0
                </Button>

            {/* </Grid> */}


            <Modal
                open={modalOpen}
            >
                <Box sx={{ ...modalStyle, width: 200 }}>
                    <Grid container direction={"row"} alignItems="end" justifyContent={"end"}>
                        <IconButton
                            sx={{ padding: "0px", color: "#FFFFFF" }}
                            onClick={() => {
                                setModalOpen(false);
                            }}
                        >
                            <CloseIcon />
                        </IconButton>

                    </Grid>

                    <Grid item xs>
                        {characterCard()}
                    </Grid>

                    <Grid container direction={"row"} >
                        <Grid xs item>
                            <Grid container justifyContent={"start"}>

                                <IconButton
                                    sx={{ padding: "0px", color: "#FFFFFF" }}
                                    onClick={onPreviousCharacter}
                                >
                                    <ChevronLeftIcon />

                                </IconButton>
                            </Grid>


                        </Grid>
                        <Grid xs item >
                            <Grid container justifyContent={"end"}>
                                <IconButton
                                    sx={{ padding: "0px", color: "#FFFFFF" }}
                                    onClick={onNextCharacter}
                                >
                                    <ChevronRightIcon />
                                </IconButton>

                            </Grid>

                        </Grid>
                    </Grid>


                </Box>

            </Modal>
        </Grid>
    );
}