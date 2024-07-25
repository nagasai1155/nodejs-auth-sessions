const Employee = require('../modals/Employee');
const createEmployee=async(req,res)=>{
    try{
        const {name,email,phone,city}=req.body;
        const employee=new Employee({name,email,phone,city});
         await employee.save();
        res.status(201).json(employee);
    }catch(error){
        console.log("There is an error: ",error);
        res.status(500).json({message: "server error"});
    }
}
const getEmployee = async(req,res)=>{
    try{                       //modal
        const employee = await Employee.find();
        res.status(200).json(employee);
    }catch(err){
        console.error(err);
        res.status(500).json({message:"server  error"});
    }
}
const singleEmployee = async(req,res)=>{
    try{
        const employee =await Employee.findById(req.params.id);
        if(!employee){
            return res.status(404).json({message:"employee not found"});
        }
        res.status(200).json(employee);
    }catch(err){
        console.error(err);
        res.status(500).json({message:"server error"});
    }
}
const updateEmployee = async(req,res)=>{
    try{
           const{name,email,phone,city}=req.body;
           const myemployee = await Employee.findByIdAndUpdate(req.params.id,{name,email,phone,city})
           if(!myemployee){
            return res.status(404).json({message:"employee not found"});
           }
           res.status(200).json(myemployee);
    }catch(err){
        console.error(err);
        res.status(500).json({message:"error while updation"});
    }
}
const deleteEmployee = async(req,res)=>{
    try{
        const deleteEmployee = await Employee.findByIdAndDelete(req.params.id);
        res.status(204).send();
    }catch(error){
        console.error(error);
        res.status(500).json({"message":"error from server"});
    
    }
}
module.exports={createEmployee,getEmployee,singleEmployee,updateEmployee,deleteEmployee};