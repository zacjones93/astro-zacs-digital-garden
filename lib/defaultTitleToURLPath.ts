import slugify from 'slugify'


 const defaultTitleToURLPath = (title: string, notesPath = "/notes/") => {
  let segments = title.split("|");
  const slugifiedTitle = slugify(segments[0].toLowerCase());
  return `${notesPath}${slugifiedTitle}`;
};

export default defaultTitleToURLPath