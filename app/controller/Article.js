Ext.define("MyApp.controller.Article",{
	extend:"Ext.app.Controller",
	
	config:{
		refs:{
			detail:{ selector: '#detailArticle', autoCreate: true, xtype: 'detailArticle' }
		},
		
		control:{
			
		}
	},
	
	launch: function () {
		console.log("before");
        this.getDetail().on('swipe', this.onSwipe);
        console.log("before2");
   },
	
   onSwipe: function (event) {
       console.log(event.direction);
  }

});