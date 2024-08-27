function revealMessage() {

var mainBody = document.getElementById("main-container")
if (mainBody.style.backgroundColor === 'black'){
    document.getElementById("hiddenMessage").style.display = 'none'
    mainBody.style.backgroundColor = 'white'
    mainBody.style.color = 'black'
}else{
    document.getElementById("hiddenMessage").style.display = 'block'
    mainBody.style.backgroundColor = 'black'
    mainBody.style.color = 'white'
}

}

function revealMessageZ() {

    var mainBody = document.getElementById("main-container")
    if (mainBody.style.backgroundColor === 'black'){
        document.getElementById("output").style.display = 'none'
        mainBody.style.backgroundColor = 'white'
        mainBody.style.color = 'black'
    }else{
        document.getElementById("output").style.display = 'block'
        mainBody.style.backgroundColor = 'black'
        mainBody.style.color = 'white'
    }
}
