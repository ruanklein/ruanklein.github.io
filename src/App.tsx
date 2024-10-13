/* eslint-disable max-len */
import React, { useState, useEffect, useMemo } from 'react'
import Terminal, { TerminalOutput } from 'react-terminal-ui'
import { GlobalStyle, TerminalLine, terminalThemes } from './GlobalStyles'

type TerminalTheme = keyof typeof terminalThemes
type CommandInterface = Record<
  string,
  (parameters?: string[]) => React.ReactElement
>

const App = (): React.ReactElement => {
  const [terminalTheme, setTerminalTheme] = useState<TerminalTheme>('neon')
  const [loading, setLoading] = useState(true)
  const [terminalPrompt, setTerminalPrompt] = useState<'$' | '#'>('$')
  const [terminalLineData, setTerminalLineData] = useState<
    React.ReactElement[]
  >([
    <>Last login: {new Date().toUTCString()} on ttys000</>,
    <>
      Digite <strong>&quot;help&quot;</strong> para ver a lista de comandos
      disponíveis.
    </>,
  ])

  const commands: CommandInterface = useMemo(
    () => ({
      clear: () => <></>,
      theme: (parameters = []) => {
        const [theme] = parameters as [TerminalTheme]

        if (theme && terminalThemes[theme]) {
          setTerminalTheme(theme)
          return <>{`Tema alterado para "${theme}"`}</>
        }

        return (
          <>
            <TerminalLine>
              <strong>Uso:</strong> theme &lt;tema&gt;
            </TerminalLine>
            <TerminalLine>
              <strong>Descrição:</strong> Altera o tema do terminal
            </TerminalLine>
            <TerminalLine>
              Temas disponíveis: {Object.keys(terminalThemes).join(', ')}
            </TerminalLine>
          </>
        )
      },
      social: () => {
        return (
          <>
            <TerminalLine>
              <strong>Uso:</strong> social
            </TerminalLine>
            <TerminalLine>
              <strong>Descrição:</strong> Exibe minhas redes sociais
            </TerminalLine>
            <TerminalLine>
              GitHub:{' '}
              <a
                href="https://github.com/ruanklein"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/ruanklein
              </a>
            </TerminalLine>
            <TerminalLine>
              LinkedIn:{' '}
              <a
                href="https://linkedin.com/in/ruanklein"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://linkedin.com/in/ruanklein
              </a>
            </TerminalLine>
          </>
        )
      },
      skills: () => {
        return (
          <>
            <TerminalLine>
              <strong>Uso:</strong> skills
            </TerminalLine>
            <TerminalLine>
              <strong>Descrição:</strong> Exibe minhas habilidades
            </TerminalLine>
            <TerminalLine>
              Linguagens de programação: JavaScript, TypeScript, Python, PHP,
              Shell Script
            </TerminalLine>
            <TerminalLine>
              Frameworks: React.js, Next.js, Nest.js, Express.js, Laravel,
              FastAPI
            </TerminalLine>
            <TerminalLine>
              Banco de dados: MySQL, PostgreSQL, SQLite, Redis, Firebase
            </TerminalLine>
            <TerminalLine>Cloud: AWS, Google Cloud Platform</TerminalLine>
            <TerminalLine>
              Outras habilidades: Docker, Git, CI/CD, Linux
            </TerminalLine>
          </>
        )
      },
      projects: (parameters = []) => {
        const [projectName] = parameters

        if (projectName === 'ruan.sh') {
          return (
            <>
              <TerminalLine>
                <strong>Nome:</strong> ruan.sh
              </TerminalLine>
              <TerminalLine>
                <strong>Descrição:</strong> Meu site pessoal
              </TerminalLine>
              <TerminalLine>
                <strong>Link:</strong>{' '}
                <a
                  href="https://ruan.sh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ruan.sh
                </a>
              </TerminalLine>
              <TerminalLine>
                <strong>Tecnologias:</strong> React.js, Vite, TypeScript, Styled
                Components
              </TerminalLine>
            </>
          )
        }

        if (projectName === 'digcard') {
          return (
            <>
              <TerminalLine>
                <strong>Nome:</strong> DIGCard
              </TerminalLine>
              <TerminalLine>
                <strong>Descrição:</strong> Criador de cartões digitais
              </TerminalLine>
              <TerminalLine>
                <strong>Link:</strong>{' '}
                <a
                  href="https://ruan.sh/portfolio/digcard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ruan.sh/portfolio/digcard
                </a>
              </TerminalLine>
              <TerminalLine>
                <strong>Tecnologias:</strong> React.js, Vite, TypeScript, Antd
                Design, Font Awesome
              </TerminalLine>
            </>
          )
        }

        return (
          <>
            <TerminalLine>
              <strong>Uso:</strong> projects [nome-do-projeto]
            </TerminalLine>
            <TerminalLine>
              <strong>Descrição:</strong> Exibe meus projetos. Se fornecido um
              nome de projeto, exibe detalhes sobre ele
            </TerminalLine>
            <TerminalLine>Projetos: ruan.sh, DIGCard</TerminalLine>
          </>
        )
      },
      whois: () => {
        return (
          <>
            <TerminalLine>
              <strong>Uso:</strong> whois
            </TerminalLine>
            <TerminalLine>
              <strong>Descrição:</strong> Exibe informações sobre o autor
            </TerminalLine>
            <br />
            <TerminalLine>Nome: Ruan Klein Felisbino</TerminalLine>
            <TerminalLine>Profissão: Analista Full Stack</TerminalLine>
            <TerminalLine>Localização: Curitiba, PR - Brasil</TerminalLine>
            <TerminalLine>
              Homepage:{' '}
              <a
                href="https://ruan.sh"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ruan.sh
              </a>
            </TerminalLine>
            <TerminalLine>
              Contato:{' '}
              <a
                href="mailto:85wif9skr@mozmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                85wif9skr@mozmail.com
              </a>
            </TerminalLine>
          </>
        )
      },
      help: () => {
        return (
          <>
            <TerminalLine>
              <strong>Uso:</strong> help
            </TerminalLine>
            <TerminalLine>
              <strong>Descrição:</strong> Exibe a lista de comandos disponíveis
            </TerminalLine>
            <TerminalLine>
              Comandos disponíveis: {Object.keys(commands).join(', ')}
            </TerminalLine>
          </>
        )
      },
    }),
    []
  )

  useEffect(() => {
    const saveTerminalTheme = (): void => {
      localStorage.setItem('terminal-theme', terminalTheme)
    }

    if (!loading) {
      saveTerminalTheme()
    }
  }, [terminalTheme])

  useEffect(() => {
    const loadTerminalTheme = (): void => {
      const storedTerminalTheme = localStorage.getItem(
        'terminal-theme'
      ) as TerminalTheme

      if (terminalThemes[storedTerminalTheme]) {
        setTerminalTheme(storedTerminalTheme)
      }
    }

    if (loading) {
      loadTerminalTheme()
    }
  }, [loading])

  const handleInput = (input: string): void => {
    const parameters = input.trim().toLowerCase().split(' ')
    const command = commands[parameters[0]]

    // Special case for clear command
    if (parameters[0] === 'clear') {
      setTerminalLineData([])
      return
    }

    // Easter egg
    if (parameters[0] === 'sudo' && terminalPrompt === '$') {
      setTerminalPrompt('#')
      setTerminalLineData((prevData) => [
        ...prevData,
        <>{`> ${input}`}</>,
        <>
          <TerminalLine>
            <strong>Uso:</strong> sudo &lt;comando&gt;
          </TerminalLine>
          <TerminalLine>
            <strong>Descrição:</strong> Executa um comando com privilégios de
            administrador
          </TerminalLine>
          <TerminalLine>
            ...mas você não é o root, então não vai funcionar 😜
          </TerminalLine>
        </>,
      ])
      return
    }

    setTerminalLineData((prevData) => [
      ...prevData,
      <>{`> ${input}`}</>,
      <>
        {command
          ? command(parameters.slice(1))
          : `Comando não encontrado: ${parameters[0]}`}
      </>,
    ])
  }

  return (
    <>
      <GlobalStyle theme={terminalThemes[terminalTheme]} />
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
            <Terminal
              name="ruan.sh"
              onInput={handleInput}
              prompt={terminalPrompt}
            >
              {terminalLineData.map((line, index) => (
                <TerminalOutput key={index}>
                  <>{line}</>
                </TerminalOutput>
              ))}
            </Terminal>
          )}
        </div>
      </div>
    </>
  )
}

export default App
