// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const ProviderClocks = sequelize.define('provider_clocks', {
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'provider_clocks',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v5/reference-guide/relationships#adding-relationships.
  ProviderClocks.associate = (models) => {
    ProviderClocks.belongsTo(models.clocks, {
      foreignKey: {
        name: 'clockId',
        field: 'clock_id',
      },
      as: 'clock',
    });
    ProviderClocks.belongsTo(models.providers, {
      foreignKey: {
        name: 'providerId',
        field: 'provider_id',
      },
      as: 'provider',
    });
  };

  return ProviderClocks;
};
