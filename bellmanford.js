const readline = require("readline-sync");

function BellmanFord(graph, V, E, src) {
	// Initialize distance of all vertices as infinite.
	let dis = Array(V).fill(Infinity);

	// initialize distance of source as 0
	dis[src] = 0;

	// Relax all edges |V| - 1 times. A simple
	// shortest path from src to any other
	// vertex can have at-most |V| - 1 edges
	for (let i = 0; i < V - 1; i++) {
		for (let j = 0; j < E; j++) {
			if (dis[graph[j][0]] + graph[j][2] < dis[graph[j][1]])
				dis[graph[j][1]] = dis[graph[j][0]] + graph[j][2];
		}
	}

	// check for negative-weight cycles.
	// The above step guarantees shortest
	// distances if graph doesn't contain
	// negative weight cycle. If we get a
	// shorter path, then there is a cycle.
	for (let i = 0; i < E; i++) {
		let x = graph[i][0];
		let y = graph[i][1];
		let weight = graph[i][2];
		if (dis[x] != 1000000000 && dis[x] + weight < dis[y])
			console.log("Graph contains negative weight cycle");
	}

	console.log("\nVertex \t Distance from Source");
	for (let i = 0; i < V; i++) console.log(i + "\t\t" + dis[i]);
}

// Driver code
console.log("Enter Number of Vertices in graph");
let V = Number(readline.question()); // Number of vertices in graph
console.log("Enter Number of Edges in graph");
let E = Number(readline.question()); // Number of edges in graph

// Every edge has three values (u, v, w) where
// the edge is from vertex u to v. And weight
// of the edge is w.

console.log(
	"\nEvery edge has three values (u, v, w) where the edge is from vertex u to v. And weight of the edge is w\n"
);

let graph = [];

let u, v, w;

for (let i = 0; i < E; i++) {
	console.log("Enter value of vertex u");
	u = Number(readline.question());
	console.log("Enter value of vertex v");
	v = Number(readline.question());
	console.log("Enter weight of edge (w)");
	w = Number(readline.question());
	graph.push([u, v, w]);
}

// let graph = [
// 	[0, 1, -1],
// 	[0, 2, 4],
// 	[-1, -2, -3],
// 	[1, 3, 2],
// 	[1, 4, 2],
// 	[3, 2, 5],
// 	[3, 1, 1],
// 	[4, 3, -3],
// ];
BellmanFord(graph, V, E, 0);
