import React from "react";
import { useProvided } from 'nonaction';
import styled from "styled-components";
import UploadButton from "./Upload.js";
import { FileContainer } from "../../Container";
import { initialText } from "../../Container/Hooks/InitialText";

const Header = ({ className }) =>  {
  const { openFile, saveFile, getFileStatus } = useProvided(FileContainer);
  const [fileName, setFileName] = React.useState(null);
  const [isFileSaved, setIsFileSaved] = React.useState(false);
  const onTransfrom = () => {
    // get the file name
    let candidateTitle = "";
    const previewEl = document.querySelector(".preview");
    const candidateTitleEl = previewEl.querySelector("h1");
    if (candidateTitleEl) {
      candidateTitle = candidateTitleEl.innerText;

      // do the effect change the title
      const currentTitle = document.title;
      document.title = candidateTitle;
      window.requestAnimationFrame(() => {
        // schedule resume back in next frame
        document.title = currentTitle;
      });
    }
    window.print();
  };

  React.useEffect(() => { 
    // 动态获取文件名
    const fetchFileName = async () => {
      const { name, isSaved } = await getFileStatus();
      setFileName(name);
      setIsFileSaved(isSaved);
    };
    fetchFileName();

    // 保存文件
    const handleSaveLocalFile = () => {
      const content = localStorage.getItem('editor.content') ?? initialText;
      saveFile(content, true); // focus on local file
    };

    document.addEventListener('save:localFile', handleSaveLocalFile);

    return () => {
      document.removeEventListener('save:localFile', handleSaveLocalFile);
    };
  }, [saveFile, getFileStatus]);

  return (
    <header className={className + " no-print"}>
      <p className="project"> Markdown Editor </p>

      <div className="menu">
        <p style={{ fontSize: '12px', color: isFileSaved ? 'gray' : '#FF6666', marginRight: '10px' }}>{fileName}</p>
        <UploadButton className="button upload" openFile={openFile} />
        <p className="button download" onClick={onTransfrom}>
          <span role="img" aria-label="download">
            🖨️
          </span>
          <span>Print as PDF</span>
        </p>
      </div>
      {/* <span className="author">Powered by @realdennis</span> */}
    </header>
  );
};

export default styled(Header)`
  * {
    box-sizing: border-box;
  }
  flex-shrink: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  user-select: none;
  padding-left: 5px;
  padding-right: 5px;
  color: black;
  background-color: rgb(233, 233, 233);
  display: flex;
  align-items: center;
  height: 40px;
  .project {
    font-weight: bold;
    margin: 5px;
    flex-shrink: 0;
    height: 20px;
  }
  div.menu {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .button {
      height: 80%;
      margin: 0;
      display: flex;
      align-items: center;
      margin-left: 3px;
      border-radius: 3px;
      border: 1px solid black;
      padding: 10px;
      cursor: pointer;
    }
  }

  /* span.author {
    position: fixed;
    bottom: 2px;
    left: 2px;
    opacity: 0.5;
    color: white;
    height: 20px;
    z-index:99;
  } */
  @keyframes dance {
    0% {
      transform: rotate(3deg);
    }
    100% {
      transform: rotate(-2deg);
    }
  }
`;
