import { visit } from 'unist-util-visit'
import { toString } from 'mdast-util-to-string'
import slugify from 'slugify'

const doubleBrackets =  /\[\[(.*?)\]\]/ig;
const isDoubleBracket = (text) => {
    return doubleBrackets.test(text);
};

const defaultTitleToURLPath = (seedsPath = "/notes/", title) => {
    let segments = title.split("|");
    const slugifiedTitle = slugify(segments[0].toLowerCase());
    return `${seedsPath}${slugifiedTitle}`;
};

const formatBracketLinks = (text, titleToUrl) => {
    return text.replace(doubleBrackets, (match, linkTitle) => {
        const segments = linkTitle.split("|");
        const title = segments.pop();
        return `<a class="no-underline border-b-2 border-solid border-b-primary p-[2px] rounded hover:bg-primary" href="${titleToUrl(linkTitle)}">${title}</a>`
    });
};


export const addDoubleBrackets = (markdownAst, options) => {
    const titleToURL = defaultTitleToURLPath.bind(null, options.seedsPath);

    const definitions = {};
    visit(markdownAst, 'text', (node, index, parent) => {
        const nodeText = toString(node);
        let doubleBrackets = isDoubleBracket(nodeText);
        if (doubleBrackets) {
           const text = formatBracketLinks(nodeText, titleToURL);
           node.type = 'html';
           node.children = undefined
           node.value = text;
        }
    });

    return markdownAst;
};

export function doubleBracketPlugin(options = {}) {
  return (tree, _file) => {
    addDoubleBrackets(tree, options);
  }
}