const app = require('../server.js')
const supertest = require('supertest')
const request = supertest(app)

const regeneratorRuntime = require("regenerator-runtime");

describe('Express Server Testing', () => {

    it('Hits the error on unavailable routes', async done => {
        const res = await request.get('/')
        console.log(res.body)
        expect(res.status).toBe(200)
        
        done()
    })

})
