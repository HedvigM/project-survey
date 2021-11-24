import React from 'react';
import JSConfetti from 'js-confetti';

const Attend = ({ /* no, onNoChange, */ onStepChange, onNoChange }) => {
  const jsConfetti = new JSConfetti();

  return (
    <div className='container'>
      <div className='attend'>
        <h1>
          Hello!{' '}
          <span role='img' aria-label='twinkling stars emoji'>
            ✨
          </span>
        </h1>
        <h2>
          This is an RSVP form for my big party. Please take the time to fill in
          some answers in my form so that I can plan the party to be an epic
          event.
        </h2>
        <div>
          <p>Are you coming to my party?</p>
          <button onClick={onStepChange}>Yes</button>
          <button onClick={onNoChange}>No</button>

          {jsConfetti.addConfetti({
            confettiRadius: 4,
            confettiNumber: 300,
            emojis: ['✨', '🥂', '🥳'],
            emojiSize: 50,
          })}
        </div>
      </div>
    </div>
  );
};

export default Attend;
