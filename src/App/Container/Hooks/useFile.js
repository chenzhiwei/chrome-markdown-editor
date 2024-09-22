import { useState, useCallback, useEffect } from "react";
import { get, set } from 'idb-keyval';

const STORAGE_KEY = 'editor.fileHandle';

const useFile = () => {
  const [fileHandle, setFileHandle] = useState(null);

  useEffect(() => {
    const loadStoredFileHandle = async () => {
      if (fileHandle) return; // 如果内存中已有文件句柄，就不需要从 IndexedDB 加载

      try {
        const storedHandle = await get(STORAGE_KEY);
        if (storedHandle) {
          const permission = await storedHandle.requestPermission({ mode: 'readwrite' });
          if (permission === 'granted') {
            setFileHandle(storedHandle);
          }
        }
      } catch (error) {
        console.error('Error accessing stored file handle:', error);
        await set(STORAGE_KEY, null);
      }
    };

    loadStoredFileHandle();
  }, [fileHandle]);

  const openFile = useCallback(async () => {
    try {
      const [handle] = await window.showOpenFilePicker({
        types: [
          {
            description: 'Markdown Files',
            accept: { 'text/markdown': ['.md'] }
          }
        ]
      });

      const options = {
        mode: 'readwrite',
      };

      if ((await handle.queryPermission(options)) !== 'granted'
        && (await handle.requestPermission(options)) !== 'granted') {
        alert('Please grant permissions to read & write this file.');
        return;
      }

      setFileHandle(handle);
      await set(STORAGE_KEY, handle);
      
      const file = await handle.getFile();
      const content = await file.text();
      return content;
    } catch (error) {
      console.error('Error opening new file:', error);
      return null;
    }
  }, []);

  const saveFile = useCallback(async (content, isFocusSaveFile = false) => {
    let handle = fileHandle;

    if (!handle) {
      handle = await get(STORAGE_KEY);
      if (handle) {
        setFileHandle(handle);
      }
    }

    if (!handle && !isFocusSaveFile) {
      return;
    }

    if (!handle) {
      try {
        handle = await window.showSaveFilePicker({
          suggestedName: 'chrome-markdown-editor.md',
          types: [
            {
              description: 'Markdown Files',
              accept: { 'text/markdown': ['.md'] }
            }
          ]
        });
        if (handle) {
          setFileHandle(handle);
          await set(STORAGE_KEY, handle);
        }
      } catch (error) {
        console.error('Error creating new file:', error);
        return;
      }
    }

    try {
      const writable = await handle.createWritable();
      await writable.write(content);
      await writable.close();
      console.log('File saved successfully');
    } catch (error) {
      console.error('Error saving file:', error);
    }
  }, [fileHandle]);

  const getFileName = useCallback(() => {
    return fileHandle ? fileHandle.name : null;
  }, [fileHandle]);

  return { openFile, saveFile, getFileName };
};

export default useFile;