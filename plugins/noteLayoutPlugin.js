export function applyLayoutToNotesPlugin() {
  return function (tree, file) {
    file.data.astro.frontmatter.layout = "../../layouts/NoteLayout.astro"
  }
}