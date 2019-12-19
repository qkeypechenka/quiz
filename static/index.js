const API = {
    quiz: '/quiz',
};

async function run() {
    const data = await sendRequest(`localhost:3000${API.quiz}`)
    render(data);
}

run();

async function sendRequest (url) {
    return fetch(url)
        .then((response) => {
            if (response.ok)
                return response.json();
            else
                throw Error(`${response.status} ${response.statusText}`);
        });
}

function render (data) {
    let container = document.getElementsByClassName('cardsView');
    for (const card of data) {
        const cardView = createCard();
        const image = createImage(card.url);
        const body = createCardBody(card);
        cardView.appendChild(image);
        cardView.appendChild(body);
        container.appendChild(cardView);
    }
}

function createCard() {
    const cardView = document.createElement('div');
    cardView.className = "card";
    cardView.style = "width: 18rem;";
    return cardView;
}

function createImage(url) {
    const img = document.createElement('img');
    img.src = url;
    img.className = "card-img-top";
    return img;
}

function createCardBody(data) {
    const body = document.createElement('div');
    body.className = "card-body";
    const titleView = createCardTitle(data.question);
    const form = document.createElement('form');
    body.appendChild(titleView);
    for (const option of data.options) {
        createOption(form, option, id);
    }
    body.appendChild(form);
    return body;
}

function createCardTitle(title) {
    const titleView = document.createElement('h5');
    titleView.className = "card-title";
    titleView.textContent = title;
    return titleView
}

function createOption(form, title, name) {
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'name';
    form.appendChild(input);
    const label = document.createElement('label');
    label.textContent = 'title';
    form.appendChild(label);
    const br = document.createElement('br');
    form.appendChild(br);
}
