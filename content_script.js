console.log("This is a popup!");


// var footer = document.getElementsByClassName('sqs-block-content')
let tabId;


// function testFunc() {
//     console.log('called', getSelection().toString());
//     // tabId = '';
// }

function tabQuery() {
    let paragraphArr = [];
    console.log('function is running')
    document.querySelectorAll('p').forEach(paragraph => {
        paragraphArr.push(paragraph.innerText);
    })
    paragraphBody = paragraphArr.toString();
    console.log(paragraphBody.slice(0,1500))

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


  