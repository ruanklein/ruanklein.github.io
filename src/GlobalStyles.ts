/* eslint-disable max-len */
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }

  .video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .content {
    margin: 120px 100px 0;
    color: white;
    text-align: center;
  }

  .terminal-container {
    text-align: left;
  }

  .react-terminal-line {
    white-space: pre-wrap;
    padding: 5px 0;
  }

  .react-terminal-wrapper {
    font-family: 'Fira Code', monospace;
    background: ${({ theme }) => theme.background};
    border: ${({ theme }) => theme.border};
    box-shadow: ${({ theme }) => theme.boxShadow};
    color: ${({ theme }) => theme.color};
    border-radius: 15px;
    padding: 50px 10px 25px;
    height: 80vh;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.4);
      border-radius: 10px;
      border: 2px solid rgba(255, 255, 255, 0.1);
    }

    ::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.6);
    }
  }

  .react-terminal-wrapper a {
    color: ${({ theme }) => theme.link}
  }

  .react-terminal-wrapper a:hover {
    color: ${({ theme }) => theme.linkHover}
  }

  [data-terminal-prompt="#"]:before {
    color: red;
  }

  @media screen and (max-width: 768px) {
    .content {
      margin: 0;
    }

    .react-terminal-wrapper {
      height: 100vh;
      border-radius: 0;
    }

    .react-terminal {
      height: 100% !important;
    }
  }
`

export const TerminalLine = styled.span`
  margin: 5px 0px;
  padding: 0;
  display: inline-block;
  width: 100%;
  white-space: pre-wrap;
`

export const terminalThemes = {
  neon: {
    background:
      'linear-gradient(135deg, rgba(138, 43, 226, 0.4), rgba(255, 20, 147, 0.4))',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 0 15px rgba(255, 20, 147, 0.5)',
    color: '#fff',
    link: '#fff',
    linkHover: '#fff',
  },
  ocean: {
    background:
      'linear-gradient(135deg, rgba(0, 128, 255, 0.4), rgba(0, 255, 255, 0.4))',
    border: '1px solid rgba(0, 255, 255, 0.2)',
    boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)',
    color: '#e0f7fa',
    link: '#e0f7fa',
    linkHover: '#fff',
  },
  sunset: {
    background:
      'linear-gradient(135deg, rgba(255, 165, 0, 0.4), rgba(255, 69, 0, 0.4))',
    border: '1px solid rgba(255, 165, 0, 0.2)',
    boxShadow: '0 0 15px rgba(255, 69, 0, 0.5)',
    color: '#fff5e6',
    link: '#fff5e6',
    linkHover: '#fff',
  },
  cyberpunk: {
    background:
      'linear-gradient(135deg, rgba(255, 0, 255, 0.4), rgba(0, 255, 255, 0.4))',
    border: '1px solid rgba(255, 0, 255, 0.2)',
    boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)',
    color: '#e0e0e0',
    link: '#e0e0e0',
    linkHover: '#fff',
  },
  emerald: {
    background:
      'linear-gradient(135deg, rgba(0, 128, 0, 0.4), rgba(0, 255, 128, 0.4))',
    border: '1px solid rgba(0, 255, 128, 0.2)',
    boxShadow: '0 0 15px rgba(0, 255, 128, 0.5)',
    color: '#d4ffd4',
    link: '#d4ffd4',
    linkHover: '#fff',
  },
  simplelight: {
    background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
    border: '1px solid #c3cfe2',
    boxShadow: '0 0 15px #c3cfe2',
    color: '#333',
    link: '#333',
    linkHover: '#000',
  },
  simpledark: {
    background: 'linear-gradient(135deg, #333, #000)',
    border: '1px solid #000',
    boxShadow: '0 0 15px #000',
    color: '#fff',
    link: '#fff',
    linkHover: '#ccc',
  },
}
