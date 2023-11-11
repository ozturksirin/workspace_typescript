"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductService_1 = require("./ProductService");
var _productService = new ProductService_1.default();
var result;
result = _productService.getProducts();
result = _productService.getById(2);
console.log(result);
