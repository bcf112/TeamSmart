Ext.define('MyApp.view.RssPanel', {
    extend: 'Ext.Panel',
    xtype:"rsspanel",
    
    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'dataview',
                height: '',
                id: 'RssList',
                ui: '',
                itemTpl: [
                    '<div style="width: 100px; height: 100px; float:left">',
                    '<img src="{rssImage}"><br>',
                    '{rssName}',
                    '</div>'
                ],
                store: 'rssStore'
            },
            {
                xtype: 'fieldset',
                docked: 'top',
                id: 'rssFieldSet',
                margin: '',
                ui: '',
                layout: {
                    align: 'stretchmax',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'textfield',
                        id: 'rssAddressText',
                        width: '90%',
                        label: 'RSS'
                    },
                    {
                        xtype: 'button',
                        id: 'rssAddButton',
                        width: '10%',
                        text: '+'
                    }
                ]
            }
        ]
    }

});