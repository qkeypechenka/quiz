class Question {
    constructor(text, options, answers, image) {
        this.text = text;
        this.options = options;
        this.answers = answers;
        this.image = image;
    }
}

const quiz = [
    new Question(
        "Какой тигр самый крупный?",
        ["Амурский", "Малазийский", "Индийский", "Суматранский"],
        ["Амурский"],
        "https://upload.wikimedia.org/wikipedia/commons/1/17/Berlin_Tierpark_Friedrichsfelde_12-2015_img23_Siberian_tiger.jpg"
    )
];

module.exports = quiz;