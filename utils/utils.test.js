const expect=require('expect');

const utils=require('./utils');
describe('Utils',()=>{
    it('should add two numbers',()=>{
        var result=utils.add(12,13);
        expect(result).toBe(25).toBeA('number');
    })
    it('should square a number',()=>{
        var result=utils.square(12);
        expect(result).toBe(144);
    })
    it('should get firstName and lastName',()=>{
    var user={location:'delhi',age:20};
    var result=utils.setName(user,'Ashu Ghildiyal');
    expect(user).toInclude({
        firstName:'Ashu',
        lastName:'Ghildiyal'
    })
    })
    
    it('should async add two numbers',(done)=>{
        utils.asyncAdd(3,4,(sum)=>{
             expect(sum).toBe(7).toBeA('number');
             done();
            })
        
    })
})
