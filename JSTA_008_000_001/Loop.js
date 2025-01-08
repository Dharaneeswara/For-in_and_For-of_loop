  /*************************************************************************************
 *  Name of the Task       : Sum Of Array Elements                                   *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/
   
  //Code Statements
let arr=[];
// let arrnum=0;
let items=document.getElementById("itemId");
let textspace=document.getElementById("arrayId");
let result = document.getElementById("resultId");

function addarr(){
  // arr[arrnum]=items.valueAsNumber;
  if(items.value===""){
    alert("enter the field");
    return;                        
  }
  arr.push(items.valueAsNumber)
  items.value ="";
  textspace.innerHTML =arr;

  // arrnum++;
}

function calculate(){
  if(arr.length===0){                        //The condition if (arr === "") is incorrect. The arr variable is an array, and you should check if it is empty using arr.length === 0.
    alert("there is not data in the arr")
  }
  let sum=0;
  for(let val of arr){
    sum +=val;
    result.value =sum;
    console.log(val);
    console.log(result.value);
    
  }
}

function resets(){
  arr=[]; 
  // arrnum=0;
  items.value ="";
  textspace.innerHTML="";
  result.value="";
}