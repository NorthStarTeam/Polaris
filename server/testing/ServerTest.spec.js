const app = require('../server.js')
const supertest = require('supertest')
const request = supertest(app)

const regeneratorRuntime = require("regenerator-runtime");

describe('Express Server Testing', () => {

    it('Gets status code 200 on home request', async done => {
        const res = await request.get('/')
        expect(res.status).toBe(200)
        
        done()
    })

    it('sends you back to home if you enter a invalid query without being logged in',  async done => {
        const res = await request.get('/incorrectpath')
        expect(res.status).toBe(302)
        done()
    })

    describe('/login  scenarios', () => {

        it('succeeds with correct credentials', async done => {
            const res = await request.post('/login')
            .send({username: 'foo23', password: 'bar'})
            .set('Accept', 'application/json')

            // console.log('inside test', res)
            expect(res.status).toBe(302)
            // expect(res.body.username).toBe('foo23')
            // expect(res.body.username).toBe('bar')
            done()
        });
    })
    

})
