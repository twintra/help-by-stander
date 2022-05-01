import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "../../styles/loadingScreen.css"


export default function LoadingScreen(props) {
    const chapter = props.chapter
    var chapterImagePath = ""
    switch (chapter) {
        case 0:
            chapterImagePath = `/assets/Element/Loading_page/Loading_Element-28.png`
            break;
        case 1:
            chapterImagePath = `/assets/Element/Loading_page/Loading_Element-29.png`
            break;
        case 2:
            chapterImagePath = `/assets/Element/Loading_page/Loading_Element-30.png`
            break;
        case 3:
            chapterImagePath = `/assets/Element/Loading_page/Loading_Element-31.png`
            break;
        case 4:
            chapterImagePath = `/assets/Element/Loading_page/Loading_Element-32.png`
            break;
        case 5:
            chapterImagePath = `/assets/Element/Loading_page/Loading_Element-33.png`
            break;

        default:
            break;
    }
    var progress = 0
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        console.log("use effect triggered")
        var loadInteval = setInterval(() => {
            if (progress <= 100) {
                setCompleted(progress)

                progress += 2;
            } else {
                clearInterval(loadInteval);
                setTimeout(() => {

                    props.nextScene()
                }, 1000)
            }
        }, 100);
        return

    }, [])








    return (
        <Grid container
            direction={"column"}
            alignItems="center"
            // justifyContent={"center"}
            sx={{

                height: "100vh",
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Element/Loading_page/Loading_BG-1.png)`,
                backgroundSize: "cover",


            }}
        >
            <Grid container direction="column" position="absolute" top={"30vh"}>
                <Grid container direction={"row"}  justifyContent="center" >
                    <img src={`${process.env.PUBLIC_URL}/assets/Element/Loading_page/Loading_Element-6.png`} width={"50px"} height={"50px"} style={{ paddingTop: "50px" }} />
                    <img src={`${process.env.PUBLIC_URL}${chapterImagePath}`} width={"300px"} height={"300px"} />

                    <img src={`${process.env.PUBLIC_URL}/assets/Element/Loading_page/Loading_Element-6.png`} width={"50px"} height={"50px"} style={{ paddingTop: "50px" }} />



                </Grid>
                <Grid direction={"column"} container alignItems={"center"} justifyContent="center">
                    <ProgressBar progress={completed} />
                    <Grid item sx={{}}>
                        <div className="load">
                            {completed}
                        </div>

                    </Grid>

                </Grid>
            </Grid>


            <Grid item position={"absolute"} right="5vw" bottom="15vh">
                <img src={`${process.env.PUBLIC_URL}/assets/Element/Loading_page/Loading_Element-4.png`} width={"140px"} />
            </Grid>
            <Grid item position={"absolute"} left="5vw" top="10vh">
                <img src={`${process.env.PUBLIC_URL}/assets/Element/Loading_page/Loading_Element-5.png`} width={"140px"} />
            </Grid>



        </Grid>
    )
}

const ProgressBar = (props) => {
    const progress = props.progress;
    const sizeRatio = 0.4
    return (
        <Grid
            container
            sx={{
                height: `${299 * sizeRatio}px`,
                width: `${1113 * sizeRatio}px`,
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Element/Loading_page/Loading_Element-2.png)`,
                backgroundSize: "cover"

            }}
            alignItems="center"
        // justifyContent={"center"}
        >
            <Grid

                item
                sx={{
                    marginLeft: "7%",
                    height: "30%",
                    width: `${progress - 14}%`,
                    borderRadius: "20px",
                    backgroundColor: "white",
                    transition: 'width 0.2s ease-in-out'

                }}>
                {/* <span>
                    {`${progress}%`}
                </span> */}
            </Grid>
        </Grid>
    )
}