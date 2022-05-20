import { Grid } from "@mui/material";

export default function GotItemScreen(props) {
    const item = props.item;

    const public_path = process.env.PUBLIC_URL
    const item_path = `${public_path}/assets/Element/Get_Item_Page/Items/item${item}.png`;

    return (

        <Grid container
            direction={"column"}
            alignItems="center"
            
            sx={{

                height: "100vh",
                backgroundImage: `url(${public_path}/assets/Element/Get_Item_Page/GetItem_BG.png)`,
                backgroundSize: "cover",


            }}
            onClick={()=>props.onNext()}
        >
            <Grid item>
                <Grid container alignContent={"center"} justifyContent="center">

                    <img src={`${public_path}/assets/Element/Get_Item_Page/GetItem_Element-38.png`} width={"40%"} />
                </Grid>
            </Grid>
            <Grid item>
                <Grid container alignContent={"center"} justifyContent="center">

                    <img src={item_path} width={"100%"} />
                </Grid>
            </Grid>

        </Grid>
    )
}