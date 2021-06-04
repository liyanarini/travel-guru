import React from 'react';
import HeaderDark from '../HeaderDark/HeaderDark';
import './BookHotel.css'

const BookHotel = () => {
    return (
        <div>
            <HeaderDark/>

            <div className="area-info">
                <h3 className="hotel-info">
                    You'll get the hotels info soon! :)
                </h3>
            </div>
        </div>
    );
};

export default BookHotel;