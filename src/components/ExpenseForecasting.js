// src/components/ExpenseForecasting.js
import React, { useState } from "react";

const ExpenseForecasting = () => {
  const [yearlySalary, setYearlySalary] = useState(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState(0);
  const [months, setMonths] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [predictedSavingsAfterTax, setPredictedSavingsAfterTax] =
    useState(null);

  const calculateForecast = () => {
    // Calculate monthly net income after tax
    const monthlyIncome = (yearlySalary - yearlySalary * (taxRate / 100)) / 12;

    // Calculate total expenses for the given months
    const totalExpenses = monthlyExpenses * months;

    // Calculate total savings after expenses
    const netSavings = monthlyIncome * months - totalExpenses;

    // Set savings after tax
    setPredictedSavingsAfterTax(netSavings >= 0 ? netSavings : 0);
  };

  // Inline styles
  const styles = {
    container: {
      backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent background
      color: "white", // White text
      padding: "20px",
      borderRadius: "10px",
      margin: "20px auto", // Center the component
      maxWidth: "400px", // Set a max width for better appearance
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Add shadow for depth
      textAlign: "center", // Center text
    },
    inputs: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    label: {
      fontSize: "1rem",
    },
    input: {
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid white",
      backgroundColor: "rgba(255, 255, 255, 0.2)", // Slightly transparent
      color: "white",
    },
    button: {
      padding: "10px 15px",
      backgroundColor: "black",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#555",
    },
    result: {
      marginTop: "20px",
      fontSize: "1.2rem",
    },
  };

  return (
    <div style={styles.container}>
      <h2>Expense Forecasting</h2>
      <div style={styles.inputs}>
        <div>
          <label style={styles.label}>Yearly Salary:</label>
          <input
            type="number"
            value={yearlySalary}
            onChange={(e) => setYearlySalary(Number(e.target.value))}
            placeholder="Enter your yearly salary"
            style={styles.input}
          />
        </div>
        <div>
          <label style={styles.label}>Monthly Expenses:</label>
          <input
            type="number"
            value={monthlyExpenses}
            onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
            placeholder="Enter your estimated monthly expenses"
            style={styles.input}
          />
        </div>
        <div>
          <label style={styles.label}>Number of Months:</label>
          <input
            type="number"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            placeholder="Enter the number of months"
            style={styles.input}
          />
        </div>
        <div>
          <label style={styles.label}>Tax Rate (%):</label>
          <input
            type="number"
            value={taxRate}
            onChange={(e) => setTaxRate(Number(e.target.value))}
            placeholder="Enter your tax rate"
            style={styles.input}
          />
        </div>
        <button
          onClick={calculateForecast}
          style={styles.button}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor =
              styles.buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor =
              styles.button.backgroundColor)
          }
        >
          Calculate Forecast
        </button>
      </div>
      {predictedSavingsAfterTax !== null && (
        <div style={styles.result}>
          <h3>
            Predicted Savings After {months} Months (After Tax): $
            {predictedSavingsAfterTax.toFixed(2)}
          </h3>
        </div>
      )}
    </div>
  );
};

export default ExpenseForecasting;
