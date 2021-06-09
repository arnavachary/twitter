
function count(){

    var length = document.getElementById("inputBox").value.length
    document .getElementById("outPut").innerHTML="count:"+length
}
function clearbox(){
    document.getElementById("inputBox").value=""
    document.getElementById("outPut").innerHTML="count:0"
}