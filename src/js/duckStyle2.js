/**
 * @author 李佳标
 */

/**
 * 鸭式变型法
 * 1、完美对接口的实现
 * 2、面向对象的编程
 * 3、实现对象接口的解耦
 */

 /*
  * 参数：
  *  1、className
  *  2、methods
  */
 var Interfaces = function (className, methods){
 	if( arguments.length < 2 ){
		throw Error("the arguments params two above ");
	}
 	this.className = className;
	this.methods = [];
	if( typeof methods =="object" ){
		for( var i = 0, len = methods.length; len > i; i++){
			if( typeof methods[i] !=="string"){
				throw Error(" the method not is type string ");
			}
			this.methods.push(methods[i]);
		}
	}
 }
 
 //实现验证该接口的方法
 Interfaces.validateMethod = function (obj){
 	if(  arguments.length < 2 ){
		throw Error("the argument  < two params ");
	}
	//获取实现接口的对象
	for( var i = 1, leni = arguments.length; leni > i; i++ ){
		var instanceInterafce = arguments[i];
		//该接口构造实例不为Interfaces验证
		if( instanceInterafce.constructor !== Interfaces){
			throw Error("the instance constructor not is Interfaces");
		}
		for( var j = 1, lenj = instanceInterafce.methods.length; lenj > j; j++ ){
			//用一个变量接受该实列接口方法
			var methodName = instanceInterafce.methods[j];
			if( !obj[methodName] || typeof obj[methodName] !== "function"){
				throw Error("the method error  '"+methodName+"' not in interface ");
			}
		}
	}
 }
 
 //接口方法的定意
 var PerionInterface = new Interfaces("PerionInterface",["add","remove"]);
 
 var FormInterface = new Interfaces("FormInterface",["update","select"]);
 
 
 //实现接口的方法
 function PersionImpl(){
 	
 }
 
 PersionImpl.prototype.add = function (obj){
 	//do somting
	alert("add+++++");
 }
 
  PersionImpl.prototype.update = function (obj){
 	alert("update+++++");
 }
 
  PersionImpl.prototype.remove = function (obj){
 	alert("remove+++++");
 }
 
//  PersionImpl.prototype.select = function (obj){
// 	alert("select+++++");
// }
// 

 var p = new PersionImpl();
 
 Interfaces.validateMethod( p , PerionInterface , FormInterface);
 
 p.add();
 
 
 