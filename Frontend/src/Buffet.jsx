import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import MainMenu from './MainMenu';
import ProductGroup from './components/ProductGroup';
import DropdownButton from './components/DropdownButton';
import { 
    ItemClicked, 
    IncreaseItemAmount, 
    DecreaseItemAmount, 
    DeleteBasket, 
    DeleteItem, 
    DeleteNumbers,
    BanknoteClicked,
    CashPayment,
    CreditPayment,
    KeypadClicked
} from '../../Backend/calculator.js'
import Trash from './components/Trash.jsx';
import Keypad from './components/Keypad.jsx';
import BankNoteButtons from './components/BankNoteButtons.jsx';
import Summary from './components/Summary.jsx';

function Buffet() {

    useEffect(() => {
        fetch('http://localhost:8081/product')
        .then(res => res.json())
        .then(products => setProducts(products))
        .catch(err => console.log(err));
    }, [])

    const [products, setProducts] = useState([]);    
    const [currentPage, setCurrentPage] = useState('Buffet');

    const [basket, setBasket] = useState([]);
    const [price, setPrice] = useState(0);
    const [amountReceived, setAmountReceived] = useState(0);
    const [change, setChange] = useState(0);
    const [banknoteClicked, setBanknoteClicked] = useState(false);
    const [displayPrice, setDisplayPrice] = useState();
    const [transactionOngoing, setTransactionOngoing] = useState(true);
    const [displayTrasnaction, setDisplayTransaction] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [displayAmount, setDisplayAmount] = useState(0);
    const [isItemClicked, setIsItemClicked] = useState(false);
    const [itemClicked, setItemClicked] = useState(null);
    const [paymentSuccessful, setPaymentSuccessful] = useState(false);
    const [transactionNumber, setTransactionNumber] = useState(0);

    const [totalItemList, setTotalItemList] = useState(() => JSON.parse(localStorage.getItem('totalItemList')) || []);
    const [totalCash, setTotalCash] = useState(() => JSON.parse(localStorage.getItem('totalCash')) || 0);
    const [totalCredit, setTotalCredit] = useState(() => JSON.parse(localStorage.getItem('totalCredit')) || 0);

    const [amountWithdrawn, setAmountWithdrawn] = useState(0);
    const [totalAmountWithdrawn, setTotalAmountWithdran] = useState(() => JSON.parse(localStorage.getItem('totalAmountWithdrawn')) || 0);
    const [withdrawal, setwithdrawal] = useState(false);

    const [depositAmount, setDepositAmount] = useState(0);
    const [deposit, setDeposit] = useState(false);
    const [totalDepositAmount, setTotalDepositAmount] = useState(() => JSON.parse(localStorage.getItem('totalDepositAmount')) || 0);

    function HandleItemClicked(newItem) {
        if (!transactionOngoing) {
            DeleteBasket(setBasket, setPrice, setAmountReceived, setChange, setDisplayTransaction, setDisplayAmount, setPaymentMethod, setPaymentSuccessful);
        }
        
        setItemClicked(newItem);
        setIsItemClicked(true);
        setTransactionOngoing(true);
    };

    function DeleteLocalStorage() {
        localStorage.clear();
    }

    function Deposit() {
        if (amountReceived > 0) {
            setDeposit(true);
            setDepositAmount(amountReceived);
        }
    }

    function Withdrawal() {
        if (amountReceived > 0) {
            setAmountWithdrawn(amountReceived)
            setwithdrawal(true);
        }
    }

    useEffect(() => {
        const isWithdrawPossible = withdrawal && (parseInt(totalCash) - (parseInt(totalAmountWithdrawn) + parseInt(amountWithdrawn))) >= 0;
        if (isWithdrawPossible && !paymentSuccessful && transactionOngoing) {
            localStorage.setItem('totalAmountWithdrawn', JSON.stringify(parseInt(parseInt(totalAmountWithdrawn) + parseInt(amountWithdrawn))));
            setDisplayTransaction(
                <ul className='list-group'>
                    <li className='list-group-item bg-success-subtle d-flex'>
                        <div className='col-6'>Amount Withdrawn:</div>
                        <div>{amountWithdrawn}</div>
                    </li>
                </ul>
            );
            setAmountWithdrawn(0);
            setwithdrawal(false);
        } else if (withdrawal) {
            setDisplayTransaction(
                <ul className='list-group'>
                    <li className='list-group-item bg-danger-subtle d-flex'>
                        <div className='col-6'>Withdraw Not Possible</div>
                    </li>
                </ul>
            );
            setAmountWithdrawn(0);
            setwithdrawal(false);
        }
    });

    useEffect(() => {
        if (deposit && depositAmount > 0 && !paymentSuccessful && transactionOngoing && price === 0) {
            localStorage.setItem('totalDepositAmount', JSON.stringify(parseInt(totalDepositAmount) + parseInt(depositAmount)));
            setDisplayTransaction(
                <ul className='list-group'>
                    <li className='list-group-item bg-success-subtle d-flex'>
                        <div className='col-6'>Deposit:</div>
                        <div>{depositAmount}</div>
                    </li>
                </ul>
            );
            setDeposit(false);
            setDepositAmount(0);
        } else if (paymentSuccessful && !transactionOngoing) {
            setDisplayTransaction(
                <ul className='list-group'>
                    <li className='list-group-item bg-danger-subtle d-flex'>
                        <div className='col-6'>Deposit Not Possible</div>
                    </li>
                </ul>
            );
            setDeposit(false);
            setDisplayAmount(0);
        }
    }, [deposit, depositAmount, totalDepositAmount]);

    function SaveItems(basket, totalItemList) {
        for (let i = 0; i < basket.length; i++) {
            totalItemList.push(basket[i]);
        }
    }

    useEffect(() => {
        localStorage.setItem('totalCash', JSON.stringify(totalCash));
        localStorage.setItem('totalCredit', JSON.stringify(totalCredit));
        localStorage.setItem('totalItemList', JSON.stringify(totalItemList));
    }, [totalCash, totalCredit, totalItemList]);

    useEffect(() => {
        if (transactionOngoing && isItemClicked && itemClicked != null) {
            ItemClicked(itemClicked, basket, price);
            setBasket([...basket]);
            setPrice(price + parseInt(itemClicked.price));
        }
        setItemClicked(null);
    },[itemClicked, isItemClicked, basket, price, transactionOngoing]);

    /*useEffect(() => {
        if (paymentSuccessful) {
            setPaymentSuccessful(false);
            setAmountReceived(0);
        }
    });*/

    useEffect(() => {
        console.log('paymetsucces:'+paymentSuccessful);
        console.log('transactionOngoing:'+transactionOngoing);
    });

    useEffect(() => {
        setDisplayAmount(amountReceived);
    }, [amountReceived]);

    useEffect(() => {
        setDisplayPrice(`${price}`);
        if (!transactionOngoing && paymentMethod === 'Cash') {
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
            setDisplayAmount(`Change: ${change}`);
            setPaymentSuccessful(true);
            SaveItems(basket, totalItemList);
            setTotalCash(totalCash + price);
        }
        if (!transactionOngoing && paymentMethod === 'Credit') {
            setDisplayTransaction(
                <>
                    <ul className='list-group'>
                        <li className='list-group-item bg-success-subtle'>Payment Method: {paymentMethod}</li>
                        <li className='list-group-item bg-success-subtle'>Price: {price}</li>
                    </ul> 
                </>
            );
            setDisplayAmount(`Credit: ${price}`);
            SaveItems(basket, totalItemList);
            setTotalCredit(totalCredit + price);
        }
        if (transactionOngoing && isItemClicked){
            setDisplayTransaction(
                <ul className={'list-group'}>
                    {basket.map((item, index) => (
                        <li className={'list-group-item d-flex justify-content-between p-1'} key={index}>
                            <div className='d-flex justify-content-center align-items-center'>
                                {item.name}
                            </div>
                            <div className='btn-group col-6'>
                                <div className='d-flex col-8'>
                                    <button className='btn btn-secondary' onClick={() => DecreaseItemAmount(index, basket, setBasket, price, setPrice)}>-</button>
                                    <div className='d-flex justify-content-center align-items-center p-3 pt-2 pb-2 col-4'>{item.amount}</div>
                                    <button className='btn btn-secondary' onClick={() => IncreaseItemAmount(index, price, basket, setBasket, setPrice)}>+</button>
                                </div>
                                <Trash divClass={'d-flex justify-content-center col-4'} onClick={() => DeleteItem(index, setBasket, basket, setPrice, price)}/>
                            </div>
                        </li>
                    ))}
                </ul>
            );
            setDisplayAmount(amountReceived);
        }
    }, [price, transactionOngoing, change, amountReceived, paymentMethod, basket]);

    if (currentPage === 'back-to-main') {
        return <MainMenu />;
    } else if (currentPage === 'summary') {
        return <Summary />;
    }

    return (
        <> 
            <div className='d-flex vh-100'>
                <div className='d-flex col-8 bg-dark bg-gradient p-1'>
                    <div className='d-flex flex-column flex-fill col-11'>
                        <div className="d-flex col-12">
                            <div className='col-8'>
                                <ProductGroup divClass={'d-flex'} className={'btn btn-primary col-1 m-1 p-2 flex-fill'} items={products.filter(products => products.type === 'popcorn')} onClick={HandleItemClicked}/>
                                <ProductGroup divClass={'d-flex'} className={'btn bg-primary-subtle col-1 m-1 p-2 flex-fill'} items={products.filter(products => products.type === 'popcornmenu')} onClick={HandleItemClicked}/>
                                <ProductGroup divClass={'d-flex'} className={'btn bg-danger-subtle col-1 m-1 p-2 flex-fill'} items={products.filter(products => products.type === 'pepsidrink')} onClick={HandleItemClicked}/>
                                <ProductGroup divClass={'d-flex'} className={'btn btn-primary col-1 m-1 p-2 flex-fill'} items={products.filter(products => products.type === 'nachos')} onClick={HandleItemClicked}/>
                                <ProductGroup divClass={'d-flex'} className={'btn bg-primary-subtle col-1 m-1 p-2 flex-fill'} items={products.filter(products => products.type === 'nachosmenu')} onClick={HandleItemClicked}/>
                            </div>
                            <ProductGroup divClass={'col-2 d-flex flex-column'} className={'btn btn-dark flex-fill m-1'} items={products.filter(products => products.type === 'extra')} onClick={HandleItemClicked}/>
                            <div className='d-flex flex-column col-2'>
                                <ProductGroup divClass={'col d-flex flex-column'} className={'btn btn-secondary flex-fill m-1'} items={products.filter(products => products.type === 'snackgram')} onClick={HandleItemClicked}/>
                                <ProductGroup divClass={'col d-flex flex-column'} className={'btn btn-secondary flex-fill m-1'} items={products.filter(products => products.type === 'energydrink')} onClick={HandleItemClicked}/>
                            </div>
                        </div>
                        <div className='d-flex col-12'>
                            <div className="col-6 d-flex flex-column justify-content-between">
                                <ProductGroup divClass={'d-flex flex-wrap'} className={'btn btn-success col-3 flex-fill m-1'} items={products.filter(products => products.type === 'bottleddrink')} onClick={HandleItemClicked}/>
                                <ProductGroup divClass={'d-flex flex-wrap'} className={'btn btn-danger col-1 flex-fill m-1'} items={products.filter(products => products.type === 'alcoholicdrink')} onClick={HandleItemClicked}/>
                            </div>
                            <ProductGroup divClass={'d-flex flex-wrap col-6'} className={'btn btn-warning col-3 flex-fill m-1'} items={products.filter(products => products.type === 'snack')} onClick={HandleItemClicked}/>
                        </div>
                    </div>
                    <BankNoteButtons onClick={(e) => BanknoteClicked(e, setBanknoteClicked, setAmountReceived, setTransactionOngoing, setPaymentMethod, setChange, price, setPaymentSuccessful, setTransactionNumber, transactionNumber, transactionOngoing, amountReceived)} />
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
                            <Button className={'btn btn-primary flex-fill fs-6'} onClick={() => DeleteNumbers(setAmountReceived, transactionOngoing)}>Delete Number</Button>
                        </div>
                        <div className='col-4 p-1 pt-0 pb-0 d-flex'>
                            <Button className={'btn btn-primary flex-fill fs-6'} onClick={() => Withdrawal()}>WD</Button>
                        </div>
                        <div className='col-4 p-1 pt-0 pb-0 d-flex'>
                            <Button className={'btn btn-primary flex-fill fs-6'} onClick={() => Deposit()}>Deposit</Button>
                        </div>
                    </div>
                    <Keypad 
                        keypad={(e) => KeypadClicked(e, banknoteClicked, setAmountReceived, setBanknoteClicked, amountReceived, setDisplayAmount, transactionOngoing, setBasket, setPrice, setChange, setDisplayTransaction, setPaymentMethod, setPaymentSuccessful, setTransactionOngoing)}
                        cash={() => CashPayment(setTransactionOngoing, setPaymentMethod, setChange, amountReceived, price, setPaymentSuccessful, setTransactionNumber, transactionNumber, setAmountReceived)}
                        credit={() => CreditPayment(setTransactionOngoing, setPaymentMethod, setChange, setPaymentSuccessful, transactionOngoing, price)}
                    />
                </div>
                <div className='d-flex flex-column justify-content-between col-1 bg-dark p-2'>
                    <DropdownButton title={currentPage}>
                        <Button id={'back-to-main'} className={'btn btn-outline-primary m-2 p-2 fs-5'} onClick={() => setCurrentPage('back-to-main')}>Back To Main Menu</Button>
                        <Button id={'back-to-main'} className={'btn btn-outline-primary m-2 p-2 fs-5'} onClick={() => setCurrentPage('summary')}>Summary</Button>
                    </DropdownButton>
                    <div>
                        <Button className={'btn btn-primary fs-6 m-1'} onClick={() => DeleteBasket(setBasket, setPrice, setAmountReceived, setChange, setDisplayTransaction, setDisplayAmount, setPaymentMethod, setPaymentSuccessful)}>Delete Basket</Button>
                        <Button className={'btn btn-primary fs-6 m-1'} onClick={() => DeleteLocalStorage()}>Delete Storage</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Buffet;