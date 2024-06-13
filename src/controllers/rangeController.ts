import { EcoContext } from "@ecoflow/types";
import rangeMap from "../helper/rangeMap";

/**
 * Controls the range of values based on the input range property and maps it to a new range of values.
 * @param {EcoContext} this - The context of the Eco system.
 * @returns None
 */
function rangeController(this: EcoContext) {
  const { _ } = ecoFlow;

  /**
   * Destructures the properties 'payload', 'inputs', and 'next' from the current object.
   * @returns An object containing the destructured properties.
   */
  const { payload, inputs, next } = this;

  /**
   * Checks if the inputs variable is undefined. If it is, sets the payload message to an empty object
   * and calls the next function.
   * @param {any} inputs - The variable to check for undefined.
   * @returns None
   */
  if (_.isUndefined(inputs)) {
    payload.msg = {};
    next();
    return;
  }

  /**
   * Destructures the input object to extract specific properties.
   * @param {object} inputs - The input object containing properties to destructure.
   * @returns None
   */
  const { inputRangeProperty, rangeValue, toValue, nearestInt } = inputs;

  /**
   * Parses a range input value from the payload based on the inputRangeProperty.
   * @param {string} inputRangeProperty - The property to look for in the payload.
   * @param {object} payload - The payload object containing the data.
   * @returns {number} The parsed range input value.
   */
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

  /**
   * Destructures the start and end values from the rangeValue and toValue objects.
   * @param {Object} rangeValue - The object containing start and end values for a range.
   * @param {Object} toValue - The object containing start and end values for another range.
   * @returns None
   */
  const { start: rangeValueStart, end: rangeValueEnd } = rangeValue;
  const { start: toValueStart, end: toValueEnd } = toValue;

  /**
   * Checks if any of the input values are undefined, and if so, sets the payload message to an empty object
   * and calls the next middleware function.
   * @param {any} rangeInput - The range input value
   * @param {any} rangeValueStart - The start value of the range
   * @param {any} rangeValueEnd - The end value of the range
   * @param {any} toValueStart - The start value of the 'to' range
   * @param {any} toValueEnd - The end value of the 'to' range
   * @returns None
   */
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

  /**
   * Checks if any of the input values are NaN and if so, sets the payload message to an empty object
   * and calls the next middleware function.
   * @param {number} rangeInput - The input range value to check for NaN.
   * @param {string} rangeValueStart - The starting range value to check for NaN.
   * @param {string} rangeValueEnd - The ending range value to check for NaN.
   * @param {string} toValueStart - The starting to value to check for NaN.
   * @param {string} toValueEnd - The ending to value to check for NaN.
   * @returns None
   */
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
