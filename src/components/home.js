import { Box, Button, Grid, Modal, Typography } from "@mui/material";
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
        localStorage.setItem("currentState", "main")
        localStorage.setItem("inventory", {})
    }

    return (

        <Grid
            container
            direction={"column"}
            alignItems="center"
            justifyContent={"center"}
            sx={{
                height: "100vh",
                backgroundColor: "#253B3A"
            }}
        >
            <Grid item sm={3} />
            <Grid item sm={3}>
                <Typography color={"white"} fontSize="70px">
                    help Bystander
                </Typography>
                {/* <Button sx={{ color: "#D3D2D3", backgroundColor: "#71ACAE" }}>
                    start
                </Button> */}

            </Grid>
            <Grid item sm={3}>
                <Link to={"/main"}>
                    <div className="frame" onClick={onClickStart}>
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
                    </div>
                </Link>
                {/* <Box sx={{...hexOuter, transform: "rotate(90deg)"}} /> */}
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
        </Grid>
    );
}