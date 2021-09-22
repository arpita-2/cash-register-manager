const billAmt = document.querySelector("#billAmt");
const cashGiven = document.querySelector("#cashGiven");

const errorDiv = document.querySelector(".errorMsg");

const cashGivenDiv = document.querySelector(".cashGivenInput");
const changeReturnDiv = document.querySelector(".changeReturn");

const output= document.querySelector("#output");

const nextBtn = document.querySelector("#nextBtn");
const checkBtn = document.querySelector("#checkBtn");

const noOfNotes= document.querySelectorAll(".noOfNotes");

const arrayNoteAmt = [2000, 500, 100, 20, 10, 5, 1];


nextBtn.addEventListener('click', ()=>{
    hideError();
    if(Number(billAmt.value)>0){

        nextBtn.style.display = "none";
        cashGivenDiv.style.display = "block";
    }
    else{
        showError("Enter valid bill amount");
    }
} )
