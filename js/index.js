/*
 * 导航切换
 */
$(document).ready(function() {
			/*添加图片*/
			$("div .nav_tab_footer_box>img").each(function() {
				var name = $(this).attr("data-img");
				var src = "img/" + name + ".png"
				$(this).attr("src", src);
			});
			/*点击事件*/
			$("div .nav_tab_footer_box").click(function() {
				 // 取消当前激活状态
				var $img = $(".active>img");
				 //返回被选元素的属性值
				var name = $img.attr("data-img");
				var src = "img/" + name + ".png";
				$img.attr("src", src);
				$(".active").removeClass("active");

				// 添加新状态
				$(this).addClass("active");
				//找到所有 div(subMenu) 的子元素(img)
				$img = $(this).children("img");
				name = $img.attr("data-img");
				src = "img/" + name + "_active.png";
				//设置img的属性和值。
				$img.attr("src", src);

				//content根据点击按钮加载不同的html
				var page = $(this).attr("data-src");
				if(page) {
					$("#content").load(page);
				}
			});
			
			$("div .nav_tab_footer_box")[0].click();
		});

		/*适应高度*/
		function initContent() {
			var height = $(window).height() - $("#footer_menu").height();
			$("#main_content").height(height + "px");
		}