import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import Background from '../Background'

describe('Background Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders without crashing', () => {
    render(<Background />)
    expect(document.querySelector('.background-layer-color')).toBeInTheDocument()
  })

  it('renders color background with correct styles when no video is provided', () => {
    const backgroundColor = '#ff0000'
    render(<Background backgroundColor={backgroundColor} />)
    
    const colorLayer = document.querySelector('.background-layer-color')
    expect(colorLayer).toBeInTheDocument()
    expect(colorLayer).toHaveStyle({
      backgroundColor: backgroundColor,
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      zIndex: '-1',
      pointerEvents: 'none'
    })
  })

  it('renders video background when videoSrc is provided', () => {
    const videoSrc = 'test-video.mp4'
    render(<Background videoSrc={videoSrc} />)
    
    const video = document.querySelector('.background-layer-video')
    expect(video).toBeInTheDocument()
    expect(video).toHaveProperty('autoplay', true)
    expect(video).toHaveProperty('loop', true)
    expect(video).toHaveProperty('muted', true)
    expect(video).toHaveProperty('playsInline', true)
    expect(video).toHaveAttribute('preload', 'auto')
  })

  it('applies correct styles to video element', () => {
    const videoSrc = 'test-video.mp4'
    render(<Background videoSrc={videoSrc} />)
    
    const video = document.querySelector('.background-layer-video')
    expect(video).toHaveStyle({
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      zIndex: '-1',
      pointerEvents: 'none',
      objectFit: 'cover'
    })
  })

  it('sets correct opacity for color mode', () => {
    const backgroundColor = '#00ff00'
    render(<Background backgroundColor={backgroundColor} />)
    
    const colorLayer = document.querySelector('.background-layer-color')
    expect(colorLayer).toHaveStyle({ opacity: '1' })
  })

  it('sets correct opacity for video mode', () => {
    const videoSrc = 'test-video.mp4'
    render(<Background videoSrc={videoSrc} />)
    
    const video = document.querySelector('.background-layer-video')
    const colorLayer = document.querySelector('.background-layer-color')
    
    expect(video).toHaveStyle({ opacity: '1' })
    expect(colorLayer).toHaveStyle({ opacity: '0' })
  })

  it('includes source element with correct type', () => {
    const videoSrc = 'test-video.mp4'
    render(<Background videoSrc={videoSrc} />)
    
    const source = document.querySelector('source')
    expect(source).toBeInTheDocument()
    expect(source).toHaveAttribute('src', videoSrc)
    expect(source).toHaveAttribute('type', 'video/mp4')
  })

  it('includes fallback text for unsupported browsers', () => {
    const videoSrc = 'test-video.mp4'
    render(<Background videoSrc={videoSrc} />)
    
    expect(screen.getByText('Your browser does not support the video tag.')).toBeInTheDocument()
  })

  it('applies transition styles correctly', () => {
    render(<Background backgroundColor="#ffffff" />)
    
    const colorLayer = document.querySelector('.background-layer-color')
    expect(colorLayer).toHaveStyle({
      transition: 'background-color 0.77s ease-in-out, opacity 0.77s ease-in-out'
    })
  })

  it('handles video event callbacks', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const videoSrc = 'test-video.mp4'
    
    render(<Background videoSrc={videoSrc} />)
    
    const video = document.querySelector('.background-layer-video')
    
    // Test onLoadStart
    video.dispatchEvent(new Event('loadstart'))
    expect(consoleSpy).toHaveBeenCalledWith('Video load started:', videoSrc)
    
    // Test onCanPlay
    video.dispatchEvent(new Event('canplay'))
    expect(consoleSpy).toHaveBeenCalledWith('Video can play:', videoSrc)
    
    // Test onLoadedData
    video.dispatchEvent(new Event('loadeddata'))
    expect(consoleSpy).toHaveBeenCalledWith('Video loaded:', videoSrc)
    
    // Test onError - React wraps native events in SyntheticEvent
    const errorEvent = new Event('error')
    video.dispatchEvent(errorEvent)
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1)
    expect(consoleErrorSpy.mock.calls[0][0]).toBe('Video error:')
    expect(consoleErrorSpy.mock.calls[0][2]).toBe(videoSrc)
  })

  it('renders both color and video layers regardless of mode', () => {
    const videoSrc = 'test-video.mp4'
    const backgroundColor = '#123456'
    
    render(<Background videoSrc={videoSrc} backgroundColor={backgroundColor} />)
    
    expect(document.querySelector('.background-layer-color')).toBeInTheDocument()
    expect(document.querySelector('.background-layer-video')).toBeInTheDocument()
  })

  it('handles undefined props gracefully', () => {
    render(<Background />)
    
    const colorLayer = document.querySelector('.background-layer-color')
    expect(colorLayer).toBeInTheDocument()
    expect(colorLayer).toHaveStyle({ opacity: '1' })
    expect(document.querySelector('.background-layer-video')).not.toBeInTheDocument()
  })
})