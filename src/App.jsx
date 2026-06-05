import PortfolioHome from './components/PortfolioHome'
import ProjectPages from './components/ProjectPages'

export default function App() {
  const projectMatch = window.location.pathname.match(/^\/projetos\/([^/]+)\/?$/)

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {projectMatch ? <ProjectPages slug={projectMatch[1]} /> : <PortfolioHome />}
    </div>
  )
}
