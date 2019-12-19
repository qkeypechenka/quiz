const quiz = require('./quiz');
const express = require('express');
const app = express();
const port = 3000;

const questions = new Map(quiz.map((q, i) => [i, q]));
const questionDTOs = createQuestionDTOLookup(questions);

app.use(express.static('static'));
app.use(express.json());

app.get('/quiz', (req, res) => {
    res.json(Array.from(questionDTOs.values()));
});

app.post('/quiz', (req, res) => {
    const answers = req.body;
    let numberOfCorrect = 0;
    for (let answer of answers) {
        if (questions.has(answer.id)) {
            if (questions.get(answer.id).answers.includes(answer.answer)) {
                numberOfCorrect++;
            }
        }
    }
    res.send(numberOfCorrect);
});

app.listen(port, () => console.log(`Started on port ${port}`));

function createQuestionDTOLookup(questions) {
    const questionsDTOs = new Map();
    for (let [id, question] of questions.entries()) {
        questionsDTOs.set(id, convertQuestionToDTO(id, question));
    }
    return questionsDTOs;
}

function convertQuestionToDTO(id, question) {
    return {id, question: question.text, image: question.image, options: question.options}
}
