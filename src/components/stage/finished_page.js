import { Grid, Typography } from "@mui/material";

export default function FinishedPage(props) {
    

    const onClickNext = () => {
        localStorage.removeItem("currentState")
        localStorage.removeItem("inventory")
        window.location.replace("/")
    }

    return (
        <Grid
            container
            direction={"column"}
            sx={{
                height: "100vh",
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Element/Character_page/element/BG_AllCharacter_Page.png)`,
                backgroundSize: "cover",
            }}
            alignItems="center"
            justifyContent={"center"}
        >
            <Grid item>
                
                <Typography fontFamily={"JSNoklae"} fontSize={"100px"} color="#FFFFFF" align="center">
                    Mission Success!
                    
                </Typography>
            </Grid>
            <Grid item>
            <Typography fontFamily={"JSNoklae"} fontSize={"50px"} color="#FFFFFF" align="center">
                    คุณทำภารกิจสำเร็จ! กด Next เพื่อกลับไปหน้า Menu
                    
                </Typography>
                <Grid container direction={"row"} alignItems="center" justifyContent={"center"}>


                    <Grid item onClick={onClickNext} sx={{ ":hover": { cursor: "pointer", transform: "scale(1.2)" }, transition: "all .2s ease-in-out", ":active": { transform: "scale(0.9)" } }}>

                        <img src={`${process.env.PUBLIC_URL}/assets/Element/Mission_Fail_Page/MissionFail_Element-45.png`} width={"400px"} />

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}