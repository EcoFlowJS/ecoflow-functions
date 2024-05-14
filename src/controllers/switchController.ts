import { EcoContext } from "@ecoflow/types";

function switchController(this: EcoContext) {
  const { _ } = ecoFlow;
  const { payload, inputs, next } = this;
  if (_.isUndefined(inputs)) {
    payload.msg = {};
    next();
    return;
  }

  let { switchCases } = inputs;
  const { payloadMsg, switchVal: switchValProperty } = inputs;
  const [switchVal, payloadResponse] =
    switchValProperty !== "msg"
      ? _.isUndefined(payload[switchValProperty]) &&
        !_.isUndefined(payload.msg[switchValProperty])
        ? [payload.msg[switchValProperty], payload.msg[payloadMsg]]
        : [payload[switchValProperty], payload[payloadMsg]]
      : _.isObjectLike(payload.msg)
      ? [payload.msg[switchValProperty], payload.msg[payloadMsg]]
      : [payload.msg, {}];

  if (_.isEmpty(switchVal) || _.isObject(switchVal) || _.isEmpty(switchCases)) {
    payload.msg = {};
    next();
    return;
  }

  if (!_.isString(switchVal)) {
    payload.msg = {};
    next();
    return;
  }

  if (!_.isArray(switchCases)) switchCases = ["default"];

  for (const caseVal of switchCases.filter(
    (val: string) => val !== "default"
  )) {
    if (caseVal === switchVal) {
      payload.msg = { case: caseVal, payload: payloadResponse };
      next();
      return;
    }
  }
  payload.msg = {};
  payload.msg = { case: "default", payload: payloadResponse };
  next();
}

export default switchController;
