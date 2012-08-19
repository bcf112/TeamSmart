Ext.define('MyApp.store.Feeds', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.Feed'
    ],

    config: {
        autoLoad: true,
        model: 'MyApp.model.Feed',
        storeId: 'Feeds',
        proxy: {
            type: 'jsonp',
            url: 'resources/default.json',
            reader: {
                type: 'json',
                rootProperty: 'addresses'
            }
        }
    }
});