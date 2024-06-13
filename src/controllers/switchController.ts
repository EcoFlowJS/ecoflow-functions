import { EcoContext } from "@ecoflow/types";

/**
 * Controls the flow of the switch cases based on the input values.
 * @param {EcoContext} this - The context object containing the ecoFlow and other properties.
 * @returns None
 */
function switchController(this: EcoContext) {
  const { _ } = ecoFlow;

  /**
   * Destructures the properties 'payload', 'inputs', and 'next' from the current object.
   * @returns None
   */
  const { payload, inputs, next } = this;

  /**
   * Checks if the inputs are undefined. If they are, sets the payload message to an empty object
   * and calls the next function.
   * @param {any} inputs - The inputs to check for undefined.
   * @returns None
   */
  if (_.isUndefined(inputs)) {
    payload.msg = {};
    next();
    return;
  }

  /**
   * Destructures the switchCases and inputs object to extract payloadMsg and switchValProperty.
   * @param {object} inputs - The input object containing switchCases, payloadMsg, and switchVal properties.
   * @returns None
   */
  let { switchCases } = inputs;
  const { payloadMsg, switchVal: switchValProperty } = inputs;

  /**
   * Determines the switch value and payload response based on the switch value property and payload.
   * @param {string} switchValProperty - The property used to determine the switch value.
   * @param {object} payload - The payload object containing the data.
   * @param {string} payloadMsg - The message property in the payload object.
   * @returns An array containing the switch value and payload response.
   */
  const [switchVal, payloadResponse] =
    switchValProperty !== "msg"
      ? _.isUndefined(payload[switchValProperty]) &&
        !_.isUndefined(payload.msg[switchValProperty])
        ? [payload.msg[switchValProperty], payload.msg[payloadMsg]]
        : [payload[switchValProperty], payload[payloadMsg]]
      : _.isObjectLike(payload.msg)
      ? [payload.msg[switchValProperty], payload.msg[payloadMsg]]
      : [payload.msg, {}];

  /**
   * Checks if the switchVal is empty, an object, or if switchCases is empty.
   * If any of these conditions are met, it sets payload.msg to an empty object and calls next().
   * @param {any} switchVal - The value to check.
   * @param {any} switchCases - The switch cases to check.
   * @param {object} payload - The payload object to update.
   * @param {function} next - The next function to call.
   * @returns None
   */
  if (_.isEmpty(switchVal) || _.isObject(switchVal) || _.isEmpty(switchCases)) {
    payload.msg = {};
    next();
    return;
  }

  /**
   * Checks if the switchVal is not a string. If it is not a string, it sets payload.msg to an empty object,
   * calls the next function, and returns.
   * @param {any} switchVal - The value to check if it is a string.
   * @returns None
   */
  if (!_.isString(switchVal)) {
    payload.msg = {};
    next();
    return;
  }

  if (!_.isArray(switchCases)) switchCases = ["default"];

  /**
   * Iterates through the switch cases array, filters out the "default" case,
   * and checks if the current case value matches the switch value. If there is a match,
   * it sets the payload message to include the case value and payload response, then calls the next function and returns.
   * @param {string[]} switchCases - An array of switch case values.
   * @param {string} switchVal - The current switch value to match against.
   * @param {object} payload - The payload object to update with the case value and payload response.
   * @param {function} next - The function to call after updating the payload.
   * @param {object} payloadResponse - The response to include in the payload message.
   *
   */
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
