import { Button, Grid } from "@mui/material";

export default function Ch3(props) {
    return (
        <Grid>
            ch3
            <Button onClick={()=>props.onNext()}>
                next
            </Button>
        </Grid>
    )
}