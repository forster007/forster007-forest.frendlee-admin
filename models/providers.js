// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Providers = sequelize.define('providers', {
    birthdate: {
      type: DataTypes.DATE,
    },
    description: {
      type: DataTypes.STRING,
    },
    formation: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.ENUM(
        'female',
        'male',
      ),
    },
    gps: {
      type: DataTypes.STRING,
    },
    isMedicalProvider: {
      type: DataTypes.BOOLEAN,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    onesignal: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    phoneNumberIsWhatsapp: {
      type: DataTypes.BOOLEAN,
    },
    pictureAddress: {
      type: DataTypes.STRING,
    },
    pictureCertification: {
      type: DataTypes.STRING,
    },
    pictureProfile: {
      type: DataTypes.STRING,
    },
    pictureLicense: {
      type: DataTypes.STRING,
    },
    ssn: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'providers',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v5/reference-guide/relationships#adding-relationships.
  Providers.associate = (models) => {
    Providers.belongsTo(models.addresses, {
      foreignKey: {
        name: 'addressId',
        field: 'address_id',
      },
      as: 'address',
    });
    Providers.belongsTo(models.users, {
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
      as: 'user',
    });
  };

  return Providers;
};
