Ext.define('MyApp.model.Feed', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'name',
            },
            {
                name: 'url',
            },
            {
            	name:"image_url"
            }
        ]
    }
});