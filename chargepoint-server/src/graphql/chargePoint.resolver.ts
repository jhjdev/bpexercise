import {ChargePointDataMock} from '../datasource/chargepointData';

const chargePointResolver = {
  Query: {
    getAllChargePoints: () => ChargePointDataMock,
  },
};

exports.resolver = chargePointResolver;
