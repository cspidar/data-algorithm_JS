


const scrap = fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://trends.google.co.kr/trends/trendingsearches/daily/rss?geo=KR')}`)
.then(response => {
  if (response.ok) return response.json()
  throw new Error('Network response was not ok.')
})
.then(data => {
  //console.log(data.contents);
  const parser = new DOMParser();
  

  for (let i = 1 ; i < 21 ; i++){
  
  
    const parsedItem = parser.parseFromString(data.contents, 'text/html').getElementsByTagName('item')[i].getElementsByTagName('title')[0];
  
    const parsedNewsTitle = parser.parseFromString(data.contents, 'text/html').getElementsByTagName('ht:news_item');

  console.log(parser.parseFromString(data.contents, 'text/html').getElementsByTagName('item')[i].getElementsByTagName('title').length);
  
  console.log(parsedItem);
  //console.log(parsedNewsTitle[i].textContent)
  }

})





const title = new Array()


const html = `<p>HTML</p>`;
const parser = new DOMParser();
const parsed = parser.parseFromString(html, 'text/html');

console.log(parsed.body.innerText);





/*
var $ = cheerio.load('');
var $fragment = $(data.contents);



$('item').each(function () {
  title.push($(this).children('title').text());
});
*/

