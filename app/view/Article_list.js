Ext.define("MyApp.view.Article_list",{
	extend:"Ext.Panel",
	xtype:"articlelist",
	
	config:{
		
		layout:{
			type:"vbox",
			
		},
		items:[
		{
			xtype:"panel",
			cls:"newsTop",
			flex:1,
			html:[
			    "<div id='articleImage'></br>asdfasdfasdfasdfasdfasdfasdfdd</div>",
			    "<img src='http://static.news.zum.com/images/1/2012/07/29/l_2012072902001116500297551.jpg'/>",
			].join(""),
		},
		{
			xtype:"list",
			cls:"newsList",
	        id:"articleList",
	        itemTpl: [
	            '<div style="margin-left: 62px;">',
	            '<img src="{url}"/> <{title}><br>',
	            '</div>',
	        ],
	        store: 'Feed',
	        flex:1,
		}],
	}
});

$('.articleImage').onclick = function(){
	alert("dd");
};