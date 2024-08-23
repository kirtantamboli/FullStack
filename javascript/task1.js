function checknumber(){
    let num = document.getElementById("userinput").value;
    num=parseFloat(num);
    let result;

    if (num > 0){
        result = "number is positive";
    }
    else if (num < 0){
        result = "number is negative";
    }
    else{
        result = "number is zero";
    }
    document.getElementById("result").innerText=result;
}