import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import Button from './Button'
import Buffet from '../Buffet'

const Summary = () => {

    const [currentPage, setCurrentPage] = useState('Main Menu');

    const [totalCash, setTotalCash] = useState(() => JSON.parse(localStorage.getItem('totalCash')) || 0);
    const [totalCredit, setTotalCredit] = useState(() => JSON.parse(localStorage.getItem('totalCredit')) || 0);
    const [totalItemList, setTotalItemList] = useState(() => JSON.parse(localStorage.getItem('totalItemList')) || []);
    const [totalAmountWithdrawn, setTotalAmountWithdran] = useState(() => JSON.parse(localStorage.getItem('totalAmountWithdrawn')) || 0);
    const [totalDepositAmount, setTotalDepositAmount] = useState(() => JSON.parse(localStorage.getItem('totalDepositAmount')));

    const [sortedItems, setSortedItems] = useState([]);

    let tempItem = {};
    for (let i = 0; i < totalItemList.length; i++) {
        let element = totalItemList[i];
        console.log(element);
    }

    if (currentPage === 'buffet') {
        return <Buffet />;
    }

    return (
        <>
            <Navigation>
                <Button id='buffet' className='btn btn-primary fs-4 mb-1' onClick={() => setCurrentPage('buffet')}>Buffet</Button>
            </Navigation>
            <div className='col-6 p-3'>
                <div className="d-flex col-15">
                    <div className='col-4 fs-5 fw-bold'>Name</div>
                    <div className='col-4 fs-5 fw-bold d-flex justify-content-center'>Amount</div>
                    <div className='col-4 fs-5 fw-bold'>Price</div>
                </div>
                <hr className='m-1'/>
                {totalItemList.map((item, index) => (
                    <>
                        <div key={index} className='d-flex'>
                            <div key={item.name + index + 1} className='col-4'>{item.name}</div>
                            <div key={item.name + index + 2} className='col-4 d-flex justify-content-center'>{item.amount}</div>
                            <div key={item.name + index + 3} className='col-4'>{item.price}</div>
                        </div>
                        <hr className='m-1'/>
                    </>
                ))}
            </div>
            <div className='p-3 col-4 fw-bold'>
                <hr />
                <div className='d-flex'>
                    <div className='col-6'>Cash:</div>
                    <div className='col-6'>{totalCash}</div>    
                </div>
                <hr />
                <div className='d-flex'>
                    <div className='col-6'>Credit:</div>
                    <div className='col-6'>{totalCredit}</div>    
                </div>
                <hr />
                <div className='d-flex'>
                    <div className='col-6'>Deposit:</div>
                    <div className='col-6'>{totalDepositAmount}</div>    
                </div>
                <hr />
                <div className='d-flex'>
                    <div className='col-6'>Amount Withdrawn:</div>
                    <div className='col-6'>{totalAmountWithdrawn}</div>    
                </div>
                <hr />
            </div>
            
        </>
    )
}

export default Summary