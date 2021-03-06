"use strict";
const { main } = require('../');
describe('toy-tree', () => {
    let stdout;
    let stderr;
    const exec = (argv) => main(argv, stdout, stderr);
    beforeEach(() => {
        stdout = jest.fn();
        stderr = jest.fn();
    });
    test('fixtures', () => {
        const code = exec(['fixtures']);
        expect(stdout.mock.calls[0][0]).toMatchSnapshot();
        expect(code).toBe(0);
    });
});
//# sourceMappingURL=index.test.js.map