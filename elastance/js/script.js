function resetPage() {
    document.getElementById("BPS").value = "";
    document.getElementById("BPD").value = "";
	document.getElementById("SV").value = "";
	document.getElementById("EF").value = "";
	document.getElementById("PET").value = "";
	document.getElementById("TET").value = "";

	 document.getElementById("inputArea").style.display = "block";
	 document.getElementById("buttonArea").style.display = "block";
	 document.getElementById("results2").style.display = "none";
	 document.getElementById("results3").style.display = "none";


}

function calculateElastance() {

 var BPS = document.getElementById("BPS").value;
 var BPD = document.getElementById("BPD").value;
 var SV = document.getElementById("SV").value;
 var EF = document.getElementById("EF").value;
 var TET = document.getElementById("TET").value;
 var PET = document.getElementById("PET").value;


 BPS = parseFloat(BPS);
 BPD = parseFloat(BPD);
 SV = parseFloat(SV);
 EF = EF.replace(/,/g, '.');
 EF = parseFloat(EF)
 TET = parseFloat(TET);
 PET = parseFloat(PET);


 if (isNaN(BPS) || isNaN(BPD) || isNaN(SV) || isNaN(EF) || isNaN(TET) || isNaN(PET)) {
   alert (" Please insert numbers!");
   return;

 }


 var ai1 = 0.3569;
 var ai2 = -7.2266;
 var ai3 = 74.249;
 var ai4 = -307.39;
 var ai5 = 684.54;
 var ai6 = -856.92;
 var ai7 = 571.95;
 var ai8 = -159.1;


 var ESP = BPS * 0.9;
 var tND = PET/TET;

 var ENDavg;
     ENDavg = (ai1 * (1)) + (ai2 * (tND*1))  + (ai3 * (tND*tND))  + (ai4 * (tND*tND*tND))  + (ai5 *(tND*tND*tND*tND))  + (ai6 * (tND*tND*tND*tND*tND))  + (ai7 * (tND*tND*tND*tND*tND*tND)) + (ai8 * (tND*tND*tND*tND*tND*tND*tND)) ;

 var ENDest;
     ENDest = 0.0275 - (0.165* (EF/100)) + (0.3656 * (BPD/ESP)) + (0.515 * ENDavg);


 var Ees;

     Ees = (BPD - (ENDest * ESP) ) / (SV * ENDest);
     Ees = Ees.toFixed(4);


 var Ea;
     Ea = ESP / SV;
     Ea = Ea.toFixed(4);

 var AccVA;
     AccVA = Ea / Ees;
 AccVA = AccVA.toFixed(4);

 document.getElementById("inputArea").style.display = "none";
 document.getElementById("buttonArea").style.display = "none";


 var results = document.getElementById("results");

 results.innerHTML = (" VA Coupling is  " + AccVA);

var results2 = document.getElementById("results2");

results2.innerHTML = (" Ventricular Elastance is  " + Ees);

var results3 = document.getElementById("results3");

results3.innerHTML = (" Arterial Elastance is  " + Ea);

var reloadButton = document.createElement("input");
    reloadButton.setAttribute("type", "button");
    reloadButton.setAttribute("value", "Reset Fields");
    reloadButton.onclick = function () {
    console.log("Reset pressed");
    window.location.href=window.location.href;


//        resetPage();
    };
    // add to the DOM, to the div called "inputArea"

    document.getElementById("results3").appendChild(reloadButton);



 }

// as soon as the page is loaded...
window.onload =  function () {

//    $('[placeholder]').focus(function() {
//      var input = $(this);
//      if (input.val() == input.attr('placeholder')) {
//        input.val('');
//        input.removeClass('placeholder');
//      }
//    }).blur(function() {
//      var input = $(this);
//      if (input.val() == '' || input.val() == input.attr('placeholder')) {
//        input.addClass('placeholder');
//        input.val(input.attr('placeholder'));
//      }
//    }).blur();
//
//
    // create input text box and give it an id of "minutes"
    var inputBPS = document.createElement("input");
    inputBPS.setAttribute("id", "BPS");
    inputBPS.setAttribute("type", "text");
    inputBPS.setAttribute("placeholder", "Systolic Blood Pressure (mmHg)");


    var inputBPD = document.createElement("input");
    inputBPD.setAttribute("id", "BPD");
    inputBPD.setAttribute("type", "text");
    inputBPD.setAttribute("placeholder", "Diastolic Blood Pressure (mmHg)");

    var inputSV = document.createElement("input");
    inputSV.setAttribute("id", "SV");
    inputSV.setAttribute("type", "text");
    inputSV.setAttribute("placeholder", "Stroke Volume (ml)");

    var inputEF = document.createElement("input");
    inputEF.setAttribute("id", "EF");
    inputEF.setAttribute("type", "text");
    inputEF.setAttribute("placeholder", "Ejection Fraction (0-1)");

    var inputTET = document.createElement("input");
    inputTET.setAttribute("id", "TET");
    inputTET.setAttribute("type", "text");
    inputTET.setAttribute("placeholder", "Total Ejection Time (ms)");


    var inputPET = document.createElement("input");
    inputPET.setAttribute("id", "PET");
    inputPET.setAttribute("type", "text");
    inputPET.setAttribute("placeholder", "Pre Ejection Time (ms)");





    // create a button
    var calculateButton = document.createElement("input");
    calculateButton.setAttribute("type", "button");
    calculateButton.setAttribute("value", "Calculate");
    calculateButton.onclick = function () {
    console.log("calculate pressed");

//        startCountdown();
        calculateElastance();
    };



    // add to the DOM, to the div called "inputArea"

//    var BPSdiv = document.createElement('div');
//    BPSdiv.innerHTML = "Systolic Blood Pressure";
//    BPSdiv.setAttribute("id", "SBPtext");
//	var BPDdiv = document.createElement('div');
//    BPDdiv.innerHTML = "Diastolic Blood Pressure";
//    BPDdiv.setAttribute("id", "DBPtext");
//	var SVdiv = document.createElement('div');
//	SVdiv.innerHTML = "Stroke Volume";
//	SVdiv.setAttribute("id", "SVtext");
//	var EFdiv = document.createElement('div');
//	EFdiv.innerHTML = "Ejection Fraction";
//	EFdiv.setAttribute("id", "EFtext");
//	var TETdiv = document.createElement('div');
//	TETdiv.innerHTML = "Total Ejection Time";
//	TETdiv.setAttribute("id", "TETtext");
//	var PETdiv = document.createElement('div');
//	PETdiv.innerHTML = "Pre Ejection Time";
//	PETdiv.setAttribute("id", "PETtext");

//    document.getElementById("inputArea").appendChild(BPSdiv);
    document.getElementById("inputArea").appendChild(inputBPS);
//    document.getElementById("inputArea").appendChild(BPDdiv);
    document.getElementById("inputArea").appendChild(inputBPD);
//    document.getElementById("inputArea").appendChild(SVdiv);
    document.getElementById("inputArea").appendChild(inputSV);
//    document.getElementById("inputArea").appendChild(EFdiv);
    document.getElementById("inputArea").appendChild(inputEF);
//    document.getElementById("inputArea").appendChild(TETdiv);
    document.getElementById("inputArea").appendChild(inputTET);
//    document.getElementById("inputArea").appendChild(PETdiv);
    document.getElementById("inputArea").appendChild(inputPET);

    document.getElementById("buttonArea").appendChild(calculateButton);

};
