chrome.tabs.onUpdated.addListener(function(tabId, tab) {
    if (tab.url && tab.url.includes("google.com/mail")){
        console.log("Google Mail tab found");
        chrome.tabs.sendMessage(tabId, {
            type:"GMAIL",
            message: "Google Mail tab found",
            tabId: tabId
        });
    }

});

chrome.tabs.onUpdated.addListener(function(tabId, tab) {
    if (tab.url && tab.url.includes("outlook.live.com/mail")){
        console.log("OUTLOOK Mail tab found");
        chrome.tabs.sendMessage(tabId, {
            type:"OUTLOOK",
            message: "OUTLOOK Mail tab found",
            tabId: tabId
        });
    }

});

//handle htlm button click with a callback function 

