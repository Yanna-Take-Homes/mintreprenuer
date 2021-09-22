const request = require( 'supertest' );
const server = require( '../server.js' );


describe( 'Unit testing server module -- server.js', () => {
    describe('ping route', () => {
        it('should return an OK status code', async () => {
            const expectedStatusCode = 200;
            const response = await request(server).get('/ping');
            expect(response.status).toEqual(expectedStatusCode);
        });

        it( 'should return a JSON object', async () => {
            const response = await request( server ).get( '/ping' );
            expect(response.type).toEqual( 'application/json' );
        });

        it( 'should return this object: { success: "true" }', async () => {
            const expectedBody = { success: "true" };
            const response = await request( server ).get( '/ping' );
            expect(response.body).toEqual( expectedBody );
        });

    });

    describe( 'products route', () => {
        it( 'should return a JSON object', async () => {
            const response = await request( server ).get( '/api/products' );
            expect(response.type).toEqual( 'application/json' );
        });

        it( 'should return a 200 status code', async () => {
            const expectedStatusCode = 200;
            const response = await request( server ).get( '/api/products' );
            expect (response.status).toEqual( expectedStatusCode );
        });

        it( 'should return data that matches mock/seed data', async () => {
            const seedProductTitle = 'Mintrepreneur';
            const response = await request( server ).get('/api/products');
            expect(response.text).toContain(seedProductTitle);
        });

    });

});
