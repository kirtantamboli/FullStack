// DOCUMENT OBJECT MODEL (DOM)

console.log(document)

//NOTE select the element ::
//NOTE document.getElementbyid
//NOTE document.getElementbyclassname
//NOTE document.getElementbytagname
//NOTE document.queryselector
//NOTE document.queryselectorall

// console.dir --shows properties and methodds 
//REVIEW - getelementbytagname always return htmlcollection which looks like an array but it is not an array
const para =document.getElementsByTagName('p');
console.log(para);
console.log(para[0]);
//TODO converter the html collectiion 'para' in to an array (use spread operation);
const newpara = [...para];
console.log(newpara);
 newpara.forEach((el)=> {
    console.log(el.innerText)
 })

 const list =document.getElementsByClassName('special');
 console.log(list);