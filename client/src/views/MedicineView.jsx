import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MedicineView = () => {
    const [searchMed, setSearchMed] = useState('');
    const [medicines, setMedicines] = useState({});

    const fetchMedicines = (e) => {
        e.preventDefault();
        axios.get(`https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=${searchMed}`, {
            "headers": {
                'X-RapidAPI-Key': 'c8a8e86c4bmshaf6ec9cd4fafff7p1bc63ejsn8b52e0af2dde',
                'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
            }
        })
            .then(res => {
                console.log(res.data[0])
                setMedicines(res.data[0])
            })
            .catch(err => {
                console.log(err);
            });
    };


    const handleSearch = (e) => {
        setSearchMed(e.target.value);
    };



    return (
        <div>
            <div className='MedNav'>
                <button className='medButton' ><Link to='/' className='dashLink'>Home</Link></button>
            </div>
            <div className='MedForm'>
                <div>
                    <h1 className='MedTitle' >Medicines</h1>
                    <div className='MedBorder'>
                        <form onSubmit={fetchMedicines}>
                            <div>
                                <input type="text" value={searchMed} onChange={handleSearch} className='MedInput' />
                            </div>
                            <div className='MedSubArea' >
                                <input type="submit" className='MedSubmit' />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <div>
                <div>
                    <h2 className='MedTitle2'>Result</h2>
                </div>
                <div className='MedResult'>
                    <div className='InfoBorder'>
                        <div>
                            <p className='MedInfo'>Brand Name:<p className='MedInfoResult' >{medicines.brand_name}</p> </p>
                            <p className='MedInfo'>Route:<p className='MedInfoResult' >{medicines.route}</p></p>
                            <p className='MedInfo'>Dosage form:<p className='MedInfoResult' >{medicines.dosage_form}</p></p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MedicineView;


