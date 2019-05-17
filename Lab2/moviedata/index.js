const http = require('http');
const fs = require('fs');
const data = require('./top_2018_movies.json');

http.createServer("/", function(req, res){
    res.send(index.html)
}).listen(3000, 'localhost');

console.log(data[0].movie);
// Create a function that lists all the movies

// Create a function that lists the movies that grossed above 20 million and the genre is action

// Create a function that lists the movies that are rated "PG-13" and number of tickets sold is between 1 and 5 million

// Create a function that sorts the movies based on their distributor
