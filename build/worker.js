chrome.action.onClicked.addListener(function(tab) {
  chrome.tabs.query({url: chrome.runtime.getURL('index.html')}, function(tabs){
    if(tabs.length > 0) {
      // The extension was already opened in browser, make it active
      chrome.tabs.update(tabs[0].id, {active: true});
    } else {
      // Create a new tab for the extension
      chrome.tabs.create({url: 'index.html', index: tab.index + 1});
    }
  });
});
