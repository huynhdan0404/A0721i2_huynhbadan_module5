import { IUser } from "src/models/user";

export class userDao{
    static users: IUser[] = [
        {
            name:"dân",
            age:10,
            address:"ha noi",
            email:"dan@gmail.com"
        },
        {
            name:"manh",
            age:20,
            address:"da nang",
            email:"manh@gmail.com"
        },
        {
            name:"nhan",
            age:40,
            address:"hai phong",
            email:"nhan@gmail.com"
        },
        {
            name:"cuong",
            age:30,
            address:"quang nam",
            email:"cuong@gmail.com"
        }
    ]
}