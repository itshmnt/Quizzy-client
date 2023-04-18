import React from 'react'
import '../styles/Result.css'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable';
import { useDispatch } from 'react-redux';

import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';

export default function Result() {

    const dispatch = useDispatch();

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
                <span className='bold'>50</span>
            </div>
            <div className='flex'>
                <span>Total Questions : </span>
                <span className='bold'>5</span>
            </div>
            <div className='flex'>
                <span>Total Attempts : </span>
                <span className='bold'>03</span>
            </div>
            <div className='flex'>
                <span>Total Earned Points : </span>
                <span className='bold'>50</span>
            </div>
            <div className='flex'>
                <span>Quiz Result : </span>
                <span className='bold'>Passed</span>
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
