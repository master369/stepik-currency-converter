import React, { useState, useEffect } from 'react';
import CurrencySelector from './CurrencySelector';
import Result from './Result';
import './App.css';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [rate, setRate] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then((response) => response.json())
      .then((data) => {
        setCurrencies(Object.keys(data.rates));
        setRate(data.rates[toCurrency]);
      });
  }, [toCurrency]);

  useEffect(() => {
    if (rate && amount) {
      setConvertedAmount((amount * rate).toFixed(2));
    }
  }, [rate, amount]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (currency) => {
    setFromCurrency(currency);
  };

  const handleToCurrencyChange = (currency) => {
    setToCurrency(currency);
  };

  return (
    <main>

      <div className="converter">
        <h1>Конвертер валют</h1>
        <div className="inputs">
          <div className="input-group">
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              className="amount-input"
            />
            <CurrencySelector
              selectedCurrency={fromCurrency}
              onCurrencyChange={handleFromCurrencyChange}
              currencies={currencies}
            />
          </div>
          <div className="to-currency">
            <CurrencySelector
              selectedCurrency={toCurrency}
              onCurrencyChange={handleToCurrencyChange}
              currencies={currencies}
            />
          </div>
        </div>
        {convertedAmount && (
          <Result
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            amount={amount}
            convertedAmount={convertedAmount}
          />
        )}
      </div>
    </main>
  );
};

export default CurrencyConverter;