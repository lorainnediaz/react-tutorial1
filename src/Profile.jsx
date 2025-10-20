import { useState } from 'react';
import './Profile.css';
import myPhoto from './assets/profile.jpg';

function App() {
  const [showFunFact, setShowFunFact] = useState(false);

  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <div className="profile-header">
          <img
              src={myPhoto}
              alt="My profile"
              className="profile-pic"
          />
          <h2>meow meow</h2>
          <p className="title">Student • BS Computer Science</p>
        </div>

        <div className="profile-body">
          <p className="bio">
            Still knowing my ways through tech.
          </p>
          <button
            className="fun-button"
            onClick={() => setShowFunFact(!showFunFact)}
          >
            {showFunFact ? 'Hide Fun Fact' : 'Show Fun Fact'} 
          </button>
          {showFunFact && (
            <p className="fun-fact">
              Fun fact: I’m afraid of the neverending agony — the thought of pain that never fades, 
              only lingers quietly until it becomes all I know. In short, employment.
            </p>
          )}
        </div>

        <div className="profile-footer">
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">GitHub</a>
          <a href="#" className="social-link">Twitter</a>
        </div>
      </div>
    </div>
  );
}

export default App;
