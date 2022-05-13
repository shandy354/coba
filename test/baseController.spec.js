const base = require('../controller/baseController');
const mockRequest = (body = {}) => ({body})
const mockResponse = () => {
        const res ={};
        res.json = jest.fn().mockReturnValue(res)
        res.status = jest.fn().mockReturnValue(res)
        return res;
    }

describe('base controller function',()=>{
    const req =mockRequest();
    const res = mockResponse();
    test('res.json', done =>{
        base.index(req, res)
       expect(res.status).toBeCalledWith(200);
       expect(res.json).toBeCalledWith({
           status : true,
           message:"hello world!"
       })
       done()
    })
    test('res.json ', done =>{
        base.user(req, res)
       base.user(req, res)
       expect(res.status).toBeCalledWith(200),
       expect(res.json).toBeCalledWith({
           status:true,
           message: "retrieved All User"
       })
       done()
    })
})