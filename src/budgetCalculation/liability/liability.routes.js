"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// routes/expense.routes.ts
const express_1 = require("express");
const liability_controller_1 = require("./liability.controller");
const router = (0, express_1.Router)();
router.post("/", liability_controller_1.addExpense);
router.get("/", liability_controller_1.getExpenses);
router.delete("/:id", liability_controller_1.deleteExpense);
exports.default = router;
