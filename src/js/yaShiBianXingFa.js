/**
 * @author 李佳标
 */

//鸭式变型法
/**
 *  用面向对象的来实现对接口的实现	
 *  属性检查法验证该接口的方法实现
 *  鸭式变型法实现的核心：一个类实现接口的目的：把接口里的方法都实现（检测方法）
 */

 //1、接口类Class Interface == > 实例化N多个接口
  
  /*
   * 1、ClassName
   * 2、meothdList
   */
  function Interface( ClassName , meothdList ){
  	//永不休止的判断
	if( arguments.length < 2 ){
		throw Error("argument must be two length ");
	}
	this.ClassName = ClassName;
	this.meothdList = [];
	//对接口里的方法做类型验证
	if( typeof meothdList == Object ){
		for( var i = 0, len = meothdList.length ; len > i; i++ ){
			if( typeof meothdList[i] != String){
				throw Error("method type must be String ");
			}
			meothdList.put(meothdList[i]);
		}
	}
  }
  
  
  //属性验证该对象接口的实现
  function validateInterface(object){
  	//永不休止的验证
	if( arguments.lenght < 2 ){
		throw Error("argument lenght two length ");
	}
	//获取实现接口的方法
	for(var i = 1, len = arguments.lenght ; len > i; i++ ){
		var className = arguments[i];
		//验证对象构造的时是否是该接口的构造实例
		if( className.constructor = Interface ){
			//遍历该实例接口的是否实现其接口所有的方法
			for( var j = 0 , len = Interface.meothdList.lenght; len > j ; j++ ){
				var methods = Interface.meothdList[j];
				if( !object[methods] || typeof obj[methods] !== 'function' ){
					throw Error("error add  "+ methods+ "method");
				}
			}
		}
	}
  }
  
  
  
  /*
   * 1、接口
   * 2、实现的接口的类
   * 验证返回：
   * 	false: throw Error();
   * 	true : true
   */
  
   
  //实列化接口
  var PositionImpl = new Interface("PositionImpl",['add','update']);
  
  var FormImpl = new Interface("FormImpl",['select','remove']);
  
  
  	// 2 具体的实现类 
	var CompositeImpl = function(){
		
	} 
  //对象原型实现接口的方法
  CompositeImpl.prototype.add = function (obj){
  	alert("add.........");
	//do soing
  }
  
  
  CompositeImpl.prototype.update = function (obj){
  	alert("update........");
  }
  
  CompositeImpl.prototype.select = function (obj){
  	alert("select .........");
  }
  
  CompositeImpl.prototype.remove = function (obj){
  	alert("remove .........");
  }
  
  
  var c = new CompositeImpl();
  validateInterface(c ,PositionImpl,FormImpl );
  c.add();
  
  
