import React from 'react';
import uploadFile from '../../Lib/uploadFile.js';

export default props => {

  const { openFile, className } = props

  const onChange = async () => {
    
    try {
      const fileContext = await openFile();

      if (fileContext) {
        // 保存文件内容
        uploadFile(fileContext);
        
        console.log('File opened and saved successfully');
      }
    } catch (error) {
      console.error('Error reading or saving file:', error);
    }
  };

  return (
    <p className={className} style={{ position: 'relative' }}>
      <button onClick={onChange} style={{
        background: 'none',
        border: 'none',
        padding: 0,
        font: 'inherit',
        cursor: 'pointer'
      }}>
        <span role="img" aria-label="upload">
          📁
        </span>
        <span>Open File</span>
      </button>
    </p>
  );
};
