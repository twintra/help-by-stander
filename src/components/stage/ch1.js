import { Button, Fade, Grid, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FailedScreen from "../failedScreen";
import GotItemScreen from "../gotItemScreen";
import LoadingScreen from "./loadingScreen";
import ScenePage from "./scene_page";

export default function Ch1(props) {

    const [scene, setScene] = useState(-1);
    const [modalOpen, setModalOpen] = useState(false);
    const public_path = process.env.PUBLIC_URL
    const [gotItem, setGotItem] = useState(false);
    const [inventoryData, setInventoryData] = useState({})
    const sceneImage = [
        `${public_path}/assets/Element/Chapter_Manga/Chapter1/ch1_0.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter1/ch1_1.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter1/ch1_2.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter1/ch1_3.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter1/ch1_4.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter1/ch1_5_q.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter1/ch1_good_answer.png`,
        
        

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
    const previousScene = () => {
        if (scene > 0) {

            setScene(scene - 1);
        }
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
        temp.chapter1 = true
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
                return <GotItemScreen onNext={props.onNext} item={1} />
            case -2:
                return <FailedScreen onNext={props.onNext} />
            case -1:

                return <LoadingScreen nextScene={nextScene} chapter={1} />
            case 0:
                return (

                    <ScenePage image_path={sceneImage[0]} previousScene={previousScene} nextScene={nextScene} chapter={1} />
                )
            case 1:
                return (
                    <ScenePage image_path={sceneImage[1]} previousScene={previousScene} nextScene={nextScene} chapter={1} />
                )
            case 2:
                return (
                    <ScenePage image_path={sceneImage[2]} previousScene={previousScene} nextScene={nextScene} chapter={1} />
                )
            case 3:
                return (
                    <ScenePage image_path={sceneImage[3]} previousScene={previousScene} nextScene={nextScene} chapter={1} />
                )
            case 4:
                return (
                    <ScenePage image_path={sceneImage[4]} previousScene={previousScene} nextScene={nextScene} chapter={1} />
                )
            case 5:
                return (
                    <>
                        {/* <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                            <img src={sceneImage[5]} width="100%" onClick={onOpenQuestion} />

                        </Fade> */}
                        <ScenePage image_path={sceneImage[5]} previousScene={previousScene} nextScene={onOpenQuestion} chapter={1} />
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
                                                cursor: "pointer", 
                                                transform:"scale(1.2)" 
                                            }, 
                                            transition: "all .2s ease-in-out", 
                                            ":active":{
                                                transform:"scale(0.9)"
                                            },
                                            margin: "10px",
                                            height: "160px",
                                            width: "600px",
                                            // padding: "50px",
                                            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Element/Loading_page/Loading_Element-2.png)`,
                                            backgroundSize: "cover",

                                        }}
                                        onClick={onWrongAnswer}
                                    >
                                        <Typography fontFamily={"JSNoklae"} fontSize={"32px"} >

                                            วิ่งเข้าไปสุดแรงเพื่อผลักออกจากพื้นที่บันได
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
                                                cursor: "pointer", 
                                                transform:"scale(1.2)" 
                                            }, 
                                            transition: "all .2s ease-in-out", 
                                            ":active":{
                                                transform:"scale(0.9)"
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

                                            เข้าไปช่วยพยุง ทำแผล หลังจากล้มลงไปแล้ว
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
                                                cursor: "pointer", 
                                                transform:"scale(1.2)" 
                                            }, 
                                            transition: "all .2s ease-in-out", 
                                            ":active":{
                                                transform:"scale(0.9)"
                                            },
                                            margin: "10px",
                                            height: "160px",
                                            width: "600px",

                                            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Element/Loading_page/Loading_Element-2.png)`,
                                            backgroundSize: "cover",

                                        }}
                                        onClick={onNormalAnswer}
                                    >
                                        <Typography fontFamily={"JSNoklae"} fontSize={"32px"} >

                                            บอกให้ระวังและเข้าไปช่วยดึงตัวขึ้นมาจากการเสียหลัก
                                        </Typography>

                                    </Grid>
                                </Grid>
                            </Grid>


                        </Modal>
                    </>
                )

            case 6:
                return onClickLastStep();
                // (
                //     <>
                //         <img src={sceneImage[6]} width="100%" onClick={onClickLastStep()} />

                //     </>
                // )

            default:
                break;

        }
    }

    return sceneControl()
}
