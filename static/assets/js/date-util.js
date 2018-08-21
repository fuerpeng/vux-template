/**
 * 日期格式化。
 * 
 * @param format
 */

	Date.prototype.format = function(format) {
		var o = {
			"M+" : this.getMonth() + 1,                   // month
			"d+" : this.getDate(),                        // day
			"h+" : this.getHours(),                       // hour
			"m+" : this.getMinutes(),                     // minute
			"s+" : this.getSeconds(),                     // second
			"q+" : Math.floor((this.getMonth() + 3) / 3), // quarter
			"S" :  this.getMilliseconds()                 // millisecond
		};
		if (/(y+)/.test(format)) {
			format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		}
		for (var k in o) {
			if (new RegExp("(" + k + ")").test(format)) {
				format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			}
		}
		return format;
	};
	function dateFormat(me,format) {
		var o = {
			"M+" : me.getMonth() + 1,                   // month
			"d+" : me.getDate(),                        // day
			"h+" : me.getHours(),                       // hour
			"m+" : me.getMinutes(),                     // minute
			"s+" : me.getSeconds(),                     // second
			"q+" : Math.floor((me.getMonth() + 3) / 3), // quarter
			"S" :  me.getMilliseconds()                 // millisecond
		};
		
		if (/(y+)/.test(format)) {
			format = format.replace(RegExp.$1, (me.getFullYear() + "").substr(4 - RegExp.$1.length));
		}
		for (var k in o) {
			if (new RegExp("(" + k + ")").test(format)) {
				format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			}
		}
		return format;
	}

//增加月
Date.prototype.AddMonths = function(value) {
     this.setMonth(this.getMonth() + value);
     return this;
}
//增加天 
Date.prototype.AddDays = function(value) {
    this.setDate(this.getDate() + value);
    return this;
}
//增加时
Date.prototype.AddHours = function(value) {
    this.setHours(this.getHours() + value);
    return this;
}
//设置每天的时分秒为00:00:00
Date.prototype.setDayStartTime = function() {
     this.setHours(0, 0, 0, 0);
     return this;
}
//设置每天的时分秒为23:59:59
Date.prototype.setDayEndTime = function() {
     this.setHours(23, 59, 59, 999);
     return this;
}
