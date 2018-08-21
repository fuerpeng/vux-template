function JS_OBJECT_MAP(){  
    this.js_object_map = new Array();  
    // 获取MAP元素大小  
    this.size = function(){  
        return this.js_object_map.length;  
    };  
    // 判断MAP是不是空，返回true：空/false：不空  
    this.isEmpty = function(){  
        return (this.js_object_map.length < 1);  
    };  
    // 清空MAP  
    this.clear = function(){  
        this.js_object_map = new Array();  
    };  
    // 给MAP中放值(key,value)  
    this.put = function(_key,_value){  
        this.js_object_map.push({  
            key:_key,  
            value:_value  
        });  
    };  
    // 删除指定KEY的元素，成功返回True，失败返回False  
    this.remove = function(_key){  
        var bln = false;  
        try {  
            for (var i = 0; i < this.js_object_map.length; i++) {  
                if (this.js_object_map[i].key == _key) {  
                    this.js_object_map.splice(i, 1);  
                    return true;  
                }  
            }  
        } catch (e) {  
            bln = false;  
        }  
        return bln;  
    };  
    // 获取指定KEY的元素值VALUE，失败返回NULL  
    this.get = function(_key){  
        try {  
            var result = null;  
            for (var i = 0; i < this.js_object_map.length; i++) {  
                if (this.js_object_map[i].key == _key) {  
                    result = this.js_object_map[i].value;  
                }  
            }  
            return result;  
        } catch(e) {  
            return null;  
        }  
    };  
    // 设置MAP中指定KEY元素的值VALUE, 失败返回NULL  
    this.set = function(_key, _value){  
        try{  
            this.remove(_key);  
            this.put(_key,_value);  
        }catch(e){  
            return null;  
        }  
    };  
    // 获取制定索引的元素  
    this.getByIndex = function(_index){  
        if (_index < 0 || _index >= this.js_object_map.length) {  
            return null;  
        }  
        return this.js_object_map[_index];  
    };  
    // 判断MAP中是否含有指定KEY的元素  
    this.containsKey = function(_key){  
        var bln = false;  
        try {  
            for (var i = 0; i < this.js_object_map.length; i++) {  
                if (this.js_object_map[i].key == _key) {  
                    bln = true;  
                }  
            }  
        } catch (e) {  
            bln = false;  
        }  
        return bln;  
    };  
    // 判断MAP中是否含有指定VALUE的元素  
    this.containsValue = function(_value){  
        var bln = false;  
        try {  
            for (var i = 0; i < this.js_object_map.length; i++) {  
                if (this.js_object_map[i].value == _value) {  
                    bln = true;  
                }  
            }  
        } catch (e) {  
            bln = false;  
        }  
        return bln;  
    };  
    // 获取MAP中所有VALUE的数组  
    this.values = function(){  
        var arr = new Array();  
        for (var i = 0; i < this.js_object_map.length; i++) {  
            arr.push(this.js_object_map[i].value);  
        }  
        return arr;  
    };  
    // 获取MAP中所有KEY的数组  
    this.keys = function(){  
        var arr = new Array();  
        for (var i = 0; i < this.js_object_map.length; i++) {  
            arr.push(this.js_object_map[i].key);  
        }  
        return arr;  
    };  
}  