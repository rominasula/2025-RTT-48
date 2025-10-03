const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
});

// ROUTE 1: Tip calculator
// example: GET /tip/100/20  -> returns "20"

app.get("/tip/:total/:tipPercentage", (req, res) => {
    const total = parseFloat(req.params.total);
    const tipPercentage = parseFloat(req.params.tipPercentage);

    const tipAmount = (total * tipPercentage) / 100;
    res.send(tipAmount);
});


// ROUTE 2: Magic 8 Ball
// example: GET /magic/Will%20I%20be%20a%20Millionaire
app.get("/magic/:question", (req, res) => {
    const rawQuestion = req.params.question;
    const question = decodeURIComponent(rawQuestion);

    const answers = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful",
    ];

    const randomIndex = Math.floor(Math.random() * answers.length);
    const answer = answers[randomIndex];

    res.send(`<h1>Question: ${question}</h1><h1>Answer: ${answer}</h1>`);
});

// fallback 404 (outside of all routes)
app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});
