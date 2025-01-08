/*            *************************************************************
              *   Name of the challenge: Longest Country Name             *
              *            Developed by:                                  *
              *           Programmed by:                                  *
              *     Maintenance history:                  Ticket No:      *
              *************************************************************  */

// Declaration
// Screen date and time declaration.
let displayDate = new Date();
//Modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
  if (event.target === successModal) successModal.classList.remove("active");
  if (event.target === errorModal) errorModal.classList.remove("active");
});

     //copy to clipboard
const copyText = document.querySelector("#copy");
      copyText.addEventListener("click", () => {
        navigator.clipboard.writeText(
          document.querySelector("#successCode").value
        );
        copyText.textContent = "copied";
        setTimeout(() => {
          copyText.innerHTML = `<span>&#128203; </span>copy`;
        }, 2000);
      });

//--------------------------------------------------------------------------------------------------

let arr=[];
let arrayItems=document.getElementById("arrayItems");
let displayArray=document.getElementById("displayArray");
let maxId=document.getElementById("maxId");

function addItems(){
  let regex = /^[a-zA-Z\s\u00A0\-]+$/;

  if(arrayItems.value.trim()==" "){
    alert("please enter value in the input field");
    return;
  }
  else if(arrayItems.value.trim().length==0 || arrayItems.value.length>50){
    alert("the value should be minimum 1 to maximum 50 characters only");
    arrayItems.value="";
    return;
  }
  // else if(arr==arrayItems.value){
  else if(arr.includes(arrayItems.value)){
    alert("duplicate value");
    arrayItems.value="";
    return;
  }
  else if(!regex.test(arrayItems.value)){
    alert("please enter the value in the regex format")
    arrayItems.value="";
    return;
  }
  arr.push(arrayItems.value.trim());
  arrayItems.value="";
  displayArray.innerHTML =arr;
}

function longestName(){
  
  for(let val of arr){
    // console.log(val);
    // console.log(arr[0].length);
    // maxId.value=val
    // maxId.value=arr[1].length
    if(arr[0].length<val.length){
      // arr[0]=val;
      arr[val]=val;
      // console.log(arr[0]);
      // maxId.value =arr[0];
      maxId.value =arr[val];
    }
    // console.log(arr[0]);
    // maxId.value =arr[0];
  }
  
}

function reset(){
  arr=[];
  arrayItems.value="";
  displayArray.innerHTML="";
  maxId.value="";

}


























