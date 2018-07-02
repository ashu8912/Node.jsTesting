const expect=require('expect');
const rewire=require('rewire');
 var app=rewire('./app.js');
describe('App',()=>{
    var db={
        saveUser:expect.createSpy()
    }
    app.__set__('db',db);
    it('should call spy correctly',()=>{
        var spy=expect.createSpy();
        spy('Ashu',20);
        expect(spy).toHaveBeenCalledWith('Ashu',20);
    })
    it('should call saveUser with user object',()=>{
      var email='user@example.com';
      var password='12345';
        app.handleSignUp(email,password)
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    })
})