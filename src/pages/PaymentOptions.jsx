import React, { useState } from 'react';

const PaymentOpt = () => {
    const [selectedPayment, setSelectedPayment] = useState('');
    const [selectedPlan, setSelectedPlan] = useState('');

    const handlePaymentSelection = (paymentOption) => {
        setSelectedPayment(paymentOption);
    };

    const handlePlanSelection = (planOption) => {
        setSelectedPlan(planOption);
    };

    const handleSubmit = () => {
        // Handle payment submission logic here
        console.log(`Payment submitted: ${selectedPayment}, Plan: ${selectedPlan}`);
    };

    return (
        <div>
            <h1>Selecione Seu Plano</h1>
            <div>
                <button onClick={() => handlePlanSelection('mensal')}>Mensal</button>
                <button onClick={() => handlePlanSelection('semestral')}>Semestral</button>
            </div>
            <h1>Selecione Seu Método de Pagamento</h1>
            <div>
                <button onClick={() => handlePaymentSelection('pix')}>Pix</button>
                <button onClick={() => handlePaymentSelection('credito')}>Cartão de Crédito</button>
                <button onClick={() => handlePaymentSelection('debito')}>Cartão de Débito</button>
            </div>
            <button onClick={handleSubmit}>Enviar</button>
        </div>
    );
};

export default PaymentOpt;
