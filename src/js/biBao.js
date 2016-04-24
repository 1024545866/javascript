/**
 * @author 李佳标
 */

/*
 * 闭包构建单体模式
 * 1、保护内部数据
 * 2、提供返回方法调用处理
 */
var BH = { };

BH.singleton = (function (){
	var a = 1;
	var b = true;
	var c = "小蜜蜂";
	
	function f1(){
		alert(a);
	}
	function f2(){
		alert(c);
	}
	
	return {
		attr1: a,
		attr2: b,
		attr3: c,
		methods1 : function (){
			f1();
		},
		methods2 : function (){
			f2();
		},
	}
})();

BH.singleton.methods1();

BH.singleton.methods2();


/*
 * 惰性单体： 
 *  1、用到才实例化所需参数
 */
var HBW = {};

HBW.singleton = (function (){
	// 私用变量 控制返回的单体对象
	var uniqInstance ; 
	function init(){
		var a = 1;
		var b = "adc";
		var c = true;
		
		function f1(){
			alert(a);
		}
		function f2(){
			alert(b);
		}
		
		return {
			attr1:a,
			attr2:b,
			methods1 : function (){
				f1();
			},
			methods2 : function (){
				f2();
			}
		}
	}
	
	return {
		getInstance : function (){
			if( !uniqInstance ){
				init();
			}
			return uniqInstance;
		}
	}
})();

/*
 * 利用场合 ：
 *  1、浏览器的差异检测
 */

var Browser = {};
var def = false;
Browser.validateBrowser = (function (){
	var browA = {
		attrIE:IE6,
		attrIE:IE7,
		attrIE:IE8,
		attrIE:IE9,
		
	}
	var browB = {
		attrFirfox:Firfox
		
	}
	var browC = {
		attrGoogle:google
	}
	
	return def ? browA:browB;
	
	
})();
 




