"use strict";
const { TestScheduler } = require('jest');
const { format } = require('../format');
describe('format', () => {
    test('only root', () => {
        expect(format({
            type: 'directory',
            name: 'root',
            children: [],
        })).toMatchSnapshot();
    });
});
//# sourceMappingURL=format.test.js.map