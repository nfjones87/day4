function textAnalyze(){
	$('.container').submit(event =>{
		event.preventDefault();

		const text = $('#user-text').val();
		console.log(text);

		const arrayOfWords = text.toLowerCase().replace(/\r?\n|\r/g, "").split(" ");
		console.log(arrayOfWords);

		const wordCount = arrayOfWords.length;
		let sum = 0;
		arrayOfWords.forEach(each => sum += each.length);
		let average =  (sum/wordCount) |0;

		let uniqueWords = [];
		for (let index in arrayOfWords){
			if (! uniqueWords.find(each => each === arrayOfWords[index])){
				uniqueWords.push(arrayOfWords[index]);
			}
		}
		const unWordCount = uniqueWords.length;

		console.log("Word count: " + wordCount);
		console.log("Unique word count: " + unWordCount);
		console.log(`Average word length:  ${average} characters`);

		const avString = average + " characters";

		$('.js-wc').append(wordCount);
		$('.js-uwc').append(unWordCount);
		$('.js-awl').append(avString);

		$('.text-report').removeClass('hidden');

	});
}

$(function(){
	textAnalyze();
});