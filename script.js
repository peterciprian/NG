var textObject = {};

function readJSON(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

const handleMenuButtonClick = (event) => {
    const menu = document.getElementById('menu');
    menu.style.maxHeight = menu.style.maxHeight === '240px' ? '0' : '240px';
    const menuButton = document.getElementById('menu-button');
    menuButton.style.position = menu.style.maxHeight === '240px' ? 'absolute' : 'static';
}
var language = 'hu';
const toggleLanguage = () => {
    language = language === 'hu' ? 'en' : 'hu';
    const flag = document.getElementById('flag');
    flag.src = language === 'hu' ? 'assets/images/gb-4x3.svg' : 'assets/images/hu-4x3.svg';

    readJSON(`assets/text_content/${language}.json`, function(text){
        textObject = JSON.parse(text);
        translatePage();
    });
}
const findAndReplaceText = (parentKey, object) => {
    for (const key in object) {
        const elementKey = parentKey ? parentKey + '.' + key : key;
        if (typeof object[key] === 'string' && object[key].length > 0) {
            document.getElementById(elementKey).innerText = object[key];
        } else if (object[key] != null) {
            findAndReplaceText(elementKey, object[key]);
        }
    }
}
const translatePage = () => {
    findAndReplaceText('', textObject);
}