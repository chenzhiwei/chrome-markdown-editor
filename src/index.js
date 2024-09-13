import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { initialText } from './App/Container/Hooks/InitialText';
const rootElement = document.getElementById('root');

// [Prevent] The redirect of file drop
window.addEventListener('drop', (e) => e.preventDefault(), true);
// window.addEventListener('dragstart', e => e.preventDefault(), true);
window.addEventListener('dragover', (e) => e.preventDefault(), true);
// window.addEventListener('dragleave', e => e.preventDefault(), true);
// window.addEventListener('beforeunload', e => {
//   const msg = 'Please check and backup the change before refresh or leave.';
//   return ((e || window.event).returnValue = msg);
// });

// Ctrl+S or Cmd+S to save local file
document.addEventListener('keydown', async (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    const content = localStorage.getItem('editor.content') ?? initialText;
    const blob = new Blob([content], { type: 'text/markdown' });
    
    try {
      if (window.showSaveFilePicker) {
        // use showSaveFilePicker API
        const handle = await window.showSaveFilePicker({
          suggestedName: 'chrome_markdown_editor.md',
          types: [{
            description: 'Markdown Files',
            accept: { 'text/markdown': ['.md'] },
          }],
        });
        
        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
        
        console.log('File saved successfully using showSaveFilePicker');
      } else {
        throw new Error('showSaveFilePicker not supported');
      }
    } catch (err) {
      console.warn('Error using showSaveFilePicker:', err);
      console.log('Falling back to default save method');
      
      // default save method
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'chrome_markdown_editor.md';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  }
});

ReactDOM.render(<App />, rootElement);
serviceWorkerRegistration.register();
