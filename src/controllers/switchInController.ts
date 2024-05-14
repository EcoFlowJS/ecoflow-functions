import { EcoContext } from "@ecoflow/types";

function switchInController(this: EcoContext) {
  const { _ } = ecoFlow;
  const { payload, inputs, next } = this;
  if (_.isUndefined(inputs)) {
    payload.msg = {};
    next();
    return;
  }

  const { caseVal, moveTo } = inputs;

  if (_.isEmpty(caseVal) || !_.isString(caseVal)) {
    payload.msg = {};
    next();
    return;
  }

  if (
    (_.isUndefined(payload.msg.case) ||
      !_.isString(payload.msg.case) ||
      _.isEmpty(payload.msg.case)) &&
    _.isUndefined(payload.msg.payload)
  ) {
    payload.msg = {};
    next();
    return;
  }

  if (payload.msg.case === caseVal) {
    payload[moveTo ? moveTo : "msg"] = payload.msg.payload;
    payload.msg = {};
    next();
    return;
  }
}

export default switchInController;
