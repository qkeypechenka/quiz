const API = {
    quiz: '/quiz',
};

async function run() {
    const data = await sendRequest(`http://localhost:3000${API.quiz}`)
    render(data);
}

run();

async function sendRequest (url, data={}, method="GET") {
    let response = await fetch(url);
    return await response.json();
}

async function sendPost (url, data) {
    let response = await fetch(url, {
        method: 'POST',
        body: data
    });
    return await response.json();
}

function render (data) {
    let container = document.getElementsByClassName('cardsView')[0];
    for (let card of data) {
        const cardView = createCard();
        const image = createImage(card.image);
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
        createOption(form, option, data.id);
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
    input.name = name;
    input.value = title;
    form.appendChild(input);
    const label = document.createElement('label');
    label.textContent = title;
    form.appendChild(label);
    const br = document.createElement('br');
    form.appendChild(br);
}

function sendAnswers() {
    let profile = [];
    document.querySelectorAll("form").forEach(f => {
        let obj = {};
        f.querySelectorAll("input").forEach(ele => {
            if (ele.checked) {
                obj.id = ele.name;
                obj.answer = ele.value;
            }
        });
        profile.push(obj);
    });
    sendPost(`http://localhost:300${quiz}`, profile)
        .then(data => alert(data));
}
