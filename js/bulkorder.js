//----------------------------------Global Variables---------------------------
var _URL = window.URL || window.webkitURL;
//----------------JSON Objects------------------------
var jsonQualifications;
var jsonCategories;
var jsonDisabilities;
var SubmitResponse;
//--------------Global Variables-----------------
var ControlId;
var array = [];
//----------------------------------Page Load---------------------------
$(document).ready(function () {
	InitializeData();
	//var count = 0;
    //document.getElementById("HiddenCount").value = count;
});
//---------------------------------InitializeData----------------------
function InitializeData() {
    AddToolTip();
    AutoCompleteOff();
    //datepicker();
	Events();
}
//---------------------------------Events-----------------------------
function Events() {
	$("#search_code").keypress(function (e) {
        return Alphanumeric1(e, "#errorSearchTop");
    });
	
	
	$("#name").keypress(function (e) {
		return AlphabetsOnly(e, "#errorName");
	});
    $("#lastname").keypress(function (e) {
        return AlphabetsOnly(e, "#errorLastName");
    });
    $("#phone").keypress(function (e) {
        return ContactNumber(e, "#errorPhone");
    });
    $("#otp").keypress(function (e) {
        return Alphanumeric(e, "#reotp1");
    });
    $("#password").keypress(function (e) {
        return Alphanumeric(e, "#erpassword");
    });
	
	// BULK BUY
	$("#custName").keypress(function (e) {
        return AlphabetsOnly(e, "#errorCustName");
    });
    $("#Mobile").keypress(function (e) {
		return ContactNumber(e, "#errorMobile");
	});
    $("#Pincode").keypress(function (e) {
        return DigitsOnly(e, "#errorPincode");
    });
	//$("#custEmail").keypress(function (e) {
    //    return valEmail(e, "#errorCustEmail");
    //});
	$("#custAddress").keypress(function (e) {
        return Address(e, "#errorCustAddress");
    });
	$("#description").keypress(function (e) {
        return Alphanumeric(e, "#errorDescription");
    });
	
	//HELP BAR SEARCH
	$("#search_help").keypress(function (e) {
        return Alphanumeric(e, "#errorSearchHelp");
    });
	
	// FAQ SEARCH
	$("#search_faq").keypress(function (e) {
        return Alphanumeric(e, "#errorSearchFAQ");
    });
    
	
	$("#emails").keypress(function (e) {
        return validEmail(e, "#errorSubscribeEmail");
    });
	
	// CONTACT US
	$("#conName").keypress(function (e) {
        return AlphabetsOnly(e, "#errorConName");
    });
    $("#conMobile").keypress(function (e) {
		return ContactNumber(e, "#errorConMobile");
	});
    $("#conEmail").keypress(function (e) {
        return Email(e, "#errorConEmail");
    });
	$("#conMessage").keypress(function (e) {
        return Alphanumeric(e, "#errorConMessage");
    });
	
	// VENDOR REGISTRATION
	$("#inputName").keypress(function (e) {
        return AlphabetsOnly(e, "#vn1");
    });
    $("#store").keypress(function (e) {
		return Alphanumeric(e, "#vs1");
	});
    $("#inputPhoness").keypress(function (e) {
        return DigitsOnly(e, "#vp1");
    });
    /* $("#regpassword").keypress(function (e) {
        return Alphanumeric(e, "#vpp1");
    });
	$("#confirmpassword").keypress(function (e) {
        return Alphanumeric(e, "#cp");
    }); */
}

//---------------------------------Functions--------------------------

function AlphabetsOnly(e, ControlId) {
    if (e.which != 8 && e.which != 9 && e.which != 32 && e.which != 46 && (e.which < 65 || e.which > 90) && (e.which < 97 || e.which > 122)) {
        $(ControlId).html("Alphabets Only").show().fadeOut(2500).css("color", "#FF0000");
        return false;
    }
    return true;
}

function DigitsOnly(e, ControlId) {
    if (e.which != 8 && e.which != 9 && (e.which < 48 || e.which > 57)) {
        $(ControlId).html("Digits Only").show().fadeOut(2500).css("color", "#FF0000");
        return false;
    }
    return true;
}

function Alphanumeric(e, ControlId) {
    if (e.which != 8 && e.which != 9 && e.which != 32 && e.which != 13 && e.which != 45 && e.which != 47 && (e.which < 48 || e.which > 57) && (e.which < 65 || e.which > 90) && (e.which < 97 || e.which > 122)) {
        $(ControlId).html("Special Characters Not Allowed").show().fadeOut(2500).css("color", "#FF0000");
        return false;
    }
    return true;
}

function Alphanumeric1(e, ControlId) {
    if (e.which != 8 && e.which != 9 && e.which != 32 && e.which != 13 && e.which != 45 && e.which != 47 && (e.which < 48 || e.which > 57) && (e.which < 65 || e.which > 90) && (e.which < 97 || e.which > 122)) {
        //$(ControlId).html("Special Characters Not Allowed").show().fadeOut(2500).css("color", "#FF0000");
        return false;
    }
    return true;
}

function Address(e, ControlId) {
    if (e.which != 8 && e.which != 9 && e.which != 32 && e.which != 45 && e.which != 47 && e.which == 188 && e.which == 189 && e.which == 191 && (e.which < 48 || e.which > 57) && (e.which < 65 || e.which > 90) && (e.which < 97 || e.which > 122)) {
        $(ControlId).html("Special Characters Not Allowed").show().fadeOut(2500).css("color", "#FF0000");
        return false;
    }
    return true;
}

function ContactNumber(e, ControlId) {
    if (e.which != 8 && e.which != 9 && (e.which < 48 || e.which > 57)) {
        $(ControlId).html("Digits Only & Start with 7, 8, 9").show().fadeOut(2500).css("color", "#FF0000");
        return false;
    }
    return true;
}

function validEmail1(e, ControlId) {
	//alert('E = ' + e.which);
	//alert('ControlId = ' + ControlId);
    if (e.which != 8 && e.which != 9 && e.which != 32 && e.which != 47 && (e.which == 45 && e.which == 46 && e.which == 64 && e.which == 95) && (e.which < 48 || e.which > 57) && (e.which < 65 || e.which > 90) && (e.which < 97 || e.which > 122)) {
		$(ControlId).html("Special Characters Not Allowed").show().fadeOut(2500).css("color", "#FF0000");
        return false;
    }
    return true;
}
function validEmail(email, ControlId) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	//alert(regex.test(email));
	//return regex.test(email);
	if (!regex.test(email)){
		$(ControlId).html("Special Characters Not Allowed").show().fadeOut(2500).css("color", "#FF0000");
		return false;
    }
    return true;
}

function datepicker() {
    $(".datepicker").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: '-60:+0',
        dateFormat: 'dd-mm-yy'
    });
    $(".datepicker").attr("readonly", "true");

    $(".datepickerDOB").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: '-60:-18',
        dateFormat: 'dd-mm-yy',
        maxDate: (new Date(1998, 07 - 1, 01)),
        defaultDate: new Date(1998, 05, 01)
    });
    $(".datepickerDOB").attr("readonly", "true");

    $(".datepickerDept").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: '-60:+0',
        maxDate: (new Date(2017, 01 - 1, 28)),
        dateFormat: 'dd-mm-yy'
    });
    $(".datepickerDept").attr("readonly", "true");
}

function dateRange(fromDateId, toDateId) {
    $(fromDateId).datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: '-60:+0',
        dateFormat: 'dd-mm-yy',
        onClose: function (selectedDate) {
            $(toDateId).datepicker("option", "minDate", selectedDate);
        }
    });
    $(fromDateId).attr("readonly", "true");
    $(toDateId).datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: '-60:+0',
        maxDate: (new Date()),
        dateFormat: 'dd-mm-yy',
        onClose: function (selectedDate) {
            $(fromDateId).datepicker("option", "maxDate", selectedDate);
        }
    });
    $(toDateId).attr("readonly", "true");
}

function AddToolTip() {
    $('select option').each(function () {
        $(this).attr('title', $(this).text());
    });
}

function AutoCompleteOff() {
    $("input[type=text]").each(function () {
        $(this).attr('autocomplete', 'off');
    });
	$("input[type=password]").each(function () {
        $(this).attr('autocomplete', 'off');
    });
	$("input[type=email]").each(function () {
        $(this).attr('autocomplete', 'off');
    });
}

function onlyDotsAndNumbers(event, value) {
    var ss = (event.keyCode != 0) ? value + String.fromCharCode(event.keyCode) : value + String.fromCharCode(event.charCode);
    var e = event || window.event;
    var charCode = e.which || e.keyCode || e.charCode;
    var bool = parseInt(value.indexOf("."))
    if (charCode == 46) {
        if (parseInt(value.indexOf(".")) == -1) {
            return true;
        }
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    try {
        if (parseFloat(ss)) {
            if (parseFloat(ss) >= 0 && parseFloat(ss) <= 100)
                return true;
        }
    }
    catch (ex) {
        return false;
    }
    return false;
}
