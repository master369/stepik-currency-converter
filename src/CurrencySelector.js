import React from 'react';

const CurrencySelector = ({ selectedCurrency, onCurrencyChange, currencies }) => {
  return (
    <select
      value={selectedCurrency}
      onChange={(e) => onCurrencyChange(e.target.value)}
      className="currency-select"
    >
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelector;