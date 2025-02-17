
import React from 'react'
import Subcontent from './Subcontent'
import Advertisment from './Advertisment'

const MainContent = () => {
    return (
    <div className='MainContent'>
            <div className='sub'>
                <Subcontent />
                <Subcontent />
                <Subcontent />
            </div>
            <Advertisment />
    </div>
    )
}

export default MainContent
