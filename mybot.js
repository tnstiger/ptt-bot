var myBot = require('./PTT-BOT/ptt-bot');
var fs = require('fs');
var iconv = require('iconv-lite'); 
var S = require('string');

//login
fs.readFile('myID.txt',{encoding:'utf-8'}, function (err, data) {
	
	if (err) throw err;
	id = S(data).between("ID:'","'").s;
	ps = S(data).between("PS:'","'").s;
	
	//create the connection object for robot.
	myBot.login( id, ps, function(){
		
		console.log('已進入主功能表');
	
	});
	
	myBot.collectArticleFrom('NBA',53189,100,'C:/Users/user/Google 雲端硬碟/movieBoardData');
	
});



