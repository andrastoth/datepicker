$(document).ready(function() {
	/*
		Australia: Sunday
		Canada: Sunday
		India: Sunday
		Ireland: Monday
		New Zealand: Sunday
		South Africa: Sunday
		United Kingdom: Monday
		United States: Sunday
*/
	$('#d-am').simplePicker({
		style: 'dark',
		firstday: 0,
		days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		delimiter: '/',
		dateformat: function() {
			return 'mm' + this.delimiter + 'dd' + this.delimiter + 'yyyy'
		}
	})

	$('#d-eng').simplePicker({
		style: 'white',
		firstday: 1,
		days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		delimiter: '/',
		dateformat: function() {
			return 'dd' + this.delimiter + 'mm' + this.delimiter + 'yyyy'
		}
	})
	$('#d-hun').simplePicker({
		style: 'dark',
		firstday: 1,
		days: ['Vas', 'Hét', 'Ked', 'Szer', 'Csüt', 'Pén', 'Szo'],
		months: ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
		delimiter: '.',
		dateformat: function() {
			return 'yyyy' + this.delimiter + 'mm' + this.delimiter + 'dd'
		}
	})
	areaSetSyntax($('[name="htmlCode"]'),"application/x-httpd-php");
	$('.datePickerHolder-dark').css('z-index',99);
	$('.datePickerHolder-white').css('z-index',99);
});

function areaSetSyntax(argument,mode) {
    var editor = CodeMirror.fromTextArea(argument[0], {
        mode: mode,
        tabMode: "indent",
        readOnly: true
    });
    editor.setOption("theme", "monokai");
    argument.next('div').css({
        'font-size': '16px',
        'text-align': 'left',
        'height': '500px'
    });

}
