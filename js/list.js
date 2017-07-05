	window.onload=function(){
		createM3Lis();
		createM4Lis();
	}
	function createM3Lis(){
		let imgsArr=["../images/list/list-m3-1.jpg","../images/list/list-m3-2.jpg","../images/list/list-m3-3.jpg","../images/list/list-m3-4.jpg","../images/list/list-m3-5.jpg"];
		let pArr=["格拉苏蒂·莫勒 深海蓝 德国海军定制款","瑞士迪沃斯（DAVOSA）-Diving潜水系列 Ternos Professional TT特勒斯 16155950 机械男表","法国赫柏林 珍珠系列 女士腕表","巴塞尔新款上市","美度MIDO-完美系列 M8330.4.11.13 机械男表"];
		let priceArr=["￥17600","￥5700","￥4600","￥17316","￥5016"];
		let SoldArr=["已售272","已售83","已售2672","已售17","已售27"];
		let str="";
		for(let i=0;i<imgsArr.length;i++){
			str+="<li><a href='#'><img src='"+imgsArr[i]+"'></a><p><a href='#'>"+pArr[i]+"</a></P><p><span class='l'>"+priceArr[i]+"</span><span class='r'>"+SoldArr[i]+"</span></p></li>"
		}
		$("#mbl-3").html(str);
	}
	function createM4Lis(){
		let imgsArr=["../images/list/mb4-comment-1.jpg","../images/list/mb4-comment-2.jpg","../images/list/mb4-comment-3.jpg","../images/list/mb4-comment-4.jpg","../images/list/mb4-comment-5.jpg"];
		let pArr=["还没有时间去截表带，不过表确实很漂亮，包装也很好，最满意的是客服了，给我打了几次电话核实信息，而且有问题立马就给我解决了。","和预期差不多，外观还可以！","感觉可以，带的蛮好看的！","支持万表网，觉得美美哒，下次还会再来！","[cp]第一次在网上买如此贵重的东西，万表网非常好，客服也很耐心。去截取表带的亨吉利名表维修中心，说万表网从不卖假货，都是正品！好评[赞]@万表网​​​[/cp]"];
		let spanArr=["wxUo****：","wb17****：","匿名用户：","匿名用户：","wb17****："]
		let str="";
		for(let i=0;i<imgsArr.length;i++){
			str+="<li><a href='#'><img src='"+imgsArr[i]+"'><span>"+spanArr[i]+"</span></a><p><a href='#'>"+pArr[i]+"</a></p></li>"
		}
		let str1="";
		for(let j=0;j<3;j++){
			str1+="</a><a href='#'></a>";
		}
		str+="<div id='mb4-btn'>"+str1+"</div>";
		$("#mbl-4-1").html(str);
	}
