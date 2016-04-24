/**
 * @author LJB
 */

/*
 * 类集合的公共方法
 */
var LB = {}

 
 /*   
  *  鸭式变型法的实现
  *  接口Interface
  *  参数：
  *  	1、className
  *  	2、methods
  */
LB.Interface = function (className, methods ){
	if( arguments.length < 2){
		throw Error("the arguments lenght < 2 error ");
	}
	this.className = className;
	this.methods = [];
	if( typeof methods == "Object" ){
		for( var i = 0, len = methods.length; len > i; i++ ){
			var methodName = methods[i];
			if( typeof methodName !=="string" ){
				throw Error("the methods name type must be string");
			}
			this.push(methodName);
		}
	}
 }

/*
 * 属性验证实现接口方法
 */
 LB.Interface.ensureImplements = function ( obj ){
 	if( arguments.lenght < 2){
		throw Error("the arguments params two length two above");
	}
	for( var i = 1, lenI = arguments.length ; lenI > i; i++){
		//获取实现接口的实例对象
		var instanceObj = arguments[i];
		if( instanceObj.constructor !== LB.Interface ){
			throw Error("instanceof constructor not is Interface");
		}
		for( var j = 0, lenJ = instanceObj.methods.length; lenJ > j; j++ ){
			//局部变量接收下方法
			var method = instanceObj.methods[j];
			//obj[key]判断
			if( !obj[method] || typeof obj[method] !== "string"){
				throw Error("the method name error "+ method+" not undifind");
			}
		}
	}
 }
 
 
 //原型继承 与 构造模版继承
 LB.extend = function (sub, sup ){
 	//创建中转函数  目的：实现父类原型中转
	function F(){}
	F.prototype = sup.prototype;
	//把中转函数赋值给子类
	sub.prototype = new F();
	//还原子类的构造模型
	sub.prototype.constructor = sub;
	// 利用子类属性 获取父类原型方法  目的：便于对象解耦 ，便于获取父类原型属性与方法
	sub.isSubClass = sup.prototype; //自定义一个子类的静态属性 接受父类的原型对象
	//手动添加 父类构造器实现
	if( sup.prototype.constructor == sup.prototype.constructor ){
		sup.prototype.constructor = sup;
	}
 }
 
 
 // 实现一个简单的跨浏览器事件处理
 LB.EventUtil = {
 	addHandler : function ( element, type, handler ){
		 if(element.addEventListener){	// FR
		 	element.addEventListener(type,handler,false);
		 }else if( element.attachEvent ){	// IE
		 	element.attachEvent('on'+type , handler );
		 }
	},
	removeHandler : function ( element, type, handler ){
		
		if(element.removeEventListener){	// FR
			element.removeEventListener( type, handler, false);
		}else if( element.detachEvent ){	// IE
			element.detachEvent( 'on'+type , handler );
		}
	}
 }
 
 

/**
 * 扩展Array的原型对象 添加变量数组的每一个元素,并让每一个元素都执行fn函数 (可变量多维数组)
 * @param {Object} fn
 */
Array.prototype.each = function(fn){
	try{
		//1 目的： 遍历数组的每一项 //计数器 记录当前遍历的元素位置
		this.i || (this.i=0);  //var i = 0 ;
		//2 严谨的判断什么时候去走each核心方法
		// 当数组的长度大于0的时候 && 传递的参数必须为函数
		if(this.length >0 && fn.constructor == Function){
			// 循环遍历数组的每一项
			while(this.i < this.length){	//while循环的范围 
				//获取数组的每一项
				var e = this[this.i];
				//如果当前元素获取到了 并且当前元素是一个数组
				if(e && e.constructor == Array){
					// 直接做递归操作
					e.each(fn);
				} else {
					//如果不是数组 （那就是一个单个元素）
					// 这的目的就是为了把数组的当前元素传递给fn函数 并让函数执行
					//fn.apply(e,[e]);
					fn.call(e,e);
				}
				this.i++ ;
			}
			this.i = null ; // 释放内存 垃圾回收机制回收变量
		}
		
	} catch(ex){
		// do something 
	}
	return this ;
}
 