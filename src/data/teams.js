const teams = [
  { name: "Atlanta Hawks", color: "#E03A3E", logo: "img/hawks.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Boston Celtics", color: "#007A33", logo: "img/boston.png", iframes: [
      "https://app.powerbi.com/reportEmbed?reportId=7322704c-e41e-4730-b94c-801a7d7f1bb7&autoAuth=true&ctid=d987bd71-a5f1-44e3-bb25-e111ab6ffa13"
  ]},
  { name: "Brooklyn Nets", color: "#000000", logo: "img/brooklyn.png", iframes: [
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


export default teams