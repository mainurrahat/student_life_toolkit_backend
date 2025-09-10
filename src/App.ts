import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import classRoutes from "./Class_Shedule/class.route";
import incomeRoutes from "./budgetCalculation/income/income.routes";
import expenseRoutes from "./budgetCalculation/liability/liability.routes";
import summaryRoutes from "./budgetCalculation/summary/summary.routes";
import studyRoutes from "./Class_Shedule/class.route";
import questionRoutes from "./Exam/ques.routes";
import authRoutes from "./auth/auth.route";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Student Life Toolkit");
});

app.use("/api/classes", classRoutes);
app.use("/api/income", incomeRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/summary", summaryRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/study", studyRoutes);
app.use("/api/auth", authRoutes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ message: err.message || "Server encountered an issue!" });
});

export default app;
