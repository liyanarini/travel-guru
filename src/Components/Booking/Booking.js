import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import FakeData from '../FakeData/FakeData';
import Header from '../Header/Header';
import './Booking.css'

const Booking = () => {
    const {name} = useParams()
    console.log(name)
    const booking = FakeData.find( place => place.name===name);
    const {title, details} = booking;
    return (
        <div className="home">
                <Header></Header>
                <div className="container">
                    <div className="d-flex">
                        <div className="col-md-5 right-text">
                            <h1>{title}</h1>
                            <p>{details}</p>
                        </div>
                        <div className="col-md-7 ">
                            <div className="form-area">
                                <form>
                                <label >Origin</label>
                                <br />
                                <input name="origin" type="text" />
                                <br />
                                <label> Destination</label>
                                <br />
                                <input name="destination" type="text" />
                                <div className="d-flex justify-content-between date-input">
                                    <div>
                                        <label>From</label>
                                        <br />
                                        <input type="date" />
                                    </div>
                                    <div className="to-input">
                                        <label>To</label>
                                        <br />
                                        <input type="date" />
                                    </div>
                                </div>
                                <Link to={`/book/hotel/for/${name}`}>
                                    <button type="submit" className="btn btn-warning book-btn">
                                        Start Booking
                                    </button>
                                </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
    );
};

export default Booking;