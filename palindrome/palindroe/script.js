const button = document.querySelector('#check-btn');
const textInput = document.querySelector("#text-input");
const result = document.querySelector("#result");

// Function to handle input change event
textInput.addEventListener('input', function () {
	result.innerText = ''; // Clear the result from the screen
});

button.onclick = function () {
	// Trim the input value and check if it's empty
	const inputValue = textInput.value.trim();//boşluklara bassak ta onları silip boş value olarak algılar
	if (inputValue === "") {
		alert("Please enter a value");
		return;//stop function execution
	}

	palindrome(inputValue);
};

function palindrome(str) {
	const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');//punctuaciebisgan da sicarielebisgan asuptavebs. hello! how are you ? 123 --> hellohowareyou123 dönüşür
	const reverseStr = cleanStr.split('').reverse().join('');//to apply reverse firstly we need split

	if (cleanStr === reverseStr) {
		result.innerText = `${str} is a palindrome`;
		result.style.color = "green";
	} else {
		result.innerText = `${str} is not a palindrome`;
		result.style.color = "red";
	}

	// CSS styles
	result.style.fontWeight = "bold";
	result.style.marginTop = "20px";
	result.style.display = "block";
}

// Function to trigger rotation animation
function rotateImage() {
	const mainImage = document.querySelector('.main-image');
	mainImage.classList.toggle('rotate');
}

// Call rotateImage function every 15 seconds
setInterval(rotateImage, 15000); // Rotate every 15 seconds

