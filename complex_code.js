/* complex_code.js */

// This code is an implementation of a graph data structure and a breadth first search algorithm.

class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(node) {
    if (!this.nodes.has(node)) {
      this.nodes.set(node, []);
    }
  }

  addEdge(srcNode, destNode) {
    if (this.nodes.has(srcNode) && this.nodes.has(destNode)) {
      this.nodes.get(srcNode).push(destNode);
    }
  }

  breadthFirstSearch(startNode) {
    let visited = new Set();
    let queue = [];

    visited.add(startNode);
    queue.push(startNode);

    while (queue.length > 0) {
      let currentNode = queue.shift();
      console.log(currentNode);

      let neighbors = this.nodes.get(currentNode);
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
}

// Usage example
let graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addNode('F');
graph.addNode('G');

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('B', 'A');
graph.addEdge('B', 'C');
graph.addEdge('B', 'E');
graph.addEdge('C', 'B');
graph.addEdge('C', 'E');
graph.addEdge('D', 'A');
graph.addEdge('D', 'E');
graph.addEdge('E', 'B');
graph.addEdge('E', 'C');
graph.addEdge('E', 'D');
graph.addEdge('E', 'F');
graph.addEdge('F', 'E');
graph.addEdge('F', 'G');
graph.addEdge('G', 'F');

graph.breadthFirstSearch('A');
