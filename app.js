document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseNumber(true);

});

document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber(false);

});

    /* Simple functions to reduce Code */

function updateCaseNumber(yes){
    const caseInput= document.getElementById('case-number');
    let  caseNumber  = caseInput.value ;

    if (yes){
        caseInput.value = parseInt(caseNumber) +1;
    }
    else if (caseNumber > 0) {
        caseInput.value = parseInt(caseNumber) - 1;
    }
    caseNumber  = caseInput.value ;

    const CaseAmount = document.getElementById('case-amount');
        CaseAmount.innerText = caseNumber * 59;
        

}