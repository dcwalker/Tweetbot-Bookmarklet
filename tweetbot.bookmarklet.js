javascript:(function(){if(window.location.hostname.indexOf('twitter.com')!==-1){if(document.getElementById('dm_dialog').style.display===%22block%22){window.location='tweetbot://direct_messages';throw%20'exit';}if(window.location.pathname==%22/%22){window.location='tweetbot:///timeline';throw%20'exit';}if(window.location.pathname.split('/')[2]==%22lists%22){window.location='tweetbot:///lists';throw%20'exit';}if(window.location.pathname.split('/')[1]==%22favorites%22){window.location='tweetbot:///favorites';throw%20'exit';}if(window.location.pathname.split('/')[2]==%22status%22){window.location='tweetbot:///status/'+window.location.pathname.split('/')[3];throw%20'exit';}if(window.location.pathname.split('/')[1]==%22search%22%20%26%26%20window.location.search){var%20search=window.location.search.split('%26')[0];search=search.split('%3Fq=')[1];window.location='tweetbot:///search%3Fquery='+search;throw%20'exit';}else%20if(window.location.pathname.split('/')[1]==%22search-home%22){window.location='tweetbot:///search';throw%20'exit';}if(window.location.pathname.split('/')[1]%26%26%20!window.location.pathname.split('/')[2]%26%26%20window.location.pathname.split('/')[1]!=='lists'%20%26%26%20window.location.pathname.split('/')[1]!=='favourites'%20%26%26%20window.location.pathname.split('/')[1]!=='status'%20%26%26%20window.location.pathname.split('/')[1]!=='search'%20%26%26%20window.location.pathname.split('/')[1]!=='search-home'){window.location='tweetbot:///user_profile/'+window.location.pathname.split('/')[1];throw%20'exit';}}})();