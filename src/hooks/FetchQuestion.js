import { useEffect, useState } from "react"
// import data, { answers } from "../database/data";
import { useDispatch } from "react-redux";

import * as Action from '../redux/question_reducer';
import { getServerData } from "../helper/helper";

export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null});

    useEffect(() => {
        setGetData(prev => ({...prev, isLoading: true}));

        (async () => {
            try {
                // let question = await data;
                const [{questions, answers}] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) => data);
                if(questions.length > 0){
                    setGetData(prev => ({...prev, isLoading: false}));
                    setGetData(prev => ({...prev, apiData: {questions, answers}}));
                    dispatch(Action.startExamAction({question: questions, answers}));
                } else {
                    throw new Error("No Question Available");
                }
            } catch(error) {
                setGetData(prev => ({...prev, isLoading: false}));
                setGetData(prev => ({...prev, serverError: error}));
            }
        })();
        
    }, [dispatch])

    return [getData, setGetData];
}

export const MoveNextQuestion = () => async (dispatch) => {
    try{
        dispatch(Action.moveNextAction()); // increase trace by 1
    } catch(error){
        console.log(error);
    }
}

export const MovePrevQuestion = () => async (dispatch) => {
    try{
        dispatch(Action.movePrevAction()); // decrease trace by 1
    } catch(error){
        console.log(error);
    }
}