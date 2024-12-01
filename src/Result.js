import React from 'react';

const Result = ({ fromCurrency, toCurrency, amount, convertedAmount }) => {
  return (
    <div className="result">
      <h2>Результат конвертации</h2>
      <p>
        {amount} {fromCurrency} = {convertedAmount} {toCurrency}
      </p>
    </div>
  );
};

export default Result;