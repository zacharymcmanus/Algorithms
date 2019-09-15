class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(v1, v2) {
		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}

	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			v => v !== vertex2
		);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			v => v !== vertex1
		);
	}

	removeVertex(vertex) {
		while (this.adjacencyList[vertex].length) {
			const adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}
		delete this.adjacencyList[vertex]
	}
}

var g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Iceland");
g.addEdge("Tokyo", "Iceland");
g.removeVertex("Tokyo");
// g.removeEdge("Tokyo", "Iceland");
console.log(g)
