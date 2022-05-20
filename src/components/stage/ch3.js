
import { Button, Fade, Grid, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FailedScreen from "../failedScreen";
import GotItemScreen from "../gotItemScreen";
import LoadingScreen from "./loadingScreen";

export default function Ch3(props) {

    const [scene, setScene] = useState(-1);
    const [modalOpen, setModalOpen] = useState(false);
    const public_path = process.env.PUBLIC_URL
    const [gotItem, setGotItem] = useState(false);
    const [inventoryData, setInventoryData] = useState({})

    const sceneImage = [
        `${public_path}/assets/Element/Chapter_Manga/Chapter3/ch3_0.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter3/ch3_1.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter3/ch3_2.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter3/ch3_3.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter3/ch3_4.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter3/ch3_5.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter3/ch3_6.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter3/ch3_7_q.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter3/ch3_good_answer.png`,
        
    ]

    useEffect(() => {

        sceneImage.forEach((image) => {
            new Image().src = image;
        })
        setInventoryData(JSON.parse(localStorage.getItem("inventory")))


    }, [])

    const nextScene = () => {
        setScene(scene + 1);
    }

    const onChapterFailed = () => {
        setScene(-2);
    }

    const onClickLastStep = () => {
        if (gotItem) {
            onShowGotItem()
        } else {
            props.onNext();
        }

    }
    const onShowGotItem = () => {

        localStorage.setItem("inventory", JSON.stringify(inventoryData))
        setScene(-3)
    }

    const onOpenQuestion = () => {
        setModalOpen(true);
    }

    const onBestAnswer = () => {
        const temp = { ...inventoryData }
        temp.chapter3 = true
        setInventoryData(temp)
        setGotItem(true);
        nextScene()
    }

    const onWrongAnswer = () => {
        onChapterFailed()
    }

    const onNormalAnswer = () => {
        nextScene()
    }

    function sceneControl() {
        switch (scene) {
            case -3:
                return <GotItemScreen onNext={props.onNext} item={3} />
            case -2:
                return <FailedScreen onNext={props.onNext} />
            case -1:

                return <LoadingScreen nextScene={nextScene} chapter={3} />
            case 0:
                return (

                    <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                        <img src={sceneImage[0]} width="100%" onClick={() => nextScene()} />
                    </Fade>
                )
            case 1:
                return (
                    <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                        <img src={sceneImage[1]} width="100%" onClick={() => nextScene()} />
                    </Fade>
                )
            case 2:
                return (
                    <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                        <img src={sceneImage[2]} width="100%" onClick={() => nextScene()} />
                    </Fade>
                )
            case 3:
                return (
                    <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                        <img src={sceneImage[3]} width="100%" onClick={() => nextScene()} />
                    </Fade>
                )
            case 4:
                return (
                    <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                        <img src={sceneImage[4]} width="100%" onClick={() => nextScene()} />
                    </Fade>
                )
            case 5:
                return (
                    <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                        <img src={sceneImage[5]} width="100%" onClick={() => nextScene()} />
                    </Fade>
                )
            case 6:
                return (
                    <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                        <img src={sceneImage[6]} width="100%" onClick={() => nextScene()} />
                    </Fade>
                )
            case 7:
                return (
                    <>
                        <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                            <img src={sceneImage[7]} width="100%" onClick={onOpenQuestion} />
                        </Fade>
                        <Modal
                            open={modalOpen}
                        >
                            <Grid
                                container
                                direction={"column"}
                                alignItems="center"
                                justifyContent={"center"}
                                sx={{

                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
                                <Grid item style={{ margin: "10px" }}>
                                    <Typography fontFamily={"JSNoklae"} fontSize={"60px"} color="#AD1A68">
                                        คุณจะทำอย่างไรกับสถานการณ์นี้
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Grid
                                        container
                                        alignItems={"center"}
                                        justifyContent="center"
                                        sx={{
                                            ":hover": {
                                                cursor: "pointer"
                                            },
                                            margin: "10px",
                                            height: "160px",
                                            width: "600px",
                                            // padding: "50px",
                                            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Element/Loading_page/Loading_Element-2.png)`,
                                            backgroundSize: "cover",

                                        }}
                                        onClick={onBestAnswer}
                                    >

                                        <Typography fontFamily={"JSNoklae"} fontSize={"32px"} >

                                            พูดหยุดห้ามการกระทำของเขาและเข้าไปพูดคุย
                                        </Typography>

                                    </Grid>
                                </Grid>
                                <Grid item >
                                    <Grid
                                        container
                                        alignItems={"center"}
                                        justifyContent="center"
                                        sx={{
                                            ":hover": {
                                                cursor: "pointer"
                                            },
                                            margin: "10px",
                                            height: "160px",
                                            width: "600px",
                                            // padding: "50px",
                                            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Element/Loading_page/Loading_Element-2.png)`,
                                            backgroundSize: "cover",

                                        }}
                                        onClick={onNormalAnswer}
                                    >
                                        <Typography fontFamily={"JSNoklae"} fontSize={"32px"} >

                                            เข้าไปประชิดตัวแล้วผลักตัวเขาให้ออกห่างจากแก้ว
                                        </Typography>

                                    </Grid>
                                </Grid>
                                <Grid item >
                                    <Grid
                                        container
                                        alignItems={"center"}
                                        justifyContent="center"
                                        sx={{
                                            ":hover": {
                                                cursor: "pointer"
                                            },
                                            margin: "10px",
                                            height: "160px",
                                            width: "600px",

                                            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Element/Loading_page/Loading_Element-2.png)`,
                                            backgroundSize: "cover",

                                        }}
                                        onClick={onWrongAnswer}

                                    >
                                        <Typography fontFamily={"JSNoklae"} fontSize={"32px"} >

                                            เข้าไปหยิบแก้วในมือเขาออกไป
                                        </Typography>

                                    </Grid>
                                </Grid>
                            </Grid>


                        </Modal>
                    </>
                )
            case 8:
                return (
                    <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                        <img src={sceneImage[8]} width="100%" onClick={onClickLastStep} />
                    </Fade>
                )

            default:
                break;

        }
    }

    return sceneControl()
}