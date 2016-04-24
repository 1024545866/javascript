/**
 * @author 李佳标
 */

/*
 * 模拟jquery 链式编程
 */

/*
 * 块作用域：
 *  1、程序启动时，里面的代码直接执行
 *  2、内部成员的变量 ，外部无法访问
 */
(function (window, undefined){
	// $ 最常用的对象 返回给外界 大型程序开发 一般使用'_'做为私用的对象(规范)
	function _$(){
		// 实现代码......
		var idSelector = /#\w+/;
		this.dom;	//此属性 接受所得到的元素
		// 如果匹配成功 则接受dom元素  arguments[0] = "#inp"
		if( idSelector.test(arguments[0])){
			this.dom = document.getElementById(arguments[0].substring(1));
		} else {
			throw new Error(" argument is error !");
		}
	};
	// 在_$的原型对象上 加上一些公共的方法
	_$.prototype = {
		constructor : _$,
		addEvent: function(type, fn){
			//给你的得到的元素 注册事件
			if( window.addEventListener ){ //FF
				this.dom.addEventListener(type, fn);
				
			}else if( window.attachEvent ){ //IE
				this.dom.attachEvent("on"+type , fn);
			}
			return this;
		},
		setStyle:function(prop, val){
			this.dom.style[prop] = val;
			return this;
		}
	};
	
	//window 上先注册一个全局变量 与外界产生关系
	window.$ = _$;
	//写一个准备的方法
	_$.onReady = function ( fn ){
		// 1 实例化出来_$对象 真正的注册到windown上
		window.$ = function(){
			return new _$(arguments);
		};
		
		// 2 执行传入进来的代码
		fn();
		// 3 实现链式编程
		_$.method("addEvent", function(){
			// nothing to do
		}).method("setStyle", function(){
			// nothing to do 
		});
			
	};
})(window);
