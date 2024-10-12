/* eslint-disable max-len */
import { useState, useEffect } from 'react'
import Terminal, { TerminalOutput } from 'react-terminal-ui'
import { GlobalStyle, themes } from './GlobalStyles'

import commands from './commands'

type Theme = keyof typeof themes

const help = [
  'Comandos disponíveis:',
  '  - clear\t\tlimpa o terminal',
  '  - theme [theme]\taltera o tema do terminal',
  ...commands.map((c) => `  - ${c.command}\t\t${c.description}`),
  '  - help\t\texibe esta mensagem',
]

const App = (): React.ReactElement => {
  const [theme, setTheme] = useState<Theme>('neon')
  const [loading, setLoading] = useState(true)
  const [terminalLineData, setTerminalLineData] = useState([
    `Last login: ${new Date().toUTCString()} on ttys000`,
    ...help,
  ])

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('terminal-theme', theme)
    }
  }, [theme])

  useEffect(() => {
    const loadTheme = (): void => {
      const storedTheme = localStorage.getItem('terminal-theme') as Theme

      if (themes[storedTheme]) {
        setTheme(storedTheme)
      }
    }

    if (loading) {
      loadTheme()
    }
  }, [loading])

  const handleInput = (input: string): void => {
    const parameters = input.trim().toLowerCase().split(' ')

    if (parameters[0] === 'clear') {
      setTerminalLineData([])
      return
    }

    if (parameters[0] === 'theme') {
      if (parameters.length === 1) {
        setTerminalLineData((prev) => [
          ...prev,
          '> theme',
          `Temas disponíveis: ${Object.keys(themes).join(', ')}`,
        ])
        return
      }

      const themeName = parameters[1] as Theme

      if (!themes[themeName]) {
        setTerminalLineData((prev) => [
          ...prev,
          `> theme ${themeName}`,
          `Tema "${themeName}" inválido. Digite "theme" para ver os temas disponíveis.`,
        ])
        return
      }

      setTerminalLineData((prev) => [
        ...prev,
        `> theme ${themeName}`,
        `Tema alterado para "${themeName}".`,
      ])
      setTheme(themeName)
      return
    }

    if (parameters[0] === 'help') {
      setTerminalLineData((prev) => [...prev, '> help', ...help])
      return
    }

    const command = commands.find(
      (c) => c.command.toLowerCase() === parameters[0].toLowerCase()
    )

    if (command) {
      setTerminalLineData((prev) => [
        ...prev,
        `> ${command.command}`,
        ...command.content,
      ])
      return
    }

    const unknownCommand = parameters[0]
    setTerminalLineData((prev) => [
      ...prev,
      `> ${unknownCommand}`,
      `Comando "${unknownCommand}" inválido. Digite "help" para ver os comandos disponíveis.`,
    ])
  }

  return (
    <>
      <GlobalStyle theme={themes[theme]} />
      <video
        className="video-background"
        autoPlay
        muted
        loop
        onLoadedData={() => {
          setLoading(false)
        }}
      >
        <source src="/bg.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>

      <div className="content">
        <div className="terminal-container">
          {!loading && (
            <Terminal name="ruan.sh" onInput={handleInput} prompt="$">
              {terminalLineData.map((line, index) => (
                <TerminalOutput key={index}>{line}</TerminalOutput>
              ))}
            </Terminal>
          )}
        </div>
      </div>
    </>
  )
}

export default App
