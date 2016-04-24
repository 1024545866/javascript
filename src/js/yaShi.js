/**
 * @author 李佳标
 */

//鸭式变型法

/*
 * 1、类名 Class
 * 2、方法名 methodList
 */
var  Interfaces = function (ClassName , methodList){
	//永不休止的判断
	if( arguments.length < 2){
		throw Error("params must be two lenght over");
	}
	this.ClassName = ClassName;
	this.methodList = [];
	for(var i = 0 , len = methodList.length ; len > i ; i++ ){
		 if( typeof methodList[i] !== 'string'){
		 		throw new Error('the Interface method name is error!');
		 }
		 this.methodList.push(  methodList[i] );
	}
}

//验证该接口的具体实现方法
Interfaces.validateInterface = function (object){
	//永不休止的验证
	if( arguments.length < 2 ){ //验证判断获取的参数
		throw Error("params must be > two length ");
	}
	
	for( var i = 1 , len = arguments.length ; len > i ; i++ ){
		var instanceInterface = arguments[i] ;
		if (instanceInterface.constructor != Interfaces) {
			throw new Error('the arguments constructor not be Interface Class');
		}
		console.log("Interfaces.methodList  : "+Interfaces.methodList);
		//遍历该实列对象是否实现interfaces接口
		for( var j = 0 , lens = instanceInterface.methodList.length; lens > j ; j++ ){
			var method = instanceInterface.methodList[j];
			if( !object[method] && typeof object[method] !=="function"   ){
				throw new Error("the method name '" + method + "' is not found !");
			};
		}
	}
}



//实现接口的对象
var FormImplInteface = new Interfaces("FormImpl",['add','update']);

var PersionImplInteface = new Interfaces("PersionImpl",['select','remove']);


var  PersionImpl = function(){
	
}

PersionImpl.prototype.add = function (obj){
	alert("add.........");
}

PersionImpl.prototype.update = function (obj){
	alert("update.........");
}

PersionImpl.prototype.select = function (obj){
	alert("select.........");
}

PersionImpl.prototype.remove = function (obj){
	alert("remove.........");
}

//
//// 1 实例化接口对象
//var CompositeInterface = new Interfaces('CompositeInterface' , ['add' , 'remove']);
//var FormItemInterface  = new Interfaces('FormItemInterface' , ['update','select']);
//
////  CompositeImpl implements CompositeInterface , FormItemInterface
//
//// 2 具体的实现类 
//var CompositeImpl = function(){
//	
//} 
//
//// 3 实现接口的方法implements methods 			
//CompositeImpl.prototype.add = function(obj){
//	alert('add');
//	// do something ...
//}
//CompositeImpl.prototype.remove = function(obj){
//	alert('remove');
//	// do something ...
//}			
//CompositeImpl.prototype.update = function(obj){
//	alert('update');
//	// do something ...
//}	



//实列
//var h = new CompositeImpl();
//Interfaces.validateInterface(h, CompositeInterface , FormItemInterface);
//h.add();

//实列
var h = new PersionImpl();
Interfaces.validateInterface(h, FormImplInteface , PersionImplInteface);
h.add();

