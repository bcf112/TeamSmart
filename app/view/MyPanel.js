/*
*
*/

Ext.define('MyApp.view.MyPanel', {
    extend: 'Ext.Panel',
    xtype:"mainpanel",
    
    config: {
        layout: {
            type:"card",
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '경향신문-연예',
                items:[{
                	xtype:"button",
                	id:"prevButton",
                	text:"뒤로 가기",
                	action:"back",
                	ui:"back",
                	hidden:true,
                }]
            },
            {
        	   	xtype: 'articlelist',
            },
            {
        		xtype:"article"
            }
        ]
    }

});