const request=require('supertest');
const app=require('./server').app;
const expect=require('expect');
it('should return hello express',(done)=>{
request(app)
.get('/')
.expect((req)=>{
expect(req.body).toInclude({name:'ashu'});
})
.end(done);
})
it('ashu should be in users array',(done)=>{
    request(app)
    .get('/user')
    .expect(200)
    .expect((res)=>{
        expect(res.body).toInclude('ashu');
    })
    .end(done)
})