import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import Questions from './Questions';
import { useDispatch, useSelector } from 'react-redux';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';

export default function Quiz() {

    const [check, setCheck] = useState(undefined);
    const result = useSelector(state => state.result.result);
    const { queue, trace } = useSelector(state => state.questions);
    const dispatch = useDispatch();

    // useSelector(state => console.log(state)) // considering for performance optimisation

    // useEffect(() => {
    //    console.log(state);
    // })

    const state = useSelector(state => state)

    useEffect(() => {
        console.log( "result array is ", state.result.result);
    })

    function onNext(){
        console.log("Next clicked");
        if(trace < queue.length){
            dispatch(MoveNextQuestion());
            // insert a new result in result array
            if(result.length <= trace) {
                dispatch(PushAnswer(check));
            }
        }

        // RESET THE CHECK state
        setCheck(undefined);
    }

    function onPrev(){
        console.log('Prev clicked');
        if(trace > 0) dispatch(MovePrevQuestion());
    }

    function onChecked(idx) {
        setCheck(idx);
        console.log(result);
    }

    // Finish exam after the last question
    if(result.length && result.length >= queue.length){
        return <Navigate to={"/result"} replace={true}></Navigate>
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>Quizzy : Quiz App</h1>

        <Questions onChecked={onChecked}/>

        <div className='grid'>
            {trace > 0 ? <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>}
            <button className='btn next' onClick={onNext}>Next</button>
        </div>

    </div>
  )
}
