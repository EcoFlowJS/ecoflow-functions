import { EcoContext } from "@ecoflow/types";

function functionController(this: EcoContext) {
  const { _ } = ecoFlow;
  const { inputs, next } = this;
  let { payload } = this;
  if (_.isUndefined(inputs)) {
    payload.msg = {};
    next();
    return;
  }

  const { codeEditor } = inputs;

  if (!codeEditor.validate || !_.isString(codeEditor.value))
    codeEditor.value = "\nreturn this;";

  payload = Function(codeEditor.value).call(payload);
  next();
}

export default functionController;
