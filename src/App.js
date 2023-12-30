import React, { useEffect, useState } from 'react';
import Graph from './models/Graph';
import City from './models/City';
import { AirplaneJourney, BoatJourney, CarJourney, TrainJourney } from './models/Journey';
import './App.css';

const initializeGraph = (graph) => {
  const paris = new City("Paris");
  const barcelona = new City("Barcelona");
  const madrid = new City("Madrid");
  const rome = new City("Roma");
  const valencia = new City("Valencia");
  const malta = new City("Malta");

  graph.addNodes([paris, barcelona, madrid, rome, valencia, malta]);

  graph.addEdges([
    new CarJourney({
      origin: barcelona,
      destination: paris,
      licensePlate: "ABC123"
    }),
    new CarJourney({
      origin: madrid,
      destination: barcelona,
      licensePlate: "ABC124"
    }),
    new TrainJourney({
      origin: barcelona,
      destination: madrid,
      trainNumber: "4782364",
      seatNumber: "66"
    }),
    new AirplaneJourney({
      origin: barcelona,
      destination: rome,
      flightNumber: "AR8575",
      seatNumber: "55"
    }),
    new AirplaneJourney({
      origin: rome,
      destination: malta,
      flightNumber: "AR8547",
      seatNumber: "2"
    }),
    new AirplaneJourney({
      origin: malta,
      destination: rome,
      flightNumber: "AR6789",
      seatNumber: "24"
    }),
    new AirplaneJourney({
      origin: madrid,
      destination: valencia,
      flightNumber: "AR6739",
      seatNumber: "22"
    }),
    new AirplaneJourney({
      origin: valencia,
      destination: madrid,
      flightNumber: "FV8435",
      seatNumber: "4"
    }),
    new BoatJourney({
      origin: valencia,
      destination: malta,
      boatNumber: "5839"
    })
  ]);
}
const myGraph = new Graph();

const App = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [results, setResults] = useState([]);
  const [stages, setStages] = useState([]);

  useEffect(() => {
    initializeGraph(myGraph);
  }, []);

  useEffect(() => {
    console.log(results);
  }, [results]);

  useEffect(() => {
   setStages(myGraph.findShortestPath(results[0], results[1]));
  }, [results]);

  const searchRoute = () => {
    const originNode = myGraph.findNodeByName(origin);
    const destinationNode = myGraph.findNodeByName(destination);

    setResults([originNode, destinationNode]);
  };


  const renderStages = () => {
    if (stages === null) {
      return (`No existe una ruta de ${results[0].name} a ${results[1].name}`);
    } else if (stages.length>0) {
      const journeyList = stages.map((journey, index) => {
        let journeyInfo = '';
        if (journey instanceof AirplaneJourney) {
          journeyInfo = `Coge el avión ${journey.state.flightNumber} con asiento ${journey.state.seatNumber} desde ${journey.state.origin.name} hasta ${journey.state.destination.name}.`;
        } else if (journey instanceof CarJourney) {
          journeyInfo = `Coge el coche desde ${journey.state.origin.name} hasta ${journey.state.destination.name} con la matrícula ${journey.state.licensePlate}.`;
        } else if (journey instanceof TrainJourney) {
          journeyInfo = `Coge el tren ${journey.state.trainNumber} con asiento ${journey.state.seatNumber} desde ${journey.state.origin.name} hasta ${journey.state.destination.name}.`;
        } else if (journey instanceof BoatJourney) {
          journeyInfo = `Coge el barco ${journey.state.boatNumber} desde ${journey.state.origin.name} hasta ${journey.state.destination.name}.`;
        }
  
        return <li key={index}>{journeyInfo}</li>;
      });
  
      journeyList.push(<li key="congrats">¡Felicidades, has llegado a tu destino!</li>);
  
      return journeyList;
    }
  };
  

  return (
    <>
      <h1 className="app-title">Route Calculator</h1>
      <div id="search-container">
        
          <input
            type="text"
            placeholder="Origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        <button onClick={() => { searchRoute() }}>Search</button>
        <div className='result'>
          <h2>Result:</h2>
          <ol>
            {renderStages()}
          </ol>
          
        </div>
      </div>
      
    </>
  );
};

export default App;
