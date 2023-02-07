import { visit } from 'unist-util-visit'
import { toString } from 'mdast-util-to-string'
import { paramCase } from 'text-case'
import { getHash } from '../lib/hashNoteTitles'
import fs from 'fs';

let graph = {
  "edges": [],
  "nodes": []
}


const doubleBrackets =  /\[\[(.*?)\]\]/ig;
const isDoubleBracket = (text) => {
    return doubleBrackets.test(text);
};

const defaultTitleToURLPath = (notesPath = "/notes/", title) => {
    let segments = title.split("|");
    const slugifiedTitle = paramCase(segments[0].toLowerCase());
    return `${notesPath}${slugifiedTitle}`;
};

const formatBracketLinks = (text, fileName, titleToUrl) => {
    return text.replace(doubleBrackets, (match, linkTitle) => {
        const segments = linkTitle.split("|");
        const title = segments.pop();

        buildGraph(title, fileName)

        return `<a class="no-underline border-b-2 border-solid border-b-primary dark:border-b-primary-dark p-[2px] rounded hover:bg-primary dark:hover:bg-primary-dark dark:text-color-text-dark" href="${titleToUrl(linkTitle)}">${title}</a>`
    });
};

const createNode = (label, id, path) => {
  graph.nodes.push({id, label, path})
}

const createEdge = (source, target) => {
  graph.edges.push({source, target})
}

const buildGraph = (destNode, sourceNode) => {
  let sourceId = getHash(sourceNode)
  let destinationId = getHash(destNode)
  let sourceUrl = defaultTitleToURLPath("/notes/", sourceNode);
  let destUrl = defaultTitleToURLPath("/notes/", destNode);
  
  if(sourceId !== null) {
    createEdge(sourceId, destinationId)
    createNode(sourceNode, sourceId, sourceUrl)
  }
  if(destinationId !== null) createNode(destNode, destinationId, destUrl)
  
}

const createGraph = (file) => {
  let existingGraphString = fs.readFileSync('./public/tagged_notes_graph.json', 'utf-8')
  let existingGraph = JSON.parse(existingGraphString)

  let myGraph = existingGraph ? existingGraph : { edges: [], nodes: []}
  
  let combindedEdges = [...myGraph?.edges, ...graph.edges]
  let combinedNodes = [...myGraph?.nodes, ...graph.nodes]
  
  let uniqEdges = combindedEdges.filter((value, index) => {
    const _value = JSON.stringify(value).toLowerCase();
    return index === combindedEdges.findIndex(obj => {
      return JSON.stringify(obj).toLowerCase() === _value;
    });
  });
    let uniqNodes = combinedNodes.filter((value, index) => {
    const _value = JSON.stringify(value).toLowerCase();
    return index === combinedNodes.findIndex(obj => {
      return JSON.stringify(obj).toLowerCase() === _value;
    });
  });
  
  fs.writeFileSync(
    './public/tagged_notes_graph.json',
    JSON.stringify({ edges: uniqEdges, nodes: uniqNodes })
  );


}


export const addDoubleBrackets = (markdownAst, fileName, options) => {
    const titleToURL = defaultTitleToURLPath.bind(null, options.notesPath);

    const definitions = {};
    visit(markdownAst, 'text', (node, index, parent) => {
        const nodeText = toString(node);
        let doubleBrackets = isDoubleBracket(nodeText);
        if (doubleBrackets) {
           const text = formatBracketLinks(nodeText, fileName, titleToURL);
           node.type = 'html';
           node.children = undefined
           node.value = text;
        }
    });

    return markdownAst;
};

export function doubleBracketPlugin(options = {}) {
  return (tree, file) => {
    let fileName = file.history[0].split("/").pop().split(".").shift()
    addDoubleBrackets(tree, fileName, options);
    createGraph(file)
  }
}