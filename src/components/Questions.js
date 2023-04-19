import React, { useEffect, useState } from 'react'
import { useFetchQuestion } from '../hooks/FetchQuestion';
import { useDispatch, useSelector } from 'react-redux';
import { updateResult } from '../hooks/setResult';

export default function Questions(props) {

    const[checked, setChecked] = useState(undefined);
    
    const [{isLoading, apiData, serverError}, setGetData] = useFetchQuestion();

    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const { trace } = useSelector(state => state.questions);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateResult({trace, checked}));
    }, [checked])

    function onSelect(i){
        console.log("RadioSelect");
        props.onChecked(i);
        setChecked(i);
    }

    if(isLoading) return <h3 className='text-light'>Loading...</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unknown error occured."}</h3>

  return (
    <div className='questions'>
        <h2 className='text-light'>{questions?.question}</h2>

        <ul key={questions?.id}>
            {
                questions?.options.map((q, i) => (
                    <li key={i}>
                        <input
                            type='radio'
                            value={false}
                            name="options"
                            id={`q${i}-option`}
                            onChange={() => onSelect(i)}
                        />
                        <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                        <div className='check'></div>
                    </li>
                ))
            }
        </ul>

    </div>
  )
}
