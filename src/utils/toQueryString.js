export default function toQueryString(obj) {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    if (Array.isArray(val)) {
      val.forEach((e) => (acc += (acc ? "&" : "") + key + "=" + e));
    } else {
      acc += (acc ? "&" : "") + key + "=" + val;
    }
    return acc;
  }, "");
}
