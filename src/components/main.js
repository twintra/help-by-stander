import { Box, Button, Fade, Grid, IconButton, Modal, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import characterList from "../data/character";
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import char1 from '../assets/images/Character_1_Iris-18.png'
import char2 from '../assets/images/Character_2_Thee.png'
import char3 from '../assets/images/Character_3_Ongsa.png'
import char4 from '../assets/images/Character_4_Thanwa.png'
import CharaterScreen from "./stage/character_screen";
import Ch0 from "./stage/ch0";
import Ch1 from "./stage/ch1";
import Ch2 from "./stage/ch2";
import Ch3 from "./stage/ch3";
import Ch4 from "./stage/ch4";



export default function Main() {



    const currentState = localStorage.getItem("currentState")
    const inventoryData = localStorage.getItem("inventory");
    const [currChapter, setCurrChapter] = useState("");
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        if (currentState === null) {
            window.location.replace("/")
        } else {
            setCurrChapter(currentState)
            setInventory(inventoryData);
        }
    }, [])

    const goToChapter = (chapter) => {
        localStorage.setItem("currentState", chapter)
        setCurrChapter(chapter)
    }

    function manageChapter() {
        switch (currChapter) {
            case "char":
                return <CharaterScreen onNext={() => goToChapter("ch0")} />
            case "ch0":
                return <Ch0 onNext={() => goToChapter("ch1")}/>
            case "ch1":

                return <Ch1 onNext={() => goToChapter("ch2")}/>
            case "ch2":

                return <Ch2 onNext={() => goToChapter("ch3")}/>
            case "ch3":

                return <Ch3 onNext={() => goToChapter("ch4")}/>
            case "ch4":

                return <Ch4 onNext={() => console.log("finished")}/>
                
            default:
                break;
        }
    }



    return (
        <>
            {manageChapter()}
        </>
    );
}