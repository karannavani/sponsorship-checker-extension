chrome.tabs.query({active : true}).then(tabs => getPageTitle(tabs));

function sendMessage(tab) {
    chrome.tabs.sendMessage(tab.id, {toScrape:"yes"});
}

function getPageTitle([tab]) {

    if(tab) {
    console.log('tabs are', tab)

    if (tab.title.includes('privacy')) {
        console.log('title includes privacy')
    } else if (tab.url.includes('privacy')) {
        console.log('url includes privacy')
        sendMessage(tab)
    } else {
        console.log('cannot find privacy')
    }
    }
    
}

