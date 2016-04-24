/**
 * @author 李佳标
 */

/*
 * 简单单体模式：
 * Singleton :
 * 
 */
var Singleton = {
	name:"单体",
	age : 26,
	sayName : function (){
		alert("hello my "+ this.name);
	},
	method : function(){
		alert("this is method " + this.name);
	}
}

/*
 * 借用闭包 创建单体： 主要目的保护数据
 */

 HB = {};
 HB.Singleton = (function (){
 	//添加自己的私有成员
 	var a1 = 1;
	var a2 = "撒积极";
	var a3 = function (){
		alert(a1);
	}
	var a4 = function (){
		alert(a2);
	}
	
	//把块级作用域的结果赋值给我的单体对象
	return {
		attr1 : a1,
		attr2: a2,
		method1 : function(){
			a3();
		},
		method2 : function(){
			a4();
		}
	}
 })();

  //访问单体对象数据
  HB.Singleton.method1();
 
 
 
 /**
  * 惰性单体：闭包相似
  */
 HB.LazySingleton = (function (){
 	
	// 私用变量 控制返回的单体对象
	var instanceUni ;	// undefined
	
	//构造器 	init 初始化单体对象
	function init(){
		var a = 1;
		var b = "123";
		var func1 = function (){
			alert(a);
		}
		var func2 = function (){
			alert(b);
		}
		return {
			attr1 : a,
			attr2 : b ,
			method1 : function (){
				func1();
			},
			method2 : function (){
				func2();
			}
		}
	};
	
	return {
		getInstance : function (){
			if(!instanceUni){ //不存在
				instanceUni = init();	//注意啊
			}
			return instanceUni;
		}
	}	
 })();

 
 HB.LazySingleton.getInstance().method2();
 
 
 
 
 