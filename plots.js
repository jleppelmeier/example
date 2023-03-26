// An array of each country's numbers
let australia = Object.values(data.australia);
let brazil = Object.values(data.brazil);
let uk = Object.values(data.uk);
let mexico = Object.values(data.mexico);
let singapore = Object.values(data.singapore);
let southAfrica = Object.values(data.southAfrica);

// Create an array of category labels
let labels = Object.keys(data.australia);

// @ADD YOUR CODE HERE

console.log(australia)

let layout = {
    height: 600,
    width: 800
  };

function init(){
    trace = {
        labels: labels,
        values: australia,
        type: "pie"
    };
    Plotly.plot("pie",[trace],layout);
}

function updatePlotly(){
    let dropdownMenu = d3.select("#selDataset");
    let dataset = dropdownMenu.property("value");

    let newData = {}
    if (dataset == "australia"){newData = australia;}
    else if (dataset=="brazil"){newData = brazil;} 
    else if (dataset=="uk"){newData = uk;}
    else if (dataset=="mexico"){newData = mexico;}
    else if (dataset=="singapore"){newData = singapore;}
    else if (dataset=="southAfrica"){newData = southAfrica;};

    trace = {
        labels: labels,
        values: newData,
        type: "pie"
    };
    Plotly.plot("pie",[trace],layout);
}

init()

d3.selectAll("#selDataset").on("change", updatePlotly);