import React, { useState } from "react";
import toast from "react-hot-toast";

const ShareMenu = ({ isOpen, onClose, currentBackground }) => {
  const [copiedUrl, setCopiedUrl] = useState(null);

  if (!isOpen) return null;

  const generateShareUrl = (background) => {
    const baseUrl = window.location.origin + window.location.pathname;
    const backgroundParam = encodeURIComponent(JSON.stringify(background));
    return `${baseUrl}#bg=${backgroundParam}`;
  };

  const copyToClipboard = async (url, backgroundName) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      
      toast(
        (t) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              fontFamily: "Barlow, sans-serif",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                color: "#fff9f5",
                fontWeight: "bold",
              }}
            >
              Link copied!
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#e9d5c0",
                opacity: 0.8,
              }}
            >
              Share your {backgroundName} configuration
            </div>
          </div>
        ),
        {
          duration: 2000,
          position: "bottom-right",
          style: {
            background: "rgba(185, 134, 86, 0.85)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            color: "#fff9f5",
            borderRadius: "12px",
            padding: "12px 16px",
            border: "1px solid rgba(233, 213, 192, 0.2)",
            boxShadow: "0 8px 32px rgba(47, 35, 42, 0.3)",
          },
        }
      );
      
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const getBackgroundName = (background) => {
    if (background.type === "video") {
      return "video mood";
    } else {
      return "color mood";
    }
  };

  const shareUrl = generateShareUrl(currentBackground);
  const backgroundName = getBackgroundName(currentBackground);

  return (
    <div className="share-menu-overlay" onClick={onClose}>
      <div className="share-menu" onClick={(e) => e.stopPropagation()}>
        <div className="share-menu-header">
          <h3>Share Configuration</h3>
          <button className="close-button" onClick={onClose}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#FFF9F5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        
        <div className="share-menu-content">
          <p>Share your current {backgroundName} with others:</p>
          
          <div className="share-item">
            <div className="background-preview">
              {currentBackground.type === "video" ? (
                <div className="video-preview">🎬</div>
              ) : (
                <div 
                  className="color-preview" 
                  style={{ backgroundColor: currentBackground.value }}
                ></div>
              )}
            </div>
            
            <div className="share-info">
              <div className="share-title">Current {backgroundName}</div>
              <div className="share-url">{shareUrl}</div>
            </div>
            
            <button
              className={`copy-button ${copiedUrl === shareUrl ? 'copied' : ''}`}
              onClick={() => copyToClipboard(shareUrl, backgroundName)}
            >
              {copiedUrl === shareUrl ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#FFF9F5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H8"
                    stroke="#FFF9F5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="8"
                    y="2"
                    width="8"
                    height="4"
                    rx="1"
                    ry="1"
                    stroke="#FFF9F5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareMenu;