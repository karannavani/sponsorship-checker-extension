console.log("This is a popup!");

chrome.action.onClicked.addListener(function (tab) {
    console.log("Hello")
});
// var footer = document.getElementsByClassName('sqs-block-content')
let tabId;


// function testFunc() {
//     console.log('called', getSelection().toString());
//     // tabId = '';
// }

function tabQuery() {
    console.log('function is running')
    console.log('body is', document.querySelectorAll('p'))
    document.querySelectorAll('p').forEach(paragraph => {
        console.log(paragraph.innerText)
    })

    // chrome.tabs.query({active : true, currentWindow: true})
    // .then(tab => console.log('tab is', tab))
    // .then(([tab]) => tabId = tab.id)
    // .then(() => {
    //     chrome.scripting.executeScript({
    //                 target: {tabId},
    //                 files: ['popup.js'],
    //                 function: testFunc(),
    //             })
    // })
    
}

tabQuery();
    





// function getPageText([tab]) {
//     let result;



//    

// }


  