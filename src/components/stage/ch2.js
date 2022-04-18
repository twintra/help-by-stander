import { Button, Grid } from "@mui/material";

export default function Ch2(props) {
    return (
        <Grid>
            ch2
            <Button onClick={()=>props.onNext()}>
                next
            </Button>
        </Grid>
    )
}