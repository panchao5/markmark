import markdownIt from "markdown-it";
import { mark } from "markmark";

describe("mark", () => {
  test("returns html", () => {
    const html = mark`# Hello World`;

    expect(html).toBe("<h1>Hello World</h1>\n");
  });

  test("supports interpolation", () => {
    const names = "Gary";
    const html = mark`# Hello *${names}*`;

    expect(html).toBe("<h1>Hello <em>Gary</em></h1>\n");
  });

  test("supports customization via toMarkdown", () => {
    const p = {
      name: "Gary",
      age: 25,
      toMarkdown() {
        return `${this.name}(${this.age})`;
      },
    };

    const html = mark`# Hello ${p}`;
    expect(html).toBe("<h1>Hello Gary(25)</h1>\n");
  });

  test("supports providing the pre-configured MarkdownIt instance", () => {
    const md = new markdownIt();

    md.set({
      html: true,
    });

    const html = mark(md)`# Hello <em>World</em>`;

    expect(html).toBe("<h1>Hello <em>World</em></h1>\n");
  });
});
