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

// This example dataset doesn't have a list we can use to populate the dropdown
// So making one
let countries = {
    "Australia":australia,
    "Brazil":brazil,
    "UK":uk,
    "Mexico":mexico,
    "Singapore":singapore,
    "South Africa":southAfrica
};
names = Object.keys(countries);
console.log(names);

console.log(australia);

let layout = {
    height: 600,
    width: 800
  };



function init(){
    // Populate the dropdown from the list/array
    selector = d3.select("#selDataset");
    for (let i = 0; i < names.length; i++){
        //console.log(countries[names[i]])
        selector.append("option").text(names[i]).property("value", names[i]);
    }

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
    if (dataset == "Australia"){newData = australia;}
    else if (dataset=="Brazil"){newData = brazil;} 
    else if (dataset=="UK"){newData = uk;}
    else if (dataset=="Mexico"){newData = mexico;}
    else if (dataset=="Singapore"){newData = singapore;}
    else if (dataset=="South Africa"){newData = southAfrica;};

    trace = {
        labels: labels,
        values: newData,
        type: "pie"
    };
    Plotly.plot("pie",[trace],layout);
}

init()

d3.selectAll("#selDataset").on("change", updatePlotly);