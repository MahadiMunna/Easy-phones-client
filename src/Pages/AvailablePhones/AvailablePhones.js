import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AvailablePhone from './AvailablePhone';

const AvailablePhones = () => {
    const [phones, setPhones] = useState([]);
    const { brand } = useLoaderData();
    useEffect(() => {
        fetch('http://localhost:5000/phones')
            .then(res => res.json())
            .then(data => {
                const selectedPhones = data.filter(selectedPhone => selectedPhone.brand === brand);
                setPhones(selectedPhones);
            })
    }, [])
    return (
        <div>
            <h2 className='text-center font-semibold mt-16 text-3xl mb-8 text-green-600'>Available Phones</h2>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 my-12'>
                {
                    phones.map(phone => <AvailablePhone key={phone._id} phone={phone}></AvailablePhone>)
                }
            </div>
        </div>
    );
};

export default AvailablePhones;