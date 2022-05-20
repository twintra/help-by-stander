import { Button, Fade, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import LoadingScreen from "./loadingScreen";


export default function Ch0(props) {

    const [scene, setScene] = useState(-1);

    const nextScene = () => {
        setScene(scene+1);
    }
    const toScene = (sceneNo) => {
        setScene(sceneNo)

    }
    

    const public_path = process.env.PUBLIC_URL

    const sceneImage = [
        `${public_path}/assets/Element/Chapter_Manga/Chapter0/Ch0_Page1.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter0/Ch0_Page2.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter0/Ch0_Page3.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter0/Ch0_Page4.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter0/Ch0_Page5.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter0/Ch0_Page6.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter0/Ch0_Page7.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter0/Ch0_Page8.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter0/Ch0_Page9.png`,
        
    ]
    useEffect(()=>{
        sceneImage.forEach((image) => {
            new Image().src = image;
        })
        
    },[])

    
    


    function sceneControl() {
        switch (scene) {
            case -1:
                return <LoadingScreen nextScene={nextScene} chapter={0} />

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
                    <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                        <img src={sceneImage[7]} width="100%" onClick={() => nextScene()} />
                    </Fade>
                )
            case 8:
                return (
                    <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                        <img src={sceneImage[8]} width="100%" onClick={() => nextScene()} />
                    </Fade>
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

