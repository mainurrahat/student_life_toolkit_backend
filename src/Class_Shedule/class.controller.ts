import { Request, Response } from "express";
import Class, { IClass } from "./class.model";

export const getClasses = async (req: Request, res: Response) => {
  try {
    const classes = await Class.find(); // ✅ userId check remove
    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export const addClass = async (req: Request, res: Response) => {
  const { subject, instructor, day, startTime, endTime, color } = req.body;
  if (!subject || !instructor || !day || !startTime || !endTime) {
    return res.status(400).json({ message: "All fields are required!" });
  }
  if (startTime >= endTime) {
    return res
      .status(400)
      .json({ message: "Start time must be before end time!" });
  }
  try {
    const newClass: IClass = new Class({
      subject,
      instructor,
      day,
      startTime,
      endTime,
      color,
    });
    await newClass.save();
    res.status(201).json(newClass);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export const updateClass = async (req: Request, res: Response) => {
  try {
    const updatedClass = await Class.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedClass) {
      return res.status(404).json({ message: "Class not found" });
    }
    res.json(updatedClass);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export const deleteClass = async (req: Request, res: Response) => {
  try {
    await Class.findByIdAndDelete(req.params.id);
    res.json({ message: "Class deleted" });
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
