module.exports = (sequelize, dataTypes) => {
    let alias = 'Marca';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
   
        nombre_marca: {
            type: dataTypes.STRING(45),
            allowNull: false
        },

    };
    let config = {
        timestamps: false,
    }
    const Marca = sequelize.define(alias, cols, config); 

     Marca.associate = function (models) {
         Marca.hasMany(models.Modelo, { 
            as: "modelos",
             foreignKey: 'marca_id',
             timestamps: false
        })}

    return Marca
};