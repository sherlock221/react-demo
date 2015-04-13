var names = ['Alice', 'Emily', 'Kate'];



var arr = [
    <h1>Hello world !</h1>,
    <h2>React is awesome</h2>
];



/** @jsx React.DOM */
React.render(
    <h4>
    {
        //names.map(function (name) {
        //    return <div>Hello, {name}!</div>
        //})

        arr
    }
    </h4>,

    document.querySelector("#example"),
    function () {
        console.log("cmp");
    }
);
