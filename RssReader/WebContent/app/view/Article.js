Ext.define("MyApp.view.Article",{
	extend:"Ext.Panel",
	xtype:"article",
	id:"article",
	
	config:{
		layout:"fit",
		items:[{
			xtype:"titlebar",
			docked:"top",
			title:"기사 전문"
		},{
			xtype:"panel",
			id:'articlePanel',
			html:"기사 전문이 들어갈 자리입니다.",

		}]
	}
});