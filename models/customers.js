// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Customers = sequelize.define('customers', {
    birthdate: {
      type: DataTypes.DATE,
    },
    bloodPressure: {
      type: DataTypes.ENUM(
        'low',
        'normal',
        'high',
      ),
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
    haveAllergy: {
      type: DataTypes.BOOLEAN,
    },
    haveDiseases: {
      type: DataTypes.BOOLEAN,
    },
    haveTreatment: {
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
    pictureProfile: {
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
    tableName: 'customers',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v5/reference-guide/relationships#adding-relationships.
  Customers.associate = (models) => {
    Customers.belongsTo(models.addresses, {
      foreignKey: {
        name: 'addressId',
        field: 'address_id',
      },
      as: 'address',
    });
    Customers.belongsTo(models.users, {
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
      as: 'user',
    });
  };

  return Customers;
};
