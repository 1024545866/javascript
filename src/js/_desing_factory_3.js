/**
 * @author LiJiaBiao
 */

//showCat4s 店铺
function ShowStore(){}

// 添加 showCat4s
ShowStore.prototype = {
	// 还原当前构造器
	constructor : ShowStore,
	sellCar : function ( type ){
		switch(type){
			case "Bmw": car = new Bmw();   break;
			case "Audi": car = new Audi(); break;
			case "Legx": car = new Legx(); break;
			default: "not buy it";
		}
		// 验证车是否实现接口方法
		LB.Interface.ensureImplements(car,CarInterface);
		return car;
	}
}

// 接口实列实现
var CarInterface = new LB.Interface("CarInterface",["start","run"]);


// car 的 supClass 
function BaseCar(){}

BaseCar.prototype = {
	constructor : BaseCar,	// 还原下函数构造方法
	start : function (){
		alert(this.constructor.name + " start...");
	},
	run : function (){
		alert(this.constructor.name + " run...");
	}
}

/**
 * 注意！在对象扩展其自身的原型方法时，其继承其父类原型方法时，必须先继承，后实现子类自身的原型方法
 */

//
/*
 *  carType :
 *  1、bmw
 *  2、Audi
 *  3、Legx
 */

function Bmw(){}
//Bmw.prototype.start = function (){alert("Bmw.....start");}
//Bmw.prototype.run= function (){ alert("Bmw.....run"); }
LB.extend(Bmw,BaseCar);
Bmw.prototype.driverBmw = function(){ alert("Bmw.....driver");}


function Audi(){}
//Audi.prototype.start = function (){alert("Audi.....start");}
//Audi.prototype.run= function (){ alert("Audi.....run");}
LB.extend(Audi,BaseCar);
Bmw.prototype.driverAudi = function(){ alert("Audi.....driver");}

function Legx(){}
//Legx.prototype.start = function (){alert("Legx.....start");}
//Legx.prototype.run= function (){alert("Legx.....run");}
LB.extend(Legx,BaseCar);
Bmw.prototype.driverLegx = function(){ alert("Legx.....driver");}


var store = new ShowStore();
var car = store.sellCar("Bmw");
car.start();
car.run();
car.driverLegx();






