export function ItemClicked(newItem, basket, price){
        
    let itemFound = false;

    for (let i = 0; i < basket.length; i++) {
        if (basket[i].name === newItem.name) {
            basket[i].amount++;
            itemFound = true;
            break;
        }
    }

    if (!itemFound) {
        basket.push({name: newItem.name, price: newItem.price, amount: 1});
    }

    price += parseInt(newItem.price);

    console.log(basket);
}

export function KeypadClicked(e, banknotClicked, setAmountReceived, setBanknoteClicked, amountReceived, setDisplayAmount, transactionOngoing, setBasket, setPrice, setChange, setDisplayTransaction, setPaymentMethod, setPaymentSuccessful, setTransactionOngoing, price) {
    let key = e.target.value;
    if (transactionOngoing) {
        if (banknotClicked || amountReceived === 0) {
            setBanknoteClicked(false);
            setAmountReceived(key);
            //setDisplayAmount(key);
        }
        if (amountReceived !== 0 /*&& !banknotClicked*/) {
            setAmountReceived(amountReceived + key);
            //setDisplayAmount(amountReceived);
        }
    } else {
        DeleteBasket(setBasket, setPrice, setAmountReceived, setChange, setDisplayTransaction, setDisplayAmount, setPaymentMethod, setPaymentSuccessful);
        setAmountReceived(key);
        setTransactionOngoing(true);
        /*if (banknotClicked || amountReceived === 0) {
            setAmountReceived(0);
            setBanknoteClicked(false);
            setAmountReceived(key);
            //setDisplayAmount(key);
        }
        if (amountReceived !== 0 && !banknotClicked) {
            setAmountReceived(amountReceived + key);
            //setDisplayAmount(amountReceived);
        }*/
    }
}

export function BanknoteClicked(e, setBanknoteClicked, setAmountReceived, setTransactionOngoing, setPaymentMethod, setChange, price, setPaymentSuccessful, setTransactionNumber, transactionNumber, transactionOngoing) {
    if (transactionOngoing && price > 0 && e.target.value >= price) {
        setAmountReceived(e.target.value);
        setBanknoteClicked(true);
    
        CashPayment(setTransactionOngoing, setPaymentMethod, setChange, e.target.value, price, setPaymentSuccessful, setTransactionNumber, transactionNumber);
    }
}

export function DeleteNumbers(setAmountReceived, transactionOngoing) {
    if (transactionOngoing) {
        setAmountReceived(0);
    }
}

export function IncreaseItemAmount(indexToIncrease, price, basket, setBasket, setPrice) {
    setBasket(currentBasket => 
        currentBasket.map((item, index) => 
            index === indexToIncrease ? { ...item, amount: item.amount + 1 } : item
        )
    );
    let newPrice = price + parseInt(basket[indexToIncrease].price);
    setPrice(parseInt(newPrice));
}

export function DecreaseItemAmount(indexToDecrease, basket, setBasket, price, setPrice) {
    if (basket[indexToDecrease].amount === 1) {
        DeleteItem(indexToDecrease, setBasket, basket, setPrice, price);
    } else if (basket[indexToDecrease].amount > 1) {
        setBasket(currentBasket => 
            currentBasket.map((item, index) => 
                index === indexToDecrease ? {...item, amount: item.amount - 1} : item
            )
        );
        let newPrice = price - parseInt(basket[indexToDecrease].price);
        setPrice(parseInt(newPrice));
    }
}

export function DeleteItem(indexToDelete, setBasket, basket, setPrice, price) {
    setBasket(basket => basket.filter((_,index) => index !== indexToDelete));
    let newPrice = price - parseInt(basket[indexToDelete].amount * basket[indexToDelete].price);
    setPrice(parseInt(newPrice));
}

export function DeleteBasket(setBasket, setPrice, setAmountReceived, setChange, setDisplayTransaction, setDisplayAmount, setPaymentMethod, setPaymentSuccessful) {
    setBasket([]);
    setPrice(0);
    setAmountReceived(0);
    setChange(0);
    setDisplayTransaction('');
    setDisplayAmount(0);
    setPaymentMethod('');
    setPaymentSuccessful(false);
}

export function CashPayment(setTransactionOngoing, setPaymentMethod, setChange, amountReceived, price, setPaymentSuccessful, setTransactionNumber, transactionNumber) {
    if (amountReceived >= price && price > 0) {
        setTransactionOngoing(false);
        setPaymentMethod('Cash');
        setChange(amountReceived - price);
        setPaymentSuccessful('PaymentSuccess:' + true);
        setTransactionNumber(transactionNumber + 1);
        setTransactionOngoing(false);
    }
}

export function CreditPayment(setTransactionOngoing, setPaymentMethod, setChange, setPaymentSuccessful, transactionOngoing, price) {
    if (transactionOngoing && price !== 0) {
        setTransactionOngoing(false);
        setPaymentMethod('Credit');
        setChange(0);
        setPaymentSuccessful('PaymentSuccess:' + true);
        setTransactionOngoing(false);
    }
}