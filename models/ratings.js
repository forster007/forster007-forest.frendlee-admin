// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Ratings = sequelize.define('ratings', {
    customerComment: {
      type: DataTypes.STRING,
    },
    customerCompliment: {
      type: DataTypes.ENUM(
        'nice',
        'organized',
        'professional',
        'informed',
        'effective',
        'mannerly',
      ),
    },
    customerRating: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    providerComment: {
      type: DataTypes.STRING,
    },
    providerCompliment: {
      type: DataTypes.ENUM(
        'nice',
        'organized',
        'professional',
        'informed',
        'effective',
        'mannerly',
      ),
    },
    providerRating: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'ratings',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v5/reference-guide/relationships#adding-relationships.
  Ratings.associate = (models) => {
    Ratings.belongsTo(models.appointments, {
      foreignKey: {
        name: 'appointmentId',
        field: 'appointment_id',
      },
      as: 'appointment',
    });
    Ratings.belongsTo(models.customers, {
      foreignKey: {
        name: 'customerId',
        field: 'customer_id',
      },
      as: 'customer',
    });
    Ratings.belongsTo(models.providers, {
      foreignKey: {
        name: 'providerId',
        field: 'provider_id',
      },
      as: 'provider',
    });
  };

  return Ratings;
};
