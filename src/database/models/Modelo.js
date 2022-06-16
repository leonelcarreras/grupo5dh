module.exports = (sequelize, dataTypes) => {
    let alias = 'Modelo';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },

        nombre: {
            type: dataTypes.STRING(45),
            allowNull: false
        },

        marca_id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false
        },
        product_variant_id:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },

        deletedTag:{
            type: dataTypes.INTEGER(1),
            
        }
    };
    let config = {
        timestamps: false,
    }
    const Modelo = sequelize.define(alias, cols, config);

    Modelo.associate = function (models) {
        Modelo.belongsTo(models.Marca, {
            as: "marcas",
            foreignKey: 'marca_id',
        })
        Modelo.belongsTo(models.Product_variant,{
            as: "product_variants",
            foreignKey: "product_variant_id"

        })

    }

    return Modelo
};