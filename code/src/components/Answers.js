//Question 5
import React from "react";

const Answers = ({ name, food, game, email, snack, licoriceCandy, drink }) => {
  return (
    <div className="container">
      <div className="fifthQuestion">
        <h1>That's it, well done! 🎈</h1>
        <h2>Your answers were:</h2>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Food:</strong> {food}, {snack}, {licoriceCandy}
        </p>
        <p>
          <strong>Drink:</strong> {drink}
        </p>
        <p>
          <strong>Game:</strong> {game}
        </p>
        {email === true && (
          <p>An email with your answers will also be sent to you. </p>
        )}
        {licoriceCandy === "I don't like licorice" && (
          <p>
            I'm afraid that I have to end our friendship here. I can't be
            friends with anyone that doesn't like licorice...
          </p>
        )}
      </div>
    </div>
  );
};

export default Answers;
