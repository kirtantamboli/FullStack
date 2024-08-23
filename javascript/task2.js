function checkage(){
    let num = document.getElementById("userinput").value;
    num=parseFloat(num);
    let result;

    if (num > 18){
        result = "you are eligible to vote";
    }
    else if (num < 18){
        result = "you are not eligible to vote";
    }
    else{
        result = "invalid age";
    }
    document.getElementById("result").innerText=result;
}