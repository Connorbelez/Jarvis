chrome.tabs.onUpdated.addListener(function(tabId, tab) {
    if (tab.url && tab.url.includes("google.com/mail")){
        console.log("Google Mail tab found");
        chrome.tabs.sendMessage(tabId, {
            type:"NEW",
            message: "Google Mail tab found",
            tabId: tabId
        });
    }
});

//handle htlm button click with a callback function 

