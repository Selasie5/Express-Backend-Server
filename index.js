const express = require("express");
const app = express();
 const port = 4000;
const users=[
    {
        id: 1,
        name: "james",
        course: "computer Science"
    },
    {
        id: 2,
        name: "Michael",
        course: "Business Admin"
    },
    {
        id: 3,
        name: "Boss",
        course: "Statistics"
    },
]
app.get("/", (req,res)=>
{
    res.send("Hi there, welcome to mys assignment!");
})
app.get("/speak/pig", (req,res)=>
{
    res.send("The pig says 'Oink'");
})

app.get("/speak/cow" , (req,res)=>
{
    res.send("The cow says 'Moo'")
})

app.get("/speak/dog", (req,res)=>
{
    res.send("The dog says 'Woof'");
})

app.get("/repeat/:message/:numberOfOccurences", (req,res)=>
{
    let msg = req.params.message;
    let num = parseInt(req.params.numberOfOccurences);
    let result = ""
    //initializing a loop to print the message a certain number of times as defined by the params
    for(let i=0; i < num;i++)
    {
        result += msg + " ";
    }
    res.send(result.trim());
})


//defining route parameters
app.get('/users/:id/:course', (req,res)=>
{
    let userID= req.params.id;
    let course = req.params.course;
    res.send(userID + course);
    console.log(userID);
})
//response for undefined route
app.get("*", (req, res)=>{
    res.send("Sorry page not found");
    res.send.status(404);
})
 //telling express to listen for requests
 app.listen(port, ()=>
 {
    console.log(
        `Server has started on port ${port}`
    )
 })