var letters = new Array('a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');

function checkNum(obj) {  
     //检查是否是非数字值  
     if (isNaN(obj.value)) {  
         obj.value = "";  
     }  
     if (obj != null) {  
         //检查小数点后是否对于两位http://blog.csdn.net/shanzhizi  
         if (obj.value.toString().split(".").length > 1 && obj.value.toString().split(".")[1].length > 2) {  
             obj.value = "";  
         }  
     }  
 }  

/**
 * 检验是否正整数 
 * @param obj
 * @returns {Boolean}
 */
function checkPositiveNum(obj) {  
	var re = /^[1-9]+[0-9]*]*$/;
    if (!re.test((obj.value))){
       obj.value = "";  
       return false;
    }
}  

/**
 * 获取查询条件的值，空串置为null
 * @param idStr
 * @returns
 */
function getSearchVal(idStr) {
	var inputVal = $("#" + idStr).val();
	//空字符串置为null
	if(inputVal != null && $.trim(inputVal) == "") {
		inputVal = null;
	}
	return inputVal;
}


/**
 * 获取查询条件的值，空串置为null
 * @param idStr
 * @returns
 */
function getSearchDateVal(idStr) {
	var inputVal = $("#" + idStr).val();
	//空字符串置为null
	if(isEmpty(inputVal)) {
		return null;
	}
	return inputVal.stringToDate();
}



/**
 * 判断对象是否是空，字符串"",null,undefined会返回true
 * @param obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
	if($.trim(obj) == "") {
		return true;
	} else {
		return false;
	}
}

/**
 * 判断对象是否是非空，(字符串"",null,undefined)会返回false
 * @param obj
 * @returns {Boolean}
 */
function isNotEmpty(obj) {
	if($.trim(obj) == "") {
		return false;
	} else {
		return true;
	}
}

/**
 * 如果是空的话,返回一个给定默认值的字符串
 * @param obj
 * @param defaultValue
 * @returns
 */
function getStrByDefaultValue(obj, defaultValue) {
	if(isEmpty(obj)) {
		return defaultValue;
	} else {
		return obj;
	}
}

