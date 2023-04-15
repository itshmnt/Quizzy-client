import React, { useEffect } from 'react'
import Questions from './Questions';
import { useSelector } from 'react-redux';

export default function Quiz() {

    // const { questions } = useSelector(state => state)
    const questions = useSelector(state => state.questions) // considering for performance optimisation

    useEffect(() => {
        console.log(questions);
    })

    function onNext(){
        console.log('Next');
    }

    function onPrev(){
        console.log('Prev');
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
