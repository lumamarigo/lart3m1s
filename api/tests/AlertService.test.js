require('../src/database');
const AlertService = require('../src/services/AlertService');

test('try to add alert and return created alert', async ()=>{
    const alert = {
        server: 'server-1',
        description: 'test',
        server_type: 'onprem'
    };

    const alert2 = {
        server: 'server-2',
        description: 'test',
        server_type: 'virtual'
    };

    const result = await AlertService.create(alert);
    await AlertService.create(alert2);
    expect(result.id).not.toBe(undefined);
});

test('try to search for an alert and return result', async ()=>{
    const result = await AlertService.search('test');
    console.log('list: ', result);
    expect(result).not.toBe(undefined);
});

