import MarkdownIt from 'markdown-it';

type RenderMark = (template: TemplateStringsArray, ...substitutions: any[]) => string;

interface MarkFn extends RenderMark{
  (mdInstance: MarkdownIt): RenderMark;
}

export const mark: MarkFn;