import express from "express"
import {faker} from "@faker-js/faker"

const app=express()

const createUser=()=>{
    const newFake={
        password:faker.internet.password(),
        email:faker.internet.email(),
        phoneNumber:faker.phone.number(),
        lastName:faker.person.lastName(),
        firstName:faker.person.firstName(),
        _id:faker.string.uuid()
    }
    return newFake
}

const createCompany=()=>{
    const newFake={
        id:faker.string.uuid(),
        name:faker.company.name(),
        address:{
            street:faker.location.street(),
            city:faker.location.city(),
            state:faker.location.state(),
            zipCode:faker.location.zipCode(),
            country:faker.location.country()
        }
    }
    return newFake
}
console.log
app.get("/api/users/new",(req,res)=>{
    res.json(createUser())
})

app.get("/api/companies/new",(req,res)=>{
    res.json(createCompany())
})

app.get("/api/user/company",(req,res)=>{
    res.json([createUser(),createCompany()])
})


app.listen(5000)