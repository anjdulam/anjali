const button = document.getElementById("btn");
const body = document.body;

const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']
body.style.backgroundColor=colors[0]
button.addEventListener('click', func)

function func() {
    const colorsIndex = Math.floor(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorsIndex]
}
