require('../src/database');
const ServerService = require('../src/services/ServerService');

test('return top three servers with most alerts', async ()=>{
    const result = await ServerService.statics();
    expect(result.length).toBe(3);
});

