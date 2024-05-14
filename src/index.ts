import { ModuleManifest } from "@ecoflow/types";

const functionManifest: () => ModuleManifest = () => ({
  name: "Function",
  specs: [
    {
      name: "Switch",
      type: "Middleware",
      inputs: [
        {
          name: "payloadMsg",
          type: "String",
          label: "Payload Property",
          required: true,
          defaultValue: "msg",
        },
        {
          name: "switchVal",
          type: "String",
          label: "Switch Property",
          required: true,
          defaultValue: "switch",
        },
        {
          name: "switchCases",
          type: "ListBox",
          label: "Switch Case",
          required: true,
          defaultValue: ["default"],
        },
      ],
      controller: "switchController",
    },
    {
      name: "Switch In",
      type: "Middleware",
      inputs: [
        {
          name: "caseVal",
          type: "String",
          label: "Case Property",
          required: true,
        },
        {
          name: "moveTo",
          type: "String",
          label: "Property move to",
        },
      ],
      controller: "switchInController",
    },
    {
      name: "Range",
      type: "Middleware",
      inputs: [
        {
          name: "inputRangeProperty",
          type: "String",
          label: "Property",
          required: true,
          defaultValue: "msg",
        },
        {
          name: "rangeValue",
          type: "Range",
          label: "Map the input range",
          required: true,
        },
        {
          name: "toValue",
          type: "Range",
          label: "To the target range",
          required: true,
        },
        {
          name: "nearestInt",
          type: "Checkbox",
          label: "Round result to the nearest integer?",
        },
      ],
      controller: "rangeController",
    },
    {
      name: "Function",
      type: "Middleware",
      inputs: [
        {
          name: "codeEditor",
          type: "Code",
          label: "Code Editor",
          defaultValue: "\nreturn msg;",
        },
      ],
      controller: "functionController",
    },
  ],
});

export default functionManifest;
