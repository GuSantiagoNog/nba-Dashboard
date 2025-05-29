import React, { useState } from 'react'

export default function Navbar({ teams, onSelectTeam }) {
  const [showDropdown, setShowDropdown] = useState(false)

  function toggleDropdown() {
    setShowDropdown(prev => !prev)
  }

  function handleClickOutside(event) {
    if (!event.target.closest('.menu-container')) {
      setShowDropdown(false)
    }
  }

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <nav className="navbar">
      <a href="index.html" className="titulo">
        <h1>NBA Dashboard</h1>
      </a>
      <div className="menu">
        <a href="https://jumperbrasil.com.br/?gad_source=1&gclid=Cj0KCQjw782_BhDjARIsABTv_JDnYvJ-v3KbXvNlm_UyqE3jS8qwWjLD7Hf5sXsiR7DWzH_UsZRm-3AaAuZjEALw_wcB" target="_blank" rel="noreferrer">
          <button>Notícias</button>
        </a>
        <a href="https://www.espn.com.br/nba/estatisticas" target="_blank" rel="noreferrer">
          <button>Estatísticas</button>
        </a>
        <a href="https://www.espn.com.br/nba/calendario" target="_blank" rel="noreferrer">
          <button>Calendário</button>
        </a>
      </div>

      <div className="menu-container">
        <button className="menu-button" id="menuButton" onClick={toggleDropdown}>
          ☰ Times
        </button>
        {showDropdown && (
          <div className={`dropdown-content ${isMenuOpen ? "show" : ""}`} id="teamList">
            <div className="dropdown-grid">
              {teams.map(team => (
                <button key={team.name} onClick={() => { onSelectTeam(team); setShowDropdown(false) }}>
                  {team.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}