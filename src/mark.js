import {
  hasOwnProperty,
  isBoolean,
  isMarkdownIt,
  isNil,
  isObject,
  isTemplateStringArray,
} from "./utils";
import MarkdownIt from "markdown-it";

function mark(mdInstanceOrTemplate, ...args) {
  let mdInstance;

  /**
   *
   * @param {TemplateStringsArray} template
   * @param  {...any} substitutions
   */
  function markdown(template, ...substitutions) {
    if (!isTemplateStringArray(template)) {
      return;
    }
    const raw = template.raw;

    let result = "";

    substitutions.forEach((substitution, idx) => {
      const t = raw[idx];

      let s;

      if (isBoolean(substitution) || isNil(substitution)) {
        s = "";
      } else if (
        isObject(substitution) &&
        hasOwnProperty(substitution, "toMarkdown")
      ) {
        s = substitution["toMarkdown"]();
      } else {
        s = String(substitution);
      }

      result += t;
      result += s;
    });

    result += raw[raw.length - 1];
    const html = mdInstance.render(result);

    return String(html);
  }

  if (isMarkdownIt(mdInstanceOrTemplate)) {
    mdInstance = mdInstanceOrTemplate;
    return markdown;
  }

  if (isTemplateStringArray(mdInstanceOrTemplate)) {
    mdInstance = new MarkdownIt();
    return markdown(mdInstanceOrTemplate, ...args);
  }
}

export { mark };
