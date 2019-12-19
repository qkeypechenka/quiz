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
    ),
    new Question(
        "Где живет коала?",
        ["В горной пещере", "В бамбуковом лесу", "В тропических лесах Новой Зеландии", "На эвкалиптовом дереве"],
        ["На эвкалиптовом дереве"],
        "https://upload.wikimedia.org/wikipedia/commons/2/25/Friendly_Female_Koala.JPG"
    ),
    new Question(
        "Какого цвете хвост у зебры?",
        ["Белый", "Черный", "Серый", "Коричневый"],
        ["Белый", "Черный"],
        "https://upload.wikimedia.org/wikipedia/commons/3/3d/Equus_grevyi_in_moscow_zoo.jpg"
    ),
    new Question(
        "Какое животное самое быстрое?",
        ["Лев", "Зебра", "Сапсан", "Гепард"],
        ["Сапсан"],
        "https://upload.wikimedia.org/wikipedia/commons/1/11/Cheetah_Kruger.jpg"
    )
];

module.exports = quiz;