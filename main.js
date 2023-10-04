console.log("Matrix Dom Manipulation")

const body = document.body

body.style.backgroundColor = 'black'
body.style.color = 'white'
body.innerHTML += '<h3>Students</h3>'

const hOne = document.querySelector('#main-heading')
console.log(hOne)

const main = document.getElementsByTagName('main')[0]
const studentHeader = document.createElement('h3')
studentHeader.innerText = 'Students'
// document.getElementById()
// main.innerHTML += '<h3>Students</h3>'

const themeButton = document.createElement('button')

body.appendChild(themeButton)

themeButton.innerText = 'Light Mode'


console.log(body.innerHTML, 'before')
console.log(body.innerHTML, 'after')

themeButton.addEventListener('click', ()=>{
    if(body.style.backgroundColor === 'black'){
        lightMode()
    }   else {
        darkMode()
    }
})

function lightMode(){
    body.style.backgroundColor = 'white'
    body.style.color = 'black'
    themeButton.innerText = 'Dark Mode'
}

function darkMode(){
    body.style.backgroundColor = 'black'
    body.style.color = 'white'
    themeButton.innerText = 'Light Mode'
}

const studentsHeader = document.createElement('h3')
const studentArray = ['tom','josh','porter','raul','time']
const studentArray2 = ['senait','mel','milad','mabel']

const listContainer = document.getElementById('student-container')

for(const [student] of studentArray.entries()){
    const li = document.createElement('li')
    li.innerText = titleCase(student)
    li.id = 1
    listContainer.appendChild(li)
}

for(const [i, student] of studentArray2.entries()){
    listContainer.innerHTML += `<li id=${i}>${titleCase(student)}</li>`
}

function titleCase(astring) {
    let output = ''
    const wordsArray = astring.split()
    for(const word of wordsArray){
        output += word[0].toUpperCase() + word.substring(1)
    }
    return output.trim()
}