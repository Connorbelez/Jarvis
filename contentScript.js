
(() => {
    console.log("content loaded");
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
                // } else if (mutation.type === 'attributes') {
                //     // console.log(`The ${mutation.attributeName} attribute was modified.`);
                //     // if(document.getElementsByClassName('btC').length >0){
                //     //     console.log("FOUND BTC1!");
                //     // }
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
            x.appendChild(myBtn);
        }

    };

// Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
    observer.observe(targetNode, config);



    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.type == "NEW") {
            console.log("Google Mail tab found");
            if(document.getElementsByClassName('btC').length >0){
                console.log("FOUND BTC through mail Tab Found!");
                ComposeFound = true;
            }else{
                ComposeFound = false;
            }

            // if(ComposeFound && !document.getElementById("magicBtn")){
            //     console.log("MAKING BUTTON!");
            //     let x = document.getElementsByClassName("btC")[0];
            //     let divnew = document.createElement("div");
            //     let myBtn = document.createElement("button");
            //     myBtn.textContent = "NNN";
            //     myBtn.id = "magicBtn";
            //     x.appendChild(myBtn);
            // }

            // newEmailPageLoaded();
            // document.querySelectorAll('div').forEach(
            //     div => div.innerHTML == 'Compose' && div.addEventListener('click', () => console.log('compose is clicked')));

            // document.querySelectorAll('div').forEach(
            //     div => (div.data-tooltip=="Reply") && div.addEventListener('click', () => alert('reply is clicked')));
            // let x = document.getElementsByClassName("btC")[0];
            // let divnew = document.createElement("div")
            // let myBtn = document.createElement("button")
            // myBtn.textContent = "NNN"
            // x.appendChild(myBtn)

        }
    });




})();




// let x = document.getElementsByClassName("btC")[0];
// let divnew = document.createElement("div")
// let myBtn = document.createElement("button")
// myBtn.textContent = "NNN"
// x.appendChild(myBtn)