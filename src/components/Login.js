import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Login = () => {
  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(to bottom, #ff80ab, #ff4081)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar with Transparent Background */}
      <nav
        style={{
          backgroundColor: "transparent",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          position: "absolute",
          width: "100%",
        }}
      >
        <h1 style={{ margin: 0 }}>Saving Goal Tracker</h1>
        <Link
          to="/"
          style={{
            backgroundColor: "white" /* Button background color */,
            color: "#ff4081" /* Button text color */,
            border: "none" /* No border */,
            padding: "10px 20px" /* Padding for buttons */,
            marginLeft: "10px" /* Space between buttons */,
            borderRadius: "5px" /* Rounded corners */,
            cursor: "pointer" /* Pointer cursor on hover */,
            transition:
              "background-color 0.3s, transform 0.2s" /* Transition effects */,
            textDecoration: "none" /* No underline */,
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#ff4081")
          }
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "white")}
        >
          Home
        </Link>
      </nav>

      {/* Login Form */}
      <div
        style={{
          margin: "auto",
          width: "100%",
          maxWidth: "400px",
          padding: "20px",
          backgroundColor: "white",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <form action="" style={{ width: "100%" }}>
          <h1 style={{ marginBottom: "20px", color: "#333", fontSize: "3rem" }}>
            LOGIN
          </h1>

          <div style={{ position: "relative", marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Username"
              required
              style={{
                width: "100%",
                padding: "10px 40px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                outline: "none",
              }}
            />
            <FaUser
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                color: "#888",
              }}
            />
          </div>

          <div style={{ position: "relative", marginBottom: "20px" }}>
            <input
              type="password"
              placeholder="Password"
              required
              style={{
                width: "100%",
                padding: "10px 40px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                outline: "none",
              }}
            />
            <FaLock
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                color: "#888",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "black",
              color: "white",
              fontSize: "16px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#555")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "black")
            }
          >
            Login
          </button>

          <div style={{ marginTop: "20px", fontSize: "14px" }}>
            <p>
              If you don't have an account, click{" "}
              <Link
                to="/signup"
                style={{ color: "#1DA1F2", textDecoration: "underline" }}
              >
                SignUp
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
