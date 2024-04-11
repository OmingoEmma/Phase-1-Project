// Define the URL endpoint for the API
const url = '/api/quotes/random';

// Define the data to be sent in the POST request
const data = {
    quote: 'A new quote',
    author: 'Anonymous'
};

// Configure the fetch options
const fetchData = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(data)
};

// Make the POST request to the API endpoint
fetch(url, fetchData)
    .then(response => response.json()) // Parse the response as JSON
    .then(quote => {
        console.log(quote); // Log the received quote
    })
    .catch(error => {
        console.error('Error:', error); // Log any errors that occur
    });
