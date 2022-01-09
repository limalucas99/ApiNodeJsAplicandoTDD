const request = require('supertest');

const app = require('../src/app');

it('Deve responder na raiz', () => request(app).get('/').then((res) => expect(res.status).toBe(200)));
