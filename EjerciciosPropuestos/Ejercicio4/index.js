// https://meet.google.com/axe-mihi-jht
// meet.google.com/axe-mihi-jht
// https://meet.google.com/axe-mihi-jht?pli=1&authuser=2
// meet.google.com/axe-mihi-jht?pli=1&authuser=2

function stripMeetCodeFromURL(url) {
  if(url.substring(0, 8) === "https://") {
    url = url.substring(8, url.length);
  }
  // meet.google.com/axe-mihi-jht?pli=1&authuser=2

  const beginsMeetCode = 16;
  const amountLettersMeetCode = 12;
  url = url.substring(beginsMeetCode, beginsMeetCode + amountLettersMeetCode);
  // axe-mihi-jht
  let meetCode = "";
  for(let i = 0; i < url.length; i++) {
    if(!(url[i] === "-")) {
      meetCode += url[i];
    }
  }
  return meetCode;
} 

const urls = [
  "https://meet.google.com/axe-mihi-jht",
  "meet.google.com/axe-mihi-jht",
  "https://meet.google.com/axe-mihi-jht?pli=1&authuser=2",
  "meet.google.com/axe-mihi-jht?pli=1&authuser=2"
]
const meetCodes = urls.map(url => stripMeetCodeFromURL(url));
console.log(meetCodes);