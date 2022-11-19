async function btnHandler(){
    console.log("CLICKED@@@@");
    let prevMsg = await scrapeGmailReply();
    // let writtingSpaceComp = document.getElementsByClassName("Am Al editable LW-avf tS-tW");
    // let writingSpaceRep = document.getElementsByClassName("Am aO9 Al editable LW-avf tS-tW");
    let writingSpaceRep = document.getElementsByClassName('Am Al editable LW-avf tS-tW');
    let writingSpaceComp = document.getElementById("Am a09 Al editable LW-avf tS-tW");
    //append text to div without innerHTML:
    // var theDiv = document.getElementById("<ID_OF_THE_DIV>");

    let respContent = await scrapeGmailResponse();
    if (respContent !== ""){
        const resp = await fetch("http://localhost:3000/email/prompt", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: respContent }),
        });
        const dataf = await resp.json();
        console.log("DATAF", dataf);
        const textC = dataf.result;
        if (writingSpaceRep.length>0) {
            let innerT = writingSpaceRep[0];
            innerT.innerText += textC;
        }
        if (writingSpaceComp){
            let innerT = writingSpaceRep[0];
            innerT.innerText += textC;
        }

    }

    if (prevMsg !== ""){
        const resp = await fetch("http://localhost:3000/email/response", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: prevMsg }),
        });

        const dataf = await resp.json();
        console.log("DATAF", dataf);
        const textC = dataf.result;
        if (writingSpaceRep.length>0) {
            let innerT = writingSpaceRep[0];
            innerT.innerText += textC;
        }
        if (writingSpaceComp){
            let innerT = writingSpaceRep[0];
            innerT.innerText += textC;
        }
    }


    // const resp = await fetch("http://localhost:3000/email/1234", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email: "Hi connor, let me know what you think of these documents, -Dion" }),
    // });



    // let text = JSON.stringify(json.result);
    // console.log("FROM POST REQUESTasdasdfasdfasdff:"+JSON.stringify(json.result));

    //let vaff = await postRequest("http://localhost:3000/email/1234", {email: "Hi connor, let me know what you think of these documents, -Dion"});
    // const url = "http://localhost:3000/email/1234";
    // const dta = {email: "Hi connor, let me know what you think of these documents, -Dion"};
    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", url, true);
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         var json = JSON.parse(xhr.responseText);
    //         let text = JSON.stringify(json.result);
    //         console.log("FROM POST REQUESTasdf:"+JSON.stringify(json.result));
    //         console.log("FROM POST REQUEST:"+xhr.responseText);

    //         if (writingSpaceRep.length>0) {
    //             let innerT = writingSpaceRep[0];
    //             innerT.innerText += text;
    //         }
    //         if (writingSpaceComp){
    //             let innerT = writingSpaceRep[0];
    //             innerT.innerText += text;
    //         }
            
    //     }
    // };
    // var data = JSON.stringify(dta);
    // xhr.send(data);


    // if (writingSpaceRep.length>0) {
    //     let innerT = writingSpaceRep[0];
    //     innerT.innerText += "INSHALLA";
    // }
    // if (writingSpaceComp){
    //     let innerT = writingSpaceRep[0];
    //     innerT.innerText += "INSHALLA";
    // }

}


async function scrapeGmailResponse(){
    let writingSpaceRep = document.getElementsByClassName('Am Al editable LW-avf tS-tW');
    let writingSpaceComp = document.getElementsByClassName("Am a09 Al editable LW-avf tS-tW");

    
    if (writingSpaceRep.length>0 && writingSpaceRep[0].innerText) {
        console.log("FOUND RESP");
        let resp = writingSpaceRep[0].textContent;
        console.log("RESP:::", resp);
        return resp;
    }
    if (writingSpaceComp.length>0 && writingSpaceComp[0].innerText){
        console.log("FOUND COMP");
        let resp = writingSpaceComp.textContent;
        console.log("RESP1:::", resp);
        return resp;
    }
    return "";
}
async function scrapeGmailReply(){
    let bodyDivs = document.getElementsByClassName("a3s aiL");
    let bodyDivs2 = document.getElementsByClassName("a3s aXjCH");
    let bodyDivs3 = document.getElementsByClassName("a3s aXjCH m15a0b5f5a5a5a5a5");

    if (bodyDivs.length>1){
        console.log("FOUND Reply DIVS!");
        //Get second last div
        let lastMessage = bodyDivs[bodyDivs.length-2];
        console.log("LAST MESSAGE", lastMessage);
    }
    let string = "";
    // array.forEach(element => {
    //     let bText = element.innerText || element.textContent + "\n";
    //     string += bText;
        
    // });
    for(let i=0; i<bodyDivs.length; i++){
    
        let bText = bodyDivs[i].innerText || bodyDivs[i].textContent + "\n";
        string += bText;
    }
    
    console.log("STRING", string);
    return string;

}

function ObtnHandler(){
    console.log("CLICKED@@@@");
    // let writtingSpaceComp = document.getElementsByClassName("Am Al editable LW-avf tS-tW");
    // let writingSpaceRep = document.getElementsByClassName("Am aO9 Al editable LW-avf tS-tW");
    let writingSpace = document.getElementsByClassName('dFCbN k1Ttj dPKNh DziEn');

    //append text to div without innerHTML:
    // var theDiv = document.getElementById("<ID_OF_THE_DIV>");

    // scrapeGmailReply();

    if (writingSpace.length>0) {
        let innerT = writingSpace[0];
        innerT.innerText += "INSHALLA";
    }
    // if (writingSpaceComp){
    //     let innerT = writingSpaceRep[0];
    //     innerT.innerText += "INSHALLA";
    // }

}

//make post request to localhost:3000:
async function postRequest(url, data) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log("FROM POST REQUEST:"+json);
            return json;
        }
    };
    var data = JSON.stringify(data);
    xhr.send(data);
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
            myBtn.addEventListener("click",btnHandler);
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

    let ComposeFound = false;
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
                    ComposeFound = true;
                    break;
                }
            }
            ComposeFound = false;
        }

        if(ComposeFound && !document.getElementById("magicBtnO")){
            console.log("MAKING BUTTON!");
            let x = document.getElementsByClassName("R6yXY CEwXY")[0];
            let divnew = document.createElement("div");
            let myBtnO = document.createElement("button");
            myBtnO.textContent = "NNN";
            myBtnO.id = "magicBtnO";
            myBtnO.addEventListener("click",ObtnHandler);
            x.appendChild(myBtnO);
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