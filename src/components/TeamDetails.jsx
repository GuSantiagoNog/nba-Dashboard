import React from 'react'

export default function TeamDetails({ team }) {
  return (
    <div
      className="selected-team"
      style={{ backgroundColor: team.color }}
      key={team.name}
    >
      <img src={team.logo} alt={`Logo do ${team.name}`} />
      <h2>{team.name}</h2>
      <div className="iframe-container">
        {team.dashboards.map((url, i) => (
          <iframe key={i} src={url} title={`Dashboard ${i + 1}`}></iframe>
        ))}
      </div>
    </div>
  )
}