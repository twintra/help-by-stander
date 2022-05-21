import { Grid, Typography } from "@mui/material";

export default function RestartPage(props) {

    const onNext = props.onNext;
    const inventoryData = JSON.parse(localStorage.getItem("inventory"));
    console.log(inventoryData);
    let itemCount = 0;
    const countItem = () => {
        if (inventoryData.chapter1) itemCount += 1;
        if (inventoryData.chapter2) itemCount += 1;
        if (inventoryData.chapter3) itemCount += 1;
        if (inventoryData.chapter4) itemCount += 1;
    }
    countItem();


    const onClickRestart = () => {
        const item = {
            chapter1: false,
            chapter2: false,
            chapter3: false,
            chapter4: false,
        };

        localStorage.setItem("currentState", "char");
        localStorage.setItem("inventory", JSON.stringify(item));
        window.location.reload();
    }

    const onClickMainMenu = () => {
        localStorage.removeItem("currentState")
        localStorage.removeItem("inventory")
        window.location.replace("/")

    }



    if (itemCount > 2) {
        return onNext();
    } else {
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
                    
                    <Typography fontFamily={"JSNoklae"} fontSize={"38px"} color={"#FFFFFF"} align="center">
                        You don't have enough item, you failed.<br/>
                        Click restart to try again.
                        Click next to go to main menu.
                    </Typography>
                </Grid>
                <Grid item>

                    <Grid container direction={"row"} alignItems="center" justifyContent={"center"}>
                        <Grid item onClick={onClickRestart} sx={{ ":hover": { cursor: "pointer", transform:"scale(1.2)" }, transition: "all .2s ease-in-out", ":active":{transform:"scale(0.9)"} }}>


                            <img src={`${process.env.PUBLIC_URL}/assets/Element/Mission_Fail_Page/MissionFail_Element-46.png`} width={"400px"} />
                        </Grid>
                        <Grid item sx={{ marginX: "50px" }}>
                            <img src={`${process.env.PUBLIC_URL}/assets/Element/Mission_Fail_Page/MissionFail_Element-47.png`} width={"100px"} />
                        </Grid>

                        <Grid item onClick={onClickMainMenu} sx={{ ":hover": { cursor: "pointer", transform:"scale(1.2)" }, transition: "all .2s ease-in-out", ":active":{transform:"scale(0.9)"} }}>

                            <img src={`${process.env.PUBLIC_URL}/assets/Element/Mission_Fail_Page/MissionFail_Element-45.png`} width={"400px"} />

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )

    }
}