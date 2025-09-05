import React from 'react';

const SideController = ({ onColorChange, onBackgroundSelectorOpen, onSaveSettings }) => {
  return (
    <div className="side-controller">
      <div className="side-controller-button" onClick={onSaveSettings}>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M6 2C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2H6Z" 
            stroke="#FFF9F5" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M14 2V8H20" 
            stroke="#FFF9F5" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <rect 
            x="8" 
            y="12" 
            width="8" 
            height="6" 
            stroke="#FFF9F5" 
            strokeWidth="2" 
            fill="none"
          />
          <rect 
            x="10" 
            y="14" 
            width="4" 
            height="2" 
            fill="#FFF9F5"
          />
        </svg>
      </div>
      <div className="background-controller">
        <button className="background-button" onClick={onBackgroundSelectorOpen}>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z" 
              stroke="#FFF9F5" 
              strokeWidth="2"
            />
            <path 
              d="M8.5 8.5C8.5 9.32843 7.82843 10 7 10C6.17157 10 5.5 9.32843 5.5 8.5C5.5 7.67157 6.17157 7 7 7C7.82843 7 8.5 7.67157 8.5 8.5Z" 
              fill="#FFF9F5"
            />
            <path 
              d="M2 15L7 10L12 15" 
              stroke="#FFF9F5" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M13 14L16 11L22 17" 
              stroke="#FFF9F5" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="color-controller">
        <button className="color-button" onClick={onColorChange}>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="#FFF9F5" 
              strokeWidth="2"
            />
            <path 
              d="M12 6V12L16 14" 
              stroke="#FFF9F5" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SideController;