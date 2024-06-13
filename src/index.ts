import { ModuleManifest } from "@ecoflow/types";

/**
 * Returns a module manifest object for the Function module.
 * @returns {ModuleManifest} An object containing the name of the module and its specifications.
 */
const functionManifest: () => ModuleManifest = () => ({
  /**
   * Represents a function with the name "Function".
   * @type {string}
   */
  name: "Function",

  /**
   * List of specifications for different middleware types including Switch, Switch In, Range, and Function.
   * Each specification includes name, type, inputs, and controller.
   * @type {Array}
   */
  specs: [
    {
      /**
       * Represents a switch component with the name "Switch".
       */
      name: "Switch",

      /**
       * Represents the type of a component as "Middleware".
       */
      type: "Middleware",

      /**
       * An array of input objects for a component configuration.
       * @type {Array}
       * @property {string} name - The name of the input.
       * @property {string} type - The data type of the input.
       * @property {string} label - The label for the input.
       * @property {boolean} required - Indicates if the input is required.
       * @property {string | string[]} defaultValue - The default value of the input.
       */
      inputs: [
        /**
         * Represents a payload message object with the following properties:
         * @property {string} name - The name of the payload message.
         * @property {string} type - The data type of the payload message.
         * @property {string} label - The label for the payload property.
         * @property {boolean} required - Indicates if the payload property is required.
         * @property {string} defaultValue - The default value for the payload property.
         */
        {
          name: "payloadMsg",
          type: "String",
          label: "Payload Property",
          required: true,
          defaultValue: "msg",
        },

        /**
         * Represents a switchVal object with properties such as name, type, label, required, and defaultValue.
         * @property {string} name - The name of the switchVal object.
         * @property {string} type - The type of the switchVal object.
         * @property {string} label - The label of the switchVal object.
         * @property {boolean} required - Indicates if the switchVal object is required.
         * @property {string} defaultValue - The default value of the switchVal object.
         */
        {
          name: "switchVal",
          type: "String",
          label: "Switch Property",
          required: true,
          defaultValue: "switch",
        },

        /**
         * Represents a switch case in a form as a list box input field.
         * @type {object}
         * @property {string} name - The name of the input field.
         * @property {string} type - The type of input field (ListBox).
         * @property {string} label - The label displayed for the input field.
         * @property {boolean} required - Indicates if the input is required to be filled.
         * @property {string[]} defaultValue - The default value(s) selected in the list box.
         */
        {
          name: "switchCases",
          type: "ListBox",
          label: "Switch Case",
          required: true,
          defaultValue: ["default"],
        },
      ],

      /**
       * Represents the controller used for switching functionality.
       */
      controller: "switchController",
    },
    {
      /**
       * The name of the switch operation is "Switch In".
       */
      name: "Switch In",

      /**
       * Represents the type of a component as "Middleware".
       */
      type: "Middleware",

      /**
       * An array of input objects with properties for each input field.
       * @type {Array}
       * @property {string} name - The name of the input field.
       * @property {string} type - The type of the input field.
       * @property {string} label - The label for the input field.
       * @property {boolean} [required] - Indicates if the input field is required.
       */
      inputs: [
        /**
         * Represents a case property with a specific name, type, label, and required status.
         * @property {string} name - The name of the case property.
         * @property {string} type - The data type of the case property.
         * @property {string} label - The label or display name of the case property.
         * @property {boolean} required - Indicates if the case property is required or not.
         */
        {
          name: "caseVal",
          type: "String",
          label: "Case Property",
          required: true,
        },

        /**
         * Represents a configuration object with properties for name, type, and label.
         * @type {Object}
         * @property {string} name - The name of the property.
         * @property {string} type - The type of the property.
         * @property {string} label - The label for the property.
         */
        {
          name: "moveTo",
          type: "String",
          label: "Property move to",
        },
      ],

      /**
       * Represents the controller type as "switchInController".
       */
      controller: "switchInController",
    },
    {
      /**
       * Represents a range with a name property.
       * @type {string}
       */
      name: "Range",

      /**
       * Represents the type of a component as "Middleware".
       */
      type: "Middleware",

      /**
       * An array of input objects representing different input fields for a form.
       * @type {Array}
       * @property {string} name - The name of the input field.
       * @property {string} type - The type of input field (String, Range, Checkbox, etc.).
       * @property {string} label - The label for the input field.
       * @property {boolean} required - Indicates if the input field is required.
       * @property {string} [defaultValue] - The default value for the input field (if applicable).
       */
      inputs: [
        /**
         * Represents an input range property with specific attributes.
         * @property {string} name - The name of the input range property.
         * @property {string} type - The type of the input range property.
         * @property {string} label - The label of the input range property.
         * @property {boolean} required - Indicates if the input range property is required.
         * @property {string} defaultValue - The default value of the input range property.
         */
        {
          name: "inputRangeProperty",
          type: "String",
          label: "Property",
          required: true,
          defaultValue: "msg",
        },

        /**
         * Represents a configuration object for a range value input field.
         * @type {Object}
         * @property {string} name - The name of the input field.
         * @property {string} type - The type of the input field (Range in this case).
         * @property {string} label - The label for the input field.
         * @property {boolean} required - Indicates if the input is required or not.
         */
        {
          name: "rangeValue",
          type: "Range",
          label: "Map the input range",
          required: true,
        },

        /**
         * Represents a configuration object with properties for a specific field.
         * @typedef {Object} FieldConfig
         * @property {string} name - The name of the field.
         * @property {string} type - The type of the field.
         * @property {string} label - The label for the field.
         * @property {boolean} required - Indicates if the field is required.
         */
        {
          name: "toValue",
          type: "Range",
          label: "To the target range",
          required: true,
        },

        /**
         * Represents a configuration object for a checkbox input field with the label "Round result to the nearest integer?".
         * @type {Object}
         * @property {string} name - The name of the input field ("nearestInt").
         * @property {string} type - The type of the input field ("Checkbox").
         * @property {string} label - The label text for the input field ("Round result to the nearest integer?").
         */
        {
          name: "nearestInt",
          type: "Checkbox",
          label: "Round result to the nearest integer?",
        },
      ],

      /**
       * The controller type for a range controller.
       * @type {string}
       */
      controller: "rangeController",
    },
    {
      /**
       * Represents a function with the name "Function".
       * @type {string}
       */
      name: "Function",

      /**
       * Represents the type of a component as "Middleware".
       */
      type: "Middleware",

      /**
       * An array of input objects for a form, each representing a different input field.
       * @type {Array}
       * @property {string} name - The name of the input field.
       * @property {string} type - The type of input field (e.g. "Code").
       * @property {string} label - The label for the input field.
       * @property {string} defaultValue - The default value for the input field.
       */
      inputs: [
        /**
         * Represents a code editor field configuration object.
         * @type {Object}
         * @property {string} name - The name of the field.
         * @property {string} type - The type of the field.
         * @property {string} label - The label for the field.
         * @property {string} defaultValue - The default value for the field.
         */
        {
          name: "codeEditor",
          type: "Code",
          label: "Code Editor",
          defaultValue: "\nreturn msg;",
        },
      ],

      /**
       * The controller responsible for handling the functionality of the application.
       * @type {string}
       */
      controller: "functionController",
    },
  ],
});

export default functionManifest;
