import React, {Component} from 'react'
import {render} from 'react-dom'

let runData = {
    total: 50,
    rainy: 20,
    track: 10,
    goal: 100
}
const getPercent = decimal  => {
    return decimal * 100 + '%'
}

const calcGoalProgress = (total,goal) => {
    return getPercent(total/goal)
}


const RunDayCounter = ({total, rainy, track, goal}) => {
    return(
        <section>
        <div>
        <p>Total Days: {total}</p>
        </div>
        <div>
        <p>Rainy Days: {rainy}</p>
        </div>
        <div>
        <p>Track Days: {track}</p>
        </div>
        <div>
        <p>Goal Progress: {calcGoalProgress( total, goal)}</p>
        </div>
    </section>
        
    )
}




render(<RunDayCounter
                total={runData.total}
                rainy={runData.rainy}
                track={runData.track}
                goal={runData.goal} />, document.getElementById('root')
)

