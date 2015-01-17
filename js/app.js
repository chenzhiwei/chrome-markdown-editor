function update(e){
  var val = e.getValue();
  setOutput(val);
}

function setOutput(val){
  document.getElementById('out').innerHTML = marked(val);
}

function save(){
  var code = editor.getValue();
  var blob = new Blob([code], { type: 'text/plain' });
  saveBlob(blob);
}

function saveBlob(blob){
  var name = "untitled.md";
  if(window.saveAs){
    window.saveAs(blob, name);
  }else if(navigator.saveBlob){
    navigator.saveBlob(blob, name);
  }else{
    url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.setAttribute("href",url);
    link.setAttribute("download",name);
    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    link.dispatchEvent(event);
  }
}

document.addEventListener('keydown', function(e){
  if(e.keyCode == 83 && (e.ctrlKey || e.metaKey)){
    e.preventDefault();
    save();
    return false;
  }
})

document.addEventListener('drop', function(e){
  e.preventDefault();
  e.stopPropagation();

  var theFile = e.dataTransfer.files[0];
  var theReader = new FileReader();
  theReader.onload = function(e){
    editor.setValue(e.target.result);
  };

  theReader.readAsText(theFile);
}, false);

var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
navigator.saveBlob = navigator.saveBlob || navigator.msSaveBlob || navigator.mozSaveBlob || navigator.webkitSaveBlob;
window.saveAs = window.saveAs || window.webkitSaveAs || window.mozSaveAs || window.msSaveAs;

marked.setOptions({
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  }
});

var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
  mode: 'gfm',
  lineNumbers: true,
  matchBrackets: true,
  lineWrapping: true,
  theme: 'default',
});

update(editor);
editor.on('change', update);
editor.focus();
