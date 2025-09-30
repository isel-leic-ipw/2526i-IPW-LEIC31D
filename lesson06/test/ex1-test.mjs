
import { validateArrayElements } from "../ex1.mjs"

import assert from 'assert';

const products = [
 { name: "Laptop", category: "Electronics" },
 { name: "Shirt", category: "" },
 { name: "Chair", category: "Furniture" }
];

const products1 = [
 { name: "Laptop", category: "Electronics" },
 { name: "Shirt", category: "" },
 { name: "Chair", category: "Furniture" }
];

describe('exercise 1 tests for regular situation', function() {
    it('should compare object by value', function () {
        assert.deepStrictEqual(products1, products);
    })
    it('should compare object by value', function () {
        assert.deepStrictEqual(products1, products);
    })
})

describe('exercise 1 tests for erros', function() {
    it('should detect error situation 1', function () {
        
    })
    it('should detect error situation 1', function () {
    })
})


