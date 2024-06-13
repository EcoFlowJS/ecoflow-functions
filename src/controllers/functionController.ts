import { EcoContext } from "@ecoflow/types";

/**
 * Controls the execution of a function within the EcoContext.
 * @param {EcoContext} this - The EcoContext object.
 * @returns None
 */
function functionController(this: EcoContext) {
  const { _ } = ecoFlow;

  /**
   * Destructures the inputs and next properties from the current object and initializes
   * the payload variable.
   * @returns None
   */
  const { inputs, next } = this;
  let { payload } = this;

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
   * Destructures the codeEditor property from the inputs object.
   * @param {object} inputs - The object containing the codeEditor property.
   * @returns None
   */
  const { codeEditor } = inputs;

  /**
   * If the code editor does not have a validate method or if the value is not a string,
   * set the value of the code editor to "\nreturn this;".
   */
  if (!codeEditor.validate || !_.isString(codeEditor.value))
    codeEditor.value = "\nreturn msg;";

  payload.msg = Function(codeEditor.value).call({ msg: payload });
  next();
}

export default functionController;
