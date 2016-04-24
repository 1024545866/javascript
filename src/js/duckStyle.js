/**
 * @author 李佳标
 */

/**
 * 鸭式变形法
 * 完美实现接口的抽象实现
 */

 /*
  * 接口实现
  * 1、类名 className
  * 2、方法名 methodList
  */
var  Interfaces = function(className , methodList ){
 	//永不休止的验证
	if( arguments.length < 2 ){
		throw Error("argument instanct must be two params  age above ");
	}
	this.className = className;
	this.methodList = [];
	if(methodList.length > 0 && typeof methodList == "object" ){
		for(var i = 0, len = methodList.length; len > i ; i++){
			if( typeof methodList[i] == "string" ){
				this.methodList.push( methodList[i]);
			}
		}
	}
}


/*
 * 验证类实现接口的方法
 */
Interfaces.validateMethodImpl = function ( object ){
	//永不休止的验证
	if( arguments.length < 2 ){
		throw Error("param must be two above ");
	}
	//获取实现接口的方法
	for( var i = 1, leni = arguments.length; leni > i; i++){
		var methosInterface = arguments[i];
		if( methosInterface.constructor !== Interfaces  ){
			throw Error("the arguments constructor  not be  is Interfaces class");
		}
		//循环实例的每一个方法
		for( var j = 0, lenj = methosInterface.methodList.length; lenj > j; j++ ){
			//用一个临时变量接收 每一个方法名
			var methodName = methosInterface.methodList[j];
			if( !object[methodName] || typeof object[methodName] !=='function'){
				throw new Error("the method name '" + methodName + "' is not found !");
			}
		}
	}
}


//实现接口的方法
var PersionInterface = new Interfaces("PersionImpl",["add","update"]);

var FormInterface= new Interfaces("FormImpl",["remove","select"]);


function PersionImpl(){
	
}

PersionImpl.prototype.add = function (obj){
	//do somthin
	alert("add**************");
	
}

PersionImpl.prototype.update = function (obj){
	//do somthin
	alert("update**************");
	
}

PersionImpl.prototype.remove = function (obj){
	//do somthin
	alert("remove**************");
	
}

//PersionImpl.prototype.select = function (obj){
//	//do somthin
//	alert("select**************");
//	
//}




Interfaces.ensureImpl = function (obj){
	//做实参验证
	if( arguments.length < 2 ){
		throw Error("the arguments  lenght must be two lenght above");
	}
	
	//验证实列接口是否实现接口的方法
	for(var i=1, lenI = arguments.length; lenI > i; i++ ){
		var instanceFaceImpl = arguments[i];
	
		//验证该该实现的接口是否实现是interface 的构造实列
		if( instanceFaceImpl.constructor !== Interfaces ){
			throw Error("the constructor not in Interfaces ");
		}
		for( var j=0, lenJ=instanceFaceImpl.methodList.length; lenJ > j; j++  ){
			//用一个变量接受实例方法
			var methodName = instanceFaceImpl.methodList[j];
			if( !obj[methodName] || typeof obj[methodName] !== "function"){
				throw Error("Error the mentodsName - "+methodName+" no inplements in constructor");
			}
		}
	}
}


//调用对象实现接口的方法
var _obje = new PersionImpl();
/*
 * /属性验证该实现是否实现接口里的方法
 */
Interfaces.ensureImpl( _obje , PersionInterface , FormInterface);

_obje.add();
