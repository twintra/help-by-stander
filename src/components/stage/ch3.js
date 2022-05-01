
import { Button, Fade, Grid, Modal, Typography } from "@mui/material";
import { useState } from "react";
import FailedScreen from "../failedScreen";
import GotItemScreen from "../gotItemScreen";
import LoadingScreen from "./loadingScreen";

export default function Ch3(props) {
    
    const [scene, setScene] = useState(-1);
    const [modalOpen, setModalOpen] = useState(false);
    const public_path = process.env.PUBLIC_URL
    const sceneImage = [
        `${public_path}/assets/Element/Chapter_Manga/Chapter2/Chapter2_Page1.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter0/Ch0_Page2.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter0/Ch0_Page3.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter2/Chapter2_Page4.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter0/Ch0_Page5.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter2/Chapter2_Page6.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter2/Chapter2_Page7.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter2/Chapter2_Page8.png`,
    ]
    const nextScene = () => {
        setScene(scene + 1);
    }

    const onChapterFailed = () => {
        setScene(-2);
    }

    const onChapterSuccess = () => {
        props.onNext();
    }
    const onChapterSuccessAndGotItem = () => {
        setScene(-3);
    }

    const onClickLastStep = () => {
        setModalOpen(true);
    }

    function sceneControl() {
        switch (scene) {
            case -3:
                return <GotItemScreen onNext={props.onNext} />
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
                        <img src={sceneImage[6]} width="100%" onClick={onClickLastStep} />
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
                                    <Typography fontSize={"30px"} color="white">
                                        สถานการณ์ตอนนี้ คิดว่าควรทำอย่างไร
                                    </Typography>
                                </Grid>
                                <Grid item style={{ margin: "10px" }} onClick={onChapterSuccessAndGotItem}>
                                    <Button variant="contained">
                                        choice1 (go next chapter and got item)
                                    </Button>
                                </Grid>
                                <Grid item style={{ margin: "10px" }}>
                                    <Button variant="contained" onClick={onChapterFailed}>
                                        choice2 (failed)
                                    </Button>
                                </Grid>
                                <Grid item style={{ margin: "10px" }} onClick={onChapterSuccess}>
                                    <Button variant="contained">
                                        choice3 (go next chapter)
                                    </Button>
                                </Grid>
                            </Grid>


                        </Modal>
                    </>
                )
            
            default:
                break;

        }
    }

    return sceneControl()
}