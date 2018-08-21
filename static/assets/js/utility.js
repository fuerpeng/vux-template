//生成一个min到max的随机整数
function GetRndNum(min,max)
{
	return Math.round((max-min)*Math.random()+min);
}

//生成一个min到max的随机整数
function GetRndNumByAppoint(min,max,count1,count2)
{
	var original=new Array;//原始数组
	var value = min;
	var result = new Array;//结果集数组
	
	//给原始数组original赋值
	for (var i=0;i<=(max - min);i++){
	    original[i]=value;
	    value++;
	}
	
	//收集第一个需要的数字
	for (i=0;i<count1;i++){
		 var index=Math.floor(Math.random()*original.length); //随机取一个位置
		 result.push(original[index]);
		 original.splice(index,1)
	}
	//收集第二个需要的数字
	for (i=0;i<count2;i++){
		 var index=Math.floor(Math.random()*original.length); //随机取一个位置
		 result.push(original[index]);
		 original.splice(index,1)
	}
	
	return result;
}