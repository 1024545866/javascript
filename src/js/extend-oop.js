/*
 * author: LJB
 */


 /*
  *  原型继承特点
  *   1、即继承了父类的模版，又继承了 父类的原型对象
  *  
  */
/*
function Person(id, name , age){
	this.id = id;
	this.name = name;
	this.age = age;
} 

Person.prototype = {
	constructor:Person,
	say : function (){
		alert(this.name);
	}
}
 
 
function Boy( addrees , email ){
	this.addrees = addrees;
	this.email = email;
}


 Boy.prototype = new Person(1, "小明", 20);
 
 var b = new Boy();
 alert(b.age);
 alert( b.name);
 b.say();
*/


/**
 *  类继承： 只继承模版, 不继承模型
 */
/*
 function Sup(name, age){
 	this.name = name;
	this.age = age;
 }
 
 Sup.prototype.id = 100;
 
 function Sub(address, email, name, age){
	this.address = address;
	this.email = email;
	Sup.call(this, name, age);
 }
 

 
 var sb = new Sub("北京", "102@qq.com", "小佳", 24);
 
// alert(sb.address);
// alert(sb.email);
// alert("sup :"+sb.name);
// alert("sup :"+sb.age);

//  alert("sup :"+sb.id); //只继承父类模版 没有继承父类原型对象
   
  */
 
 /**
  *  继承模版又继承原型
  *  原型继承+借用模版
  */
 
 /*
 function  A( name, age ){
 	this.name = name;
	this.age = age;
 }
 
 A.prototype = {
 	constructor : A,
	sayA : function (){
		alert("父类A......");
	}
 }
 
 function B( sex, address, name, age){
 	this.sex = sex;
	this.address = address;
	A.call(this, name, age);	//模版借用
 }
 
 //原型继承
 B.prototype = new A();
 
 var b = new B("男", "中山大学", "系米米", 23);
 
alert(b.age);
alert(b.name);
alert(b.sex);
alert(b.address);
b.sayA();
 
 */

/**
 * 目的：子类只父类继承一次模版 与一次原型属性与方法 
 * 	参数:
 * 	1、子类实列
 * 	2、父类实列	
 */

function extendObj(sub, sup){
	
	// 创建空函数  目的： 进行原型对象的接受
	var A = new Function();
	// 获取父类原型
	 A.prototype = sup.prototype;
	// 用中转函数给子类原型赋值
	sub.prototype = new  A();
	// 还原下子类的构造器
	sub.prototype.constructor = sub;
	
	//用子类的属性接受下父类的原型  目的：方便对象解耦 ，便于调用对象的原型对象的方法
	sub.isSupClass =  sup.prototype;
	
	// 判断父类与子类是否添加构造器 constructor 
	if( sup.prototype.constructor == Object.prototype.constructor){
		sup.prototype.constructor = sup; //手动欢迎父类原型对象的构造器
	}
}


function C( name, age){
	this.name = name;
	this.age = age;
	
}

C.prototype = {
	constructor:C,
	sayName:function (){
		alert("hello javascript");
	}
}

function Boy(sex, name, age){
	Boy.isSupClass.constructor.call(this, name, age);
	this.sex = sex;
}


extendObj(Boy, C);

Boy.prototype = {
	validateSex : function (){
		alert("validateSex");
	}
}


var d = new Boy("女","校花", 23);

alert(d.sex);
alert(d.name);
alert(d.age);
d.validateSex();
Boy.isSupClass.sayName.call(d);




