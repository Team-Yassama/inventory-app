const {Sequelize} = require("sequelize");
const {Sequelize, sequelize} = require("../db");
const Item = require("../models/item");

DESCRIBE("Item model", () => {
    beforeAll(async() => {
        await sequelize.sync();
    });
    afterAll(async() => {
        await sequelize.close();
    });
    it("can create an item", async() => {
        const item = await Item.create({
            title: "Test Item",
            description: "Test description",
            price: 39.99,
            category: "Electronics",
            image: "test.jpg"
        });
        expect(item.id).toBe(1);
        expect(item.title).toBe('Test Item');
        expect(item.description).toBe('Test description');
        expect(item.price).toBe(9.99);
        expect(item.category).toBe('Electronics');
        expect(item.image).toBe('test.jpg');
           
    })
})