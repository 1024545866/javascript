/**
 * @author LJB
 */

/*
 *  原型对象的特点：
 *  	1、原型对象里的所有属性和方法被所有构造函数实列化的对象所共享
 */

/*
 function Persion(){
 	
 }

 Persion.prototype = {
 	constructor : Persion,
	name : "压秒跌",
	age : 20,
	jod : "风萧萧兮易水寒，壮士一去兮不复返！",
	frinds : ["隔壁老王"," 隔壁如花","隔壁大妈"],
	sayName : function (){
		alert("my name is " + this.name);
	}
 }
 
 var p1 = new Persion();
 var p2 = new Persion();
 
 p1.frinds.push("隔壁土豪");
 alert(p1.frinds);
 alert(p2.frinds);
 
 //原型里的属性和方法 被所有对象所共享：static 
 
 */
 
 /*
 //组合使用原型和构造函数式(定义一个类 开发时常用的方式)
 
 function People( name , age, friends, jod){
 	this.name =name;
	this.age = age;
	this.friends = friends;
	this.jod = jod;
 }
 
 People.prototype = {
 	constructor: People,
	sayName : function (){
		alert(this.name);
	},
 }
 
 var pe1 = new People("damimi",20, ["xxd","xxoo"],"女优一枚");
 var pe2 = new People("ximimi",23, ["xxxxd","xxooooop"],"男优一枚");
 
 pe1.sayName();
 pe2.sayName();
 
 */
 
 /*
 //动态原型模式: (让你的代码 都封装到一起)
 
 function  ClassName( name, age, friends, jod ){
 	
	this.name = name;
	this.age = age;
	this.friends = friends;
	this.job = job;
	
	//动态原型方法
	if( typeof this.sayName != "function"){
		ClassName.prototype.sayName = function(){
			alert(this.name);
		}
	}
 }
 */
 
 
 // 稳妥构造函数式：durable object(稳妥对象) 非常安全的环境
 /* 
  * 1 没有公共属性 
  * 2 不能使用this对象
  */ 

function DurableObj( name, age, jod){
	
	//创建一个要返回的对象
	var obj = new Object();
	
	//可以定义一下私有的变量和函数private
	var name = name;
	obj.sayName = function(){
		alert(name);
	}
	return obj;
}
	
var dura = new DurableObj("张三");
dura.sayName();

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
