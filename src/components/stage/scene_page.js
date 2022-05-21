import { Fade, Grid } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ScenePage(props) {
    const public_path = process.env.PUBLIC_URL;
    const image_path = props.image_path;
    const nextScene = props.nextScene;
    const previousScene = props.previousScene;
    const chapter = props.chapter
    return (


        <Grid
            container
            direction={"row"}
            justifyContent={"center"}
            alignItems="center"
            sx={{
                paddingTop:"50px",
                width: "100vw",
                height: "100vh",
                backgroundImage: `url(${public_path}/assets/Element/BgChapter/chapter${chapter}_bg.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Grid item xs sm={1}>

                <ArrowBackIosNewIcon onClick={previousScene} sx={{ color: "#FFFFFF", transform: "scale(2)", margin: "20px" }} />
            </Grid>

            <Grid item xs sm={10}>
                <Grid container justifyContent={"center"} alignItems={"center"}>
                    <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                        <img src={image_path} width="90%" onClick={() => nextScene()} />

                    </Fade>

                </Grid>
            </Grid>


            <Grid item xs sm={1} >
                <Grid container justifyContent={"end"}>

                    <ArrowForwardIosIcon onClick={nextScene} sx={{ color: "#FFFFFF", transform: "scale(2)", margin: "20px" }} />
                </Grid>
            </Grid>




        </Grid>
    )
}