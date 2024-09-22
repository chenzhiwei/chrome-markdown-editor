import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import styled from 'styled-components';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/darcula.css';
import 'codemirror/mode/gfm/gfm.js';
import { initialText } from '../../../Container/Hooks/InitialText';

const editorContent = localStorage.getItem('editor.content') ?? initialText;

const Editor = ({ className, setText, saveFile }) => {
  return (
    <CodeMirror
      className={className}
      value={editorContent}
      options={{
        mode: 'gfm',
        theme: 'darcula',
        lineNumbers: true,
        lineWrapping: true,
      }}
      onChange={(editor, data, value) => {
        localStorage.setItem('editor.content', value);
        setText(value);
        saveFile(value);
      }}
    />
  );
};
export default styled(Editor)`
  height: 100%;
  .CodeMirror {
    height: 100%;
    line-height: 1.5;
  }
`;
