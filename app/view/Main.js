Ext.define("MyApp.view.Main", {
	extend:"Ext.Panel",
	xtype:"main",
	id:"main",
	
	config:{
		layout:{
			type:"card"
		},
		
		items:[{
			xtype:"toolbar",
			title:"Smart NEWS!!!",
			docked:"top",
			id:"titlebar",
			items:[{
            	xtype:"button",
            	id:"prevButton",
            	text:"뒤로 가기",
            	action:"back",
            	ui:"back",
            	hidden:true,
            },{
            	xtype:"button",
            	id:"homeButton",
            	iconCls:"home",
            	iconMask:true,
            	ui:"action-round",
            	hidden:true,
            }]
		},{
			xtype:"dataview",
			id:"feedIcon",
			itemTpl : new Ext.XTemplate(
		        	'<tpl for=".">'+
				        '<div class="group-feed-widget">'+
							'<div class="widget">'+
								'<img src="{image_url}" class="x-icon-mask"/>'+
						    '</div>'+
							'<div class="widget-title">{name}</div>'+
				        '</div>'+
				    '</tpl>'
		    	),
		    
		    store:"Feeds",
		},{
			xtype:"articlelist",   //기사 리스트
		},{ 
			xtype:"article"        //기사 리스트에서 항목을 누르면 해당 기사 전문이 나오는 패널
		},{
			xtype:"panel",   //메인화면에서 '키워드 모음' 아이콘을 누르면 나오는 패널
			html:"키워드 리스트가 들어갈 자리입니다.",
		}]
	}
});