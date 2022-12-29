export function getHash(input: string){
  let strippedInput = input.replace(/\s+/g, '')
  var hash = 0, len = strippedInput.length;
  for (var i = 0; i < len; i++) {
    hash  = hash + input.toLowerCase().charCodeAt(i) * input.length;
  }
  return hash;
}
