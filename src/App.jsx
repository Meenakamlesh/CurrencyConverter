import { useState } from "react";
import Input from "./components/Input.jsx";
import useCurrencyinfo from "./hooks/useCurrencyinfo";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertamt, setConvertamt] = useState();

  const currencyInfo = useCurrencyinfo(from); // Use renamed variable to avoid shadowing
  const options = Object.keys(currencyInfo || {}); // Safeguard against undefined data

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertamt(amount);
    setAmount(convertamt);
  };

  const convert = () => {
    setConvertamt(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/5908379/pexels-photo-5908379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <h1 className="text-center text-2xl font-bold text-blue-800 mb-5">
            Currency Converter App
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => {
                  setAmount(currency);
                }}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-3 border-white rounded-md bg-blue-600 text-white px-4 py-2 mt-3 hover:bg-blue-700 transition-all"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                amount={convertamt}
                currencyOption={options}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
