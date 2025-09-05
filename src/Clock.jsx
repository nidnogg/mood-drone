import React, { useState } from "react";

const Clock = ({ backgrounds, onBackgroundChange, currentBackground }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleIconClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleColorSelect = (background) => {
    onBackgroundChange(background);
    setIsExpanded(false);
  };

  return (
    <div className="landscape-icon-container">
      <div className="landscape-icon" onClick={handleIconClick}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,18H23L14,6Z"/>
        </svg>
      </div>
      
      <div className={`color-options-panel ${isExpanded ? 'expanded' : ''}`}>
        <div className="color-options-grid">
          {backgrounds && backgrounds.map((bg, index) => (
            <div
              key={index}
              className={`color-option ${bg.type === currentBackground?.type && bg.value === currentBackground?.value ? 'active' : ''}`}
              onClick={() => handleColorSelect(bg)}
              style={{
                backgroundColor: bg.type === 'color' ? bg.value : '#666',
                backgroundImage: bg.type === 'video' ? 'linear-gradient(45deg, #666 25%, #888 25%, #888 50%, #666 50%, #666 75%, #888 75%)' : 'none'
              }}
            >
              {bg.type === 'video' && (
                <span className="video-indicator">📹</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getHours = () => {
  let d = new Date();
  let hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
  return hours;
};

const getMinutes = () => {
  let d = new Date();
  let minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
  return minutes;
};

/* custom useInterval hook used in clock component */
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Clock;
