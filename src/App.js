// Assuming Graph and City classes are defined in separate files

import React, { useEffect } from 'react';
import Graph from './models/Graph';
import City from './models/City';
import { CarJourney } from './models/Journey';

const App = () => {
  useEffect(() => {
    // Initialize the graph
    const myGraph = new Graph();

    // Create cities
    const paris = new City("Paris");
    const barcelona = new City("Barcelona");

    // Add cities to the graph
    myGraph.addNodes([paris, barcelona]);

    // Create a car journey from Barcelona to Paris
    const carJourney = new CarJourney({
      origin: barcelona,
      destination: paris,
      licensePlate: "ABC123" // Replace with an actual license plate
    });

    // Add the car journey to the graph
    myGraph.addEdge(carJourney);

    // Now the graph contains two cities and a car journey connecting them
    console.log(myGraph);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      {/* You can add your React components or UI elements here */}
    </div>
  );
};

export default App;
