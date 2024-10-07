import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios for API requests
import "./LandingPage.css";
import Save from "./Save"; // Assuming Save.js exists
import ExpenseForecasting from "./ExpenseForecasting";

const Land = () => {
  const [currencies, setCurrencies] = useState([]); // To store the available currencies
  const [fromCurrency, setFromCurrency] = useState("USD"); // Base currency
  const [toCurrency, setToCurrency] = useState("EUR"); // Target currency
  const [amount, setAmount] = useState(1); // Amount to convert
  const [convertedAmount, setConvertedAmount] = useState(0); // Converted amount

  // Fetch currency data from API
  useEffect(() => {
    axios
      .get("https://open.er-api.com/v6/latest/USD")
      .then((response) => {
        const currencyKeys = Object.keys(response.data.rates);
        setCurrencies(currencyKeys);
      })
      .catch((error) => {
        console.error("Error fetching currency data", error);
      });
  }, []);

  // Convert the currency when either amount, fromCurrency, or toCurrency changes
  useEffect(() => {
    if (amount > 0) {
      axios
        .get(`https://open.er-api.com/v6/latest/${fromCurrency}`)
        .then((response) => {
          const rate = response.data.rates[toCurrency];
          setConvertedAmount((amount * rate).toFixed(2));
        })
        .catch((error) => {
          console.error("Error fetching conversion rate", error);
        });
    }
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="landing-container">
      <nav className="navbar">
        <h1>Saving Goal Tracker</h1>
        <div className="navbar-buttons">
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
          <Link to="/about">
            <button className="about-button">About</button>
          </Link>
          <Link to="/budget-planner">
            <button className="about-button">Budget Planner</button>{" "}
            {/* Updated */}
          </Link>
        </div>
      </nav>

      {/* Heading and Paragraph */}
      <h1>Welcome to the Saving Goal Tracker!</h1>
      <p>
        Track your savings goals efficiently and stay on top of your finances.
      </p>

      {/* Save Component */}
      <Save />

      {/* Expense Forecasting Component */}
      <ExpenseForecasting />

      {/* Currency Converter */}
      <div
        className="currency-converter"
        style={{
          backgroundColor: "transparent", // Transparent background
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid white", // White border for styling
          color: "white", // Text color white for contrast
          marginTop: "20px",
        }}
      >
        <h2 style={{ color: "white" }}>Currency Converter</h2>
        <div className="converter-section">
          <div>
            <label style={{ color: "white" }}>Amount: </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{
                backgroundColor: "transparent", // Transparent background
                color: "white", // White text color
                border: "1px solid white", // White border
                padding: "5px",
                borderRadius: "5px",
              }}
            />
          </div>
          <div>
            <label style={{ color: "white" }}>From: </label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              style={{
                backgroundColor: "transparent", // Transparent background
                color: "white", // White text color
                border: "1px solid white", // White border
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label style={{ color: "white" }}>To: </label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              style={{
                backgroundColor: "transparent", // Transparent background
                color: "white", // White text color
                border: "1px solid white", // White border
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="result-section">
          <p style={{ color: "white" }}>
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Land;
