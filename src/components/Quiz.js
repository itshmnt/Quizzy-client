import React, { useEffect } from 'react'
import Questions from './Questions';
import { useDispatch, useSelector } from 'react-redux';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';

export default function Quiz() {

    // const questions = useSelector(state => state.questions) // considering for performance optimisation
    const { queue, trace } = useSelector(state => state.questions);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(trace);
    })

    function onNext(){
        console.log('Next');
        if(trace < queue.length - 1) dispatch(MoveNextQuestion());
    }

    function onPrev(){
        console.log('Prev');
        if(trace > 0) dispatch(MovePrevQuestion());
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>Quizzy : Quiz App</h1>

        <Questions />

        <div className='grid'>
            <button className='btn prev' onClick={onPrev}>Prev</button>
            <button className='btn next' onClick={onNext}>Next</button>
        </div>

    </div>
  )
}
