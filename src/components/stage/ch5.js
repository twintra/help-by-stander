
import { Button, Fade, Grid, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FailedScreen from "../failedScreen";
import GotItemScreen from "../gotItemScreen";
import LoadingScreen from "./loadingScreen";
import ScenePage from "./scene_page";

export default function Ch5(props) {
       
    const [scene, setScene] = useState(-1);
    const [modalOpen, setModalOpen] = useState(false);
    const public_path = process.env.PUBLIC_URL

    const [gotItem, setGotItem] = useState(false);
    const [inventoryData, setInventoryData] = useState({})

    const sceneImage = [
        `${public_path}/assets/Element/Chapter_Manga/Chapter5/ch5_0.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter5/ch5_1.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter5/ch5_2.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter5/ch5_3.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter5/ch5_4.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter5/ch5_5.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter5/ch5_6.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter5/ch5_7.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter5/ch5_8.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter5/ch5_9.png`,
        
    ]
    
    useEffect(() => {

        sceneImage.forEach((image) => {
            new Image().src = image;
        })
        setInventoryData(JSON.parse(localStorage.getItem("inventory")))


    }, [])

    const nextScene = () => {
        setScene(scene + 1);
    }

    const previousScene = () => {
        if (scene > 0) {

            setScene(scene - 1);
        }
    }

    const onChapterFailed = () => {
        setScene(-2);
    }

    const onClickLastStep = () => {
        if (gotItem) {
            onShowGotItem()
        } else {
            props.onNext();
        }

    }
    const onShowGotItem = () => {

        localStorage.setItem("inventory", JSON.stringify(inventoryData))
        setScene(-3)
    }

    const onOpenQuestion = () => {
        setModalOpen(true);
    }

    const onBestAnswer = () => {
        const temp = { ...inventoryData }
        temp.chapter5 = true
        setInventoryData(temp)
        setGotItem(true);
        nextScene()
    }

    const onWrongAnswer = () => {
        onChapterFailed()
    }

    const onNormalAnswer = () => {
        nextScene()
    }

    function sceneControl() {
        switch (scene) {
            case -3:
                return <GotItemScreen onNext={props.onNext} />
            case -2:
                return <FailedScreen onNext={props.onNext} />
            case -1:

                return <LoadingScreen nextScene={nextScene} chapter={5} />
            case 0:
                return (

                    <ScenePage image_path={sceneImage[0]} previousScene={previousScene} nextScene={nextScene} chapter={5} />
                )
            case 1:
                return (
                    <ScenePage image_path={sceneImage[1]} previousScene={previousScene} nextScene={nextScene} chapter={5} />
                )
            case 2:
                return (
                    <ScenePage image_path={sceneImage[2]} previousScene={previousScene} nextScene={nextScene} chapter={5} />
                )
            case 3:
                return (
                    <ScenePage image_path={sceneImage[3]} previousScene={previousScene} nextScene={nextScene} chapter={5} />
                )
            case 4:
                return (
                    <ScenePage image_path={sceneImage[4]} previousScene={previousScene} nextScene={nextScene} chapter={5} />
                )
            case 5:
                return (
                    <ScenePage image_path={sceneImage[5]} previousScene={previousScene} nextScene={nextScene} chapter={5} />
                )
            case 6:
                return (
                    <ScenePage image_path={sceneImage[6]} previousScene={previousScene} nextScene={nextScene} chapter={5} />
                )
            case 7:
                return (
                    <ScenePage image_path={sceneImage[7]} previousScene={previousScene} nextScene={nextScene} chapter={5} />
                )
            case 8:
                return (
                    <ScenePage image_path={sceneImage[8]} previousScene={previousScene} nextScene={nextScene} chapter={5} />
                )

            case 9:
                return (
                    <ScenePage image_path={sceneImage[9]} previousScene={previousScene} nextScene={onClickLastStep} chapter={5} />
                )
            
            default:
                break;

        }
    }

    return sceneControl()
}