var inputData= document.getElementById("input");

function getvalue(val){
    var value=val;
    display(val);

}

function display(v) {
    if (v === "=") {
        let data=inputData.innerText;
        let total = eval(data) // 1 + 1
        inputData.innerText = total;
    }
    else{
        inputData.innerText += v;
    }
}

function clearval() {
        inputData.innerText="";
    
}

function remove() {

    var rev = inputData.innerText;
    inputData.innerText = rev.substring(0, rev.length - 1);

}