module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
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
        apellido: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        profile: {
            type: dataTypes.STRING(20),

        },
        userProfileImage: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },



    };
    let config = {
        timestamps: false,
    }
    const User = sequelize.define(alias, cols, config);

    // Usuario.associate = function (models) {
    //     Usuario.hasMany(models.Modelo, {
    //         as: "modelos_usuarios",
    //         foreignKey: '',
    //         timestamps: false
    //     })
    // }

    return User
};