import React from 'react'
import Button from './Button'

const TicketMenu = ({ back }) => {
    return (
        <div className='d-flex'>
            <Button className={'btn btn-danger m-1 me-0'} onClick={back}>
                <div>Back</div>
            </Button>
            <Button className={'col-2 btn btn-primary text-truncate m-1 me-0 p-4 pt-1 pb-1'}>
                <div className='fs-5'>Adult</div>
                <div>2600</div>
            </Button>
            <Button className={'col-2 btn btn-primary text-truncate m-1 me-0 p-4 pt-1 pb-1'}>
                <div className='fs-5'>Student</div>
                <div>2200</div>
            </Button>
            <Button className={'col-2 btn btn-primary text-truncate m-1 me-0 p-4 pt-1 pb-1'}>
                <div className='fs-5'>MT Student</div>
                <div>1850</div>
            </Button>
        </div>
    )
}

export default TicketMenu