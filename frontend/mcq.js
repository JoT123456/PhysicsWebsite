var submitAnswerBtns = document.getElementsByClassName("submitbtn")
console.log(submitAnswerBtns)
for (var i = 0; i < submitAnswerBtns.length;i++){
    var btn = submitAnswerBtns[i]
    btn.addEventListener('click', function(event){
        // var btnClicked = event.target
        // btnClicked.parentElement.remove()
        console.log('clicked')
    })
}

console.log('test')