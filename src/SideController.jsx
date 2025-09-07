import React from "react";

const SideController = ({ onBackgroundSelectorOpen, onSaveSettings, onShareOpen }) => {
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
          <rect x="10" y="14" width="4" height="2" fill="#FFF9F5" />
        </svg>
      </div>
      <div className="background-controller">
        <button
          className="background-button"
          onClick={onBackgroundSelectorOpen}
        >
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
      <div className="github-controller">
        <a
          href="https://github.com/nidnogg/mood-drone"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              fill="#FFF9F5"
            />
          </svg>
        </a>
      </div>
      <div className="share-controller">
        <button
          className="share-button"
          onClick={onShareOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 5.18875 15.0129 5.37371 15.0378 5.55451L8.95163 9.61162C8.48052 9.23156 7.8838 9 7.23077 9C5.44646 9 4 10.4465 4 12.2308C4 14.0151 5.44646 15.4615 7.23077 15.4615C7.8838 15.4615 8.48052 15.23 8.95163 14.8499L15.0378 18.907C15.0129 19.0878 15 19.2728 15 19.4615C15 21.1184 16.3431 22.4615 18 22.4615C19.6569 22.4615 21 21.1184 21 19.4615C21 17.8047 19.6569 16.4615 18 16.4615C17.3469 16.4615 16.7502 16.6931 16.2791 17.0731L10.1929 13.0161C10.2178 12.8352 10.2308 12.65 10.2308 12.4615C10.2308 12.273 10.2178 12.0878 10.1929 11.907L16.2791 7.85C16.7502 8.23006 17.3469 8.46154 18 8.46154V8Z"
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
