
describe("Food Delivery", function() {
    describe("getCategory()", function() {
        it("should return the correct message for 'Vegan'", function() {
            expect(foodDelivery.getCategory("Vegan")).to.equal("Dishes that contain no animal products.");
        });

        it("should return the correct message for 'Vegetarian'", function() {
            expect(foodDelivery.getCategory("Vegetarian")).to.equal("Dishes that contain no meat or fish.");
        });

        it("should return the correct message for 'Gluten-Free'", function() {
            expect(foodDelivery.getCategory("Gluten-Free")).to.equal("Dishes that contain no gluten.");
        });

        it("should return the correct message for 'All'", function() {
            expect(foodDelivery.getCategory("All")).to.equal("All available dishes.");
        });

        it("should throw an error for an invalid category", function() {
            expect(() => foodDelivery.getCategory("Invalid")).to.throw("Invalid Category!");
        });
    });

    describe("addMenuItem()", function() {
        it("should add items with price less than or equal to maxPrice and return correct message", function() {
            const menuItems = [
                { name: "Salad", price: 7 },
                { name: "Soup", price: 4 },
                { name: "Burger", price: 6 }
            ];
            expect(foodDelivery.addMenuItem(menuItems, 6)).to.equal("There are 2 available menu items matching your criteria!");
        });

        it("should throw an error for invalid parameters", function() {
            expect(() => foodDelivery.addMenuItem("Invalid", 10)).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem([], 10)).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem([{ name: "Salad", price: 7 }], "Invalid")).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem([{ name: "Salad", price: 7 }], 4)).to.throw("Invalid Information!");
        });
    });

    describe("calculateOrderCost()", function() {
        it("should calculate the total cost correctly without discount", function() {
            expect(foodDelivery.calculateOrderCost(["standard"], ["sauce", "beverage"], false)).to.equal("You spend $7.50 for shipping and addons!");
        });

        it("should calculate the total cost correctly with discount", function() {
            expect(foodDelivery.calculateOrderCost(["express"], ["beverage"], true)).to.equal("You spend $7.23 for shipping and addons with a 15% discount!");
        });

        it("should throw an error for invalid parameters", function() {
            expect(() => foodDelivery.calculateOrderCost("Invalid", ["sauce"], true)).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost(["standard"], "Invalid", true)).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost(["standard"], ["sauce"], "Invalid")).to.throw("Invalid Information!");
        });
    });
});
