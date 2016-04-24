/**
 * @author 李佳标
 */
var CarProduction = {};

CarProduction.car = (function (){
	var instanceTag  ; //初始化标识
	function  init(){
		var color = "red";
		var width = 100;
		var height = 100;
	    
		function run(){
			alert("run....");
		};
		
		function maxTakeA(){
			alert("maxTakeA pepole......");
		};
		
		return {
			colors:color,
			widths:width,
			heights:height,
			runs:function(){
				return run();	
			},
			maxTakeA:function (){
				return maxTakeA();
			}
		};
	}
	
	return { 
		getInstance : function (){
			if(!instanceTag){
				instanceTag = init();
			}
			return instanceTag;
		}
	}
})();


CarProduction.car.getInstance().maxTakeA();





//var HR = {};
//
//HR.zh = (function (){
//	var instance ;
//	function init(){
//		var a1 = "a1";
//		var a2 = 123;
//		
//		function f1(){
//			alert(a1);
//		}
//		function f2(){
//			alert(a2);
//		}
//		
//		return {
//			attr1: a1,
//			attr2 : a2,
//			method1 : function(){
//				return f1();
//			},
//			method2 : function(){
//				return f2();
//			},
//		}		
//	}
//	
//	return {
//		getInstance : function (){
//			if( !instance ){
//				instance = init();
//			}
//			return instance;
//		}
//	};
//})();
//
//
//HR.zh.getInstance().method2();


//var Ext = {} ;
//Ext.Base = (function(){
//	// 私用变量 控制返回的单体对象
//	var uniqInstance ; // undefined
//	// 需要一个构造器 init 初始化单体对象的方法
//	function init(){
//			// 私用成员变量 
//			var a1 = 10 ; 
//			var a2 = true ; 
//			var fn1 = function(){alert('fn1')};
//			var fn2 = function(){alert('fn2')};	
//			return {
//				attr1 : a1 , 
//				arrt2 : a2 , 
//				method1 : function(){
//					return fn1();
//				},
//				method2 : function(){
//					return fn2();
//				}
//			};						
//	}
//	return {
//		getInstance : function(){
//			if(!uniqInstance){ //如果不存在 创建单体实例
//				uniqInstance = init();
//			}
//			return uniqInstance ;
//		}
//	};
//})();
//
//alert(Ext.Base.getInstance().attr1);
//Ext.Base.getInstance().method1();

