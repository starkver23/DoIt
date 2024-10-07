import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { Bar } from "react-chartjs-2"; // Import Bar chart from Chart.js

const BudgetPlanner = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [expenses, setExpenses] = useState({
    rent: 0,
    groceries: 0,
    entertainment: 0,
    utilities: 0,
    others: 0,
  });

  const [savings, setSavings] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0); // Added state for total expenses

  // Handle input change for expenses
  const handleExpenseChange = (e) => {
    const { name, value } = e.target;
    setExpenses({ ...expenses, [name]: parseFloat(value) || 0 });
  };

  // Calculate savings
  const calculateSavings = () => {
    const calculatedTotalExpenses =
      expenses.rent +
      expenses.groceries +
      expenses.entertainment +
      expenses.utilities +
      expenses.others;

    const calculatedSavings = monthlyIncome - calculatedTotalExpenses;

    setTotalExpenses(calculatedTotalExpenses); // Store total expenses in state
    setSavings(calculatedSavings);
  };

  // Prepare data for the bar chart
  const data = {
    labels: ["Monthly Income", "Total Expenses", "Savings"],
    datasets: [
      {
        label: "Amount",
        data: [monthlyIncome, totalExpenses, savings], // Use totalExpenses from state
        backgroundColor: [
          "rgba(255, 0, 0, 0.8)", // Candy Apple Red
          "rgba(255, 255, 255, 0.8)", // White
          "rgba(0, 0, 0, 0.8)", // Black
        ],
        borderColor: [
          "rgba(255, 0, 0, 1)", // Candy Apple Red
          "rgba(255, 255, 255, 1)", // White
          "rgba(0, 0, 0, 1)", // Black
        ],
        borderWidth: 2,
      },
    ],
  };

  // Prepare options for the bar chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          font: {
            size: 16,
            weight: "bold",
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Amount ($)",
          font: {
            size: 16,
            weight: "bold",
          },
        },
        ticks: {
          font: {
            size: 14,
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Left side - Budget Planner inputs */}
      <div
        style={{
          backgroundColor: "transparent",
          border: "1px solid white",
          borderRadius: "10px",
          padding: "20px",
          width: "50%",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2>Budget Planner</h2>

        {/* Input for monthly income */}
        <div style={{ marginBottom: "10px" }}>
          <label>Monthly Income: </label>
          <input
            type="number"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(parseFloat(e.target.value) || 0)}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid white",
              backgroundColor: "transparent",
              color: "white",
            }}
          />
        </div>

        {/* Inputs for expense categories */}
        {Object.keys(expenses).map((expenseCategory) => (
          <div key={expenseCategory} style={{ marginBottom: "10px" }}>
            <label>
              {expenseCategory.charAt(0).toUpperCase() +
                expenseCategory.slice(1)}
              :{" "}
            </label>
            <input
              type="number"
              name={expenseCategory}
              value={expenses[expenseCategory]}
              onChange={handleExpenseChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid white",
                backgroundColor: "transparent",
                color: "white",
              }}
            />
          </div>
        ))}

        {/* Calculate Savings Button */}
        <button
          onClick={calculateSavings}
          style={{
            backgroundColor: "#ad1457",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            color: "white",
            cursor: "pointer",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          Calculate Savings
        </button>

        {/* Back to Home Button */}
        <Link to="/">
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
              marginTop: "10px",
            }}
          >
            Back to Home
          </button>
        </Link>
      </div>

      {/* Right side - Bar Chart */}
      <div
        style={{
          width: "40%",
          padding: "20px",
          border: "1px solid white",
          borderRadius: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <h3>Savings Overview</h3>
        <Bar data={data} options={options} />
        <h3
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "white",
            marginTop: "20px",
          }}
        >
          Savings Left: {savings >= 0 ? savings : 0}
        </h3>
        {savings < 0 && (
          <p style={{ color: "red", fontSize: "18px" }}>
            You are overspending!
          </p>
        )}
      </div>
    </div>
  );
};

export default BudgetPlanner;
