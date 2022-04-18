import { Button, Grid } from "@mui/material";

export default function Ch4(props) {
    return (
        <Grid>
            ch4
            <Button onClick={()=>props.onNext()}>
                next
            </Button>
        </Grid>
    )
}