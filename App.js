// Manipulate the HTML DOM using Javscript

// const heading = document.createElement("h1");

// heading.innerHTML = "Namaste Everyone";

// const root = document.getElementById("root");

// root.appendChild(heading);


//Manuplating the html elements usnig react

//creating nested elements


const heading = React.createElement(
    "h1",
    {
        className: "heading",
        style: {
            color: "red",
            fontSize: "24px"
        },
    },
    "Hello world"
);

const nestedHeading = React.createElement(
    "h2",
    {
        id: "header",
        style: {
            color: "black",
        }
    },
    "Hello World from nested heading"
);

const container = React.createElement(
    "div",
    {
        className: "container"
    },
    [heading, nestedHeading,]
);


// created a root using react dom's reateRoot Method
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element inside root
root.render(container);
