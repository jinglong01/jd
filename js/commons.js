//伸缩展开

// 点击关闭
$(function (){
	$('.span-ss2').click(function (){
		$('#ss').hide();
		// $('.content').addClass('active-content');
		$('.lunbo-bj').addClass('active-bj');
		$('#ss').animate({'height':'0px'});
		$('.tese').addClass('active-tese')
	})
})

// 展开伸缩
$(function (){
	$('.span-ss1').toggle(function (){
		//收起
		// $('.content').addClass('active-content1');
		$(this).addClass('active-button');
		$('#ss').animate({'height':'60px'},function(){
			// $('#ss').css('background','red')
		})

	},function(){
		//展开
		// $('.content').removeClass('active-content1');
		$(this).removeClass('active-button');
		$('#ss').animate({'height':'300px'})
	})
})



//*********************************************
//送货地点
$(function (){
	$('.li4-dh').mouseenter(function (){
		$('.li4-dh .didian').show();
		$('#arrow').css('transform','rotate(180deg)')


		$('#didian-a').click(function(){
			alert(1);
			$('#didian-a').removeClass('active-dd');
			$(this).addClass('active-dd');
			})
	})
})

$(function (){
	$('.li4-dh').mouseleave(function (){
		$('.li4-dh .didian').hide();
		$('#arrow').css('transform','rotate(0deg)')
	})
})

//********************************************
//我的飞牛
	$(function(){
		$('.li-r1').mouseenter(function (){
			$('.xiala-myniu').show();
			$('.li-r1').addClass('active-r1');
			$('.myxia1').css('transform','rotate(180deg)')

		})

		$('.li-r1').mouseleave(function (){
			$('.xiala-myniu').hide();
			$('.li-r1').removeClass('active-r1');
			$('.myxia1').css('transform','rotate(0deg)')
		})
	})


//********************************************

// 手机飞牛网
	$(function (){
		$('.li-fei').mouseenter(function (){
			// 鼠标移入显示
			$('.sjwang').show();
			$('.xia2').css('transform','rotate(180deg)')

			//鼠标移入到图标的时候
			$('.r-iphone').mouseenter(function (){
				$('.r-iphone p').css('color','#D7063B');
				$('.r-iphone span').addClass('active-iphone1');
			})
			$('.l-iphone').mouseenter(function (){
				$('.l-iphone p').css('color','#D7063B');
				$('.l-iphone span').addClass('active-iphone2');
			})

//鼠标移出图标的时候
			$('.r-iphone').mouseleave(function (){

				$('.r-iphone p').css('color','#ccc');
				$('.r-iphone span').removeClass('active-iphone1');
				$('.r-iphone span').addClass('.r-iphone span');
			})
			$('.l-iphone').mouseleave(function (){
				$('.l-iphone p').css('color','#ccc');
				$('.l-iphone span').removeClass('active-iphone2');
			})
		})

		// 鼠标移出隐藏
		$('.li-fei').mouseleave(function (){
			$('.sjwang').hide();
			$('.xia2').css('transform','rotate(0deg)')
		})
	})



//************************************************
// 轮播图
// $(function () {
// 	$('#bj-ul1 li').mouseenter(function () {
// 		// 移出所有
		
// 		$('#bj-ul1 li').removeClass('active');
// 		$('#bj-ul2 li').hide();
// 		// 给自己添加
// 		$(this).addClass('active');
// 		$('#bj-ul2 li').eq($(this).index()).show();
// 		$('lunbo-bj').eq($(this).index()).show();
// 	})
// })


// $('#bj-ul1 li').each(function(index,ele){
// 	$(ele).mouseenter(function (){
// 		iNow =$(this).index();
// 		clearInterval(tid);


// 		$('#bj-ul1 li').removeClass('active');
// 		$('#bj-ul2 li').hide();
// 		// 给自己添加
// 		$(this).addClass('active');
// 		$('#bj-ul2 li').eq(index).show();
// 		$('lunbo-bj').eq($(this).index()).show();
// 	})
// })

//轮播图
// 移入上一页下一页
$(function(){

		var tid=null;
		iNow=0;

		// 选项卡
		$('#bj-ul1 li').each(function(index,ele){
			$(ele).mouseenter(function (){
				iNow =$(this).index();
				// clearInterval(tid);


				$('#bj-ul1 li').removeClass('active');
				$('#bj-ul2 li').hide();
				// 给自己添加
				$(this).addClass('active');
				$('#bj-ul2 li').eq(index).show();
				// $('lunbo-bj').eq(iNow).show();
			})
		})


		// 定时器
			tid=setInterval(net,1000);
			function net(){	
				iNow++;
				if(iNow ==$('#bj-ul2 li').length){
					iNow=0;
				}
				$('#bj-ul2 li').hide();
				$('#bj-ul2 li').eq(iNow).show();

				$('#bj-ul1 li').removeClass('active');
				$('#bj-ul1 li').eq(iNow).addClass('active');
					console.log(iNow)
			}
			

		$('#img-bj').mouseenter(function(){
			clearInterval(tid);
			$('.pre-next').show();
			
			// 上一页

		
			// function net(){
			
			// 	iNow++;
			// 	if(iNow ==$('#bj-ul2 li').length){
			// 		iNow=0;
			// 	}
			// 	$('#bj-ul2 li').hide();
			// 	$('#bj-ul2 li').eq(iNow).show();

			// 	$('#bj-ul1 li').removeClass('active');
			// 	$('#bj-ul1 li').eq(iNow).addClass('active');
			// 		console.log(iNow)
			// }		
		})
			$('#pre').click(function (){	
			
				iNow--;
				if(iNow <0){
					iNow=$('#bj-ul2 li').length-1;
				}
				$('#bj-ul2 li').hide();
				$('#bj-ul2 li').eq(iNow).show();

				$('#bj-ul1 li').removeClass('active');
				$('#bj-ul1 li').eq(iNow).addClass('active');
				console.log(iNow)
			})		
			// 下一页

			$('#next').on('click',net);

		// 鼠标移出
		$('#img-bj').mouseleave(function(){
			tid=setInterval(net,1000);
			$('.pre-next').hide();
		})


})


// 移除消失
// $(function(){
// 	$('#img-bj').mouseleave(function(){
// 		$('.pre-next').hide();
// 	})
// })

//*****************************************************
// 话费流量充值
$(function(){
	//默认显示和选中第一个
	$('.liuliang').show();
	//点击充话费	
	$('.ph1').click(function(){
		$('.ph1').removeClass('active-ph1');
		$('.ph2').removeClass('active-ph2');
		$('.ph1').addClass('active-ph11');
		$('.ph2').addClass('active-ph22');
		$('.liuliang').show();
		$('.liuliang1').hide();
		
	})
	//点击充流量
	$('.ph2').click(function(){
		$('.ph1').removeClass('active-ph11');
		$('.ph2').removeClass('active-ph22');
		$('.ph1').addClass('active-ph1');
		$('.ph2').addClass('active-ph2');
		$('.liuliang1').show();
		$('.liuliang').hide();
		
	})
})


//*************************************************************

// 轮播   左边的导航部分
$(function (){
	//鼠标移入
	$('.lunbo-li').mouseenter(function (){
		// 移除所有
		$(this).siblings().css('background','#fff');

		// $('.lunbo-li span').removeClass('active-span');
		// $('.lunbo-li .lunbo-a').removeClass('active-a');
		// $('.food-right').hide();
		// // 给自己添加
		$(this).css('background','#D7063B');

		$(this).find('span').addClass('active-span');
		$(this).find('a').addClass('active-a');
		$('.food-right').eq($(this).index()).show();
	})

	//鼠标移出
	$('.lunbo-li').mouseleave(function (){
		$('.lunbo-li').css('background','#fff');
		$('.food-right').hide();
		$('.lunbo-a').removeClass('active-a');
		$('.lunbo-li span').removeClass('active-span');
		
	})
})

// $(function (){
// 	$('.lunbo-li').each(function(index,ele){
		
// 		$(ele).mouseenter(function (){
// 			$(ele).css('background','#D7063B');
// 			$(ele).children().eq(0).addClass('active-a');
// 			$(ele).children().eq(1).show();
// 		})
// 	})
// })
	

//**********************************************
// 开学季 
// 选项卡

// 插件
// $(function (){
// 	$.extend({
// 		tab:function tab (selector1,selector2){
// 			$(selector1).mouseenter(function (){
// 				//移除所有
// 				$(selector1).removeClass('active-big');
// 				$(selector2).hide();
// 				//给自己添加
// 				$(this).addClass('active-big');
// 				$(selector2).eq($(this).index()).show();
// 			})
// 		}
// 	})
// 	$.tab('#big-top li','#bigbottom ul')
// })



//1F零食饮料
$(function (){
	// 鼠标移入
	$('#big-top li').mouseenter(function (){
		// 移除所有
		$('#big-top li').removeClass('active-img')
		$('#bigbottom ul').hide();

		// 给自己添加
		$(this).addClass('active-img');
		$('#bigbottom ul').eq($(this).index()).show();
	})

	// 鼠标移除
	$('#bigtop li').mouseleave(function (){
		$(this).removeClass('active-img');
	})
})



// 2F 个护美妆
$(function (){
	// 鼠标移入
	$('#big-top2 li').mouseenter(function (){
		// 移除所有
		$('#big-top2 li').removeClass('active-img')
		$('#bigbottom2 ul').hide();

		// 给自己添加
		$(this).addClass('active-img');
		$('#bigbottom2 ul').eq($(this).index()).show();
	})

	// 鼠标移除
	$('#bigtop li').mouseleave(function (){
		$(this).removeClass('active-img');
	})
})


//3F数码家电
$(function (){
	// 鼠标移入
	$('#big-top3 li').mouseenter(function (){
		// 移除所有
		$('#big-top3 li').removeClass('active-img')
		$('#bigbottom3 ul').hide();

		// 给自己添加
		$(this).addClass('active-img');
		$('#bigbottom3 ul').eq($(this).index()).show();
	})

	// 鼠标移除
	$('#bigtop3 li').mouseleave(function (){
		$(this).removeClass('active-img');
	})

})
//4F衣服内饰
$(function (){
	// 鼠标移入
	$('#big-top4 li').mouseenter(function (){
		// 移除所有
		$('#big-top4 li').removeClass('active-img')
		$('#bigbottom4 ul').hide();

		// 给自己添加
		$(this).addClass('active-img');
		$('#bigbottom4 ul').eq($(this).index()).show();
	})

	// 鼠标移除
	$('#bigtop4 li').mouseleave(function (){
		$(this).removeClass('active-img');
	})
})


//5F鞋靴箱包
$(function (){
	// 鼠标移入
	$('#big-top3 li').mouseenter(function (){
		// 移除所有
		$('#big-top3 li').removeClass('active-img')
		$('#bigbottom5 ul').hide();

		// 给自己添加
		$(this).addClass('active-img');
		$('#bigbottom5 ul').eq($(this).index()).show();
	})

	// 鼠标移除
	$('#bigtop3 li').mouseleave(function (){
		$(this).removeClass('active-img');
	})
})

//6F户外运动
$(function (){
	// 鼠标移入
	$('#big-top6 li').mouseenter(function (){
		// 移除所有
		$('#big-top6 li').removeClass('active-img')
		$('#bigbottom6 ul').hide();

		// 给自己添加
		$(this).addClass('active-img');
		$('#bigbottom6 ul').eq($(this).index()).show();
	})

	// 鼠标移除
	$('#bigtop4 li').mouseleave(function (){
		$(this).removeClass('active-img');
	})
})





// 7F

$(function (){
	// 鼠标移入
	$('#big-top7 li').mouseenter(function (){
		// 移除所有
		$('#big-top7 li').removeClass('active-img')
		$('#bigbottom7 ul').hide();

		// 给自己添加
		$(this).addClass('active-img');
		console.log($(this).index())
		$('#bigbottom7 ul').eq($(this).index()).show();
	})	
		// 小轮播图

	//下标
	var iNow1=0;
	var ali22 =$('#bb-ul2 .bb-li2');

	//一个 li的宽度
	var liw =ali22.width();

	//先设置ul的宽度
	$('#bb-ul2').width(ali22.length * liw);


		// 下一页
	$('#nextb').on('click',nextPage)
		//上一页
	$('#preb').on('click',prePage);

	//上一页的函数
	function prePage(){
		iNow1--;
		if(iNow1 ==-1){
			$('#small-lunbo #bb-ul2').stop().animate({left: -(iNow1+1) *liw},200,
			function(){
				$('#small-lunbo #bb-ul2').css('left',-(ali22.length -2) * liw);
			});
			iNow1 =ali22.length - 3;
		}else{
			$('#small-lunbo #bb-ul2').stop().animate({left: -(iNow1 +1) * liw},200);
		}
		//改变选项
		$('#small-lunbo .bb-ul1 #bb-li1').removeClass('active-b');
		$('#small-lunbo .bb-ul1 #bb-li1').eq(iNow1).addClass('active-b');
	}
	//下一页的函数
	function nextPage (){
		iNow1++;
		if(iNow1 == ali22.length -2){
			$('#bb-ul2').stop().animate({left:-(iNow1 +1) *liw},200,
				function (){
				$('#bb-ul2').css('left',-liw);
			});
			iNow1=0;
		}else{
			//给Ul设置left
			$('#bb-ul2').stop().animate({left: -(iNow1 +1) *liw},200);
		}

		//改变选项
		$('#small-lunbo .bb-ul1 #bb-li1').removeClass('active-b');
		$('#small-lunbo .bb-ul1 #bb-li1').eq(iNow1).addClass('active-b');
	}

	//选项卡
	$('#bb-li1').mouseenter(function (){
		//现清空所有
		//再改变选项
		$('#bb-li1').removeClass('active-b');
		iNow1 = $(this).index();
		$('#bb-li1').eq(iNow1).addClass('active-b');
		$('#small-lunbo .bb-ul2').stop().animate({left :-(iNow1 +1) *liw},200);
	})
 


	// 鼠标移除
	$('#bigtop4 li').mouseleave(function (){
		$(this).removeClass('active-img');
	})

 })

//**************************************
// 小轮播图

// $(function (){
// 	//下标
// 	var iNow1=0;
// 	var ali22 =$('#bb-ul2 .bb-li2');

// 	//一个 li的宽度
// 	var liw =ali22.width();

// 	//先设置ul的宽度
// 	$('#bb-ul2').width(ali22.length * liw);


// 		// 下一页
// 	$('#nextb').on('click',nextPage)
// 		//上一页
// 	$('#preb').on('click',prePage);

// 	//上一页的函数
// 	function prePage(){
// 		iNow1--;
// 		if(iNow1 ==-1){
// 			$('#small-lunbo #bb-ul2').stop().animate({left: -(iNow1+1) *liw},200,
// 			function(){
// 				$('#small-lunbo #bb-ul2').css('left',-(ali22.length -2) * liw);
// 			});
// 			iNow1 =ali22.length - 3;
// 		}else{
// 			$('#small-lunbo #bb-ul2').stop().animate({left: -(iNow1 +1) * liw},200);
// 		}
// 		//改变选项
// 		$('#small-lunbo .bb-ul1 #bb-li1').removeClass('active-b');
// 		$('#small-lunbo .bb-ul1 #bb-li1').eq(iNow1).addClass('active-b');
// 	}

// 	function nextPage (){
// 		iNow1++;
// 		if(iNow1 == ali22.length-2){
// 			$('#small-lunbo #bb-ul2').stop().animate({left:-(iNow1 +1) *liw},200,
// 				function (){
// 				$('#small-lunbo #bb-ul2').css('left',-liw);


// 			});
// 			iNow1=0;
// 		}else{
// 			//给Ul设置left
// 			$('#small-lunbo #bb-ul22').stop().animate({left: -(iNow1 +1) *liw},200);
// 		}

// 		//改变选项
// 		$('#small-lunbo .bb-ul1 #bb-li1').removeClass('active-b');
// 		$('#small-lunbo .bb-ul1 #bb-li1').eq(iNow1).addClass('active-b');
// 	}

// 	//选项卡
// 	$('#small-lunbo .bb-ul1 #bb-li1').mouseenter(function (){
// 		//现清空所有
// 		//再改变选项
// 		$('#small-lunbo .bb-ul1 #bb-li1').removeClass('active-b');
// 		iNow1 = $(this).index();
// 		$('#small-lunbo .bb-ul1 .bb-li1').eq(iNow1).addClass('active-b');
// 		$('#small-lunbo .bb-ul2').stop().animate({left :-(iNow1 +1) *liw},200);
// 	})

// })


//*******************************
//左边的吸顶条
$(function (){
	// 页面滚动的距离
	var top1 =$('.F1').offset().top;
	
	// 滚动条的位置
	// var top1 = $('.gd-left').offset().top;
	// console.log(top);
	$(window).scroll(function (){


		var scrollTop = $(window).scrollTop();
		console.log(scrollTop);
		if(scrollTop>= top1-500 &&scrollTop<= top1-100){
			//让吸顶条的position:fixed;显示替代的条 并且显示出来
			// $('.gd-left').show();
			$('.gd-left').css('position','fixed');
			$('.F1').removeClass('active-ff');
			$('.F1 span').removeClass('active-ff');
			$('.a-1').show();
			$('.aa-1').hide();


			// $('.gd-left').show();
			// $('.gd-left').css('position','fixed');
			$('.F1').addClass('active-ff')
			$('.F1 span').addClass('active-ff');
			// $('.a-1').hide();
			// $('.aa-2').show();

		 }
		 else  {
				$('.gd-left').hide();
				$('.F1').removeClass('active-ff');
				$('.F1 span').removeClass('active-ff');
		}


		var scrollTop2 = $(window).scrollTop();
		var top2 =$('.pp2').offset().top;
		if(scrollTop2>= top2-500 &&scrollTop2<= top2-100){
			//让吸顶条的position:fixed;显示替代的条 并且显示出来
			// $('.gd-left').show();
			$('.gd-left').css('position','fixed');
			$('.F2').addClass('active-ff');
			$('.F2 span').addClass('active-ff');
			$('.a-2').hide();
			$('.aa-2').show();



			$('.F2').addClass('active-ff')
			$('.F2 span').addClass('active-ff');
		}else{
			// $('.gd-left').hide();
			$('.F2').removeClass('active-ff');
			$('.F2 span').removeClass('active-ff');
			
		}


		var scrollTop3 = $(window).scrollTop();
		var top3 =$('.pp3').offset().top;
		if(scrollTop3>= top3-500 &&scrollTop3<= top3-100){
			//让吸顶条的position:fixed;显示替代的条 并且显示出来
			// $('.gd-left').show();
			$('.gd-left').css('position','fixed');
			$('.F3').addClass('active-ff');
			$('.F3 span').addClass('active-ff');
			$('.a-3').hide();
			$('.aa-3').show();



			$('.F3').addClass('active-ff')
			$('.F3 span').addClass('active-ff');
		}else{
			// $('.gd-left').hide();
			$('.F3').removeClass('active-ff');
			$('.F3 span').removeClass('active-ff');
			
		}


		var scrollTop4 = $(window).scrollTop();
		var top4 =$('.pp4').offset().top;
		if(scrollTop4>= top4-500 &&scrollTop4<= top4-100){
			//让吸顶条的position:fixed;显示替代的条 并且显示出来
			// $('.gd-left').show();
			$('.gd-left').css('position','fixed');
			$('.F4').addClass('active-ff');
			$('.F4 span').addClass('active-ff');
			$('.a-3').hide();
			$('.aa-3').show();



			$('.F4').addClass('active-ff')
			$('.F4 span').addClass('active-ff');
		}else{
			// $('.gd-left').hide();
			$('.F4').removeClass('active-ff');
			$('.F4 span').removeClass('active-ff');
			
		}


		var scrollTop5 = $(window).scrollTop();
		var top5 =$('.pp5').offset().top;
		if(scrollTop5>= top5-500 &&scrollTop5<= top5-100){
			//让吸顶条的position:fixed;显示替代5条 并且显示出来
			// $('.gd-left').show();
			$('.gd-left').css('position','fixed');
			$('.F5').addClass('active-ff');
			$('.F5 span').addClass('active-ff');
			$('.a-3').hide();
			$('.aa-3').show();



			$('.F5').addClass('active-ff')
			$('.F5 span').addClass('active-ff');
		}else{
			// $('.gd-left').hide();
			$('.F5').removeClass('active-ff');
			$('.F5 span').removeClass('active-ff');
			
		}

		var scrollTop6 = $(window).scrollTop();
		var top6 =$('.pp6').offset().top;
		if(scrollTop6>= top6-500 &&scrollTop6<= top6-100){
			//让吸顶条的position:fixed;显示替代5条 并且显示出来
			// $('.gd-left').show();
			$('.gd-left').css('position','fixed');
			$('.F6').addClass('active-ff');
			$('.F6 span').addClass('active-ff');
			$('.a-3').hide();
			$('.aa-3').show();



			$('.F6').addClass('active-ff')
			$('.F6 span').addClass('active-ff');
		}else{
			// $('.gd-left').hide();
			$('.F6').removeClass('active-ff');
			$('.F6 span').removeClass('active-ff');
			
		}

		var scrollTop7 = $(window).scrollTop();
		var top7 =$('.pp7').offset().top;
		if(scrollTop7>= top7-500 &&scrollTop7<= top7-100){
			//让吸顶条的position:fixed;显示替代5条 并且显示出来
			// $('.gd-left').show();
			$('.gd-left').css('position','fixed')
			$('.F7').addClass('active-ff');
			$('.F7 span').addClass('active-ff');
			$('.a-7').hide();
			$('.aa-3').show()



			$('.F7').addClass('active-ff')
			$('.F7 span').addClass('active-ff');
		}else{
			// $('.gd-left').hide();
			$('.F7').removeClass('active-ff');
			$('.F7 span').removeClass('active-ff');
			
		}
	})

})


// $(function (){
// 	var top2 =$('.pp2').offset().top;

// 	$(window).scroll(function (){
// 		var scrollTop = $(window).scrollTop();
// 		if(scrollTop>= top2-500 &&scrollTop<= top1-100){
// 			//让吸顶条的position:fixed;显示替代的条 并且显示出来
// 			$('.gd-left').show();
// 			$('.gd-left').css('position','fixed');
// 			$('.F2').addClass('active-ff');
// 			$('.F2 span').addClass('active-ff');
// 			$('.a-2').hide();
// 			$('.aa-2').show();



// 			$('.F2').addClass('active-ff')
// 			$('.F2 span').addClass('active-ff');
// 		}else{
// 			// $('.gd-left').hide();
// 			$('.F2').removeClass('active-ff');
// 			$('.F2 span').removeClass('active-ff');
			
// 		}
// 	})	
// })
	

// 上面的吸顶条
$(function (){
	// 页面滚动的距离
	var top00=$('.tese').offset().top;
	
	// 滚动条的位置
	// var top1 = $('.gd-left').offset().top;
	// console.log(top);
	$(window).scroll(function (){
		var scrollTop = $(window).scrollTop();
		if(scrollTop>= top00){
			//让吸顶条的position:fixed;显示替代的条 并且显示出来
			$('.gd-top').show();
			$('.gd-top').css('position','fixed');
			
		 }
		 else  {

			$('.gd-top').hide();
		}
	})	
})

// 右边的吸顶条
$(function (){
	// 页面滚动的距离
	var top00=$('.tese').offset().top;
	
	// 滚动条的位置
	// var top1 = $('.gd-left').offset().top;
	// console.log(top);
	$(window).scroll(function (){
		var scrollTop = $(window).scrollTop();
		if(scrollTop>= top00){
			//让吸顶条的position:fixed;显示替代的条 并且显示出来
			$('.gd-right').show();
			$('.gd-right').css('position','fixed');	
		 }
		 else  {
			$('.gd-right').hide();
		}
	})	
})

// 右边吸顶条的伸展部分
$(function (){
	$('.gd-aa2').on('mouseenter',function(){
		$('.gd-bottom2').animate({'left':'-70px'});
		
	})
	$('.gd-aa3').on('mouseenter',function(){
		$('.gd-bottom3').animate({'left':'-70px'})
	})
	$('.gd-aa4').on('mouseenter',function(){
		$('.gd-bottom4').animate({'left':'-70px'})
	})
	$('.gd-aa5').on('mouseenter',function(){
		$('.gd-bottom5').animate({'left':'-70px'})
	})
	$('.gd-aa6').on('mouseenter',function(){
		$('.gd-bottom6').animate({'left':'-70px'})
	})
	$('.gd-aa7').on('mouseenter',function(){
		$('.gd-bottom7').animate({'left':'-70px'})
	})


	// $('.gd-bottom2').on('mouseenter',function(){
	// 	$('.gd-bottom2').animate({'left':'-70px'})
	// })
	// $('.gd-bottom3').on('mouseenter',function(){
	// 	$('.gd-bottom3').animate({'left':'-70px'})
	// })
	// $('.gd-bottom4').on('mouseenter',function(){
	// 	$('.gd-bottom4').animate({'left':'-70px'})
	// })
	// $('.gd-bottom5').on('mouseenter',function(){
	// 	$('.gd-bottom5').animate({'left':'-70px'})
	// })
	// $('.gd-bottom6').on('mouseenter',function(){
	// 	$('.gd-bottom6').animate({'left':'-70px'})
	// })
	// $('.gd-bottom7').on('mouseenter',function(){
	// 	$('.gd-bottom7').animate({'left':'-70px'})
	// })



	// $('.gd-bottom2').on('mouseleave',function(){
	// 	$('.gd-bottom2').animate({'left':'35px'},1000)
	// })
	
	// $('.gd-bottom3').on('mouseleave',function(){
	// 	$('.gd-bottom3').animate({'left':'35px'},1000)
	// })

	// $('.gd-bottom4').on('mouseleave',function(){
	// 	$('.gd-bottom4').animate({'left':'35px'},1000)
	// })

	// $('.gd-bottom5').on('mouseleave',function(){
	// 	$('.gd-bottom5').animate({'left':'35px'},1000)
	// })

	// $('.gd-bottom6').on('mouseleave',function(){
	// 	$('.gd-bottom6').animate({'left':'35px'},1000)
	// })

	// $('.gd-bottom7').on('mouseleave',function(){
	// 	$('.gd-bottom7').animate({'left':'35px'},1000)
	// })


	$('.gd-aa2').on('mouseleave',function(){
		$('.gd-bottom2').animate({'left':'35px'},1000)
	})
	
	$('.gd-aa3').on('mouseleave',function(){
		$('.gd-bottom3').animate({'left':'35px'},1000)
	})

	$('.gd-aa4').on('mouseleave',function(){
		$('.gd-bottom4').animate({'left':'35px'},1000)
	})

	$('.gd-aa5').on('mouseleave',function(){
		$('.gd-bottom5').animate({'left':'35px'},1000)
	})

	$('.gd-aa6').on('mouseleave',function(){
		$('.gd-bottom6').animate({'left':'35px'},1000)
	})

	$('.gd-aa7').on('mouseleave',function(){
		$('.gd-bottom7').animate({'left':'35px'},1000)
	})
})
