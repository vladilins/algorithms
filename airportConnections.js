function airportConnections(airports, routes, startingAirport) {
  const airportGraph = createAirportGraph(airports, routes);
  const unreachableAirportNodes = getUnreachableAirportNodes(
    airportGraph,
    airports,
    startingAirport
  );
  markUnreachableConnections(airportGraph, unreachableAirportNodes);
  return getMinNumberOfNewConnections(airportGraph, unreachableAirportNodes); //?
}

function createAirportGraph(airports, routes) {
  const airportGraph = {};
  for (const airport of airports) {
    airportGraph[airport] = new AirportNode(airport); //?
  }
  for (const route of routes) {
    const [airport, connection] = route; //?
    airportGraph[airport].connections.push(connection);
  }
  return airportGraph;
}

function getUnreachableAirportNodes(airportGraph, airports, startingAirport) {
  const visitedAirports = {};
  depthFirstTraverseAirports(airportGraph, startingAirport, visitedAirports);

  const unreachableAirportNodes = [];
  for (const airport of airports) {
    if (airport in visitedAirports) continue;
    const airportNode = airportGraph[airport]; //?
    airportNode.isReachable = false;
    unreachableAirportNodes.push(airportNode);
  }
  return unreachableAirportNodes;
}

function depthFirstTraverseAirports(airportGraph, airport, visitedAirports) {
  if (airport in visitedAirports) return;
  visitedAirports[airport] = true;
  const { connections } = airportGraph[airport];
  for (const connection of connections) {
    depthFirstTraverseAirports(airportGraph, connection, visitedAirports);
  }
}

function markUnreachableConnections(airportGraph, unreachableAirportNodes) {
  for (const airportNode of unreachableAirportNodes) {
    const { airport } = airportNode;
    const unreachableConnections = [];
    depthFirstAddUnreachableConnections(
      airportGraph,
      airport,
      unreachableConnections,
      {}
    );
    airportNode.unreachableConnections = unreachableConnections;
  }
}

function depthFirstAddUnreachableConnections(
  airportGraph,
  airport,
  unreachableConnections,
  visitedAirports
) {
  if (airportGraph[airport].isReachable) return;
  if (airport in visitedAirports) return;
  visitedAirports[airport] = true;
  unreachableConnections.push(airport);
  const { connections } = airportGraph[airport];
  for (const connection of connections) {
    depthFirstAddUnreachableConnections(
      airportGraph,
      connection,
      unreachableConnections,
      visitedAirports
    );
  }
}

function getMinNumberOfNewConnections(airportGraph, unreachableAirportNodes) {
  unreachableAirportNodes.sort(
    (a1, a2) =>
      a2.unreachableConnections.length - a1.unreachableConnections.length
  );
  console.log(unreachableAirportNodes);

  let numberOfNewConnection = 0;
  for (const airportNode of unreachableAirportNodes) {
    if (airportNode.isReachable) continue;
    numberOfNewConnection++;
    for (const connection of airportNode.unreachableConnections) {
      airportGraph[connection].isReachable = true;
    }
  }
  return numberOfNewConnection;
}

class AirportNode {
  constructor(airport) {
    this.airport = airport;
    this.connections = [];
    this.isReachable = true;
    this.unreachableConnections = [];
  }
}

airportConnections(
  [
    "BGI",
    "CDG",
    "DEL",
    "DOH",
    "DSM",
    "EWR",
    "EYW",
    "HND",
    "ICN",
    "JFK",
    "LGA",
    "LHR",
    "ORD",
    "SAN",
    "SFO",
    "SIN",
    "TLV",
    "BUD",
  ],
  [
    ["DSM", "ORD"],
    ["ORD", "BGI"],
    ["BGI", "LGA"],
    ["SIN", "CDG"],
    ["CDG", "SIN"],
    ["CDG", "BUD"],
    ["DEL", "DOH"],
    ["DEL", "CDG"],
    ["TLV", "DEL"],
    ["EWR", "HND"],
    ["HND", "ICN"],
    ["HND", "JFK"],
    ["ICN", "JFK"],
    ["JFK", "LGA"],
    ["EYW", "LHR"],
    ["LHR", "SFO"],
    ["SFO", "SAN"],
    ["SFO", "DSM"],
    ["SAN", "EYW"],
  ],
  "LGA"
);
