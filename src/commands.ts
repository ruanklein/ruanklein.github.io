/* eslint-disable max-len */
interface CommandInterface {
  command: string
  description: string
  content: string[]
}

const commands: CommandInterface[] = [
  {
    command: 'whois',
    description: 'exibe informações sobre mim',
    content: [
      'Nome: Ruan Klein Felisbino',
      'Profissão: Analista Full Stack',
      'Localização: Curitiba, PR - Brasil',
      'Homepage: https://ruan.sh',
      '--',
      'Você pode me contatar em: 85wif9skr@mozmail.com',
    ],
  },
  {
    command: 'social',
    description: 'exibe minhas redes sociais',
    content: [
      'GitHub: https://github.com/ruanklein',
      'LinkedIn: https://linkedin.com/in/ruanklein',
      'Instagram: https://twitter.com/_ruanklein_',
      'Facebook: https://www.facebook.com/ruankleinn',
    ],
  },
  {
    command: 'skills',
    description: 'exibe minhas habilidades',
    content: [
      'Linguagens de programação: JavaScript, TypeScript, Python, PHP, Shell Script',
      'Frameworks: React.js, Next.js, Nest.js, Express.js, Laravel, FastAPI',
      'Banco de dados: MySQL, PostgreSQL, SQLite, Redis, Firebase',
      'Cloud: AWS, Google Cloud Platform',
      'Outras habilidades: Docker, Git, CI/CD, Linux',
    ],
  },
  {
    command: 'projects',
    description: 'exibe meus projetos',
    content: [
      'ruan.sh: meu site pessoal. Link: https://ruan.sh',
      'DIGCard: criador de cartões digitais. Link: https://ruan.sh/portfolio/digcard',
    ],
  },
]

export default commands
