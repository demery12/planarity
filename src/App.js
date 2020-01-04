import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as d3 from 'd3';

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

class App extends React.Component {
    //static propTypes = {...}

    componentDidMount() {
        let docEl = document.documentElement
        let bodyEl = document.getElementsByTagName('body')[0];
        let width  = window.innerWidth || docEl.clientWidth || bodyEl.clientWidth;
        let height = window.innerHeight|| docEl.clientHeight|| bodyEl.clientHeight;

        var svg = d3.select(this._rootNode).append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("class", "chart");

        var data = [4,8,15,16,23,42];
        var width2 = 420,
            barHeight = 20;

        var x = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, width2]);

        var chart = d3.select(".chart")
            .attr("width", width2)
            .attr("height", barHeight * data.length)

        var bar = chart.selectAll("g")
            .data(data)
           .enter().append("g")
            .attr("transform", function(d, i) {return "translate(0, " + i * barHeight + ")"; })

        bar.append("rect")
            .attr("width", x)
            .attr("height", barHeight - 1);

        bar.append("text")
            .attr("x", function(d) { return x(d) - 3; })
            .attr("y", barHeight / 2)
            .attr("dy", ".35em")
            .text(function(d) { return d; });


    }

    shouldComponentUpdate() {
        // Prevents component re-rendering
        return false;
    }

    _setRef(componentNode) {
        this._rootNode = componentNode;
    }

    render() {
        return (<div className="line-container" ref={this._setRef.bind(this)} />);
    }
}

//class App extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//          temperatureData: [8, 5, 13, 9, 12],
//        };
//    }
//
//    render() {
//        d3.select(this.refs.temperatures)
//            .selectAll("h2")
//            .data(this.state.temperatureData)
//            .enter()
//                .append("h2")
//                .text("New Temperature");
//        return (
//            <div ref="temperatures">"hi"</div>
//        );
//    }
//}

//function App() {
//  depthFirstSearch(k5, 0);
//  return (
//    <div className="App">
//       <Node/>
//       <Node/>
//       <Node/>
//        <div className='graphViz'></div>
//        <testDiv/>
//    </div>
//  );
//}

export default App;
