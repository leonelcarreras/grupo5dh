module.exports = (sequelize, dataTypes) => {
    let alias = 'Product_variant';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },


        camaraResolucion: {
            type: dataTypes.STRING(100),
            allowNull: false
        },

        videoResolucion: {
            type: dataTypes.STRING(100),
            allowNull: false
        },

        memoria: {
            type: dataTypes.STRING(20),
            allowNull: false
        },
        almacenamiento: {
            type: dataTypes.STRING(20),
            allowNull: false
        },
        procesador: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        pantallaModelo: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        pantallaResolucion: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        bateria: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        imagecolor1: {
            type: dataTypes.STRING(120),
            allowNull: false
        },
        imagecolor2: {
            type: dataTypes.STRING(120),
            allowNull: false
        },
        imagecolor3: {
            type: dataTypes.STRING(120),
            allowNull: false
        },
        color: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        price: {
            type: dataTypes.BIGINT(30),
            allowNull: false
        },
    };
    let config = {
        timestamps: false,
    }
    const Product_Variant = sequelize.define(alias, cols, config);

    Product_Variant.associate = function (models) {
        Product_Variant.hasOne(models.Modelo, {
            as: "modelos",
            foreignKey: 'product_variant_id',
        })
    }

    return Product_Variant
};