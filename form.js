

var currentTab = 0; // Current tab is set to be the first tab (0)
console.log("Hello");
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Calculate!";
    // CalculateAlk();
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n);
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    calculateAlk();
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    // if (y[i].value == "") {
    //   // add an "invalid" class to the field:
    //   y[i].className += " invalid";
    //   // and set the current valid status to false:
    //   valid = false;
    // }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}
function toggleField(hideObj, showObj) {
  hideObj.disabled = true;
  hideObj.style.display = "none";
  showObj.disabled = false;
  showObj.style.display = "inline";
  showObj.focus();
}
function enable_fixed_setpoints() {
  console.log(document.getElementById("carb").disabled);
  document.getElementById("carb").disabled =
    !document.getElementById("carb").disabled;
  document.getElementById("bicarb").disabled =
        !document.getElementById("bicarb").disabled;
    
    console.log(document.getElementById("carb").disabled)
    if (document.getElementById("carb").disabled === false) {
        document.getElementById("carb_endpt").disabled =
            false;
    } else document.getElementById("carb_endpt").disabled = true;
    if (document.getElementById("bicarb").disabled === false) {
        document.getElementById("bicarb_endpt").disabled =
            false;
    } else document.getElementById("bicarb_endpt").disabled = true;
  // document.getElementsByName("carb_endpt").disabled = !document.getElementsByName("carb_endpt").disabled;
  // document.getElementsByName("bicarb_endpt").disabled = !document.getElementsByName("bicarb_endpt").disabled;
}
function enable_carb_endpt() {
    {
       
        document.getElementById("carb_endpt").disabled =
    !document.getElementById("carb_endpt").disabled;
    }

}
function enable_bicarb_endpt() {
   
  document.getElementById("bicarb_endpt").disabled =
    !document.getElementById("bicarb_endpt").disabled;
}
function calculateAlk() {
  window.alert("sometext");
  var volH2SO4 = document.getElementById('vol2').value;
  var sampleVol = document.getElementById('vol').value;
  const normality = 0.02;
  var alkalinity = (volH2SO4 * normality * 50 * 1000) / sampleVol;
  console.log(volH2SO4)
  document.getElementById('result').innerHTML = 'Alkalinity of given sample is' + alkalinity + ' mg/L of CaCO3'
  document.write( 'Alkalinity of given sample is : ' + alkalinity + ' mg/L of CaCO3');
  return false;
}
function checkRange() {
  
  
  if (document.getElementById('vol')?.value < 10) { alert("Sample Volume should be greater than 10");  return false;} 
  if ( document.getElementById('vol')?.value > 100){ alert("Sample Volume should be less than 100"); return false;}
  if ( document.getElementById('vol2')?.value < 0){ alert("Sample Volume should be greater than 0"); return false;}
  if (document.getElementById('vol2')?.value > 12) { alert("Sample Volume should be less than 12"); return false; }
  return true;
}




