import React, { useState, useEffect } from 'react';

const Background = ({ backgroundColor, videoSrc }) => {
  const [videoOpacity, setVideoOpacity] = useState(videoSrc ? 1 : 0);
  const [colorOpacity, setColorOpacity] = useState(videoSrc ? 0 : 1);

  useEffect(() => {
    console.log('Background received:', { backgroundColor, videoSrc });
    if (videoSrc) {
      console.log('Setting video mode');
      setVideoOpacity(1);
      setColorOpacity(0);
    } else {
      console.log('Setting color mode');
      setVideoOpacity(0);
      setColorOpacity(1);
    }
  }, [videoSrc, backgroundColor]);

  const baseStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1,
    transition: 'opacity 0.77s ease-in-out',
    pointerEvents: 'none'
  };

  return (
    <>
      {/* Color Background */}
      <div 
        className="background-layer-color"
        style={{
          ...baseStyle,
          backgroundColor,
          opacity: colorOpacity,
          transition: 'background-color 0.77s ease-in-out, opacity 0.77s ease-in-out'
        }}
      />
      
      {/* Video Background */}
      {videoSrc && (
        <video
          key={videoSrc}
          className="background-layer-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            ...baseStyle,
            opacity: videoOpacity,
            objectFit: 'cover'
          }}
          onLoadStart={() => console.log('Video load started:', videoSrc)}
          onCanPlay={() => console.log('Video can play:', videoSrc)}
          onError={(e) => console.error('Video error:', e, videoSrc)}
          onLoadedData={() => console.log('Video loaded:', videoSrc)}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </>
  );
};

export default Background;