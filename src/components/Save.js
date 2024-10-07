import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const Save = () => {
  const [goal, setGoal] = useState(0); // Savings goal
  const [income, setIncome] = useState(0); // Monthly income
  const [expenditure, setExpenditure] = useState(0); // Monthly expenditure
  const [months, setMonths] = useState(3); // Months to achieve goal
  const [totalSaved, setTotalSaved] = useState(0); // Track total saved amount
  const [chartData, setChartData] = useState({});
  const [reminder, setReminder] = useState("");

  const handleUpdateChart = () => {
    const remainingAmount = Math.max(goal - totalSaved, 0); // Calculate remaining amount

    // Update chart data
    setChartData({
      labels: ["Invested Amount", "Remaining Amount"],
      datasets: [
        {
          data: [totalSaved, remainingAmount],
          backgroundColor: [
            "#ff80ab", // rmd-pink-a-100
            "#ff4081", // rmd-pink-a-200
          ],
          borderColor: [
            "#ff80ab", // rmd-pink-a-100
            "#ff4081", // rmd-pink-a-200
          ],
          borderWidth: 2,
        },
      ],
    });

    // Calculate required savings per month to meet goal
    const goalPerMonth = goal / months; // Required savings per month
    const availableSavings = income - expenditure; // Calculate available savings

    if (availableSavings < 0) {
      setReminder(
        "Your expenditure exceeds your income. Please adjust your budget."
      );
    } else if (availableSavings < goalPerMonth) {
      setReminder(
        "You are not saving enough to reach your goal in the specified months. Please save more!"
      );
    } else {
      setReminder("You are saving enough to reach your goal!"); // Notify user they are on track
    }
  };

  const handleSave = () => {
    // Calculate savings as income - expenditure
    const savings = income - expenditure; // Savings = Income - Expenditure

    if (savings < 0) {
      alert("Your expenditure exceeds your income. Please adjust your budget.");
      return;
    }

    const newTotalSaved = totalSaved + savings; // Update the total saved amount

    // Check if new total saved exceeds the goal
    if (newTotalSaved > goal) {
      const extraAmount = newTotalSaved - goal;
      alert(
        `Congratulations! You have saved more than your goal by $${extraAmount}.`
      );
    }

    setTotalSaved(newTotalSaved); // Update the total saved amount

    // Update the chart
    handleUpdateChart();
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, #ff80ab, #ff4081)",
        minHeight: "100vh",
        padding: "24px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          gap: "24px",
        }}
      >
        {/* Input Section */}
        <div
          style={{
            flex: "1",
            padding: "16px",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            height: "100%",
            maxWidth: "400px",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "800",
              marginBottom: "24px",
              textAlign: "center",
              color: "#333",
            }}
          >
            Savings Goal Tracker
          </h1>
          <div style={{ marginBottom: "16px" }}>
            <label
              htmlFor="goal"
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#333",
              }}
            >
              Goal Amount:
            </label>
            <input
              type="number"
              id="goal"
              placeholder="Enter goal amount"
              value={goal}
              onChange={(e) => setGoal(Number(e.target.value))}
              style={{
                marginTop: "8px",
                width: "100%",
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                outline: "none",
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label
              htmlFor="income"
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#333",
              }}
            >
              Income:
            </label>
            <input
              type="number"
              id="income"
              placeholder="Enter income amount"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              style={{
                marginTop: "8px",
                width: "100%",
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                outline: "none",
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label
              htmlFor="expenditure"
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#333",
              }}
            >
              Expenditure:
            </label>
            <input
              type="number"
              id="expenditure"
              placeholder="Enter expenditure amount"
              value={expenditure}
              onChange={(e) => setExpenditure(Number(e.target.value))}
              style={{
                marginTop: "8px",
                width: "100%",
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                outline: "none",
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label
              htmlFor="months"
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#333",
              }}
            >
              Months to Achieve Goal:
            </label>
            <input
              type="number"
              id="months"
              placeholder="Enter number of months"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              style={{
                marginTop: "8px",
                width: "100%",
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                outline: "none",
              }}
              required
            />
          </div>

          <div
            style={{
              marginTop: "16px",
              fontSize: "16px",
              fontWeight: "600",
              color: "#333",
            }}
          >
            Total Saved Amount:{" "}
            <span style={{ color: "#ff4081" }}>${totalSaved}</span>
          </div>

          {/* Reminder Message */}
          {reminder && (
            <div
              style={{
                marginTop: "16px",
                color: "red",
                fontWeight: "600",
              }}
            >
              {reminder}
            </div>
          )}

          <div
            style={{
              marginTop: "24px",
              display: "flex",
              gap: "8px",
            }}
          >
            <button
              onClick={handleSave}
              style={{
                backgroundColor: "#ff4081",
                color: "white",
                padding: "8px 16px",
                borderRadius: "4px",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                transition: "background-color 0.3s, transform 0.2s",
                cursor: "pointer",
              }}
            >
              Save Amount
            </button>
            <button
              onClick={handleUpdateChart}
              style={{
                backgroundColor: "#ff80ab",
                color: "white",
                padding: "8px 16px",
                borderRadius: "4px",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                transition: "background-color 0.3s, transform 0.2s",
                cursor: "pointer",
              }}
            >
              Update Chart
            </button>
          </div>
        </div>

        {/* Chart Section */}
        {chartData.labels && (
          <div
            style={{
              flex: "1",
              padding: "16px",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0.1)",
              height: "100%",
              maxWidth: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pie data={chartData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Save;
