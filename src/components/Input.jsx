import React, { useId } from "react";

function Input({ label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",}) {
  const amountinputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex flex-wrap ${className}`}>
      <div className="w-full md:w-1/2">
        <label
          htmlFor={amountinputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountinputId}
          placeholder="Amount"
          className="outline-none w-full bg-transparent py-1.5 px-1 border border-gray-300 rounded-md focus:border-blue-500 transition"
          type="number"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-wrap justify-end text-right mt-3 md:mt-0">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none border border-gray-300 focus:border-blue-500 transition"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOption.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
