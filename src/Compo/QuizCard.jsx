import React from "react";

export default function QuizCard(props) {
  return (
    <div style={styles.card}>
      <h2>Quiz Results</h2>
      <p>Score: {props.score}</p>
      <p style={{ color: "green" }}>Correct: {props.right}</p>
      <p style={{ color: "red" }}>Wrong: {props.wrong}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    width: "250px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    marginTop: "20px",
    backgroundColor: "#f9f9f9",
  },
};