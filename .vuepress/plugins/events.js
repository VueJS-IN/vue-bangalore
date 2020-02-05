const fs = require('fs');
const path = require('path');
const glob = require('globby');
const frontmatter = require('frontmatter');

const srcDir = path.resolve(__dirname, '../..');

const files = glob.sync('*/README.md', { cwd: srcDir });
const events = files.map(file => {
  const content = fs.readFileSync(path.resolve(srcDir, file), 'utf8');
  const link = `/${file.replace(/README\.md$/, '')}`;
  const { data } = frontmatter(content);

  return {
    id: parseInt(file),
    ...data,
    link
  };
});

events.sort((a, b) => b.id - a.id);

module.exports = function eventsPlugin() {
  return {
    clientDynamicModules() {
      return {
        name: 'events.js',
        content: `export default ${JSON.stringify(events)}`
      };
    }
  };
};

module.exports.events = events;
