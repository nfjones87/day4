function fizzbuzz() {
	$("#number-chooser").submit(function(event){
		event.preventDefault();
		$('div.js-results').empty();

		const countTo = $("#number-choice").val();
		const array = fizzBuzzComp(countTo);
		//console.log(array);


		const openTag = '<div class="';
		const middle = '"><span>';
		const closeTag = '</span></div>';
		let returnVal = "";

		array.forEach(each => {
			switch(each){
				case 'fizz':
					returnVal += `${openTag}fizz-buzz-item fizz${middle}${each}${closeTag}`;
					break;
				case 'buzz':
					returnVal += `${openTag}fizz-buzz-item buzz${middle}${each}${closeTag}`;
					break;
				case 'fizzbuzz':
					returnVal += `${openTag}fizz-buzz-item fizzbuzz${middle}${each}${closeTag}`;
					break; 
				default: 
					returnVal += `${openTag}fizz-buzz-item${middle}${each}${closeTag}`;

			}
		});
		
		console.log($('div.js-results'));
		$('div.js-results').append(returnVal); 
	}
}

$(function () {
	fizzbuzz();
});


function fizzBuzzComp(countTo) 
{
  var array = [];
  var i = 1;
  while (i <= countTo)
  {
    console.log(array);

    switch(i % 15){
      case 0:
        array.push("fizzbuzz");
        break;
      case 3: case 6: case 9: case 12:
        array.push("fizz");
        break;
      case 5: case 10:
        array.push("buzz");
        break;
      default:
        array.push(i);
    }
    i++;
  }
  console.log(array);
  return array;
}
