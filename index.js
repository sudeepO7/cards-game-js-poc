const cardObjectDefinitions = [
    { id: 1, imagePath: './images/card-KingHearts.png' },
    { id: 2, imagePath: './images/card-JackClubs.png' },
    { id: 3, imagePath: './images/card-QueenDiamonds.png' },
    { id: 4, imagePath: './images/card-AceSpades.png' }
];

const cardBackImgPath = './images/card-back-Blue.png';
let cards = [];

const cardContainerElem = document.querySelector('.card-container');
const playGameButtonElem = document.getElementById('playGame');

const collapsedGridAreaTemplate = '"a a" "a a"';
const cardCollectionCellClass = '.card-pos-a';

loadGame();

function loadGame() {
    createCards();
    cards = document.querySelectorAll('.card');
    playGameButtonElem.addEventListener('click', () => startGame());
}

function startGame() {
    initializeNewGame();
    startRound();
}

function initializeNewGame() {

}

function startRound() {
    initializeNewRound();
    collectCards();
}

function initializeNewRound() {

}

function collectCards() {
    transformGridArea(collapsedGridAreaTemplate);
    addCardsToGridAreaCell(cardCollectionCellClass);
}

function transformGridArea(areas) {
    cardContainerElem.style.gridTemplateAreas = areas;
}

function addCardsToGridAreaCell(cellPositionClassName) {
    const cellPositionElem = document.querySelector(cellPositionClassName);
    cards.forEach((card, index) => {
        addChildElement(cellPositionElem, card);
    });
}

function createCards() {
    cardObjectDefinitions.forEach((cardItem) => {
        createCard(cardItem);
    });
}

function createCard(cardItem) {
    const cardElem = createElement('div');
    const cardInnerElem = createElement('div');
    const cardFrontElem = createElement('div');
    const cardBackElem = createElement('div');

    const cardFrontImage = createElement('img');
    const cardBackImage = createElement('img');

    addClassToElement(cardElem, 'card');
    addIdToElement(cardElem, cardItem.id);

    addClassToElement(cardInnerElem, 'card-inner');

    addClassToElement(cardFrontElem, 'card-front');
    addClassToElement(cardBackElem, 'card-back');

    addSrcToImageElement(cardBackImage, cardBackImgPath);
    addSrcToImageElement(cardFrontImage, cardItem.imagePath);

    addClassToElement(cardFrontImage, 'card-img');
    addClassToElement(cardBackImage, 'card-img');

    addChildElement(cardFrontElem, cardFrontImage);
    addChildElement(cardBackElem, cardBackImage);
    addChildElement(cardInnerElem, cardFrontElem);
    addChildElement(cardInnerElem, cardBackElem);
    addChildElement(cardElem, cardInnerElem);

    addCardToGridCell(cardElem);
    
}

function createElement(elemType) {
    return document.createElement(elemType);
}

function addClassToElement(elem, className) {
    elem.classList.add(className);
}

function addIdToElement(elem, id) {
    elem.id = id;
}

function addSrcToImageElement(imageElem, src) {
    imageElem.src = src;
}

function addChildElement(parentElem, childElem) {
    parentElem.appendChild(childElem);
}

function addCardToGridCell(card) {
    const cardPositionClassName = mapCardIdToGridCell(card);
    const cardPosElem = document.querySelector(cardPositionClassName);
    addChildElement(cardPosElem, card);
}

function mapCardIdToGridCell(card) {
    if (card.id === '1') {
        return '.card-pos-a';
    } else if (card.id === '2') {
        return '.card-pos-b';
    } else if (card.id === '3') {
        return '.card-pos-c';
    } else if (card.id === '4') {
        return '.card-pos-d';
    }
}