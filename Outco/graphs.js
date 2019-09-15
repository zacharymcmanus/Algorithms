function bfs(vertex) {
	let queue = [];
	// enqueue - push
	// dequeue - shift
	let result = [];
	let visitited = new Set();

	if (vertex === null) {
		return result;
	}

	queue.push(vertex);
	visitited.add(vertex);

	while (queue.length > 0) {
		let current = queue.shift();
		for (let edge of current.edges) {
			if (!visitited.has(edge)) {
				queue.push(edge);
				visitited.add(edge);
			}
		}
		result.push(current.id);
	}
	return result;
}

function dfs(vertex, destination) {
	let result = [];
	let visited = new Set();

	function traverse(current, path) {
		console.log("path:", path);
		if (current.id === destination) {
			result.push(path.slice());
		}
		if (visited.has(current)) {
			return;
		}

		visited.add(current);
		for (let edge of current.edges) {
			traverse(edge, path.concat(edge.id));
		}
		visited.remove(current);
	}

	traverse(vertex, [vertex.id]);

	return result;
}