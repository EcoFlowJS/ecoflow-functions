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
