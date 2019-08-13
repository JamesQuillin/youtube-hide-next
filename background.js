// if we visit youtube, content.js activates
// and tells us to activate the icon
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "activate_icon") {
      chrome.pageAction.show(sender.tab.id);
    }
});

// if the icon is active and clicked by the user
// tell content.js to hide the "up next" section
chrome.pageAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "hide_up_next"});
  });
});