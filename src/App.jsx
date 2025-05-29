import React, { useState, useEffect } from "react";
import "index.css";
import hawksLogo from 'img/hawks.png';
import bostonLogo from 'img/boston.png';
import brooklynLogo from 'img/brooklyn.png';
import hornetsLogo from 'img/hornets.png';
import bullsLogo from 'img/bulls.png';
import cavaliersLogo from 'img/cavaliers.png';
import mavericksLogo from 'img/mavericks.png';
import nuggetsLogo from 'img/nuggets.png';
import pistonsLogo from 'img/pistons.png';
import warriorsLogo from 'img/Logo-Golden-States.png';
import rocketsLogo from 'img/rockets.png';
import pacersLogo from 'img/pacers.png';
import clippersLogo from 'img/clippers.png';
import lakersLogo from 'img/lakers.png';
import grizzliesLogo from 'img/grizzlies.png';
import heatLogo from 'img/heat.png';
import bucksLogo from 'img/bucks.png';
import timberwolvesLogo from 'img/timberwolves.png';
import pelicansLogo from 'img/pelicans.png';
import knicksLogo from 'img/knicks.png';
import thunderLogo from 'img/thunder.png';
import magicLogo from 'img/magic.png';
import sixersLogo from 'img/76ers.png';
import sunsLogo from 'img/suns.png';
import trailblazersLogo from 'img/trailblazers.png';
import kingsLogo from 'img/kings.png';
import spursLogo from 'img/spurs.png';
import raptorsLogo from 'img/raptors.png';
import jazzLogo from 'img/jazz.png';
import wizardsLogo from 'img/wizards.png';
const teams = [
  { name: "Atlanta Hawks", color: "#E03A3E", logo: hawksLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Boston Celtics", color: "#007A33", logo: bostonLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Brooklyn Nets", color: "#000000", logo: brooklynLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Charlotte Hornets", color: "#1D1160", logo: hornetsLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Chicago Bulls", color: "#C8102E", logo: bullsLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Cleveland Cavaliers", color: "#6A1D1A", logo: cavaliersLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Dallas Mavericks", color: "#00538C", logo: mavericksLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Denver Nuggets", color: "#0E76A8", logo: nuggetsLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Detroit Pistons", color: "#C8102E", logo: pistonsLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Golden State Warriors", color: "#FDB927", logo: warriorsLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Houston Rockets", color: "#CE1141", logo: rocketsLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Indiana Pacers", color: "#FDCB57", logo: pacersLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Los Angeles Clippers", color: "#C8102E", logo: clippersLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Los Angeles Lakers", color: "#552583", logo: lakersLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Memphis Grizzlies", color: "#5D76A9", logo: grizzliesLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Miami Heat", color: "#98002E", logo: heatLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Milwaukee Bucks", color: "#00471B", logo: bucksLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Minnesota Timberwolves", color: "#236192", logo: timberwolvesLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "New Orleans Pelicans", color: "#E63946", logo: pelicansLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "New York Knicks", color: "#F58426", logo: knicksLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Oklahoma City Thunder", color: "#007AC1", logo: thunderLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Orlando Magic", color: "#0077C0", logo: magicLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Philadelphia 76ers", color: "#006BB6", logo: sixersLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Phoenix Suns", color: "#1D1160", logo: sunsLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Portland Trail Blazers", color: "#E03A3E", logo: trailblazersLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Sacramento Kings", color: "#5A2D81", logo: kingsLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "San Antonio Spurs", color: "#B6BFBF", logo: spursLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Toronto Raptors", color: "#CE1141", logo: raptorsLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Utah Jazz", color: "#00471B", logo: jazzLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] },
  { name: "Washington Wizards", color: "#002B5C", logo: wizardsLogo, iframes: [ "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13" ] }
]
  ]},
  { name: "Boston Celtics", color: "#007A33", logo: bostonLogo, iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Brooklyn Nets", color: "#000000", logo: brooklynLogo, iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Charlotte Hornets", color: "#1D1160", logo: "img/hornets.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Chicago Bulls", color: "#C8102E", logo: "img/bulls.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Cleveland Cavaliers", color: "#6A1D1A", logo: "img/cavaliers.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Dallas Mavericks", color: "#00538C", logo: "img/mavericks.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Denver Nuggets", color: "#0E76A8", logo: "img/nuggets.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Detroit Pistons", color: "#C8102E", logo: "img/pistons.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Golden State Warriors", color: "#FDB927", logo: "img/Logo-Golden-States.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Houston Rockets", color: "#CE1141", logo: "img/rockets.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Indiana Pacers", color: "#FDCB57", logo: "img/pacers.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Los Angeles Clippers", color: "#C8102E", logo: "img/clippers.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Los Angeles Lakers", color: "#552583", logo: "img/lakers.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Memphis Grizzlies", color: "#5D76A9", logo: "img/grizzlies.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Miami Heat", color: "#98002E", logo: "img/heat.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Milwaukee Bucks", color: "#00471B", logo: "img/bucks.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Minnesota Timberwolves", color: "#236192", logo: "img/timberwolves.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "New Orleans Pelicans", color: "#E63946", logo: "img/pelicans.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "New York Knicks", color: "#F58426", logo: "img/knicks.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Oklahoma City Thunder", color: "#007AC1", logo: "img/thunder.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Orlando Magic", color: "#0077C0", logo: "img/magic.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Philadelphia 76ers", color: "#006BB6", logo: "img/76ers.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Phoenix Suns", color: "#1D1160", logo: "img/suns.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Portland Trail Blazers", color: "#E03A3E", logo: "img/trailblazers.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Sacramento Kings", color: "#5A2D81", logo: "img/kings.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "San Antonio Spurs", color: "#B6BFBF", logo: "img/spurs.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Toronto Raptors", color: "#CE1141", logo: "img/raptors.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Utah Jazz", color: "#00471B", logo: "img/jazz.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Washington Wizards", color: "#002B5C", logo: "img/wizards.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]}
];


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".menu-container")) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  function selectTeam(team) {
    setSelectedTeam(team);
    setIsMenuOpen(false);
  }

  return (
    <>
      <nav className="navbar">
        <a href="index.html" className="titulo">
          <h1>NBA Dashboard</h1>
        </a>

        <div className="menu">
          <a
            href="https://jumperbrasil.com.br/?gad_source=1&gclid=Cj0KCQjw782_BhDjARIsABTv_JDnYvJ-v3KbXvNlm_UyqE3jS8qwWjLD7Hf5sXsiR7DWzH_UsZRm-3AaAuZjEALw_wcB"
            target="_blank"
            rel="noreferrer"
          >
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
          <button
            className="menu-button"
            id="menuButton"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰ Times
          </button>

          <div className={`dropdown-content ${isMenuOpen ? "show" : ""}`} id="teamList">
            <div className="dropdown-grid">
              {teams.map((team) => (
                <button key={team.name} onClick={() => selectTeam(team)}>
                  {team.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {selectedTeam && (
        <div
          id="teamDetails"
          className="selected-team"
          style={{ display: "flex", backgroundColor: selectedTeam.color }}
        >
          <img id="teamLogo" src={selectedTeam.logo} alt={`Logo do ${selectedTeam.name}`} />
          <h2 id="teamName">{selectedTeam.name}</h2>

          <div className="iframe-container">
            {selectedTeam.iframes.map((src, index) => (
              <iframe
                key={index}
                title={`${selectedTeam.name} Dashboard ${index + 1}`}
                src={src}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
