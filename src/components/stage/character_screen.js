import { Box, Button, Fade, Grid, IconButton, Modal, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import characterList from "../../data/character";
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';



export default function CharaterScreen(props) {

    const [currCharIndex, setCurrCharIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [showStartButton, setShowStartButton] = useState(false);
    const public_path = process.env.PUBLIC_URL
    const imagesList = [
        `${public_path}/assets/Element/Character_page/Character_1_Iris-18.png`,
        `${public_path}/assets/Element/Character_page/Character_2_Thee.png`,
        `${public_path}/assets/Element/Character_page/Character_3_Ongsa.png`,
        `${public_path}/assets/Element/Character_page/Character_4_Thanwa.png`
    ]
    const [loading, setLoading] = useState(false);

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
        setLoading(true)
        window.addEventListener('scroll', handleScroll, { passive: true });
        imagesList.forEach((image) => {
            new Image().src = image;
        })
        setLoading(false);
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
                        container

                        sx={{
                            width: "300px",
                            height: "600px",
                            margin: "1px",
                            backgroundColor: "#000000",
                            cursor: "pointer",
                            backgroundImage: `url(${process.env.PUBLIC_URL}${value.image_path_name})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"


                        }}
                        onClick={() => {
                            console.log(index)
                            setCurrCharIndex(index);
                            setModalOpen(true)
                        }}
                    >

                        {/* <Grid container direction={"column"} >
                            <img

                                width={"100%"}
                                src={process.env.PUBLIC_URL + value.image_path_name}


                            />

                        </Grid> */}
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

    function onClickCh0() {
        props.onNext();
    }

    return (<>
        {
            loading ?
                <Grid>loading</Grid>
                :
                <Grid container
                    direction={"column"}
                    alignItems="center"
                    // justifyContent={"center"}
                    sx={{
                        width: "100vw",
                        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Element/Character_page/element/BG_AllCharacter_Page.png)`,
                        backgroundSize: "cover",
                        // backgroundColor:"yellow"

                    }}
                >
                    <Grid item sx={{ padding: "0px", marginBottom: "50px" }}>
                        <Grid container alignItems={"center"} justifyContent="center">
                            <img

                                width={"40%"}
                                src={process.env.PUBLIC_URL + '/assets/Element/Character_page/element/AllCharacter_Element-39.png'}


                            />

                        </Grid>
                    </Grid>
                    <Grid item sx={{ marginBottom: "50px", }}>
                        <Grid container direction={"row"} >
                            {characterDisplay()}
                        </Grid>

                    </Grid>
                    <Fade in={showStartButton} timeout={{ enter: 1000, exit: 1000 }}>
                        <Grid item position={"absolute"} top={"115vh"} right={"5vw"} sx={{ ":hover": { cursor: "pointer" } }} onClick={onClickCh0}>
                            <img

                                width={"130px"}
                                src={process.env.PUBLIC_URL + '/assets/Element/Character_page/element/AllCharacter_Element_ch-14.png'}


                            />
                        </Grid>
                    </Fade>




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
        }
    </>


    )
}