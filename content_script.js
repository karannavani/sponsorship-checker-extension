console.log("This is a popup!");

chrome.runtime.onMessage.addListener(msgObj => {
    // do something with msgObj]

    console.log('message obj is', msgObj)
    tabQuery();
});
// var footer = document.getElementsByClassName('sqs-block-content')
let tabId;


function tabQuery() {
    let paragraphArr = [];
    console.log('function is running')
    document.querySelectorAll('p').forEach(paragraph => {
        paragraphArr.push(paragraph.innerText);
    })
    paragraphBody = paragraphArr.toString();
    console.log(paragraphBody.slice(0,1500))
}



  