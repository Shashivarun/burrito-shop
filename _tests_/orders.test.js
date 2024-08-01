const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const Order = require('../models/Order');
const orderRouter = require('../routes/order'); 

const app = express();
app.use(express.json());
app.use('/api/orders', orderRouter);

describe('Order API', () => {
    beforeAll(async () => {
        const url = `mongodb://127.0.0.1/order_test_db`;
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
        await mongoose.connection.db.dropDatabase();
        await mongoose.connection.close();
    });

    beforeEach(async () => {
        await Order.deleteMany();
    });

    test('GET /api/orders - should return an empty list of orders', async () => {
        const response = await request(app).get('/api/orders');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
    });

    test('GET /api/orders/:id - should return 404 if order not found', async () => {
        const response = await request(app).get('/api/orders/invalidId');
        expect(response.status).toBe(404);
        expect(response.body.message).toBe('Order not found');
    });

    test('POST /api/orders - should create a new order', async () => {
        const newOrder = {
            items: [{ burrito: 'someBurritoId', quantity: 2 }]
        };
        const response = await request(app).post('/api/orders').send(newOrder);
        expect(response.status).toBe(201);
        expect(response.body.items).toHaveLength(1);
        expect(response.body.items[0].quantity).toBe(2);
    });
});