import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './payment.css'

const PaymentPage = () => {
    const [selectedPayment, setSelectedPayment] = useState('');

    const handlePaymentSelection = (paymentOption) => {
        setSelectedPayment(paymentOption);
        // Handle payment submission logic here
        console.log(`Payment submitted: ${paymentOption}`);
    };

    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="mb-4">Selecione Seu Plano</h1>
            <div className="d-flex justify-content-around">
                <div className="card m-3">
                    <div className="card-body">
                        <h5 className="card-title">Basic Plan</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to="/payment-options">
                            <button className="btn btn-primary" onClick={() => handlePaymentSelection('basic')}>Select Plan</button>
                        </Link>
                    </div>
                </div>
                <div className="card m-3">
                    <div className="card-body">
                        <h5 className="card-title">Standard Plan</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to="/payment-options">
                            <button className="btn btn-primary" onClick={() => handlePaymentSelection('standard')}>Select Plan</button>
                        </Link>
                    </div>
                </div>
                <div className="card m-3">
                    <div className="card-body">
                        <h5 className="card-title">Premium Plan</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to="/payment-options">
                            <button className="btn btn-primary" onClick={() => handlePaymentSelection('premium')}>Select Plan</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
