const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Will is the champion';

document.body.appendChild(newHeader);

const mainElement = document.querySelector('main#main');
mainElement.remove();