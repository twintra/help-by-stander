import { Box, Button, Grid, Modal, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/hexagon.css"

export default function Home() {
    const [modalOpen, setModalOpen] = useState(false);
    const currentState = localStorage.getItem("currentState")
    useEffect(() => {
        if (currentState !== null) {
            // console.log("apple")
            setModalOpen(true);

        }
    }, [currentState])

    const handleClose = () => {
        setModalOpen(false);
    }

    const onContinue = () => {
        window.location.replace("/main")
        setModalOpen(false);
    }

    const onReset = () => {
        localStorage.removeItem("currentState")
        localStorage.removeItem("inventory")
        setModalOpen(false);
    }

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    const hexOuter = {
        background: "#D3D2D3",
        width: "210px",
        height: "120px",
    }
    const hexInner = {

    }

    const onClickStart = () => {
        localStorage.setItem("currentState", "char")
        localStorage.setItem("inventory", {})
    }

    return (

        <Paper


            direction={"column"}

            sx={{
                height: "100vh",
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Element/1st_Page/1st_BG-1.png)`,
                backgroundSize: "cover"
            }}

        >


            <Grid container justifyContent={"center"} alignItems="center" position={"absolute"} top="10vh">

                <img
                    width={"50%"}
                    src={process.env.PUBLIC_URL + '/assets/Element/1st_Page/1stPage_Element-39.png'}


                />
            </Grid>





            <Grid item position={"absolute"} bottom={0}>
                <img
                    width={"100%"}
                    src={process.env.PUBLIC_URL + '/assets/Element/1st_Page/1stPage_Element-40.png'}

                />
            </Grid>
            <Grid
                item
                position={"absolute"}
                sx={{
                    width:"100vw",
                    height:"100vh",
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Element/1st_Page/1stPage_Element-35.png)`,
                    backgroundSize:"cover",
                    backgroundPosition:"center"
                }} >
                {/* <img
                    // width={"100%"}
                    width={"100%"}
                    height={"100%"}
                    src={process.env.PUBLIC_URL + '/assets/Element/1st_Page/1stPage_Element-35.png'}
                /> */}
            </Grid>

            <Grid container justifyContent={"center"} alignItems="center" position={"absolute"} bottom="10vh">
                <Link to={"/main"}>
                    {/* <div className="frame" onClick={onClickStart}>
                        <div className="hex-outer h1"></div>
                        <div className="hex-outer h2"></div>
                        <div className="hex-outer h3"></div>
                        <div className="hex-tranparent h1"></div>
                        <div className="hex-tranparent h2"></div>
                        <div className="hex-tranparent h3"></div>
                        <div className="hex-inner h1"></div>
                        <div className="hex-inner h2"></div>
                        <div className="hex-inner h3"></div>
                        <div className="label">Start</div>
                    </div> */}
                    <Grid container justifyContent={"center"} alignItems="center">

                        <img
                            width={"40%"}
                            src={process.env.PUBLIC_URL + '/assets/Element/1st_Page/1stPage_Element-37.png'}
                            onClick={onClickStart}
                        />
                    </Grid>

                </Link>
            </Grid>



            <Modal
                open={modalOpen}
            >
                <Box sx={{ ...modalStyle, width: 200 }}>
                    <h2 id="child-modal-title">You have a game in progress</h2>
                    <p id="child-modal-description">
                        Do you want to continue the game?
                    </p>
                    <Grid container direction={"row"}>
                        <Grid item>
                            <Button onClick={onReset}>Reset</Button>

                        </Grid>
                        <Grid item>
                            <Button onClick={onContinue}>Continue</Button>

                        </Grid>
                    </Grid>

                </Box>
            </Modal>
        </Paper>
    );
}