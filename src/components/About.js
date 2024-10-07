import React from "react";
import { Link } from "react-router-dom";
import "./About.css"; // Assuming you are still using About.css for other styling
import AnkitaPic from "../images/ankita.jpeg";
import AryanPic from "../images/aryann.jpeg";
import DiljotPic from "../images/diljot.png";
import AsesthaPic from "../images/asestha.jpeg";

const About = () => {
  const teamMembers = [
    {
      name: "Ankita Banik",
      role: "Software Engineer",
      imgSrc: AnkitaPic,
      description:
        "Ankita is a passionate software engineer with a focus on web development.",
    },
    {
      name: "Aryan Verma",
      role: "Software Developer",
      imgSrc: AryanPic,
      description:
        "Aryan is a skilled designer dedicated to creating user-friendly products.",
    },
    {
      name: "Diljot Singh Baweja",
      role: "Project Manager",
      imgSrc: DiljotPic,
      description: "Diljot ensures our projects run smoothly and on time.",
    },
    {
      name: "Asestha Goyal",
      role: "Front-End Developer",
      imgSrc: AsesthaPic,
      description: "Asestha ensures our projects appear appealing",
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(to right, #ff80ab, #ff4081, #f50057)",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "transparent",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
        }}
      >
        <h1 style={{ margin: 0 }}>Saving Goal Tracker</h1>
        <Link
          to="/"
          style={{
            backgroundColor: "white",
            color: "black",
            border: "none",
            padding: "10px 20px",
            marginLeft: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s, transform 0.2s",
            textDecoration: "none",
            display: "inline-block",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "pink")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "white")}
        >
          Home
        </Link>
      </nav>

      {/* About Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 20px",
        }}
      >
        <h2 style={{ color: "white", marginBottom: "20px", fontSize: "40px" }}>
          Meet Our Team
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "20px",
                margin: "10px",
                maxWidth: "400px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={member.imgSrc}
                alt={member.name}
                style={{
                  width: "150px", // Set the width to maintain proportions
                  height: "150px", // Ensure height and width are the same
                  borderRadius: "50%", // Circular shape
                  marginBottom: "10px",
                  objectFit: "cover", // Ensures the image scales correctly
                }}
              />
              <h3 style={{ margin: "10px 0", color: "#333" }}>{member.name}</h3>
              <p style={{ color: "#666" }}>{member.role}</p>
              <p style={{ color: "#666" }}>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
