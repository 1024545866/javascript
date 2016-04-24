/**
 * @author 李佳标
 */

 //模拟买车5s的销售业务

 /*
  *  需求：
  *  如果你是顾客你想要买什么车
  *  	顾客--->业务员
  *  			|---->车的类型----------------------------------------->车的性能------------------------------------>车的价位--->
  *  					|---->国产										|---->国产									|---->国产	
  *  						   |--- 大众,一气，东风								|--- 大众,  一气，   东风							|--- 大众,一气，东风
  *  																			  |--   |--   |--
  *  																						
  *  					|---->进口										|---->进口									|---->进口
  *  						   |--- 宝马,奥迪，林肯，宾利，雷克萨斯				|--- 宝马,奥迪，林肯，宾利，雷克萨斯				|--- 宝马,奥迪，林肯，宾利，雷克萨斯
  *     |---->顾客的决定--->
  *     		|---> Yes or No
  *     
  */				  



/*
 * 公共属性
 */
function commerObj( id, name){
	this.id = id;
	this.name = name;
}


/*
 *  车类型
 */
function CarType(id, name, production ){
//	this.id = id;			//主键标识
//	this.name = name;		//名称
	this.production = production;	//生存地
	commerObj.call(this, id, name);
}

/*
 *  车的性能
 */
function CarProperty(id, name , maxKm, losses ){
//	this.id = id;
//	this.name = name;
	this.maxKm = maxKm;
	this.losses = losses;
	commerObj.call(this, id, name);
}

CarProperty.prototype = {
	constructor : CarProperty,
	run : function (){
		alert("run....." + this.name + 
			" max : h/" + this.maxKm + "km " + " losses : h/ " + this.losses );
	}
}


/*
 *  车的价位
 */
function CarPric( id , name, maxPric, minPric ){
//	this.id = id;
//	this.name = name;
	this.maxPric = maxPric;
	this.minPric = minPric;
	commerObj.call(this, id, name);
}



var p1 = new CarType("00x898dd", "林肯", "德国制造" );

var p2 = new CarType("00x888dd", "宾利", "德国制造" );

var p3 = new CarType("00x878dd", "奥迪", "德国制造" );

alert( p1.name );
alert( p2.name );
alert( p3.name );

 
 
 
