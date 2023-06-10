import React, { FC, useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ProgressiveStateType, isWaitingDoneAC, progressiveAC } from "./state/progress-reducer";
import { useDispatch } from "react-redux";
import { AppRootStateType } from "./state/store";

interface ICircularProgressWithLabel {
    value: number
}

const CircularProgressWithLabel: React.FC<ICircularProgressWithLabel> = (props) => {

    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress variant="determinate" {...props} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

interface ICircularStatic {
    isWaiting: boolean
    //interval milliseconds
    timeInterval: number
}

//TASK
//Use redux instead local state

export const CircularStatic: FC<ICircularStatic> = (props) => {
    // const [progress, setProgress] = useState(0);
    // console.log(useSelector<ProgressiveStateType, ProgressiveStateType>((s) => s));
    let progress = useSelector<AppRootStateType, number>((s) => s.progress.value)
    // const [isWaitingDone, setIsWaitingDone] = useState(true);
    const isWaitingDone = useSelector<AppRootStateType, boolean>((s) => s.progress.isWaitingDone)
    const dispatch = useDispatch();
    useEffect(() => {
        let timer: ReturnType<typeof setInterval>
        if (props.isWaiting && isWaitingDone) {
            timer = setInterval(() => {
                if (progress === 100) {
                    clearInterval(timer)
                    dispatch(isWaitingDoneAC(false))
                }
                if (progress >= 100) dispatch(progressiveAC(0));
                else dispatch(progressiveAC(progress + 10))
            }, props.timeInterval);
        } else {
            dispatch(progressiveAC(0))
        }

        return () => {
            clearInterval(timer);
        };
    }, [props.isWaiting]);
    console.log(progress);
    
    return <CircularProgressWithLabel value={progress} />;
}




