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

            expect(res.status).toBe(302)
            done()
        });


        it('fails with wrong credentials', async done => {
            const res = await request.post('/login')
            .send({username: 'wrong', password: 'wrong'})
            .set('Accept', 'application/json')

            expect(res.status).toBe(200)
            expect(res.text).toBe('Invalid username or password')
            done()
        });
    })

    describe('/signup  scenarios', () => {

        //need to figure out how to delete the 'unique username from the database'
        // it('succeeds with unique username', async done => {
        //     const res = await request.post('/signup')
        //     .send({username: 'bentest', password: 'bar'})
        //     .set('Accept', 'application/json')

        //     expect(res.status).toBe(302)
        //     done()
        // });


        it('fails with duplicate username', async done => {
            const res = await request.post('/signup')
            .send({username: 'foo23', password: 'unique'})
            .set('Accept', 'application/json')

            expect(res.status).toBe(200)
            expect(res.text).toBe('Username not available')
            done()
        });

        // it('succeeds with duplicate password', async done => {
        //     const res = await request.post('/login')
        //     .send({username: 'wrong', password: 'wrong'})
        //     .set('Accept', 'application/json')

        //     expect(res.status).toBe(200)
        //     expect(res.text).toBe('Invalid username or password')
        //     done()
        // });
    })
    

})
