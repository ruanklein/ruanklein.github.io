/* eslint-disable max-len */
import { useState } from 'react'
import Terminal, { TerminalOutput } from 'react-terminal-ui'
import { GlobalStyle, themes } from './GlobalStyles'

type Theme = keyof typeof themes

const help = [
  'Available commands:',
  '  - clear',
  '  - theme [theme]',
  '  - about',
  '  - thanks',
  '  - help',
]

const App = (): React.ReactElement => {
  const [theme, setTheme] = useState<Theme>('neon')
  const [terminalLineData, setTerminalLineData] = useState([
    'Welcome to the ruan.sh terminal!',
    ...help,
  ])

  const onInput = (input: string): void => {
    const parameters = input.trim().toLowerCase().split(' ')

    if (parameters[0] === 'clear') {
      setTerminalLineData([])
      return
    }

    if (parameters[0] === 'theme') {
      if (parameters.length === 1) {
        setTerminalLineData((prev) => [
          ...prev,
          `Available themes: ${Object.keys(themes).join(', ')}`,
        ])
        return
      }

      const themeName = parameters[1] as Theme

      if (!themes[themeName]) {
        setTerminalLineData((prev) => [
          ...prev,
          `Theme "${themeName}" not found.`,
        ])
        return
      }

      setTheme(themeName)
      return
    }

    if (parameters[0] === 'thanks') {
      setTerminalLineData((prev) => [
        ...prev,
        'Thank you for visiting my website!',
        'I hope you enjoyed it.',
        '--',
        'Special thanks to:',
        '  - github.com/jonmbake/react-terminal-ui (for the terminal component)',
        '  - github.com/mansoorbarri/coming-soon.git (for the background video)',
      ])
      return
    }

    if (parameters[0] === 'about') {
      setTerminalLineData((prev) => [
        ...prev,
        'I am a software engineer based in Brazil.',
        'I am passionate about technology and programming.',
        'I am JavaScript/TypeScript, Node.js, Python, and Bash/Shell Script enthusiast.',
        'I am UNIX philosophy follower, so I love the terminal.',
        'I advogate for privacy and security.',
        '--',
        'You can contact me at: 85wif9skr@mozmail.com',
      ])
      return
    }

    if (parameters[0] === 'help') {
      setTerminalLineData((prev) => [...prev, ...help])
      return
    }

    setTerminalLineData((prev) => [
      ...prev,
      `Command "${parameters[0]}" not found.`,
    ])
  }

  return (
    <>
      <GlobalStyle theme={themes[theme]} />
      <video className="video-background" autoPlay muted loop>
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <div className="terminal-container">
          <Terminal name="ruan.sh" onInput={onInput} prompt="$">
            {terminalLineData.map((line, index) => (
              <TerminalOutput key={index}>{line}</TerminalOutput>
            ))}
          </Terminal>
        </div>
      </div>
    </>
  )
}

export default App
