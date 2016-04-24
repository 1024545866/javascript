/**
 * @author 李佳标
 */

	/*
	 *  js中怎么去实现继承： 采用原型链的概念
	 *  
	 *  构造函数 原型对象 实例对象
	 */
	 
	 /*
	  *  1 构造函数.prototype = 原型对象
	  *  2 原型对象.constructor = 构造函数(模版)
	  *  3 原型对象.isPrototypeOf(实例对象) 判断实例对象的原型是否是当前的对象
	  *  4 构造函数 实例对象（类和实例）
	  *  
	  */
 
	 //父类构造函数 sup
	 function Sup( name ){
	 	this.name = name;
	 }
	 
	 //父类的原型对象
	 Sup.prototype = {
	 	constructor : Sup,
		sayNmae : function (){
			alert(this.name);
		}
	 }

 	// 子类构造函数 sub
	function Sub(){
		this.age = age;
	}
	
	/*
	 * 如果我们让子类的原型对象 等与父类的实列？
	 * 结果会怎样呢？（实现了js的继承）
	 * 1、显然此时的原型对象将包含一个指向另一个原型的指针 sup的实例对象和sup 的原型
	 *    对象
	 */
	
	
	
	
	
 	