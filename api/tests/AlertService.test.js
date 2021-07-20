require('../src/database');
const AlertService = require('../src/services/AlertService');

test('try to add alert and return created alert', async ()=>{
    const alert = {
        server: 'test',
        description: 'test',
        server_type: 'test'
    };

    const result = await AlertService.create(alert);
    expect(result.id).not.toBe(undefined);
});

test('try to search for an alert and return result', async ()=>{
    const result = await AlertService.search('test');
    console.log('list: ', result);
    expect(result).not.toBe(undefined);
});

