import { EcoContext } from "@ecoflow/types";
import rangeMap from "../helper/rangeMap";

function rangeController(this: EcoContext) {
  const { _ } = ecoFlow;
  const { payload, inputs, next } = this;
  if (_.isUndefined(inputs)) {
    payload.msg = {};
    next();
    return;
  }

  const { inputRangeProperty, rangeValue, toValue, nearestInt } = inputs;
  const rangeInput = Number(
    inputRangeProperty !== "msg"
      ? _.isUndefined(payload[inputRangeProperty]) &&
        !_.isUndefined(payload.msg[inputRangeProperty])
        ? payload.msg[inputRangeProperty]
        : payload[inputRangeProperty]
      : _.isObjectLike(payload.msg)
      ? payload.msg[inputRangeProperty]
      : payload.msg
  );

  const { start: rangeValueStart, end: rangeValueEnd } = rangeValue;
  const { start: toValueStart, end: toValueEnd } = toValue;

  if (
    _.isUndefined(rangeInput) ||
    _.isUndefined(rangeValueStart) ||
    _.isUndefined(rangeValueEnd) ||
    _.isUndefined(toValueStart) ||
    _.isUndefined(toValueEnd)
  ) {
    payload.msg = {};
    next();
    return;
  }

  if (
    _.isNaN(rangeInput) ||
    _.isNaN(Number(rangeValueStart)) ||
    _.isNaN(Number(rangeValueEnd)) ||
    _.isNaN(Number(toValueStart)) ||
    _.isNaN(Number(toValueEnd))
  ) {
    payload.msg = {};
    next();
    return;
  }

  payload.msg = rangeMap(
    rangeInput,
    rangeValueStart,
    rangeValueEnd,
    toValueStart,
    toValueEnd,
    nearestInt
  );
  next();
}

export default rangeController;
