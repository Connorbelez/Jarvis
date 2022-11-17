document.getElementById("close").addEventListener("click", function(){

    console.log("close button clicked");
    chrome.runtime.sendMessage({type:"NEW", message: "Google Mail tab found"});
});