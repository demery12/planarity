import React from 'react';
import logo from './logo.svg';
import './App.css';

function Node() {
    return <span className="dot"></span>
}

var k5 = {0:[1,2,3,4], 1:[0,2,3,4], 2:[0,1,3,4], 3:[0,1,2,4], 4:[0,1,2,3]};

function depthFirstSearch(graph, node) {
    let visited = [];
    let stack = [node]
    visited.push(node);
    while (stack.length>0) {
        let currentNode = stack.pop();
        console.log(currentNode);
        console.log(stack);
        for (let neighbor of graph[currentNode]){
            if (!visited.includes(neighbor)) {
                stack.push(neighbor);
                visited.push(neighbor);
            }
        }
    }
    console.log(visited);
}

function App() {
  depthFirstSearch(k5, 0);
  return (
    <div className="App">
       <Node/>
       <Node/>
       <Node/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
