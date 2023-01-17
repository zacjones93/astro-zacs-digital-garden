export function applyLayoutToNotesPlugin() {
  return function (tree, file) {
    if(!file.data.astro.frontmatter.layout) file.data.astro.frontmatter.layout = "../../layouts/NoteLayout.astro"
  }
}