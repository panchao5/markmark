import MarkdownIt from "markdown-it";

export function hasOwnProperty(o, p) {
  return Object.prototype.hasOwnProperty.call(o, p);
}

export function isNil(arg) {
  return arg === undefined || arg === null;
}

export function isBoolean(arg) {
  return arg === true || arg === false;
}

export function isObject(arg) {
  return typeof arg === "object" && arg !== null;
}

export function isMarkdownIt(arg) {
  return  arg instanceof MarkdownIt;
}

export function isTemplateStringArray(arg) {
  if (Array.isArray(arg) && Array.isArray(arg.raw)) {
    return true
  } 
  return false
}