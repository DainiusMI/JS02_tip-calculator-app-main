let tipPercent;
function readTip(x) {
    //  getting what % to tip
    let tipPercentList = document.getElementById('tip-percent-list');
    window.tipPercent = parseFloat( tipPercentList.getElementsByClassName('tip')[x].value );
    runUpdate();
}



function runUpdate() {

  //  getting the bill value
   let bill = parseFloat( document.getElementById('bill').value );
  // getting the number of persons to split the bill and ch=cking if its not 0
    if (document.getElementById('person-count').value  == 0) {
        document.getElementById('error-people').style.display = 'flex';
    }
    else {
    document.getElementById('error-people').style.display = 'none';
    window.personCount = parseFloat( document.getElementById('person-count').value );
    }

    
    totalTip = parseFloat( document.getElementById('bill').value) * parseFloat (window.tipPercent)  / 100;

    if ( window.tipPercent > 0 && bill > 0) {
    document.getElementById('total-tip').innerText = totalTip.toFixed(2);
    }
    tipPerPerson = totalTip / parseFloat( document.getElementById('person-count').value );
    if (totalTip > 0 && window.personCount > 0) {
    document.getElementById('tip-per-person').innerText = tipPerPerson.toFixed(2);
    }
}
function resetValues() {
  location.reload();

}