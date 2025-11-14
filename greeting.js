export function makeGreeting(name, occasion) {
  return toProperCase(occasion) + ", " + toProperCase(name) + "!"
}

export function addSignature(message, from) {
  return toProperCase(message) + " - from " + toProperCase(from)
}

export function toProperCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
