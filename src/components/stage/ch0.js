import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import image1 from "../../assets/images/Character_1_Iris-18.png"

export default function Ch0(props) {

    const [scene, setScene] = useState(0);
    const nextScene = () => {
        setScene(scene + 1);
    }

    function sceneControl() {
        switch (scene) {
            case 0:
                return <img src={image1} width="100%" onClick={() => nextScene()} />

            case 1:
                return <HowToPlay onNext={props.onNext} />
            default:
                break;
        }
    }





    return sceneControl()
    {/* <Button onClick={()=>props.onNext()}>
                next
            </Button> */}

}

function HowToPlay(props) {
    return (
        <Grid container direction={"column"} justifyContent="center" alignItems={"center"} sx={{ height:"100vh"}}>
            <Grid item>
                how to play

            </Grid>
            <Grid item>

                <Button
                    sx={{ padding: "10px" }}
                    onClick={() => props.onNext()}
                >
                    ch1
                </Button>
            </Grid>
        </Grid>
    )
}