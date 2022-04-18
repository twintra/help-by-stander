import { Button, Grid, Modal, Typography } from "@mui/material";
import { useState } from "react";
import char1 from '../../assets/images/Character_1_Iris-18.png'
import char2 from '../../assets/images/Character_2_Thee.png'
import char3 from '../../assets/images/Character_3_Ongsa.png'
import char4 from '../../assets/images/Character_4_Thanwa.png'
import FailedScreen from "../failedScreen";

export default function Ch1(props) {

    const [scene, setScene] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    const nextScene = () => {
        setScene(scene + 1);
    }

    const onChapterFailed = () => {
        setScene(-1);
    }

    const onChapterSuccess = () => {
        props.onNext();
    }

    const onClickLastStep = () => {
        setModalOpen(true);
    }

    function sceneControl() {
        switch (scene) {
            case -1:
                return <FailedScreen onNext = {props.onNext}/>
            case 0:
                return <img src={char1} width="100%" onClick={() => nextScene()} />

            case 1:
                return <img src={char2} width="100%" onClick={() => nextScene()} />
            case 2:
                return <img src={char3} width="100%" onClick={() => nextScene()} />
            case 3:
                return (
                    <>
                        <img src={char4} width="100%" onClick={onClickLastStep} />
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
                                <Grid item style={{margin:"10px"}}>
                                    <Typography fontSize={"30px"} color="white">
                                        สถานการณ์ตอนนี้ คิดว่าควรทำอย่างไร
                                    </Typography>
                                </Grid>
                                <Grid item style={{ margin: "10px" }} onClick={onChapterSuccess}>
                                    <Button variant="contained">
                                        choice1 (go next chapter)
                                    </Button>
                                </Grid>
                                <Grid item style={{ margin: "10px" }}>
                                    <Button variant="contained" onClick={onChapterFailed }>
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
