import * as substract from "./substract"
// @ponicode
describe("substract.substract", () => {
    test("0", () => {
        let callFunction: any = () => {
            substract.substract(100, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            substract.substract(100, 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            substract.substract(-1, -100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            substract.substract(100, -1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            substract.substract(-100, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            substract.substract(Infinity, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
