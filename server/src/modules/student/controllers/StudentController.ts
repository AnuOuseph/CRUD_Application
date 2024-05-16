import { RequestHandler } from "express";
import { StudentService } from "../services/StudentService";

export const getAllStudents:RequestHandler = async(req, res, next) => {
    try{
        const Students = await StudentService.getStudents();
        if(Students) return res.status(200).json({message: "Succesfully fetched data", data: Students})
        return res.status(500).json({message: "Failed to fetch data"})
    }catch(error){
        next(error)
    }
}

export const createNewStudent:RequestHandler = async(req, res, next) => {
    try{
        const data = req.body;
        const Student = await StudentService.createStudent(data)
        if(Student) return res.status(200).json({message: "Student Created Succesfully", data: Student})
        return res.status(500).json({message: "Failed to Create New Student"})
    }catch(error){
        next(error)
    }
}

export const updateStudent:RequestHandler = async(req, res, next) => {
    try{
        const id = req.params.id;
        const data = req.body;
        const Student = await StudentService.updateStudent(id, data)
        if(Student) return res.status(200).json({message: "Fetch Successful", data: Student})
        return res.status(500).json({message: "Failed to Fetch data"})
    }catch(error){
        next(error)
    }
}

export const deleteStudent:RequestHandler = async(req,res,next) => {
    try{
        const id = req.params.id;
        const Student = await StudentService.deleteStudent(id)
        if(Student) return res.status(200).json({message: "Student Deleted Successfully", data: Student})
        return res.status(500).json({message: "Failed to Delete"})
    }catch(error){
        next(error)
    }
}