import React from 'react';
import './Hero.css'; // Import the CSS file for stylin

const Hero = () => {
  return (
    <section id="hero-section" className="hero">
      <div className="hero-content">
        {/* Logo */}
        <img src="/assets/images/logo.png" alt="QuizMaster Logo" id="hero-logo" className="hero-logo" />

        {/* Title and Description */}
        <div className="hero-text">
          <p id="ai-text" className="ai-text">AI-Generated Quizzes in Seconds</p>
          <h1 id="hero-title" className="hero-title">
            Unleash Your Inner QuizMaster <span id="hero-highlight">Create</span>
          </h1>
          <p id="hero-description" className="hero-description">
            Create, play, and share quizzes effortlessly with AI-powered tools.
          </p>
          <p id="hero-loved" className="hero-loved">Loved by 50,000+ Students & Teachers.</p>
          <p id="rating" className="rating">⭐⭐⭐⭐⭐</p>

          {/* Call to Action Buttons */}
          <div className="cta-buttons">
            <a href="#create-quiz" id="create-quiz-btn" className="btn-create">Create Quiz</a>
            <a href="#video" id="video-btn" className="btn-video">Video</a>
          </div>
        </div>

        {/* Placeholder for GIF/Image */}
        <div id="hero-image" className="hero-image">
          <img src="/assets/images/hero ani.gif" alt="GIF or Image" className="img-gif" />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="hero-stats">
        <div className="stat-item"><p><strong>50,000+</strong> Users</p></div>
        <div className="stat-item"><p><strong>100,000+</strong> Quizzes</p></div>
        <div className="stat-item"><p><strong>10M+</strong> Questions Answered</p></div>
        <div className="stat-item"><p><strong>4.8/5</strong> Rating</p></div>
        <div className="stat-item"><p><strong>50,000+</strong> Multiplayer Games</p></div>
      </div>
    </section>
  );
};

export default Hero;
