Ext.define('EIA.store.GraficoContas', {
    extend		: 'Ext.data.Store',
    //autoLoad	: false,
    autoLoad: {start: 0, limit: 10},
    fields	: ['total', 'descricao'],
    remoteSort	: false,
    proxy: {
        type: 'ajax',
        url: 'php/graficoContas.php?acao=grafico',
        reader: {
            type			: 'json',
            root			: 'data',
            successProperty	: 'success'
        }
    }
});
