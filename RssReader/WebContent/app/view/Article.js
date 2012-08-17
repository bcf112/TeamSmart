Ext.define("MyApp.view.Article",{
	extend:"Ext.Panel",
	xtype:"article",
	
	config:{
		layout:"fit",
		cls:"article",
		id:"detailArticle",
		items:[{
			xtype:"panel",
			id:"articlePanel",
			tpl:"{content}",
			layout:"fit",
			styleHtmlContent:true,
			scrollable:true,
		}],
		listeners:{
			swipe:{
				fn:function(event){

					var flag = 1;
					//console.log(event.direction);  //left='다음 기사', right='이전 기사'
					if(event.direction == "left"){
						//console.log(this.setData(Ext.getStore("Feed").data));
						//console.log("다음 기사");
						//console.log(localStorage.flag);
						//console.log(Ext.getStore("Feed"));
						//console.log(Ext.getStore("Feed").data.items[flag+1].data.content);
					}else if(event.direction = "right"){
						console.log("이전 기사");
					}
				},
				element:"element"
			}
		}
	},
	
	
});