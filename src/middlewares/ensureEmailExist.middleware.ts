import { NextFunction, Request, Response } from "express";
import { Repository } from 'typeorm';

import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

const ensureEmailExist = async (req: Request, resp: Response, next: NextFunction): Promise<User | void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const verifyingEmail: string = req.body.email;

    const getEmail = await userRepository.findOne({
        where: {
            email:verifyingEmail
        }
    })

    if(verifyingEmail){
        if(getEmail){
            throw new AppError("Email already exists", 409)
        }
    }

    next()
}

export {ensureEmailExist}