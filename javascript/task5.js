parseText(document.getElementById("job_type").value);
if(job_type==government){
    let num = parseFloat(prompt("ENTER SALARY:"));
    console.log(num); // This will log the number to the console
    if(num >50000){
        console.log('YOU CAN APPLY FOR LOAN');
    }
    else{
        console.log('YOU CAN NOT APPLY FOR LOAN');
    }

}
else if(job_type==business){
    let num1 = parseFloat(prompt("ENTER YEARLY TURNOVER:"));
    console.log(num1);
    if(num1>2000000){
        console.log('YOU CAN APPLY FOR LOAN');
    }
    else{
        console.log('YOU CAN NOT APPLY FOR LOAN');
    }
}
else if(job_type==private){
    console.log('NO LOAN AVAILABLE FOR YOU');
}