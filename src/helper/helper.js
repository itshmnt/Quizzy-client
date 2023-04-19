import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function attemptsNumber(result){
    return result.filter(r => r !== undefined).length;
}

export function earnedPointsCalc(answers, result, point){
    return result.map((el, i) => answers[i] === el).filter(i => i).map(i => point).reduce((acc,curr) => curr + acc, 0);
}

export function flagResult(totalPoints, earnedPoints) {
    return (totalPoints * 50 / 100) < earnedPoints;
}

// check user auth
export function CheckUserExist({children}){
    const auth = useSelector(state => state.result.userId);
    return auth ? children : <Navigate to={'/'} replace={true}></Navigate>
}