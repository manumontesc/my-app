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
    this.nodes = [...this.nodes, ...nodesArray];
  };

  addEdges = (edgesArray) => {
    this.edges = [...this.edges, ...edgesArray];
  };

  render() {
    // You can add rendering logic here if needed
    return null;
  }
}

export default Graph;
