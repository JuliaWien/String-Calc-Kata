const { it, expect, beforeEach } = require("@jest/globals")

const { stringCalc } = require('./sum')
console.log('################', stringCalc)


describe('StringCalc', () => {
    it('should evaluate "" to  " "', () => {
        const sum = stringCalc(' ')
        expect(sum).toBe(0)
    })
    it('should evaluate "2" to  "2" ', () => {
        
        const sum = stringCalc('2')
        expect(sum).toBe(2)
    })
    it('should evaluate "1,2" to  "3" ', () => {
        const sum = stringCalc('1,2')
        expect(sum).toBe(3)
    })
    it('should evaluate "1,2,3" to  "6" ', () => {
        const sum = stringCalc('1,2,3')
        expect(sum).toBe(6)
    })
})
