import React from "react";
import Button from "./Button";

const BankNoteButtons = ({ onClick }) => {
    return (
        <>
            <div className='d-flex flex-column bg-dark'>
                <Button className={'btn btn-warning fs-4 fw-bold m-1 mt-1 mb-1 p-1 pt-3 pb-3'} value={20000} onClick={onClick}>20000</Button>
                <Button className={'btn btn-warning fs-4 fw-bold m-1 mt-1 mb-1 p-1 pt-3 pb-3'} value={10000} onClick={onClick}>10000</Button>
                <Button className={'btn btn-warning fs-4 fw-bold m-1 mt-1 mb-1 p-1 pt-3 pb-3'} value={5000} onClick={onClick}>5000</Button>
                <Button className={'btn btn-warning fs-4 fw-bold m-1 mt-1 mb-1 p-1 pt-3 pb-3'} value={2000} onClick={onClick}>2000</Button>
                <Button className={'btn btn-warning fs-4 fw-bold m-1 mt-1 mb-1 p-1 pt-3 pb-3'} value={1000} onClick={onClick}>1000</Button>
            </div> 
        </>
    );
}

export default BankNoteButtons