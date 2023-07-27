import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SymptomView = () => {
    const [searchSymptom, setSearchSymptom] = useState('');
    const [symptom, setSymptom] = useState('');
    const [resultData, setResultData] = useState([]);

    const fetchSymptoms = (e) => {
        e.preventDefault();
        axios.post('https://symptom-checker4.p.rapidapi.com/analyze', {
            symptoms: searchSymptom
        }, {
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '8d95881717mshb150bac71409acbp1dbee3jsn2097310c3b61',
                'X-RapidAPI-Host': 'symptom-checker4.p.rapidapi.com'
            }
        })
            .then(res => {
                console.log(res.data);
                setResultData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleSymptom = (e) => {
        setSymptom(e.target.value);
    }

    const handleSearchSymptom = (e) => {
        setSearchSymptom(e.target.value);
    }

    return (
        <div>
            <div className='MedNav'>
                <button className='medButton' ><Link to='/' className='dashLink'>Home</Link></button>
            </div>
            <div>
                <h1 className='SymptomTitle'>Enter Symptom</h1>
            </div>
            <div className='SympForm'>
                <div>

                    <form onSubmit={fetchSymptoms} >
                        <div className='SymptomLabel'>
                            <label >Symptom</label>
                        </div>
                        <div>
                            <input type="text" value={symptom} onChange={handleSymptom} className='SymptomInput' />
                        </div>
                        <div className='SymptomLabel'>
                            <label >Describe Symptom</label>
                        </div>
                        <div>
                            <textarea type="text" rows='4' cols='40' value={searchSymptom} onChange={handleSearchSymptom} className='SymptomInput2' />
                        </div>
                        <div className='SubmitArea'>
                            <input type="submit" className='SymptomSubmit' />
                        </div>
                    </form>
                </div>

            </div>
            <div >
                <div >
                    <div>
                        <details className='SympResBorder'>
                            <summary className='miniTitle'>Potential Causes </summary>
                            {resultData && resultData.potentialCauses && resultData.potentialCauses.length > 0 ? (
                                <ul className='SymptomResult'>
                                    {resultData.potentialCauses.map((cause, index) => (
                                        <li key={index} className='SymptomResult2'>-{cause}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className='other'>Please fill the box above for result</p>
                            )}
                        </details>

                    </div>
                    <div>
                        <details className='SympResBorder'>
                            <summary className='miniTitle'>Follow-up Questions</summary>
                            {resultData && resultData.followupQuestions && resultData.followupQuestions.length > 0 ? (
                                <ul className='SymptomResult'>
                                    {resultData.followupQuestions.map((questions, index) => (
                                        <li key={index} className='SymptomResult2' >-{questions} </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className='other'>Please fill the box above for result</p>
                            )}
                        </details>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default SymptomView;
