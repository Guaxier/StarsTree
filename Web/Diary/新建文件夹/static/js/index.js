let soul = [
	'等待你的十八岁，完成我们的约定',
	'频繁记录着，因为生活值得',
	'走过的都是经历，写下的都是故事',
];

function randomSentence() {
  document.getElementById('sentence').innerHTML = soul[Math.floor(Math.random() * soul.length)];
}

randomSentence();
