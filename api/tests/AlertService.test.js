const AlertService = require('../src/services/AlertService');
require('../src/database');

test('try to add alert and return created alert', async ()=>{
    const alert = {
        server: 'test',
        description: 'test',
        server_type: 'test'
    };

    const result = await AlertService.create(alert);
    expect(result.id).not.toBe(undefined);
});
