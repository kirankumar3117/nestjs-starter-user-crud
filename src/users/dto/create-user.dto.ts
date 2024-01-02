import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

// data transfer object
export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(["INTERN" , "ENGINEER" , "ADMIN"],{
        message: "Valid role required"
    })
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
} 