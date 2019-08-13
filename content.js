// if we visit youtube, this script runs and icon activates...
chrome.runtime.sendMessage({"message": "activate_icon"});

// if the icon is active and clicked we get this message...
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "hide_up_next" ) {
      document.querySelector('#related').style.display = 'none';
    }
  }
);