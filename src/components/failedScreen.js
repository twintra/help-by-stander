import { Button, Grid, Typography } from "@mui/material";


export default function FailedScreen(props) {

    const onClickRestart = () => {
        window.location.reload()
    }

    const onClickNext = () => {
        props.onNext()
    }
    return (
        <Grid container direction={"column"} sx={{ height: "100vh" }} alignItems="center" justifyContent={"center"} >
            <Grid item>
                <Typography>
                    Mission Failed
                </Typography>
            </Grid>
            <Grid item>
                <Grid container direction={"row"}>
                    <Grid item>

                        <Button onClick={onClickRestart}>
                            restart
                        </Button>
                    </Grid>
                    <Grid item>

                        <Button onClick={onClickNext}>
                            next
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}