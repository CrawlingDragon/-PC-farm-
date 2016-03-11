$(document).ready(function(){


		$('.message-title').hover(function(){
			$('.messageBox').show();
			$('.header-left').css({"background":"#fff","border":"1px solid #e5e5e5","border-bottom":"none","border-top":"none"});
			$(this).addClass('active');
		},function(){
			$('.messageBox').hide();
			$('.header-left').css({"background":"#f5f8fa","border":"none"});
			$(this).removeClass('active');
		})
		$('.messageBox').hover(function(){
			$(this).show();
			$('.header-left').css("background","#fff");
		},function(){
			$(this).hide();
			$('.header-left').css("background","#f5f8fa")
		});

		//账户显示
		$('.list1').hover(function(){
			$(this).find('.list1-cont').show();
			$(this).addClass('active');
			$(this).find('.list-title').addClass('active');
		},function(){
			$(this).find('.list1-cont').hide();
			$(this).find('.list-title').removeClass('active');
			$(this).removeClass('active');
		})
		//我的订单
		$('.list2').hover(function(){
			$(this).find('.list1-cont').show();
			$(this).addClass('active');
			$(this).find('.list-title').addClass('active');
		},function(){
			$(this).find('.list1-cont').hide();
			$(this).find('.list-title').removeClass('active');
			$(this).removeClass('active');
		})

		//收藏夹
		$('.list3').hover(function(){
			$(this).find('.list1-cont').show();
			$(this).addClass('active');
			$(this).find('.list-title').addClass('active');
		},function(){
			$(this).find('.list1-cont').hide();
			$(this).find('.list-title').removeClass('active');
			$(this).removeClass('active');
		})
		//卖家中心
		$('.list4').hover(function(){
			$(this).find('.list1-cont').show();
			$(this).addClass('active');
			$(this).find('.list-title').addClass('active');
		},function(){
			$(this).find('.list1-cont').hide();
			$(this).find('.list-title').removeClass('active');
			$(this).removeClass('active');
		})
		//搜索框的下拉菜单显示
        $('.search-list').hover(function(){
        	$(this).find('ul').addClass('active');
        },function(){
        	$(this).find('ul').removeClass('active')
        })
		//搜索框的下拉菜单点击选择
        $('.serachBar li').click(function(){
        	var thisTxt = $(this).text();
        	var activeTxt = $(this).parent().find('.selected').html(thisTxt);
        	$(this).parent().removeClass('active');
        })


        //区域商铺显示
		 $(".areaShops .shopTitle").click(function(){
			  $(".areaShops .shopContent").fadeToggle(500);
		});



	})



//收藏夹功能
		function AddFavorite(title,url){
			try{
			   window.external.addFavorite(url,title);
			 }
			catch(e){
			 try{
			    window.sidebar.addPanel(title,url,"");
			  }
			 catch(e){
			   alert("抱歉，您所使用的浏览器无法完成此操作。\n\n请使用快捷键Ctrl+D进行添加！");
			   }
			 }
		}