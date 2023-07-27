import React from 'react'
import { Link } from 'react-router-dom'



const DashboardView = () => {
    return (
        <div>
            <div className='header'>
                <h1 className='title'>MedSage </h1>
                <h3 className='title2'>Enlightening You on Medications and Addressing Your Symptoms</h3>
            </div>
            <div className='allButton'>
                <div>
                    <div>
                        <button className='dashButton' ><Link to='/medicine' className='dashLink' >Medicine</Link></button>
                    </div>
                    <div>
                        <button className='dashButton'  ><Link to='/symptom' className='dashLink' >Symptom</Link></button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardView