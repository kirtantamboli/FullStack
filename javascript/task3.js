function checknumber(){
    let num = document.getElementById("userinput").value;
    num=parseFloat(num);
    let result;

    if (num%2){
        result = "given digit is odd";
    }
    else {
        result = "given digit is even";
    }
    document.getElementById("result").textContent=result;
}