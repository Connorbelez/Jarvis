function gmailbtnHandler(){
    console.log("CLICKED@@@@");
    // let writtingSpaceComp = document.getElementsByClassName("Am Al editable LW-avf tS-tW");
    // let writingSpaceRep = document.getElementsByClassName("Am aO9 Al editable LW-avf tS-tW");
    let writingSpaceRep = document.getElementsByClassName('Am Al editable LW-avf tS-tW');
    let writingSpaceComp = document.getElementById("Am a09 Al editable LW-avf tS-tW");
    //append text to div without innerHTML:
    // var theDiv = document.getElementById("<ID_OF_THE_DIV>");

    if (writingSpaceRep.length>0) {
        let innerT = writingSpaceRep[0];
        innerT.innerText += "INSHALLA";
    }
    if (writingSpaceComp){
        let innerT = writingSpaceRep[0];
        innerT.innerText += "INSHALLA";
    }

}

function outLookbtnHandler(){
    // let writingSpaceRep = document.getElementsByClassName('editorParent_2');
    let writingSpaceComp2 = document.getElementById("editorParent_2");
    let writingSpaceComp1 = document.getElementById("editorParent_1");
    let writingSpaceComp3 = document.getElementById("editorParent_3");
    //append text to div without innerHTML:
    // var theDiv = document.getElementById("<ID_OF_THE_DIV>");


    if (writingSpaceComp2) {
        let innerT = writingSpaceComp2;
        innerT.innerText += "INSHALLA";
    }
    if (writingSpaceComp3){
        let innerT = writingSpaceRep[0];
        innerT.innerText += "INSHALLA";
    }
}


function handleGmail(){
    console.log("content loaded FROM HANDLE GMAIL!");
    var __webpack_exports__ = {};

    let ComposeFound = false;
    const targetNode = document.querySelector('body');

// Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.type === 'childList') {
                // console.log('A child node has been added or removed.');
                if(document.getElementsByClassName('btC').length >0){
                    console.log("FOUND BTC!");
                    ComposeFound = true;
                    break;
                }
            }
            ComposeFound = false;
        }

        if(ComposeFound && !document.getElementById("magicBtn")){
            console.log("MAKING BUTTON!");
            let x = document.getElementsByClassName("btC")[0];
            let divnew = document.createElement("div");
            let myBtn = document.createElement("button");
            myBtn.textContent = "NNN";
            myBtn.id = "magicBtn";
            myBtn.addEventListener("click",gmailbtnHandler);
            x.appendChild(myBtn);
        }

    };

// Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
    observer.observe(targetNode, config);

}

function handleOutlook(){
    console.log("content loaded FROM HANDLE OUTLOOK!");
    console.log("THERE IS MUCH TO DO!");
    console.log("content loaded FROM HANDLE GMAIL!");
    var __webpack_exports__ = {};

    let ComposeFoundOutlook = false;
    const targetNode = document.querySelector('body');

// Options for the observer (which mutations to observe)
    const configOutlook = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
    const callbackOutlook = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.type === 'childList') {
                // console.log('A child node has been added or removed.');
                if(document.getElementsByClassName('R6yXY CEwXY').length >0){
                    console.log("FOUND R6yXY CEwXY!");
                    ComposeFoundOutlook = true;
                    break;
                }
            }
            ComposeFoundOutlook = false;
        }

        if(ComposeFoundOutlook && !document.getElementById("magicBtn")){
            console.log("MAKING BUTTON!");
            let x = document.getElementsByClassName("R6yXY CEwXY")[0];
            let divnew = document.createElement("div");
            let myBtnOutlook = document.createElement("button");
            myBtnOutlook.textContent = "NNN";
            myBtnOutlook.id = "magicBtnOut";
            myBtnOutlook.addEventListener("click",outLookbtnHandler);
            divnew.appendChild(myBtnOutlook);
            x.appendChild(divnew);
        }

    };

// Create an observer instance linked to the callback function
    const observer = new MutationObserver(callbackOutlook);

// Start observing the target node for configured mutations
    observer.observe(targetNode, configOutlook);



    // let c = document.getElementsByClassName("R6yXY CEwXY");
}


(() => {
    console.log("CONTENTSCRIPT LOADED!");
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        let {type, message, tabId} = request;
        console.log("Message from background script: ", message);
        console.log("Tab ID: ", tabId);
        console.log("Type: ", type);
        if (request.type == "GMAIL") {
            //handle Gmail:
            handleGmail();
            //This is where we should split off between outlook vs gmail
            console.log("Google Mail tab found");
            if(document.getElementsByClassName('btC').length >0){
                console.log("FOUND BTC through mail Tab Found!");
                ComposeFound = true;
            }else{
                ComposeFound = false;
            }
          
        }else if(request.type == "OUTLOOK"){
            console.log("OUTLOOK FOUND!");
            handleOutlook();
        }
    });




})();




// let x = document.getElementsByClassName("btC")[0];
// let divnew = document.createElement("div")
// let myBtn = document.createElement("button")
// myBtn.textContent = "NNN"
// x.appendChild(myBtn)