<!--====Task-1====-->
const firstLi = document.querySelectorAll('li')[0].textContent;
const lastLi = document.querySelectorAll('li')[4].textContent;
const secondLi = document.querySelectorAll('li')[1].textContent;
const fourthLi = document.querySelectorAll('li')[3].textContent;
const thirdLi = document.querySelectorAll('li')[2].textContent;

console.log(` List: 
 ${firstLi}
 ${lastLi} 
 ${secondLi}
 ${fourthLi}
 ${thirdLi}`);

const li1 = document.getElementById('list').firstElementChild.textContent;
const li5 = document.getElementById('list').lastElementChild.textContent;
const li2 = document.getElementById('list').children[1].textContent;
const li4 = document.getElementById('list').children[3].textContent;
const li3 = document.getElementById('list').children[2].textContent;

console.log(` List: 
 ${li1}
 ${li5} 
 ${li2}
 ${li4}
 ${li3}`);

<!--====Task-2====-->

const h1 = document.querySelectorAll('h1')[0];
const paragraph1 = document.querySelectorAll('p')[0];
const paragraph2 = document.querySelectorAll('p')[1];
const paragraph3 = document.querySelectorAll('p')[2];
const paragraph4 = document.querySelectorAll('p')[3];
const ul = document.getElementById('myList');
const span = document.querySelectorAll('span')[0];

h1.style.backgroundColor = 'lightgreen';
paragraph1.style.fontWeight = 'bold';
paragraph2.style.color = 'red';
paragraph3.style.textDecoration = 'underline';
paragraph4.style.fontStyle = 'italic';
ul.style.display = 'flex';
ul.style.listStyle = 'none';
span.style.display = 'none';

<!--====Task-3====-->

let button = document.getElementById('button');

button.addEventListener('mouseover',
    () => {
        document.getElementById('text').innerText += `Mouse on me!
`
    });
button.addEventListener('mouseout',
    () => {
        document.getElementById('text').innerText += `Mouse is not on me!
            `
    });
button.addEventListener('click',
    () => {
        document.getElementById('text').innerText += `I was pressed!
`
    });
