var cheerio = require('cheerio');
var request = require('request');
 
var sourceUrl = 'https://trends.google.co.kr/trends/trendingsearches/daily/rss?geo=KR';



const title = new Array(),
  description = new Array(),
  views = new Array(),
  date = new Array(),
  url = new Array();

  



request(sourceUrl, function(error, response, html){
  if (!error) {
    var $ = cheerio.load(html, {xmlMode : true});

    $('item').each(function () {
      title.push($(this).children('title').text());
    });
// <item> 의 하위 <title> 안의 문구를 텍스트로 바꿔 title array 에 입력


    
    $('item').each(function () {
      let pubDate = $(this).children('pubDate').text();
      date.push(pubDate);
    });

    $('item').each(function () {
      description.push($(this).children('ht\\:news_item').children('ht\\:news_item_title').text());
    });

    $('item').each(function () {
      views.push($(this).children('ht\\:approx_traffic').text());
    });

    
    $('item').each(function () {
      url.push($(this).children('ht\\:news_item').children('ht\\:news_item_url').first().text());
    });

    


    /*
    let tempDate, rank = 1;
    for (let i = 0; i < title.length; i++) {
      if (tempDate != date[i]) {
          tempDate = date[i];
          rank = 1;
          console.log(tempDate);
      }
      console.log(rank + url[i] + title[i] + views[i]);
      console.log(description[i]);
      rank++;
    }
    */








   for (let i = 0; i < title.length; i++) {
   console.log(`검색어 : ${title[i]} / 내용 : ${description[i]} / 조회수 : ${views[i]}`)
    }


  }
});




