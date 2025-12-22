import mongoose, { Schema } from 'mongoose'
import express from 'express'
const connectdb=async()=>{
  const db =  await mongoose.connect("mongodb://localhost:27017/studentDB");
  return db;

}

const studeschema = new mongoose.Schema({
    name:String,
    age:Number,
    class:Number,

}) 
const addstud=async()=>{
    const db= await connectdb();
    const result=db.Collection("studentDB")=new Schema({
        name:"megha",
        age:5,
        class:1
    })
    return result;


}