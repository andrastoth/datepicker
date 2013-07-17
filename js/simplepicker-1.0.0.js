;
(function($, window, document, undefined) {

	var pluginName = "simplePicker",
		defaults = {
			style: 'dark',
			firstday: 1,
			days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			delimiter: '-',
			dateformat: function() {
				return 'yyyy' + this.delimiter + 'mm' + this.delimiter + 'dd'
			}
		};


	function Plugin(element, options) {
		this.element = element;

		this.options = $.extend({}, defaults, options);

		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	Plugin.prototype = {

		init: function() {
			var datefield = $(this.element);
			datefield.attr('autocomplete', 'off');
			var ops = this.options;
			var datePicker = $('<div class="datePickerHolder-' + ops.style + '">');
			var tDate = {};
			var md = new Date();
			var defdate = ops.dateformat().split(ops.delimiter);
			var thisdate = {};
			if (datefield.val() == '') {
				$.each(defdate, function(index) {
					defdate[index] == 'yyyy' ? thisdate.year = md.getFullYear() : null;
					defdate[index] == 'mm' ? thisdate.month = md.getMonth() : null;
					defdate[index] == 'dd' ? thisdate.day = md.getDate() : null;
				});
			} else {
				var getd = datefield.val().split(' ')[0].split(ops.delimiter);
				$.each(getd, function(index) {
					defdate[index] == 'yyyy' ? thisdate.year = getd[index] : null;
					defdate[index] == 'mm' ? thisdate.month = getd[index] : null;
					defdate[index] == 'dd' ? thisdate.day = getd[index] : null;
				});
			}
			var tbl = this.genTable(thisdate.month, thisdate.year, ops.firstday, thisdate);
			datePicker.empty().html(tbl);

			this.selectRefresh(ops, datePicker);

			datePicker.find('.month').change();

			datePicker.css({
				display: 'none',
				top: datefield.offset().top + datefield.outerHeight(),
				left: datefield.offset().left
			})
			datePicker.insertAfter(datefield);

			datefield.on('click', function() {
				datePicker.fadeIn(100)
			})
			datePicker.on('click', '.remove', function() {
				datePicker.fadeOut(100)
			})
			datePicker.on('change', '.year', function() {
				var ops = datefield.data().plugin_simplePicker.options;
				thisdate.year = parseInt($(this).val(), 10);
				thisdate.month = parseInt(datePicker.find('.month').find(':selected').val(), 10);
				var tbl = datefield.data().plugin_simplePicker.genTable(thisdate.month, thisdate.year, ops.firstday, thisdate);
				datePicker.empty().html(tbl);
				datefield.data().plugin_simplePicker.selectRefresh(ops, datePicker);
				datefield.val('');
			})
			datePicker.on('change', '.month', function() {
				var ops = datefield.data().plugin_simplePicker.options;
				thisdate.year = parseInt(datePicker.find('.year').find(':selected').val(), 10);
				thisdate.month = parseInt($(this).val(), 10);
				var tbl = datefield.data().plugin_simplePicker.genTable(thisdate.month, thisdate.year, ops.firstday, thisdate);
				datePicker.empty().html(tbl);
				datefield.data().plugin_simplePicker.selectRefresh(ops, datePicker);
				datefield.val('');
			})
			datePicker.on('click', 'td', function() {
				var dy = datePicker.find('.year').val();
				var dm = parseInt(datePicker.find('.month').find(':selected').val(), 10) + 1;
				var dd = parseInt($(this).html(), 10);
				var tval = [];
				$.each(defdate, function(index) {
					defdate[index] == 'yyyy' ? tval[index] = dy : null;
					defdate[index] == 'mm' ? tval[index] = (dm > 9 ? "" + dm : "0" + dm) : null;
					defdate[index] == 'dd' ? tval[index] = (dd > 9 ? "" + dd : "0" + dd) : null;
				});
				datefield.val(tval[0] + ops.delimiter + tval[1] + ops.delimiter + tval[2])
			})
			datePicker.on('click', '.nexti', function() {
				datefield.data().plugin_simplePicker.next(ops, thisdate, defdate, datefield, datePicker);
			})
			datePicker.on('click', '.previ', function() {
				datefield.data().plugin_simplePicker.prev(ops, thisdate, defdate, datefield, datePicker);
			})
			datePicker.on('click', '.next', function() {
				datefield.data().plugin_simplePicker.next(ops, thisdate, defdate, datefield, datePicker);
			})
			datePicker.on('click', '.previous', function() {
				datefield.data().plugin_simplePicker.prev(ops, thisdate, defdate, datefield, datePicker);
			})
			datePicker.on('click', '.geti', function() {
				var ops = datefield.data().plugin_simplePicker.options;
				datefield.data().plugin_simplePicker.geti(ops, thisdate, defdate, datefield, datePicker);
			})

		},
		prev: function(ops, thisdate, defdate, datefield, datePicker) {
			var ops = datefield.data().plugin_simplePicker.options;
			thisdate.month--;
			thisdate.month < 0 ? (thisdate.year--, thisdate.month = 11) : null;
			var tbl = datefield.data().plugin_simplePicker.genTable(thisdate.month, thisdate.year, ops.firstday, thisdate);
			datePicker.empty().html(tbl);
			datefield.data().plugin_simplePicker.selectRefresh(ops, datePicker);
			datefield.val('');
		},
		next: function(ops, thisdate, defdate, datefield, datePicker) {
			var ops = datefield.data().plugin_simplePicker.options;
			thisdate.month++;
			thisdate.month > 11 ? (thisdate.year++, thisdate.month = 0) : null;
			var tbl = datefield.data().plugin_simplePicker.genTable(thisdate.month, thisdate.year, ops.firstday, thisdate);
			datePicker.empty().html(tbl);
			datefield.data().plugin_simplePicker.selectRefresh(ops, datePicker);
			datefield.val('');
		},
		geti: function(ops, thisdate, defdate, datefield, datePicker) {
			var md = new Date();
			$.each(defdate, function(index) {
				defdate[index] == 'yyyy' ? thisdate.year = md.getFullYear() : null;
				defdate[index] == 'mm' ? thisdate.month = md.getMonth() : null;
				defdate[index] == 'dd' ? thisdate.day = md.getDate() : null;
			});
			var tbl = datefield.data().plugin_simplePicker.genTable(thisdate.month, thisdate.year, ops.firstday, thisdate);
			datePicker.empty().html(tbl);
			var dy = thisdate.year
			var dm = thisdate.month + 1;
			var dd = thisdate.day;
			var tval = [];
			$.each(defdate, function(index) {
				defdate[index] == 'yyyy' ? tval[index] = dy : null;
				defdate[index] == 'mm' ? tval[index] = (dm > 9 ? "" + dm : "0" + dm) : null;
				defdate[index] == 'dd' ? tval[index] = (dd > 9 ? "" + dd : "0" + dd) : null;
			});
			datefield.val(tval[0] + ops.delimiter + tval[1] + ops.delimiter + tval[2]);
			datefield.data().plugin_simplePicker.selectRefresh(ops, datePicker);
		},
		selectRefresh: function(ops, datePicker) {
			var nm = datePicker.find('.month').val();
			datePicker.find('.month').children().remove();
			for (var i = 0; i < ops.months.length; i++) {
				var at = '';
				i == nm ? at = 'selected' : at = '';
				datePicker.find('.month').append('<option value = "' + i + '" ' + at + '>' + ops.months[i] + '</option>');
			};
			var nm = Number(datePicker.find('.year').val());
			datePicker.find('.year').children().remove();
			for (var i = nm - 5; i <= nm + 5; i++) {
				i == nm ? at = 'selected' : at = '';
				datePicker.find('.year').append('<option value = "' + i + '" ' + at + '>' + i + '</option>');
			};
		},
		mLength: function(month, year) {
			var dd = new Date(year, month, 0);
			return dd.getDate();
		},

		cellCheck: function(f, day, col) {
			var c = [];
			var t = '<td';
			if (f == 0) c.push('previous');
			if (col == 0 || col == 6) c.push('weekend');
			if (f == 9) c.push('next');
			if (c.length > 0) t += ' class="' + c.join(' ') + '"';
			t += ' class="day">' + day + '</td>';
			return t;
		},

		genTable: function(m, y, d, thisdate) {
			var m = parseInt(m, 10);
			var y = parseInt(y, 10);
			if (y < 1901 || y > 2100) {
				alert('year must be after 1900 and before 2101');
				return false;
			}
			var c = new Date();
			c.setDate(1);
			c.setMonth(m);
			c.setFullYear(y);
			var x = parseInt(d, 10);
			var s = (c.getDay() - x) % 7;
			if (s < 0) s += 7;
			var dm = this.mLength(m, y);
			var h = '<table class="datePicker-' + this.options.style + '">';
			h += '<caption>';
			h += '<select class = "year"><option selected>' + thisdate.year + '</option></select><select class = "month">';
			h += '<option value = "' + thisdate.month + '" selected>' + this.options.months[thisdate.month] + '</option></select>';
			h += '<img class = "remove" src = "css/img/remove-' + this.options.style + '.png"><img class = "nexti" src = "css/img/next-' + this.options.style + '.png">';
			h += '<img class = "geti" src = "css/img/get-' + this.options.style + '.png"><img class = "previ" src = "css/img/prev-' + this.options.style + '.png"><thead><tr>';
			for (var i = 0; i < 7; i++) {
				h += '<th';
				if ((i + x) % 7 == 0 || (i + x) % 7 == 6) h += ' class="day"';
				h += '>' + this.options.days[(i + x) % 7] + '</th>';
			}
			h += '</tr></thead><tbody><tr>';
			for (var i = s; i > 0; i--) {
				h += this.cellCheck(0, dm - i + 1, (s - i + x) % 7);
			}
			dm = this.mLength(m + 1, y);
			for (var i = 1; i <= dm; i++) {
				if ((s % 7) == 0) {
					h += '</tr><tr>';
					s = 0;
				}
				h += this.cellCheck(1, i, (s + x) % 7);
				s++;
			}
			var j = 1;
			for (var i = s; i < 7; i++) {
				h += this.cellCheck(9, j, (i + x) % 7);
				j++;
			}
			h += '</tr></tbody></table>';
			h = h.replace('<tr></tr>', '');
			return h;
		}
	};

	$.fn[pluginName] = function(options) {
		return this.each(function() {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName, new Plugin(this, options));
			}
		});
	};

})(jQuery, window, document);