const fs = require('fs');
const file = 'node_modules/tiny-slider/src/tiny-slider.d.ts';

if (fs.existsSync(file)) {
  let content = fs.readFileSync(file, 'utf8');
  const first = content.indexOf('preventScrollOnTouch');
  if (first !== -1) {
    const second = content.indexOf('preventScrollOnTouch', first + 1);
    if (second !== -1) {
      const commentStart = content.lastIndexOf('/**', second);
      const lineEnd = content.indexOf('\n', second);
      content = content.slice(0, commentStart) + content.slice(lineEnd + 1);
      fs.writeFileSync(file, content);
      console.log('Patched tiny-slider: removed duplicate preventScrollOnTouch');
    }
  }
}
