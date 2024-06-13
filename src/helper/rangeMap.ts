/**
 * Maps a value from one range to another range.
 * @param {number} x - The value to map.
 * @param {number} in_min - The minimum value of the input range.
 * @param {number} in_max - The maximum value of the input range.
 * @param {number} out_min - The minimum value of the output range.
 * @param {number} out_max - The maximum value of the output range.
 * @param {boolean} [isInt=false] - Whether the output should be an integer (default is false).
 * @returns The mapped value within the output range.
 */
const rangeMap = (
  x: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number,
  isInt = false
): number =>
  isInt
    ? Math.round(
        parseInt(
          (
            ((x - in_min) * (out_max - out_min)) / (in_max - in_min) +
            out_min
          ).toString()
        )
      )
    : Number(
        parseFloat(
          (
            ((x - in_min) * (out_max - out_min)) / (in_max - in_min) +
            out_min
          ).toString()
        ).toFixed(2)
      );

export default rangeMap;
