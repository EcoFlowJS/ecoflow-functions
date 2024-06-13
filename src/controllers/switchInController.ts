import { EcoContext } from "@ecoflow/types";

/**
 * This function is used to switch cases in a controller based on the input values.
 * @param {EcoContext} this - The context of the Eco system.
 * @returns None
 */
function switchInController(this: EcoContext) {
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
   * Destructures the 'inputs' object to extract the 'caseVal' and 'moveTo' properties.
   * @param {object} inputs - The object containing the properties 'caseVal' and 'moveTo'.
   * @returns An object with the extracted properties 'caseVal' and 'moveTo'.
   */
  const { caseVal, moveTo } = inputs;

  /**
   * Checks if the caseVal is empty or not a string. If it is, sets payload.msg to an empty object
   * and calls the next middleware function.
   * @param {any} caseVal - the value to check
   * @param {object} payload - the payload object
   * @param {function} next - the next middleware function
   * @returns None
   */
  if (_.isEmpty(caseVal) || !_.isString(caseVal)) {
    payload.msg = {};
    next();
    return;
  }

  /**
   * Checks if the payload has a valid case or payload property, if not, it resets the payload
   * and calls the next middleware function.
   * @param {object} payload - The payload object to check.
   * @param {function} next - The next middleware function to call.
   * @returns None
   */
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

  /**
   * Checks if the case value in the payload message matches the specified case value.
   * If it matches, it moves the payload to a new key or updates an existing key with the payload message.
   * Then clears the payload message and proceeds to the next step.
   * @param {object} payload - The payload object containing the message and data.
   * @param {string} caseVal - The case value to check against.
   * @param {string} [moveTo] - The key to move the payload to if the case value matches.
   * @param {function} next - The function to call to proceed to the next step.
   * @returns None
   */
  if (payload.msg.case === caseVal) {
    payload[moveTo ? moveTo : "msg"] = payload.msg.payload;
    payload.msg = {};
    next();
    return;
  }
}

export default switchInController;
