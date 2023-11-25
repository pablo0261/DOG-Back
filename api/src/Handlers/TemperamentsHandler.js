const getAllTemperaments = require('../Controllers/temperamentsController')

const getTemperamentsHandler = async(req, res) => {
    try {
        const result =  await getAllTemperaments();
      res.status(200).json(result);
    } catch (error) {
        res.status(400).json({error:error.message}) 
        console.log("El handler de Temperaments fallo")       
    }
}

module.exports = {getTemperamentsHandler};