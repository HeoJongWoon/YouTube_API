const api_key = 'AIzaSyBSJ-kdPjUQEk9rtYFgHg9Gxbm5f2NfAGo';
const baseURL = 'https://www.googleapis.com/youtube/v3/playlistItems';
const pid = 'PL7xqVk2j6DQvIFBj0goyv3OYqsiQR6-2X';
const num = 5;
const resultURL = `${baseURL}?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;

fetch(resultURL)
	.then((data) => data.json())
	.then((json) => {
		console.log(json);
	});
