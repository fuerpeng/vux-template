String.prototype.nullStringToNull = function(str){
	if(this == null || this.length == 0){
		return null;
	}
	return this;
};

/**
 * 字符串转成时间
 * @returns
 */
String.prototype.stringToDate = function(){
	if(this == null || this.length == 0){
		return null;
	}
    return new Date(Date.parse(this.replace(/-/g, "/")));
};

/**
 * 字符串转成日期(年月日)
 * @param str
 * @returns {Date}
 */
String.prototype.changeToDate = function(str) {
    var st = this;
    var a = st.split(" ");
    var b = a[0].split("-");
    var c = a[1].split(":");
    var date = new Date(b[0], parseInt(b[1], 10) - 1, b[2], parseInt(c[0], 10), parseInt(c[1], 10) - 1, parseInt(c[2], 10));
    return date;
}

/**
 * 字符串替换所有的字符
 * @param str
 * @returns {Date}
 */
String.prototype.replaceAll = function(sptr, sptr1) {
	var str = this;
	while (str.indexOf(sptr) >= 0){
		str = str.replace(sptr, sptr1);
	}
	return str;
}