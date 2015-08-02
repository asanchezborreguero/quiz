//Definición del modelo Quiz con validación
module.exports = function (sequelize, DataTypes) {
	return sequelize.define ('Quiz',
		{ 	pregunta: { 
				type: DataTypes.STRING,
				validate: {notEmpty: {msg: "--> Por favor, escriba la Pregunta"}}
		  	},	
		  	respuesta: { 
				type: DataTypes.STRING,
				validate: {notEmpty: {msg: "--> Por favor, escriba la Respuesta"}}
			},	
			tema: {
				type: DataTypes.STRING,
				validate: {notEmpty: {msg: "--> Por favor, indique la Temática"}}
			}
		});
}