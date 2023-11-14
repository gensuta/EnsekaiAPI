// ** GENEVA'S NOTES ** //

// express creates a server with node when we run node index.js
// listen is like the start of an app
// get is just doing the usual make request get respone type thing


// Currently following this tutorial from freecodecamp 
// ('https://herewecode.io/blog/step-by-step-guide-create-first-api-with-node-express/)

/*APIs can have different request methods, but the most used are:
    GET: To get a data
    POST: To add a data
    DELETE: To delete a data
    PUT/PATCH: To update a data
*/


import express from "express";

const PORT = 3000;

const app = express();




// The code below starts the API with these parameters:
// 1 - The PORT where your API will be available
// 2 - The callback function (function to call) when your API is ready
app.listen(PORT, () =>
  console.log(`The Ensekai API is running on: http://localhost:${PORT}\nYay! ^w^`)
  );


// Static variable containing your books
let cardsList = [
    {
        "title": "Distant Yet Caring",
        "character": "Hoshino Ichika",
        "rarity": "⭐",
        "attribute": "cool",
        "max power": 7575,
        "skill name" : "Bed Of Flowers",
        "skill type" : "40% score boost for 5 seconds",
        "card group": "Leo/Need"
    },
    {
        "title": "Leo/Need",
        "character": "Hoshino Ichika",
        "rarity": "⭐⭐",
        "attribute": "happy",
        "max power": 18325,
        "skill name" : "Time To Rhyme",
        "skill type" : "50% score boost for 5 seconds",
        "card group": "Leo/Need"
    }
  ]
  
  // Replace the route name
  app.get('/cards', (request, response) => {
    return response.json({ allCards: cardsList })
  })

// Replace the GET method by POST
// Reminder: POST in the API world is used to ADD a data
app.post('/cards', (request, response) => {
    // TODO: Fill the function
  
    return response.json({ success: false })
  })