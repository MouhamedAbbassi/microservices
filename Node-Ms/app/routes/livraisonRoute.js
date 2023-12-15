const express = require('express')
const {Seance}=require('../models/seance')
const app = express()
var bodyParser = require('body-parser')

 
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

app.use(bodyParser.json())

app.post('/seances', async (req, res) => {
  try {
    const { lieu, prix, dateSeance } = req.body; 

  
    const newSeance = new Seance({
        lieu,
        prix,
        dateSeance
    });

   
    const savedSeance = await newSeance.save();

    res.status(201).json(savedSeance); 
} catch (error) {
    res.status(400).json({ message: error.message });
}
})

app.get('/seances', async (req, res) => {
  try {
    Seance.find({

      

    }).then((listSeance)=>{
        res.send(listSeance);

    });


}catch(error) {
    res.status(400).json({ message: error.message });

}
})
app.put('/seances/:id', async (req, res) => {
  try {
    const updatedSeance = await Seance.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true } // Return the updated document
    );

    if (!updatedSeance) {
        return res.status(404).json({ message: 'Seance not found' });
    }

    res.json({ message: 'Updated successfully', seance: updatedSeance });
} catch (error) {
    res.status(400).json({ message: error.message });
}
})
app.delete('/seances/:id', async (req, res) => {
  try {
    const deletedSeance = await Seance.findByIdAndDelete(req.params.id);
    if (!deletedSeance) {
        return res.status(404).json({ message: 'Seance not found' });
    }

    res.json({ message: 'Seance deleted successfully' });
    

}catch(error) {
    res.status(400).json({ message: error.message });

}

})

module.exports = app
