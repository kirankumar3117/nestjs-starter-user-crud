import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Kiran",
            "email": "kiran@gmail.com",
            "role": "INTERN"
        },
        {
            "id": 2,
            "name": "Kumar",
            "email": "kumar@gmail.com",
            "role": "ADMIN"
        },
        {
            "id": 3,
            "name": "Sai",
            "email": "sai@gmail.com",
            "role": "ADMIN"
        },
        {
            "id": 4,
            "name": "Kishore",
            "email": "kishore@gmail.com",
            "role": "INTERN"
        },
        {
            "id": 5,
            "name": "siri",
            "email": "siri@gmail.com",
            "role": "INTERN"
        },
        {
            "id": 6,
            "name": "Naga",
            "email": "naga@gmail.com",
            "role": "INTERN"
        },
        {
            "id": 7,
            "name": "Nandu",
            "email": "nandu@gmail.com",
            "role": "INTERN"
        }
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        if(role){
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }

    findOne(id: number){
        const user = this.users.find(users => users.id === id)
        return user
    }

    create(createUserDto: CreateUserDto){
        const usersByHighestId = [...this.users].sort((a,b)=> b.id - a.id)
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...createUserDto
        }
        this.users.push(newUser);
        return newUser
    }

    update(id: number, updateUserDto : UpdateUserDto){
        this.users = this.users.map(user => {
            if(user.id === id){
                return {...user, ...updateUserDto }
            }
            return user
        })

        return this.findOne(id)
    }

    delete(id: number){
        const removeUser = this.findOne(id);
        this.users = this.users.filter(user => user.id !==id)
        return removeUser
    }
}
