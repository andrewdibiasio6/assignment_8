/* javaScript file that creates a dynamic mulitplication tbody from values inserted in my form in the file Mult.js
   created by Andrew DiBiasio on Oct 23, 2014 */

var i;  //loop indices
var j;
var k;

function validateForm(a)  /* Returns true if number is positive */ {
  if (isNaN(a) || a < 0 || a == "") {
    alert("Please insert a positive number");  // alert the user that a problem has occured
    return false;
  }
  return true;
}

$(document).ready(function () /* waits till document is ready */ {
 //

    // without jquery validate

    //if (validateForm(this.multiplyStart.value) == false) {   // validateForm is called on all four values validate mulitplyStart                                            
    //  this.multiplyStart.style.background = "#FC1501";       // if validation fails, foucs is given to the part of the form where the error occured.
    //  this.multiplyStart.getfocus();
    //  return false;
    //}

    //if (validateForm(this.multiplyEnd.value) == false) { // validate mulitplyEnd
    //  this.multiplyEnd.style.background = "#FC1501";
    //  this.multiplyEnd.getfocus();
    //  return false;
    //}

    //if (validateForm(this.multiplicandStart.value) == false) {  // validate mulitplicandStart
    //  this.multiplicandStart.style.background = "#FC1501";
    //  this.multiplicandStart.getfocus();
    //  return false;
    //}

    //if (validateForm(this.multiplicandEnd.value) == false) {  // validate mulitplicandEnd
    //  this.multiplicandEnd.style.background = "#FC1501";
    //  this.multiplicandEnd.getfocus();
    //  return false;
  //}

  var tblValidator = {   // added in Version 4

    highlightError: function (strVarToTest) {
      $('#' + strVarToTest).css({ "border": "2px solid red" });
      $('#' + strVarToTest).focus();
    },

    unhighlightError: function (strVarToTest) {
      $('#' + strVarToTest).css({ "border": "" });
    },
  }

  $('#multiplicationForm').validate({
    rules: {
      multiplyStart: {
        required: true,   
        digits: true
      },
      multiplyEnd: {
        required: true,
        digits: true // added by Jesse
      },
      multiplicandStart: {
        required: true,  // added by Jesse, translates to optional
        digits: true
      },
      multiplicandEnd: {
        required: true,
        digits: true
      }
    }, // End of rules

    messages: {
      multiplyStart: {
        required: function () {
          tblValidator.highlightError("multiplyStart");
          return " A Multiply Start value is required.&nbsp";
        },
        digits: function () {
          tblValidator.highlightError("multiplyStart");
          return "<br>Please enter only digits for the Multiply Start Value.<br>&nbsp";
        }
      },
      multiplyEnd: {
        required: function () {
          tblValidator.highlightError("multiplyEnd");
          return " A Multiply End value is required.&nbsp";
        },
        digits: function () {
          tblValidator.highlightError("multiplyEnd");
          return "<br>Please enter only digits for the Multiply End Value.<br>&nbsp";
        }
      },
      multiplicandStart: {
          required: function () {
            tblValidator.highlightError("multiplicandStart");
            return " A Multiplicand Start value is required.&nbsp";
          },
          digits: function () {
            tblValidator.highlightError("multiplicandStart");
            return "<br>Please enter only digits for the Multiplicand Start Value.<br>&nbsp";
          }
      },

      multiplicandEnd: {
        required: function () {
          tblValidator.highlightError("multiplicandEnd");
          return " A  Multiplicand End value is required.&nbsp";
        },
        digits: function () {
          tblValidator.highlightError("multiplicandEnd");
          return "<br> Please enter only digits for the Multiplicand End Value.<br>&nbsp";
        }
      }

    },
  
    success: function (errorClass, element) {
      $(element.style.border = ""); // reset the border to its default
    }
    });

    $("#multiplicationForm").submit(function () { // trap the submit event *before* the action is executed

      $("#tbody").empty();

      $("#tbody").append("<tr>");      // Here, I start my first table row
      $("#tbody").append($("<td></td>").text(" "));

      for (i = this.multiplyStart.value; i <= this.multiplyEnd.value; i++) {   // This loop creates my and completes the data
        $("#tbody").append($("<td></td>").text(i));                                            // for the rest of the table's first row
      }
      $("#tbody").append("</tr>");  // first table row is finished

      //  All other table rows are pouplated with data with the following code______________________________________________________________________________

      for (k = this.multiplicandStart.value; k <= multiplicandEnd.value; k++) // This loop moves the the rest of my tbody rows, they all have the same format
      {
        $("#tbody").append($("<tr>"));
        $("#tbody").append($("<td></td>").text(k));      // Here, I start all other rows after the first

        for (j = this.multiplyStart.value; j <= this.multiplyEnd.value; j++) {   // This loop creates my and completes the data
          $("#tbody").append($("<td></td>").text(k * j));                             // for the rest of the table rows  
        }

        $("#tbody").append("</tr>");  // a table row is finished
      }
    });
});  // end ready


