import React, { useEffect, useState } from 'react'

const Auditorium_1 = ({ ticketBasket, paymentMethod }) => {

    const [numberOfTickets, setNumberOfTickets] = useState(0);
    const [selectedTickets, setSelectedTickets] = useState(0);
    const [soldSeats, setSoldSeats] = useState([]);

    useEffect(() => {
        const totalTickets = ticketBasket.reduce((total, ticket) => total + ticket.amount, 0);
        setNumberOfTickets(totalTickets);
    }, [ticketBasket]);

    function setClicked(e) {
        const seatValue = e.target.getAttribute('data-value');
        if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved') && !e.target.classList.contains('occupied')  && !e.target.classList.contains('selected') && numberOfTickets > selectedTickets) {
            e.target.classList.toggle('selected');
            setSelectedTickets((prev) => prev + 1);
            setSoldSeats((prevSeats) => [...prevSeats, seatValue]);
        } else if (e.target.classList.contains('seat') && e.target.classList.contains('selected')) {
            e.target.classList.remove('selected');
            setSelectedTickets((prev) => prev - 1);
            setSoldSeats((prevSeats) => prevSeats.filter((seat) => seat !== seatValue));
        }
    }

    const seats = document.querySelectorAll('.seat');
    useEffect(() => {
        if (ticketBasket.length === 0) {
            seats.forEach((seat) => {
                seat.classList.remove('selected');
            })
            setSelectedTickets(0);
        }
    },[ticketBasket, seats]);

    useEffect(() => {
        if (paymentMethod !== '') {
            seats.forEach((seat) => {
                if (seat.classList.contains('selected')) {
                    seat.classList.remove('selected');
                    seat.classList.add('occupied');
                }
            })
            setSelectedTickets(0);
            setNumberOfTickets(0);
        }
    },[paymentMethod]);

    
    console.log(seats);
    console.log(soldSeats);

    return (
        <>
            <div className='d-flex flex-fill justify-content-center align-items-center bg-dark'>
                <div className='d-flex flex-column col-1'>
                    <div className='d-flex flex-column align-items-center'>
                        <div className='text-white'>Selected</div>
                        <div className='seat selected-example m-2'></div>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <div className='text-white'>Occupied</div>
                        <div className='seat occupied-example m-2'></div>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <div className='text-white'>Reserved</div>
                        <div className='seat reserved-example m-2'></div>
                    </div>
                    <div className='text-white d-flex flex-column align-items-center mt-5'>
                        <div className='fs-6 text-center'>Selected Tickets</div>
                        <div className='fs-4 fw-semibold'>{numberOfTickets + '/' + selectedTickets}</div>
                    </div>
                </div>

                <div className='d-flex justify-content-center col-11'>
                    <div className='text-dark fw-bold fs-6 d-flex flex-column justify-content-end me-2'>
                        <div className='aud-row'>A</div>
                        <div className='aud-row'>B</div>
                        <div className='aud-row'>C</div>
                        <div className='aud-row'>D</div>
                        <div className='aud-row'>E</div>
                        <div className='aud-row'>F</div>
                        <div className='aud-row'>G</div>
                        <div className='aud-row'>H</div>
                        <div className='aud-row'>I</div>
                        <div className='aud-row'>J</div>
                        <div className='d-flex flex-column mt-4'>
                            <div className='aud-row'>K</div>
                            <div className='aud-row'>L</div>
                            <div className='aud-row'>M</div>
                            <div className='aud-row'>N</div>
                            <div className='aud-row'>O</div>
                            <div className='aud-row'>P</div>
                            <div className='aud-row'>Q</div>
                            <div className='aud-row'>R</div>
                            <div className='aud-row'>S</div>
                            <div className='aud-row'>T</div>
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <div className='screen d-flex m-4'></div>
                        <div className="auditorium d-flex flex-column align-items-center">
                            <div className='d-flex mb-4'>
                                <div className="sector me-3">
                                    <div className='d-flex justify-content-end'>
                                        <div className='seat' data-value={'A/L1'} onClick={(e) => setClicked(e)}>1</div>
                                        <div className='seat' data-value={'A/L2'} onClick={(e) => setClicked(e)}>2</div>
                                        <div className='seat' data-value={'A/L3'} onClick={(e) => setClicked(e)}>3</div>
                                        <div className='seat' data-value={'A/L4'} onClick={(e) => setClicked(e)}>4</div>
                                        <div className='seat' data-value={'A/L5'} onClick={(e) => setClicked(e)}>5</div>
                                        <div className='seat' data-value={'A/L6'} onClick={(e) => setClicked(e)}>6</div>
                                        <div className='seat' data-value={'A/L7'} onClick={(e) => setClicked(e)}>7</div>
                                        <div className='seat' data-value={'A/L8'} onClick={(e) => setClicked(e)}>8</div>
                                        <div className='seat' data-value={'A/L9'} onClick={(e) => setClicked(e)}>9</div>
                                        <div className='seat' data-value={'A/L10'} onClick={(e) => setClicked(e)}>10</div>
                                        <div className='seat' data-value={'A/L11'} onClick={(e) => setClicked(e)}>11</div>
                                        <div className='seat' data-value={'A/L12'} onClick={(e) => setClicked(e)}>12</div>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <div className='seat' data-value={'B/L1'} onClick={(e) => setClicked(e)}>1</div>
                                        <div className='seat' data-value={'B/L2'} onClick={(e) => setClicked(e)}>2</div>
                                        <div className='seat' data-value={'B/L3'} onClick={(e) => setClicked(e)}>3</div>
                                        <div className='seat' data-value={'B/L4'} onClick={(e) => setClicked(e)}>4</div>
                                        <div className='seat' data-value={'B/L5'} onClick={(e) => setClicked(e)}>5</div>
                                        <div className='seat' data-value={'B/L6'} onClick={(e) => setClicked(e)}>6</div>
                                        <div className='seat' data-value={'B/L7'} onClick={(e) => setClicked(e)}>7</div>
                                        <div className='seat' data-value={'B/L8'} onClick={(e) => setClicked(e)}>8</div>
                                        <div className='seat' data-value={'B/L9'} onClick={(e) => setClicked(e)}>9</div>
                                        <div className='seat' data-value={'B/L10'} onClick={(e) => setClicked(e)}>10</div>
                                        <div className='seat' data-value={'B/L11'} onClick={(e) => setClicked(e)}>11</div>
                                        <div className='seat' data-value={'B/L12'} onClick={(e) => setClicked(e)}>12</div>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <div className='seat' data-value={'C/L1'} onClick={(e) => setClicked(e)}>1</div>
                                        <div className='seat' data-value={'C/L2'} onClick={(e) => setClicked(e)}>2</div>
                                        <div className='seat' data-value={'C/L3'} onClick={(e) => setClicked(e)}>3</div>
                                        <div className='seat' data-value={'C/L4'} onClick={(e) => setClicked(e)}>4</div>
                                        <div className='seat' data-value={'C/L5'} onClick={(e) => setClicked(e)}>5</div>
                                        <div className='seat' data-value={'C/L6'} onClick={(e) => setClicked(e)}>6</div>
                                        <div className='seat' data-value={'C/L7'} onClick={(e) => setClicked(e)}>7</div>
                                        <div className='seat' data-value={'C/L8'} onClick={(e) => setClicked(e)}>8</div>
                                        <div className='seat' data-value={'C/L9'} onClick={(e) => setClicked(e)}>9</div>
                                        <div className='seat' data-value={'C/L10'} onClick={(e) => setClicked(e)}>10</div>
                                        <div className='seat' data-value={'C/L11'} onClick={(e) => setClicked(e)}>11</div>
                                        <div className='seat' data-value={'C/L12'} onClick={(e) => setClicked(e)}>12</div>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <div className='seat' data-value={'D/L1'} onClick={(e) => setClicked(e)}>1</div>
                                        <div className='seat' data-value={'D/L2'} onClick={(e) => setClicked(e)}>2</div>
                                        <div className='seat' data-value={'D/L3'} onClick={(e) => setClicked(e)}>3</div>
                                        <div className='seat' data-value={'D/L4'} onClick={(e) => setClicked(e)}>4</div>
                                        <div className='seat' data-value={'D/L5'} onClick={(e) => setClicked(e)}>5</div>
                                        <div className='seat' data-value={'D/L6'} onClick={(e) => setClicked(e)}>6</div>
                                        <div className='seat' data-value={'D/L7'} onClick={(e) => setClicked(e)}>7</div>
                                        <div className='seat' data-value={'D/L8'} onClick={(e) => setClicked(e)}>8</div>
                                        <div className='seat' data-value={'D/L9'} onClick={(e) => setClicked(e)}>9</div>
                                        <div className='seat' data-value={'D/L10'} onClick={(e) => setClicked(e)}>10</div>
                                        <div className='seat' data-value={'D/L11'} onClick={(e) => setClicked(e)}>11</div>
                                        <div className='seat' data-value={'D/L12'} onClick={(e) => setClicked(e)}>12</div>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <div className='seat' data-value={'E/L1'} onClick={(e) => setClicked(e)}>1</div>
                                        <div className='seat' data-value={'E/L2'} onClick={(e) => setClicked(e)}>2</div>
                                        <div className='seat' data-value={'E/L3'} onClick={(e) => setClicked(e)}>3</div>
                                        <div className='seat' data-value={'E/L4'} onClick={(e) => setClicked(e)}>4</div>
                                        <div className='seat' data-value={'E/L5'} onClick={(e) => setClicked(e)}>5</div>
                                        <div className='seat' data-value={'E/L6'} onClick={(e) => setClicked(e)}>6</div>
                                        <div className='seat' data-value={'E/L7'} onClick={(e) => setClicked(e)}>7</div>
                                        <div className='seat' data-value={'E/L8'} onClick={(e) => setClicked(e)}>8</div>
                                        <div className='seat' data-value={'E/L9'} onClick={(e) => setClicked(e)}>9</div>
                                        <div className='seat' data-value={'E/L10'} onClick={(e) => setClicked(e)}>10</div>
                                        <div className='seat' data-value={'E/L11'} onClick={(e) => setClicked(e)}>11</div>
                                        <div className='seat' data-value={'E/L12'} onClick={(e) => setClicked(e)}>12</div>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                        <div className='seat' onClick={(e) => setClicked(e)}></div>
                                    </div>
                                </div>
                                <div className="sector ms-3">
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className="sector me-3">
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat '></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                </div>
                                <div className="sector ms-3">
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                        <div className='seat'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auditorium_1