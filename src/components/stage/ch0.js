import { Button, Fade, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import LoadingScreen from "./loadingScreen";
import ScenePage from "./scene_page";


export default function Ch0(props) {

    const [scene, setScene] = useState(-1);

    const nextScene = () => {
        setScene(scene + 1);
    }
    const previousScene = () => {
        if (scene > 0) {

            setScene(scene - 1);
        }
    }
    const toScene = (sceneNo) => {
        setScene(sceneNo)

    }


    const public_path = process.env.PUBLIC_URL

    const sceneImage = [
        `${public_path}/assets/Element/Chapter_Manga/Chapter0/ch0_0.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter0/ch0_1.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter0/ch0_2.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter0/ch0_3.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter0/ch0_4.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter0/ch0_5.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter0/ch0_6.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter0/ch0_7.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter0/ch0_8.png`,
    ]
    useEffect(() => {
        sceneImage.forEach((image) => {
            new Image().src = image;
        })

    }, [])





    function sceneControl() {
        switch (scene) {
            case -1:
                return <LoadingScreen nextScene={nextScene} chapter={0} />

            case 0:
                return (
                    <ScenePage image_path={sceneImage[0]} previousScene={previousScene} nextScene={nextScene} chapter={0} />

                )
            case 1:
                return (
                    <ScenePage image_path={sceneImage[1]} previousScene={previousScene} nextScene={nextScene} chapter={0} />
                )
            case 2:
                return (
                    <ScenePage image_path={sceneImage[2]} previousScene={previousScene} nextScene={nextScene} chapter={0} />
                )
            case 3:
                return (
                    <ScenePage image_path={sceneImage[3]} previousScene={previousScene} nextScene={nextScene} chapter={0} />
                )
            case 4:
                return (
                    <ScenePage image_path={sceneImage[4]} previousScene={previousScene} nextScene={nextScene} chapter={0} />
                )
            case 5:
                return (
                    <ScenePage image_path={sceneImage[5]} previousScene={previousScene} nextScene={nextScene} chapter={0} />
                )
            case 6:
                return (
                    <ScenePage image_path={sceneImage[6]} previousScene={previousScene} nextScene={nextScene} chapter={0} />
                )

            case 7:
                return (
                    <ScenePage image_path={sceneImage[7]} previousScene={previousScene} nextScene={nextScene} chapter={0} />
                )
            case 8:
                return (
                    <ScenePage image_path={sceneImage[8]} previousScene={previousScene} nextScene={nextScene} chapter={0} />
                )
            case 9:
                return <HowToPlay onNext={props.onNext} />
            default:
                break;
        }
    }





    return sceneControl()


}

function HowToPlay(props) {
    return (
        <Grid
            container
            direction={"column"}
            justifyContent="center"
            alignItems={"center"}
            sx={{
                height: "100vh",
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Element/How_to_Play_page/HowToPlay_BG-1.png)`,

                backgroundSize: "cover",
            }}
        >
            <Grid
                container
                alignItems={"center"}
                justifyContent={"center"}
                position="absolute"

                sx={{
                    width: `${4001 * 0.2}px`,
                    height: `${2251 * 0.2}px`,
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Element/How_to_Play_page/HowToPlay_Element-3.png)`,
                    backgroundSize: "cover",
                }}
            >
                <img src={`${process.env.PUBLIC_URL}/assets/Element/How_to_Play_page/example_HowToPlay_page/HowToPlay_Example.jpeg`} width={"90%"} />

            </Grid>
            <Grid item zIndex={1} position={"absolute"} top="14vh">
                <img src={`${process.env.PUBLIC_URL}/assets/Element/How_to_Play_page/HowToPlay_Element-4.png`} width={"500px"} />

            </Grid>

            <Grid item zIndex={1} position={"absolute"} bottom="19vh">
                <Grid container direction={"row"} justifyContent="center" >
                    <img src={`${process.env.PUBLIC_URL}/assets/Element/Loading_page/Loading_Element-6.png`} width={"40px"} height={"40px"} style={{ paddingTop: "30px" }} />

                    <img onClick={() => props.onNext()} src={`${process.env.PUBLIC_URL}/assets/Element/How_to_Play_page/HowToPlay_Element-5.png`} width={"100px"} />

                    <img src={`${process.env.PUBLIC_URL}/assets/Element/Loading_page/Loading_Element-6.png`} width={"40px"} height={"40px"} style={{ paddingTop: "30px" }} />



                </Grid>

            </Grid>
        </Grid>
    )
}

