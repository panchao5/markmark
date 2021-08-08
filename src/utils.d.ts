import MarkdownIt from "markdown-it";

export function hasOwnProperty(o: object, p: PropertyKey): boolean;

export function isNil(arg: unknown): arg is null;

export function isBoolean(arg: unknown): arg is boolean;

export function isObject(arg: unknown): arg is object;

export function isMarkdownIt(arg: unknown): arg is MarkdownIt;

export function isTemplateStringArray(
  arg: unknown
): arg is TemplateStringsArray;
