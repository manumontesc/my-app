import React from 'react';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.nodes = [];
    this.edges = [];
  }

  addNode = (node) => {
    this.nodes.push(node);
  };

  addEdge = (edge) => {
    this.edges.push(edge);
  };

  addNodes = (nodesArray) => {
    this.nodes = [...nodesArray];
  };

  addEdges = (edgesArray) => {
    this.edges = [...edgesArray];
  };

  findNodeByName(name) {
    
    return this.nodes.find((node) => node.name === name) || null;
  }

  findShortestPath = (start, end) => {
    
    const visited = new Set();
    const queue = [[start, []]]; 
  
    while (queue.length > 0) {
      const [currentNode, pathSoFar] = queue.shift();
  
      if (currentNode === end) {
        return pathSoFar;
      }
  
      if (!visited.has(currentNode)) {
        visited.add(currentNode);
        const neighbors = this.edges
          .filter((edge) => edge.props.origin === currentNode)
          .map((edge) => edge.props.destination);
  
        for (const neighbor of neighbors) {
          queue.push([neighbor, [...pathSoFar, this.getEdge(currentNode, neighbor)]]);
        }
      }
    }
  
    return null; 
  };
  
  getEdge = (origin, destination) => {
    return this.edges.find((edge) => edge.props.origin === origin && edge.props.destination === destination);
  };
  
}

export default Graph;
