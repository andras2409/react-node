import React, { useEffect, useState } from 'react'

const Auditorium_1 = ({ ticketBasket, paymentMethod, movieNumber, currentAud }) => {

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
                <div className='d-flex flex-column col-1 text-white'>
                    <div className='d-flex flex-column justify-content-center mb-5'>
                        <div>Aud: {currentAud}</div>
                        <div>Movie: {movieNumber}</div>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <div>Selected</div>
                        <div className='seat selected-example m-2'></div>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <div>Occupied</div>
                        <div className='seat occupied-example m-2'></div>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <div>Reserved</div>
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
                                        <div className='seat' data-value={'F/L1'} onClick={(e) => setClicked(e)}>1</div>
                                        <div className='seat' data-value={'F/L2'} onClick={(e) => setClicked(e)}>2</div>
                                        <div className='seat' data-value={'F/L3'} onClick={(e) => setClicked(e)}>3</div>
                                        <div className='seat' data-value={'F/L4'} onClick={(e) => setClicked(e)}>4</div>
                                        <div className='seat' data-value={'F/L5'} onClick={(e) => setClicked(e)}>5</div>
                                        <div className='seat' data-value={'F/L6'} onClick={(e) => setClicked(e)}>6</div>
                                        <div className='seat' data-value={'F/L7'} onClick={(e) => setClicked(e)}>7</div>
                                        <div className='seat' data-value={'F/L8'} onClick={(e) => setClicked(e)}>8</div>
                                        <div className='seat' data-value={'F/L9'} onClick={(e) => setClicked(e)}>9</div>
                                        <div className='seat' data-value={'F/L10'} onClick={(e) => setClicked(e)}>10</div>
                                        <div className='seat' data-value={'F/L11'} onClick={(e) => setClicked(e)}>11</div>
                                        <div className='seat' data-value={'F/L12'} onClick={(e) => setClicked(e)}>12</div>
                                        <div className='seat' data-value={'F/L13'} onClick={(e) => setClicked(e)}>13</div>
                                        <div className='seat' data-value={'F/L14'} onClick={(e) => setClicked(e)}>14</div>
                                        <div className='seat' data-value={'F/L15'} onClick={(e) => setClicked(e)}>15</div>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <div className='seat' data-value={'G/L1'} onClick={(e) => setClicked(e)}>1</div>
                                        <div className='seat' data-value={'G/L2'} onClick={(e) => setClicked(e)}>2</div>
                                        <div className='seat' data-value={'G/L3'} onClick={(e) => setClicked(e)}>3</div>
                                        <div className='seat' data-value={'G/L4'} onClick={(e) => setClicked(e)}>4</div>
                                        <div className='seat' data-value={'G/L5'} onClick={(e) => setClicked(e)}>5</div>
                                        <div className='seat' data-value={'G/L6'} onClick={(e) => setClicked(e)}>6</div>
                                        <div className='seat' data-value={'G/L7'} onClick={(e) => setClicked(e)}>7</div>
                                        <div className='seat' data-value={'G/L8'} onClick={(e) => setClicked(e)}>8</div>
                                        <div className='seat' data-value={'G/L9'} onClick={(e) => setClicked(e)}>9</div>
                                        <div className='seat' data-value={'G/L10'} onClick={(e) => setClicked(e)}>10</div>
                                        <div className='seat' data-value={'G/L11'} onClick={(e) => setClicked(e)}>11</div>
                                        <div className='seat' data-value={'G/L12'} onClick={(e) => setClicked(e)}>12</div>
                                        <div className='seat' data-value={'G/L13'} onClick={(e) => setClicked(e)}>13</div>
                                        <div className='seat' data-value={'G/L14'} onClick={(e) => setClicked(e)}>14</div>
                                        <div className='seat' data-value={'G/L15'} onClick={(e) => setClicked(e)}>15</div>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <div className='seat' data-value={'H/L1'} onClick={(e) => setClicked(e)}>1</div>
                                        <div className='seat' data-value={'H/L2'} onClick={(e) => setClicked(e)}>2</div>
                                        <div className='seat' data-value={'H/L3'} onClick={(e) => setClicked(e)}>3</div>
                                        <div className='seat' data-value={'H/L4'} onClick={(e) => setClicked(e)}>4</div>
                                        <div className='seat' data-value={'H/L5'} onClick={(e) => setClicked(e)}>5</div>
                                        <div className='seat' data-value={'H/L6'} onClick={(e) => setClicked(e)}>6</div>
                                        <div className='seat' data-value={'H/L7'} onClick={(e) => setClicked(e)}>7</div>
                                        <div className='seat' data-value={'H/L8'} onClick={(e) => setClicked(e)}>8</div>
                                        <div className='seat' data-value={'H/L9'} onClick={(e) => setClicked(e)}>9</div>
                                        <div className='seat' data-value={'H/L10'} onClick={(e) => setClicked(e)}>10</div>
                                        <div className='seat' data-value={'H/L11'} onClick={(e) => setClicked(e)}>11</div>
                                        <div className='seat' data-value={'H/L12'} onClick={(e) => setClicked(e)}>12</div>
                                        <div className='seat' data-value={'H/L13'} onClick={(e) => setClicked(e)}>13</div>
                                        <div className='seat' data-value={'H/L14'} onClick={(e) => setClicked(e)}>14</div>
                                        <div className='seat' data-value={'H/L15'} onClick={(e) => setClicked(e)}>15</div>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <div className='seat' data-value={'I/L1'} onClick={(e) => setClicked(e)}>1</div>
                                        <div className='seat' data-value={'I/L2'} onClick={(e) => setClicked(e)}>2</div>
                                        <div className='seat' data-value={'I/L3'} onClick={(e) => setClicked(e)}>3</div>
                                        <div className='seat' data-value={'I/L4'} onClick={(e) => setClicked(e)}>4</div>
                                        <div className='seat' data-value={'I/L5'} onClick={(e) => setClicked(e)}>5</div>
                                        <div className='seat' data-value={'I/L6'} onClick={(e) => setClicked(e)}>6</div>
                                        <div className='seat' data-value={'I/L7'} onClick={(e) => setClicked(e)}>7</div>
                                        <div className='seat' data-value={'I/L8'} onClick={(e) => setClicked(e)}>8</div>
                                        <div className='seat' data-value={'I/L9'} onClick={(e) => setClicked(e)}>9</div>
                                        <div className='seat' data-value={'I/L10'} onClick={(e) => setClicked(e)}>10</div>
                                        <div className='seat' data-value={'I/L11'} onClick={(e) => setClicked(e)}>11</div>
                                        <div className='seat' data-value={'I/L12'} onClick={(e) => setClicked(e)}>12</div>
                                        <div className='seat' data-value={'I/L13'} onClick={(e) => setClicked(e)}>13</div>
                                        <div className='seat' data-value={'I/L14'} onClick={(e) => setClicked(e)}>14</div>
                                        <div className='seat' data-value={'I/L15'} onClick={(e) => setClicked(e)}>15</div>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <div className='seat' data-value={'J/L1'} onClick={(e) => setClicked(e)}>1</div>
                                        <div className='seat' data-value={'J/L2'} onClick={(e) => setClicked(e)}>2</div>
                                        <div className='seat' data-value={'J/L3'} onClick={(e) => setClicked(e)}>3</div>
                                        <div className='seat' data-value={'J/L4'} onClick={(e) => setClicked(e)}>4</div>
                                        <div className='seat' data-value={'J/L5'} onClick={(e) => setClicked(e)}>5</div>
                                        <div className='seat' data-value={'J/L6'} onClick={(e) => setClicked(e)}>6</div>
                                        <div className='seat' data-value={'J/L7'} onClick={(e) => setClicked(e)}>7</div>
                                        <div className='seat' data-value={'J/L8'} onClick={(e) => setClicked(e)}>8</div>
                                        <div className='seat' data-value={'J/L9'} onClick={(e) => setClicked(e)}>9</div>
                                        <div className='seat' data-value={'J/L10'} onClick={(e) => setClicked(e)}>10</div>
                                        <div className='seat' data-value={'J/L11'} onClick={(e) => setClicked(e)}>11</div>
                                        <div className='seat' data-value={'J/L12'} onClick={(e) => setClicked(e)}>12</div>
                                        <div className='seat' data-value={'J/L13'} onClick={(e) => setClicked(e)}>13</div>
                                        <div className='seat' data-value={'J/L14'} onClick={(e) => setClicked(e)}>14</div>
                                        <div className='seat' data-value={'J/L15'} onClick={(e) => setClicked(e)}>15</div>
                                    </div>
                                </div>
                                <div className="sector ms-3">
                                    <div className='d-flex'>
                                        <div className='seat' data-value={'A/R12'} onClick={(e) => setClicked(e)}>12</div>
                                        <div className='seat' data-value={'A/R11'} onClick={(e) => setClicked(e)}>11</div>
                                        <div className='seat' data-value={'A/R10'} onClick={(e) => setClicked(e)}>10</div>
                                        <div className='seat' data-value={'A/R9'} onClick={(e) => setClicked(e)}>9</div>
                                        <div className='seat' data-value={'A/R8'} onClick={(e) => setClicked(e)}>8</div>
                                        <div className='seat' data-value={'A/R7'} onClick={(e) => setClicked(e)}>7</div>
                                        <div className='seat' data-value={'A/R6'} onClick={(e) => setClicked(e)}>6</div>
                                        <div className='seat' data-value={'A/R5'} onClick={(e) => setClicked(e)}>5</div>
                                        <div className='seat' data-value={'A/R4'} onClick={(e) => setClicked(e)}>4</div>
                                        <div className='seat' data-value={'A/R3'} onClick={(e) => setClicked(e)}>3</div>
                                        <div className='seat' data-value={'A/R2'} onClick={(e) => setClicked(e)}>2</div>
                                        <div className='seat' data-value={'A/R1'} onClick={(e) => setClicked(e)}>1</div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat' data-value={'B/R12'} onClick={(e) => setClicked(e)}>12</div>
                                        <div className='seat' data-value={'B/R11'} onClick={(e) => setClicked(e)}>11</div>
                                        <div className='seat' data-value={'B/R10'} onClick={(e) => setClicked(e)}>10</div>
                                        <div className='seat' data-value={'B/R9'} onClick={(e) => setClicked(e)}>9</div>
                                        <div className='seat' data-value={'B/R8'} onClick={(e) => setClicked(e)}>8</div>
                                        <div className='seat' data-value={'B/R7'} onClick={(e) => setClicked(e)}>7</div>
                                        <div className='seat' data-value={'B/R6'} onClick={(e) => setClicked(e)}>6</div>
                                        <div className='seat' data-value={'B/R5'} onClick={(e) => setClicked(e)}>5</div>
                                        <div className='seat' data-value={'B/R4'} onClick={(e) => setClicked(e)}>4</div>
                                        <div className='seat' data-value={'B/R3'} onClick={(e) => setClicked(e)}>3</div>
                                        <div className='seat' data-value={'B/R2'} onClick={(e) => setClicked(e)}>2</div>
                                        <div className='seat' data-value={'B/R1'} onClick={(e) => setClicked(e)}>1</div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat' data-value={'C/R12'} onClick={(e) => setClicked(e)}>12</div>
                                        <div className='seat' data-value={'C/R11'} onClick={(e) => setClicked(e)}>11</div>
                                        <div className='seat' data-value={'C/R10'} onClick={(e) => setClicked(e)}>10</div>
                                        <div className='seat' data-value={'C/R9'} onClick={(e) => setClicked(e)}>9</div>
                                        <div className='seat' data-value={'C/R8'} onClick={(e) => setClicked(e)}>8</div>
                                        <div className='seat' data-value={'C/R7'} onClick={(e) => setClicked(e)}>7</div>
                                        <div className='seat' data-value={'C/R6'} onClick={(e) => setClicked(e)}>6</div>
                                        <div className='seat' data-value={'C/R5'} onClick={(e) => setClicked(e)}>5</div>
                                        <div className='seat' data-value={'C/R4'} onClick={(e) => setClicked(e)}>4</div>
                                        <div className='seat' data-value={'C/R3'} onClick={(e) => setClicked(e)}>3</div>
                                        <div className='seat' data-value={'C/R2'} onClick={(e) => setClicked(e)}>2</div>
                                        <div className='seat' data-value={'C/R1'} onClick={(e) => setClicked(e)}>1</div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat' data-value={'D/R12'} onClick={(e) => setClicked(e)}>12</div>
                                        <div className='seat' data-value={'D/R11'} onClick={(e) => setClicked(e)}>11</div>
                                        <div className='seat' data-value={'D/R10'} onClick={(e) => setClicked(e)}>10</div>
                                        <div className='seat' data-value={'D/R9'} onClick={(e) => setClicked(e)}>9</div>
                                        <div className='seat' data-value={'D/R8'} onClick={(e) => setClicked(e)}>8</div>
                                        <div className='seat' data-value={'D/R7'} onClick={(e) => setClicked(e)}>7</div>
                                        <div className='seat' data-value={'D/R6'} onClick={(e) => setClicked(e)}>6</div>
                                        <div className='seat' data-value={'D/R5'} onClick={(e) => setClicked(e)}>5</div>
                                        <div className='seat' data-value={'D/R4'} onClick={(e) => setClicked(e)}>4</div>
                                        <div className='seat' data-value={'D/R3'} onClick={(e) => setClicked(e)}>3</div>
                                        <div className='seat' data-value={'D/R2'} onClick={(e) => setClicked(e)}>2</div>
                                        <div className='seat' data-value={'D/R1'} onClick={(e) => setClicked(e)}>1</div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat' data-value={'E/R12'} onClick={(e) => setClicked(e)}>12</div>
                                        <div className='seat' data-value={'E/R11'} onClick={(e) => setClicked(e)}>11</div>
                                        <div className='seat' data-value={'E/R10'} onClick={(e) => setClicked(e)}>10</div>
                                        <div className='seat' data-value={'E/R9'} onClick={(e) => setClicked(e)}>9</div>
                                        <div className='seat' data-value={'E/R8'} onClick={(e) => setClicked(e)}>8</div>
                                        <div className='seat' data-value={'E/R7'} onClick={(e) => setClicked(e)}>7</div>
                                        <div className='seat' data-value={'E/R6'} onClick={(e) => setClicked(e)}>6</div>
                                        <div className='seat' data-value={'E/R5'} onClick={(e) => setClicked(e)}>5</div>
                                        <div className='seat' data-value={'E/R4'} onClick={(e) => setClicked(e)}>4</div>
                                        <div className='seat' data-value={'E/R3'} onClick={(e) => setClicked(e)}>3</div>
                                        <div className='seat' data-value={'E/R2'} onClick={(e) => setClicked(e)}>2</div>
                                        <div className='seat' data-value={'E/R1'} onClick={(e) => setClicked(e)}>1</div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat' data-value={'F/R15'} onClick={(e) => setClicked(e)}>15</div>
                                        <div className='seat' data-value={'F/R14'} onClick={(e) => setClicked(e)}>14</div>
                                        <div className='seat' data-value={'F/R13'} onClick={(e) => setClicked(e)}>13</div>
                                        <div className='seat' data-value={'F/R12'} onClick={(e) => setClicked(e)}>12</div>
                                        <div className='seat' data-value={'F/R11'} onClick={(e) => setClicked(e)}>11</div>
                                        <div className='seat' data-value={'F/R10'} onClick={(e) => setClicked(e)}>10</div>
                                        <div className='seat' data-value={'F/R9'} onClick={(e) => setClicked(e)}>9</div>
                                        <div className='seat' data-value={'F/R8'} onClick={(e) => setClicked(e)}>8</div>
                                        <div className='seat' data-value={'F/R7'} onClick={(e) => setClicked(e)}>7</div>
                                        <div className='seat' data-value={'F/R6'} onClick={(e) => setClicked(e)}>6</div>
                                        <div className='seat' data-value={'F/R5'} onClick={(e) => setClicked(e)}>5</div>
                                        <div className='seat' data-value={'F/R4'} onClick={(e) => setClicked(e)}>4</div>
                                        <div className='seat' data-value={'F/R3'} onClick={(e) => setClicked(e)}>3</div>
                                        <div className='seat' data-value={'F/R2'} onClick={(e) => setClicked(e)}>2</div>
                                        <div className='seat' data-value={'F/R1'} onClick={(e) => setClicked(e)}>1</div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat' data-value={'G/R15'} onClick={(e) => setClicked(e)}>15</div>
                                        <div className='seat' data-value={'G/R14'} onClick={(e) => setClicked(e)}>14</div>
                                        <div className='seat' data-value={'G/R13'} onClick={(e) => setClicked(e)}>13</div>
                                        <div className='seat' data-value={'G/R12'} onClick={(e) => setClicked(e)}>12</div>
                                        <div className='seat' data-value={'G/R11'} onClick={(e) => setClicked(e)}>11</div>
                                        <div className='seat' data-value={'G/R10'} onClick={(e) => setClicked(e)}>10</div>
                                        <div className='seat' data-value={'G/R9'} onClick={(e) => setClicked(e)}>9</div>
                                        <div className='seat' data-value={'G/R8'} onClick={(e) => setClicked(e)}>8</div>
                                        <div className='seat' data-value={'G/R7'} onClick={(e) => setClicked(e)}>7</div>
                                        <div className='seat' data-value={'G/R6'} onClick={(e) => setClicked(e)}>6</div>
                                        <div className='seat' data-value={'G/R5'} onClick={(e) => setClicked(e)}>5</div>
                                        <div className='seat' data-value={'G/R4'} onClick={(e) => setClicked(e)}>4</div>
                                        <div className='seat' data-value={'G/R3'} onClick={(e) => setClicked(e)}>3</div>
                                        <div className='seat' data-value={'G/R2'} onClick={(e) => setClicked(e)}>2</div>
                                        <div className='seat' data-value={'G/R1'} onClick={(e) => setClicked(e)}>1</div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat' data-value={'H/R15'} onClick={(e) => setClicked(e)}>15</div>
                                        <div className='seat' data-value={'H/R14'} onClick={(e) => setClicked(e)}>14</div>
                                        <div className='seat' data-value={'H/R13'} onClick={(e) => setClicked(e)}>13</div>
                                        <div className='seat' data-value={'H/R12'} onClick={(e) => setClicked(e)}>12</div>
                                        <div className='seat' data-value={'H/R11'} onClick={(e) => setClicked(e)}>11</div>
                                        <div className='seat' data-value={'H/R10'} onClick={(e) => setClicked(e)}>10</div>
                                        <div className='seat' data-value={'H/R9'} onClick={(e) => setClicked(e)}>9</div>
                                        <div className='seat' data-value={'H/R8'} onClick={(e) => setClicked(e)}>8</div>
                                        <div className='seat' data-value={'H/R7'} onClick={(e) => setClicked(e)}>7</div>
                                        <div className='seat' data-value={'H/R6'} onClick={(e) => setClicked(e)}>6</div>
                                        <div className='seat' data-value={'H/R5'} onClick={(e) => setClicked(e)}>5</div>
                                        <div className='seat' data-value={'H/R4'} onClick={(e) => setClicked(e)}>4</div>
                                        <div className='seat' data-value={'H/R3'} onClick={(e) => setClicked(e)}>3</div>
                                        <div className='seat' data-value={'H/R2'} onClick={(e) => setClicked(e)}>2</div>
                                        <div className='seat' data-value={'H/R1'} onClick={(e) => setClicked(e)}>1</div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat' data-value={'I/R15'} onClick={(e) => setClicked(e)}>15</div>
                                        <div className='seat' data-value={'I/R14'} onClick={(e) => setClicked(e)}>14</div>
                                        <div className='seat' data-value={'I/R13'} onClick={(e) => setClicked(e)}>13</div>
                                        <div className='seat' data-value={'I/R12'} onClick={(e) => setClicked(e)}>12</div>
                                        <div className='seat' data-value={'I/R11'} onClick={(e) => setClicked(e)}>11</div>
                                        <div className='seat' data-value={'I/R10'} onClick={(e) => setClicked(e)}>10</div>
                                        <div className='seat' data-value={'I/R9'} onClick={(e) => setClicked(e)}>9</div>
                                        <div className='seat' data-value={'I/R8'} onClick={(e) => setClicked(e)}>8</div>
                                        <div className='seat' data-value={'I/R7'} onClick={(e) => setClicked(e)}>7</div>
                                        <div className='seat' data-value={'I/R6'} onClick={(e) => setClicked(e)}>6</div>
                                        <div className='seat' data-value={'I/R5'} onClick={(e) => setClicked(e)}>5</div>
                                        <div className='seat' data-value={'I/R4'} onClick={(e) => setClicked(e)}>4</div>
                                        <div className='seat' data-value={'I/R3'} onClick={(e) => setClicked(e)}>3</div>
                                        <div className='seat' data-value={'I/R2'} onClick={(e) => setClicked(e)}>2</div>
                                        <div className='seat' data-value={'I/R1'} onClick={(e) => setClicked(e)}>1</div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='seat' data-value={'J/R15'} onClick={(e) => setClicked(e)}>15</div>
                                        <div className='seat' data-value={'J/R14'} onClick={(e) => setClicked(e)}>14</div>
                                        <div className='seat' data-value={'J/R13'} onClick={(e) => setClicked(e)}>13</div>
                                        <div className='seat' data-value={'J/R12'} onClick={(e) => setClicked(e)}>12</div>
                                        <div className='seat' data-value={'J/R11'} onClick={(e) => setClicked(e)}>11</div>
                                        <div className='seat' data-value={'J/R10'} onClick={(e) => setClicked(e)}>10</div>
                                        <div className='seat' data-value={'J/R9'} onClick={(e) => setClicked(e)}>9</div>
                                        <div className='seat' data-value={'J/R8'} onClick={(e) => setClicked(e)}>8</div>
                                        <div className='seat' data-value={'J/R7'} onClick={(e) => setClicked(e)}>7</div>
                                        <div className='seat' data-value={'J/R6'} onClick={(e) => setClicked(e)}>6</div>
                                        <div className='seat' data-value={'J/R5'} onClick={(e) => setClicked(e)}>5</div>
                                        <div className='seat' data-value={'J/R4'} onClick={(e) => setClicked(e)}>4</div>
                                        <div className='seat' data-value={'J/R3'} onClick={(e) => setClicked(e)}>3</div>
                                        <div className='seat' data-value={'J/R2'} onClick={(e) => setClicked(e)}>2</div>
                                        <div className='seat' data-value={'J/R1'} onClick={(e) => setClicked(e)}>1</div>
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