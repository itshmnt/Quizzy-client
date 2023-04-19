import React, { useEffect } from 'react'
import '../styles/Result.css'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';

import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
import { attemptsNumber, earnedPointsCalc, flagResult } from '../helper/helper';

export default function Result() {

    const dispatch = useDispatch();

    const {questions: {queue, answers}, result: {result, userId}} = useSelector(state => state);

    useEffect(() => {
        console.log("from res comp ", result);
        console.log(flag);
    });

    const totalPoints = queue.length * 10;
    const attempts = attemptsNumber(result);
    const earnedPoints = earnedPointsCalc(result, answers, 10);
    const flag = flagResult(totalPoints, earnedPoints);

    function onRestart () {
        console.log('Restart button clicked');
        dispatch(resetAllAction());
        dispatch(resetResultAction());
    }
  return (
    <div className='container'>
        <h1 className='title text-light'>Quizzy : Quiz App</h1>

        <div className='result flex-center'>
            <div className='flex'>
                <span>Username</span>
                <span className='bold'> Daily Quiz</span>
            </div>
            <div className='flex'>
                <span>Total Quiz Points : </span>
                <span className='bold'>{totalPoints || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Questions : </span>
                <span className='bold'>{queue.length || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Attempts : </span>
                <span className='bold'>{attempts || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Earned Points : </span>
                <span className='bold'>{earnedPoints || 0}</span>
            </div>
            <div className='flex'>
                <span>Quiz Result : </span>
                <span style={{color : `${flag ? "#2aff95" : "#ff2a66"}`}} className='bold'>{flag ? "Passed" : "Failed"}</span>
            </div>
        </div>

        <div className='start'>
            <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
        </div>

        <div className='container'>
            <ResultTable />
        </div>
    </div>
  )
}
