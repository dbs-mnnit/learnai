import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      <div className="ai-404-container">
        <div className="ai-emoji">🤖🧠</div>
        <h1 className="ai-title">404: Neural Path Not Found</h1>
        <p className="ai-message">
          Looks like you’ve reached an undefined node in our knowledge graph.
          Don’t worry — even the smartest AIs make wrong turns.
        </p>
        <Link to="/" className="ai-button">
          🔍 Back to Learning
        </Link>
      </div>

      <style>
        {`
          .ai-404-container {
            min-height: 100vh;
            background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
            text-align: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            animation: fadeIn 1s ease-in-out;
          }

          .ai-emoji {
            font-size: 70px;
            margin-bottom: 24px;
            animation: pulse 2s infinite ease-in-out;
          }

          .ai-title {
            font-size: 34px;
            font-weight: 800;
            margin-bottom: 16px;
            color: #61dafb;
          }

          .ai-message {
            font-size: 18px;
            max-width: 540px;
            margin-bottom: 32px;
            line-height: 1.6;
            color: #ddd;
          }

          .ai-button {
            background-color: #61dafb;
            color: #000;
            padding: 12px 26px;
            border-radius: 28px;
            font-weight: 600;
            font-size: 16px;
            text-decoration: none;
            box-shadow: 0 4px 12px rgba(97, 218, 251, 0.3);
            transition: all 0.3s ease;
          }

          .ai-button:hover {
            background-color: #21a1f1;
            transform: scale(1.05);
            color: white;
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.08);
              opacity: 1;
            }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 500px) {
            .ai-title {
              font-size: 26px;
            }

            .ai-message {
              font-size: 16px;
            }

            .ai-emoji {
              font-size: 60px;
            }

            .ai-button {
              font-size: 14px;
              padding: 10px 20px;
            }
          }
        `}
      </style>
    </>
  );
};

export default PageNotFound;
