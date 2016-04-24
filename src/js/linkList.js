/**
 * @author 李佳标
 */

//简单的链式的实现
var Dog = function (){
	
	this.run = function (){
		alert("run.....");
		return this;
	}
	
	this.eat = function (){
		alert("eat........");
		return this;
	}
	
	this.sleep = function (){
		alert("sleep.......");
		return this;
	}
}

var d = new Dog();
d.run().eat().sleep();



