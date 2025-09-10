"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const class_route_1 = __importDefault(require("./Class_Shedule/class.route"));
const income_routes_1 = __importDefault(require("./budgetCalculation/income/income.routes"));
const liability_routes_1 = __importDefault(require("./budgetCalculation/liability/liability.routes"));
const summary_routes_1 = __importDefault(require("./budgetCalculation/summary/summary.routes"));
const class_route_2 = __importDefault(require("./Class_Shedule/class.route"));
const ques_routes_1 = __importDefault(require("./Exam/ques.routes"));
const auth_route_1 = __importDefault(require("./auth/auth.route"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Welcome to Student Life Toolkit");
});
app.use("/api/classes", class_route_1.default);
app.use("/api/income", income_routes_1.default);
app.use("/api/expenses", liability_routes_1.default);
app.use("/api/summary", summary_routes_1.default);
app.use("/api/questions", ques_routes_1.default);
app.use("/api/study", class_route_2.default);
app.use("/api/auth", auth_route_1.default);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res
        .status(500)
        .json({ message: err.message || "Server encountered an issue!" });
});
exports.default = app;
