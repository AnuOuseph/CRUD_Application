import { RequestHandler } from "express";
import { StudentService } from "../services/StudentService";
import { NotFoundError } from "../../../utils/NotFoundError";
import BadRequestError from "../../../utils/BadRequestError";

export const getAllStudents:RequestHandler = async(req, res, next) => {
    try{
        const Students = await StudentService.getStudents();
        return res.status(200).json({message: "Succesfully fetched data", data: Students})
    }catch(error){
        next(error)
    }
}

export const createNewStudent:RequestHandler = async(req, res, next) => {
    try{
        const data = req.body;
        if (!data.name || !data.email || !data.phone || !data.enrollNo || !data.date) {
            throw new BadRequestError('All fields are required');
        }
        const Student = await StudentService.createStudent(data)
        return res.status(200).json({message: "Student Created Succesfully", data: Student})
    }catch(error){
        next(error)
    }
}

export const updateStudent:RequestHandler = async(req, res, next) => {
    try{
        const id = req.params.id;
        const data = req.body;
        const Student = await StudentService.updateStudent(id, data)
        if(!Student){
            throw new NotFoundError('Student not found');
        } 
        return res.status(200).json({message: "Fetch Successful", data: Student})
    }catch(error){
        next(error)
    }
}

export const deleteStudent:RequestHandler = async(req,res,next) => {
    try{
        const id = req.params.id;
        const Student = await StudentService.deleteStudent(id)
        if(!Student){
            throw new NotFoundError('Student not found');
        } 
        return res.status(200).json({message: "Student Deleted Successfully", data: Student})
    }catch(error){
        next(error)
    }
}