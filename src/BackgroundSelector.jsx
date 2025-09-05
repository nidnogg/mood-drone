import React, { useState, useRef, useEffect } from 'react';
import './css/BackgroundSelector.css';

const BackgroundSelector = ({ 
  isOpen, 
  onClose, 
  backgrounds, 
  currentBackground, 
  onBackgroundSelect 
}) => {
  const [previewBackground, setPreviewBackground] = useState(currentBackground);
  const [hoveredBackground, setHoveredBackground] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleBackgroundHover = (background) => {
    if (!isClosing) {
      setHoveredBackground(background);
      setPreviewBackground(background);
    }
  };

  const handleBackgroundSelect = (background) => {
    if (!isClosing) {
      console.log('Background selected:', background);
      onBackgroundSelect(background);
      handleClose();
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setPreviewBackground(currentBackground);
      setHoveredBackground(null);
      onClose();
    }, 200);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div 
      className={`background-selector-overlay ${isOpen && !isClosing ? 'open' : ''} ${isClosing ? 'closing' : ''}`}
      onClick={handleClose}
    >
      <div 
        className={`background-selector-modal ${isOpen && !isClosing ? 'open' : ''} ${isClosing ? 'closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="preview-area">
          <div className="preview-background">
            {previewBackground.type === 'video' ? (
              <video
                key={previewBackground.value}
                autoPlay
                loop
                muted
                playsInline
                className="preview-video"
              >
                <source src={previewBackground.value} type="video/mp4" />
              </video>
            ) : (
              <div 
                className="preview-color"
                style={{ backgroundColor: previewBackground.value }}
              />
            )}
            
            <div className="preview-overlay">
              <div className="preview-label">
                {previewBackground.type === 'video' ? 'Video Background' : 'Color Background'}
              </div>
              <button className="close-button" onClick={handleClose}>
                <span>×</span>
              </button>
            </div>
          </div>
        </div>

        <div className="selection-area">
          <h3 className="selection-title">Choose Background</h3>
          <div className="background-grid">
            {backgrounds.map((bg, index) => {
              const isActive = bg.type === currentBackground.type && bg.value === currentBackground.value;
              const isHovered = hoveredBackground === bg;
              
              return (
                <div
                  key={index}
                  className={`background-option ${isActive ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('Clicked background:', bg, 'isClosing:', isClosing);
                    handleBackgroundSelect(bg);
                  }}
                  onMouseEnter={() => handleBackgroundHover(bg)}
                  onMouseLeave={() => setHoveredBackground(null)}
                >
                  <div className="option-content">
                    {bg.type === 'video' ? (
                      <>
                        <video muted loop playsInline className="option-video">
                          <source src={bg.value} type="video/mp4" />
                        </video>
                        <div className="video-badge">VIDEO</div>
                      </>
                    ) : (
                      <div 
                        className="option-color"
                        style={{ backgroundColor: bg.value }}
                      />
                    )}
                    {isActive && <div className="active-indicator">✓</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSelector;