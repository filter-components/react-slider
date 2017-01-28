export default function (props, value, position) {
  if (position) return position <= props.trackLength;
  const { min, max, step } = props;
  if (typeof value === 'object') { // if Array
    return (value[1] - value[0] >= step) && value[0] >= min && value[1] <= max;
  } else {
    // TODO : is step needed here ?
    return (value >= min && value <= max);
  }
}
