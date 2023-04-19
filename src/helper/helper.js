export function attemptsNumber(result){
    return result.filter(r => r !== undefined).length;
}

export function earnedPointsCalc(answers, result, point){
    return result.map((el, i) => answers[i] === el).filter(i => i).map(i => point).reduce((acc,curr) => curr + acc, 0);
}

export function flagResult(totalPoints, earnedPoints) {
    return (totalPoints * 50 / 100) < earnedPoints;
}