const { it, expect, beforeEach } = require("@jest/globals")

const { main } = require('./Main')

// console.log('######## MAIN.SPEC ########')


describe('StringCalc', () => {
    it('main Test should be sucessful', () => {
        let mockConsoleLog = jest.fn()
        let processMock = {
            argv: ['node', 'sum', '1,2,3']
        }
        main(mockConsoleLog, processMock)
        expect(mockConsoleLog.mock.calls[0][0]).toBe(6)
    })




})
