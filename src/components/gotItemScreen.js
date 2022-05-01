import { Grid } from "@mui/material";

export default function GotItemScreen(props) {
    return (

        <Grid container
            direction={"column"}
            alignItems="center"
            
            sx={{

                height: "100vh",
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Element/Get_Item_Page/GetItem_BG.png)`,
                backgroundSize: "cover",


            }}
            onClick={()=>props.onNext()}
        >
            <Grid item>
                <Grid container alignContent={"center"} justifyContent="center">

                    <img src={`${process.env.PUBLIC_URL}/assets/Element/Get_Item_Page/GetItem_Element-38.png`} width={"40%"} />
                </Grid>
            </Grid>

        </Grid>
    )
}