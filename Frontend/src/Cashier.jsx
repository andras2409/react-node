import React, { useState, useEffect } from 'react';
import MainMenu from './MainMenu';
import BankNoteButtons from './components/BankNoteButtons';
import Button from './components/Button';
import Keypad from './components/Keypad';
import DropdownButton from './components/DropdownButton';
import { 
    DeleteBasket, 
    CashPayment, 
    CreditPayment, 
    SaveItems, 
    DeleteNumbers, 
    DeleteLocalStorage, 
    BanknoteClicked,
    HandleKeypadClicked
} from '../../Backend/calculator.js';
import Summary from './components/Summary.jsx';
import MovieButton from './components/MovieButton.jsx';
import Auditorium_1 from './components/Auditoriums/Auditorium_1.jsx';
import Auditorium_2 from './components/Auditoriums/Auditorium_2.jsx';
import Auditorium_3 from './components/Auditoriums/Auditorium_3.jsx';
import TicketMenu from './components/TicketMenu.jsx';

function Cashier() {

    const [currentPage, setCurrentPage] = useState('Cashier');

    const [tickets, setTickets] = useState([]);
    const [price, setPrice] = useState(0);
    const [change, setChange] = useState(0);
    const [transactionInprogress, setTransactionInprogress] = useState(false);
    const [amountReceived, setAmountReceived] = useState(0);
    const [banknoteWasClicked, setBanknoteWasClicked] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('');

    const [totalCash, setTotalCash] = useState(() => JSON.parse(localStorage.getItem('totalCash')) || 0);
    const [totalCredit, setTotalCredit] = useState(() => JSON.parse(localStorage.getItem('totalCredit')) || 0);
    const [totalTickets, setTotalTickets] = useState(() => JSON.parse(localStorage.getItem('totalTickets')) || []);

    //--------Withdrawal--------//
    const [withdrawal, setWithdrawal] = useState(false);
    const [currentWithdrawalAmount, setCurrentWithdrawalAmount] = useState(0);
    const [totalWithdrawal, setTotalWithdrawal] = useState(() => JSON.parse(localStorage.getItem('totalWithdrawal')) || 0);

    //--------Debit--------//
    const [deposit, setDeposit] = useState(false);
    const [currentDeposit, setCurrentDeposit] = useState(0);
    const [totalDeposit, setTotalDeposit] = useState(() => JSON.parse(localStorage.getItem('totalDeposit')) || 0);

    //--------Displays--------//
    const [displayAmount, setDisplayAmount] = useState(0);
    const [displayPrice, setDisplayPrice] = useState(0);
    const [displayTrasnaction, setDisplayTransaction] = useState('');
    const [displayAuditorium, setDisplayAuditorium] = useState('');
    const [currentAud, setCurrentAud] = useState('');


    useEffect(() => {
        localStorage.setItem('totalCash', JSON.stringify(totalCash));
        localStorage.setItem('totalCredit', JSON.stringify(totalCredit));
        localStorage.setItem('totalWithdrawal', JSON.stringify(totalWithdrawal));
        localStorage.setItem('totalDeposit', JSON.stringify(totalDeposit));
    }, [totalCash, totalCredit, totalWithdrawal, totalDeposit]);

    function Withdrawal() {
        if (amountReceived > 0) {
            setWithdrawal(true);
            setCurrentWithdrawalAmount(amountReceived);
        } else {
            setDisplayTransaction(
                <ul className='list-group'>
                    <li className='list-group-item bg-danger-subtle d-flex'>
                        <div className='col-6'>Withdraw Not Possible</div>
                    </li>
                </ul>
            );
            setWithdrawal(false);
            setCurrentWithdrawalAmount(0);
            DeleteNumbers(transactionInprogress, paymentMethod, setAmountReceived)
        }
    }

    function Deposit() {
        if (amountReceived > 0) {
            setDeposit(true);
            setCurrentDeposit(amountReceived);
        } else {
            setDisplayTransaction(
                <ul className='list-group'>
                    <li className='list-group-item bg-danger-subtle d-flex'>
                        <div className='col-6'>Deposit Not Possible</div>
                    </li>
                </ul>
            );
            setDeposit(false);
            setCurrentDeposit(0);
            DeleteNumbers(transactionInprogress, paymentMethod, setAmountReceived);
        }
    }

    useEffect(() => {
        if (deposit) {
            if (transactionInprogress && paymentMethod === '') {
                if (price === 0) {
                    setTotalDeposit(parseInt(totalDeposit) + parseInt(currentDeposit));
                    setDisplayTransaction(
                        <ul className='list-group'>
                            <li className='list-group-item bg-success-subtle d-flex'>
                                <div className='col-6'>Deposit:</div>
                                <div>{currentDeposit}</div>
                            </li>
                        </ul>
                    );
                    setDeposit(false);
                    setCurrentDeposit(0);
                    DeleteNumbers(transactionInprogress, paymentMethod, setAmountReceived);
                } else {
                    setDisplayTransaction(
                        <ul className='list-group'>
                            <li className='list-group-item bg-danger-subtle d-flex'>
                                <div className='col-6'>Deposit Not Possible</div>
                            </li>
                        </ul>
                    );
                    setDeposit(false);
                    setCurrentDeposit(0);
                    DeleteNumbers(transactionInprogress, paymentMethod, setAmountReceived);
                }
                
            }
            if (!transactionInprogress) {
                if (paymentMethod === '') {
                    setTotalDeposit(parseInt(totalDeposit) + parseInt(currentDeposit));
                    setDisplayTransaction(
                        <ul className='list-group'>
                            <li className='list-group-item bg-success-subtle d-flex'>
                                <div className='col-6'>Deposit:</div>
                                <div>{currentDeposit}</div>
                            </li>
                        </ul>
                    );
                    setDeposit(false);
                    setCurrentDeposit(0);
                    DeleteNumbers(transactionInprogress, paymentMethod, setAmountReceived);
                } else {
                    setDisplayTransaction(
                        <ul className='list-group'>
                            <li className='list-group-item bg-danger-subtle d-flex'>
                                <div className='col-6'>Deposit Not Possible</div>
                            </li>
                        </ul>
                    );
                    setDeposit(false);
                    setCurrentDeposit(0);
                    DeleteNumbers(transactionInprogress, paymentMethod, setAmountReceived);
                }
            }
        }
    },[deposit, totalDeposit, currentDeposit, transactionInprogress, paymentMethod, price]);

    useEffect(() => {
        if (withdrawal) {
            if (parseInt(totalCash) >= parseInt(totalWithdrawal) + parseInt(currentWithdrawalAmount)) {
                if (transactionInprogress && paymentMethod === '') {
                    if (price === 0) {
                        setTotalWithdrawal(parseInt(totalWithdrawal) + parseInt(currentWithdrawalAmount));
                        setDisplayTransaction(
                            <ul className='list-group'>
                                <li className='list-group-item bg-success-subtle d-flex'>
                                    <div className='col-6'>Amount Withdrawn:</div>
                                    <div>{currentWithdrawalAmount}</div>
                                </li>
                            </ul>
                        );
                        setWithdrawal(false);
                        setCurrentWithdrawalAmount(0);
                        DeleteNumbers(transactionInprogress, paymentMethod, setAmountReceived);
                    } else {
                        setDisplayTransaction(
                            <ul className='list-group'>
                                <li className='list-group-item bg-danger-subtle d-flex'>
                                    <div className='col-6'>Withdraw Not Possible</div>
                                </li>
                            </ul>
                        );
                        setWithdrawal(false);
                        setCurrentWithdrawalAmount(0);
                        DeleteNumbers(transactionInprogress, paymentMethod, setAmountReceived);
                    }
                    
                }
                if (!transactionInprogress) {
                    if (paymentMethod === '') {
                        setTotalWithdrawal(parseInt(totalWithdrawal) + parseInt(currentWithdrawalAmount));
                        setDisplayTransaction(
                            <ul className='list-group'>
                                <li className='list-group-item bg-success-subtle d-flex'>
                                    <div className='col-6'>Amount Withdrawn:</div>
                                    <div>{currentWithdrawalAmount}</div>
                                </li>
                            </ul>
                        );
                        setWithdrawal(false);
                        setCurrentWithdrawalAmount(0);
                        DeleteNumbers(transactionInprogress, paymentMethod, setAmountReceived);
                    } else {
                        setDisplayTransaction(
                            <ul className='list-group'>
                                <li className='list-group-item bg-danger-subtle d-flex'>
                                    <div className='col-6'>Withdraw Not Possible</div>
                                </li>
                            </ul>
                        );
                        setWithdrawal(false);
                        setCurrentWithdrawalAmount(0);
                        DeleteNumbers(transactionInprogress, paymentMethod, setAmountReceived);
                    }
                }
            } else {
                setDisplayTransaction(
                    <ul className='list-group'>
                        <li className='list-group-item bg-danger-subtle d-flex'>
                            <div className='col-6'>Withdraw Not Possible</div>
                        </li>
                    </ul>
                );
                setWithdrawal(false);
                setCurrentWithdrawalAmount(0);
                DeleteNumbers(transactionInprogress, paymentMethod, setAmountReceived);
            }
        }
    },[withdrawal, transactionInprogress, paymentMethod, totalCash, totalWithdrawal, currentWithdrawalAmount]);

    useEffect(() => {
        if (!transactionInprogress && price === 0) {
            setDisplayPrice(price);
            setDisplayAmount(amountReceived);
        } else if (transactionInprogress) {
            setDisplayPrice(price);
            setDisplayAmount(amountReceived);
        } else {
            setDisplayPrice(price);
            setDisplayAmount('Change: ' + change);
        }

        if (!transactionInprogress) {
            if (paymentMethod === 'cash') {
                SaveItems(tickets, totalTickets);
                setTotalCash(totalCash + price);
                setDisplayTransaction(
                    <>
                        <ul className='list-group'>
                            <li className='list-group-item bg-success-subtle d-flex'>
                                <div className='col-6'>Payment Method:</div>
                                <div>{paymentMethod}</div>
                            </li>
                            <li className='list-group-item bg-success-subtle d-flex'>
                                <div className='col-6'>Price:</div>
                                <div>{price}</div>
                            </li>
                            <li className='list-group-item bg-success-subtle d-flex'>
                                <div className='col-6'>Amount Received:</div>
                                <div>{amountReceived}</div>
                            </li>
                            <li className='list-group-item bg-success-subtle d-flex'>
                                <div className='col-6'>Change:</div>
                                <div>{change}</div>
                            </li>
                        </ul> 
                    </>
                );
            }
            if (paymentMethod === 'credit') {
                SaveItems(basket, totalItemList);
                setTotalCredit(totalCredit + price);
                setDisplayTransaction(
                    <>
                        <ul className='list-group'>
                            <li className='list-group-item bg-success-subtle'>Payment Method: {paymentMethod}</li>
                            <li className='list-group-item bg-success-subtle'>Price: {price}</li>
                        </ul> 
                    </>
                );
            }
        }
    },[price, amountReceived, transactionInprogress, change]);

    const roomOne = [
        {title: 'Dune: Part One', startingTime: '18:30', classification: 16, seats: 128},
        {title: 'Dune: Part Two', startingTime: '19:45', classification: 16, seats: 128},
        {title: 'Avatar: The Way Of Water', startingTime: '21:30', classification: 16, seats: 128},
        {title: 'The Conjuring', startingTime: '22:30', classification: 18, seats: 128}
    ];

    useEffect(() => {
        if (currentAud === '') {
            setDisplayAuditorium(
                <>
                    <div className='d-flex justify-content-start p-1'>
                        {roomOne.map((movie, index) => (
                            <MovieButton 
                                key={index}
                                title={movie.title}
                                startingTime={movie.startingTime}
                                classification={movie.classification}
                                seats={movie.seats}
                                onClick={() => setCurrentAud('aud-1')}
                            />
                        ))}
                    </div>
                    <div className='d-flex justify-content-start p-1 pt-0'>
                        {roomOne.map((movie, index) => (
                            <MovieButton 
                                key={index}
                                title={movie.title}
                                startingTime={movie.startingTime}
                                classification={movie.classification}
                                seats={movie.seats}
                                onClick={() => setCurrentAud('aud-2')}
                            />
                        ))}
                    </div>
                    <div className='d-flex justify-content-start p-1 pt-0'>
                        {roomOne.map((movie, index) => (
                            <MovieButton 
                                key={index}
                                title={movie.title}
                                startingTime={movie.startingTime}
                                classification={movie.classification}
                                seats={movie.seats}
                                onClick={() => setCurrentAud('aud-3')}
                            />
                        ))}
                    </div>
                </>
            );
        }
        if (currentAud === "aud-1") {
            setDisplayAuditorium(
                <>
                    <Auditorium_1 />
                    <TicketMenu back={() => setCurrentAud('')}/>
                </>
            );
        }
        if (currentAud === "aud-2") {
            setDisplayAuditorium(
                <>
                    <Auditorium_2 />
                    <TicketMenu back={() => setCurrentAud('')}/>
                </>
            );
        }
        if (currentAud === "aud-3") {
            setDisplayAuditorium(
                <>
                    <Auditorium_3 />
                    <TicketMenu back={() => setCurrentAud('')}/>
                </>
            );
        }
    },[currentAud]);

    if (currentPage === 'back-to-main') {
        return <MainMenu />;
    } else if (currentPage === 'summary') {
        return <Summary />
    }

    return (
        <> 
            <div className='d-flex vh-100'>
                <div className='d-flex col-8 bg-dark bg-gradient'>
                    <div className='d-flex flex-column flex-fill col-11'>
                        {displayAuditorium}
                            

                        
                        
                    </div>
                    <BankNoteButtons onClick={(e) => BanknoteClicked(e, transactionInprogress, price, setBanknoteWasClicked, setAmountReceived, setChange, setTransactionInprogress, setPaymentMethod, paymentMethod, setTickets, setPrice, setDisplayTransaction)} />
                </div>
                <div className='col-3 d-flex flex-column flex-fill justify-content-between bg-secondary bg-gradient'>
                    <div className='bg-dark text-white d-flex justify-content-center fs-3 fw-bold'>
                        {displayPrice}
                    </div>
                    <div className={'h-100 overflow-auto m-2'}>
                        {displayTrasnaction}
                    </div>
                    <div className='d-flex justify-content-center align-items-center text-white fs-4 fw-bold bg-dark m-2 mt-0'>
                        {displayAmount}
                    </div>
                    <div className="d-flex justify-content-around">
                        <div className='col-4 p-1 pt-0 pb-0 d-flex'>
                            <Button className={'btn btn-primary flex-fill fs-6'} onClick={() => DeleteNumbers(transactionInprogress, paymentMethod, setAmountReceived)}>Delete Number</Button>
                        </div>
                        <div className='col-4 p-1 pt-0 pb-0 d-flex'>
                            <Button className={'btn btn-primary flex-fill fs-6'} onClick={() => Withdrawal()}>WD</Button>
                        </div>
                        <div className='col-4 p-1 pt-0 pb-0 d-flex'>
                            <Button className={'btn btn-primary flex-fill fs-6'} onClick={() => Deposit()}>Deposit</Button>
                        </div>
                    </div>
                    <Keypad 
                        keypad={(e) => HandleKeypadClicked(e, banknoteWasClicked, transactionInprogress, paymentMethod, setTransactionInprogress, amountReceived, setAmountReceived, setTickets, setDisplayTransaction, setPrice, setPaymentMethod, setChange, setBanknoteWasClicked)}
                        cash={() => CashPayment(price, amountReceived, setChange, setTransactionInprogress, setPaymentMethod)}
                        credit={() => CreditPayment(setTransactionInprogress, setPaymentMethod, price)}
                    />
                </div>
                <div className='d-flex flex-column justify-content-between col-1 bg-dark p-2'>
                    <DropdownButton title={currentPage}>
                        <Button id={'back-to-main'} className={'btn btn-outline-primary m-2 p-2 fs-5'} onClick={() => setCurrentPage('back-to-main')}>Back To Main Menu</Button>
                        <Button id={'back-to-main'} className={'btn btn-outline-primary m-2 p-2 fs-5'} onClick={() => setCurrentPage('summary')}>Summary</Button>
                    </DropdownButton>
                    <div>
                        <Button className={'btn btn-primary fs-6 m-1'} onClick={() => DeleteBasket(setTickets, setDisplayTransaction, setPrice, setAmountReceived, setPaymentMethod, setChange, setBanknoteWasClicked)}>Delete Basket</Button>
                        <Button className={'btn btn-primary fs-6 m-1'} onClick={() => DeleteLocalStorage()}>Delete Storage</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cashier;