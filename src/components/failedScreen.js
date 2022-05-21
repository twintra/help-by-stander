import { Button, Grid, Typography } from "@mui/material";


export default function FailedScreen(props) {

    const onClickRestart = () => {
        window.location.reload()
    }

    const onClickNext = () => {
        props.onNext()
    }
    return (
        <Grid
            container
            direction={"column"}
            sx={{
                height: "100vh",
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Element/Mission_Fail_Page/MissionFail_BG-1.png)`,
                backgroundSize: "cover",
            }}
            alignItems="center"
            justifyContent={"center"}
        >
            <Grid item>
                <img src={`${process.env.PUBLIC_URL}/assets/Element/Mission_Fail_Page/MissionFail_Element-42.png`} width={"400px"} />
            </Grid>
            <Grid item>
                <Grid container direction={"row"} alignItems="center" justifyContent={"center"}>
                    <Grid item onClick={onClickRestart} sx={{ ":hover": { cursor: "pointer", transform:"scale(1.2)" }, transition: "all .2s ease-in-out", ":active":{transform:"scale(0.9)"} }}>


                        <img src={`${process.env.PUBLIC_URL}/assets/Element/Mission_Fail_Page/MissionFail_Element-46.png`} width={"400px"} />
                    </Grid>
                    <Grid item sx={{ marginX: "50px" }}>
                        <img src={`${process.env.PUBLIC_URL}/assets/Element/Mission_Fail_Page/MissionFail_Element-47.png`} width={"100px"} />
                    </Grid>

                    <Grid item onClick={onClickNext} sx={{ ":hover": { cursor: "pointer", transform:"scale(1.2)" }, transition: "all .2s ease-in-out", ":active":{transform:"scale(0.9)"} }}>

                        <img src={`${process.env.PUBLIC_URL}/assets/Element/Mission_Fail_Page/MissionFail_Element-45.png`} width={"400px"} />

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}