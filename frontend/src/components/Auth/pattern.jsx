import React from 'react'
import { Container } from 'react-bootstrap'

const Pattern = () => {
    return (
        <Container>
            <div className="row g-0">
                <div className="col-4"><FullPattern/></div>
                <div className="col-4"><FullPattern/></div>
                <div className="col-4"><FullPattern/></div>
            </div>
            <div className="row my-2 g-0">
                <div className="col-4"><HalfPattern/></div>
                <div className="col-4"><HalfPattern/></div>
                <div className="col-4"><HalfPattern/></div>
            </div>
            <div className="row rev-y g-0">
                <div className="col-4"><FullPattern/></div>
                <div className="col-4"><FullPattern/></div>
                <div className="col-4"><FullPattern/></div>
            </div>
        </Container>
    )
}

const FullPattern = () => {
    return (
        <Container className='p-0'>
            <div className="custom-grid">
                <div className="round-box w-half first"></div>
                <div className="round-box w-half reverse second"></div>
                <div className="round-box w-full third reverse"></div>
                <div className="round-box w-half fourth"></div>
                <div className="round-box w-half reverse fifth"></div>
            </div>
        </Container>
    )
}

const HalfPattern = () => {
    return (
        <Container className='p-0'>
            <div className="two-grid">
                <div className="round-box w-half reverse"></div>
                <div className="round-box w-half"></div>
                <div className="round-box w-half"></div>
                <div className="round-box w-half reverse"></div>
            </div>
        </Container>
    )

}

export default Pattern