import React from 'react'
import { TOTAL_SCREENS } from './utilities/commonUtils'

const Porfolio = () => {
    const mappAllScreens =()=> {
        return (
            TOTAL_SCREENS.map((screen)=> {
                screen.component ? <screen.component screeName={screen.screen_name} key={screen.screen_name}
                id={screen.screen_name}/>: <div key ={screen.screen_name}></div>
            })
        )
    }

    return (
        <div className='porfolio-container'>
            {mappAllScreens()}
        </div>
    )
}

export default Porfolio