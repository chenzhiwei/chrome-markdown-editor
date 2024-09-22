import { useState, useCallback, useRef } from "react";
import { get, set } from 'idb-keyval';

const STORAGE_KEY = 'editor.FileHandle';

const useFile = () => {
  const [fileHandle, setFileHandle] = useState(null);
  const [isSaved, setIsSaved] = useState(true);
  const saveTimeoutRef = useRef(null);

  const loadStoredFileHandle = useCallback(async () => {
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
      setIsSaved(true);
      console.log('File saved successfully');
    } catch (error) {
      setIsSaved(false);
      console.error('Error saving file:', error);
    }
  }, [fileHandle]);

  const saveDebounceFile = useCallback(async (content, isFocusSaveFile = false) => {
    clearTimeout(saveTimeoutRef.current);

    saveTimeoutRef.current = setTimeout(async () => {
      await saveFile(content, isFocusSaveFile);
      console.log('debounceSaveDone', saveTimeoutRef.current);
    }, 1000);
  }, [saveFile]);

  const getFileStatus = useCallback(async () => {
    await loadStoredFileHandle();
    const name = fileHandle ? fileHandle.name : null;
    console.log('loadStoredFileHandle',  name);
    return {
      name,
      isSaved: isSaved,
    };
  }, [fileHandle, loadStoredFileHandle, isSaved]);

  return { openFile, saveFile, saveDebounceFile, getFileStatus, loadStoredFileHandle };
};

export default useFile;