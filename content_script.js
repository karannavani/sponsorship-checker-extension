chrome.runtime.onMessage.addListener(msgObj => {
    // do something with msgObj]

    console.log('message obj is', msgObj)
    tabQuery();
    apiCall();
});
// var footer = document.getElementsByClassName('sqs-block-content')
let tabId;

function apiCall() {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer`);

var raw = JSON.stringify({
  "model": "text-curie-001",
  "prompt": "We know that privacy and trust are essential and we are committed to keeping your personal data safe, secure and confidential, both online and offline.,This privacy notice (the \"Notice\") applies to the Alena mobile app (the \"App\") and sets out how we use and protect personal data we collect and process about you, our users when you use Alena. It also provides you with information about your rights in connection with your personal data. ,We encourage you to read this Notice in full so that you understand how your personal data is processed through the App. ,If you have any questions about this Notice or how your personal data is used you can contact us on contact@alena.com. Please see the \"Your Rights\" tab below for further details on your data subject rights.,This Notice was last updated 23 September 2022.,WHO WE ARE ,We are AYA Technologies Limited, a company registered in England and Wales (company number 12333066), whose registered address is at 25 Wilton Rd, Pimlico, London SW1V 1LW (\"Aya\", \"us\", \"we\", \"our\"). ,We are a controller in connection with the processing of your personal data. This means that we determine the purposes and means of the processing of your personal data. ,WHAT PERSONAL DATA WE COLLECT AND HOW WE PROCESS IT,Personal data is any information which can be used, directly or indirectly, to identify you as an individual. ,When you use the Alena App you may choose to provide us with personal data such as: (i) your name; (ii) your email address(es); (iii) y. The company name is:",
  "temperature": 0,
  "max_tokens": 7
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.openai.com/v1/completions", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result.choices[0].text.trim()))
  .catch(error => console.log('error', error));
}

function tabQuery() {
    let paragraphArr = [];
    document.querySelectorAll('p').forEach(paragraph => {
        paragraphArr.push(paragraph.innerText);
    })
    paragraphBody = paragraphArr.toString();
    console.log(paragraphBody.slice(0,1500))
}



  