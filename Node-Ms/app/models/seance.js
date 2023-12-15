const mongoose=require('mongoose');
const SeanceSchema=new mongoose.Schema({

   lieu:{
        type:String,
        required:true,
    },
    prix:{
        type:Number,
        required:true,
    },
    dateSeance:{
        type:Date,
        required:true,
    },


});
const Seance=mongoose.model('Seance',SeanceSchema);
module.exports ={Seance}