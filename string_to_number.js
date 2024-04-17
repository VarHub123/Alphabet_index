let alpha =(txt)=>{
	let UTF =96;
	let myCharToLowerCase = txt.toLowerCase();
	let splitString = myCharToLowerCase.split("");
	
	for(let i=0;i<splitString.length;i++){
		let UTF_index = splitString[i].charCodeAt() - UTF;
		let newIndex = JSON.stringify(UTF_index);
		console.log(`Numrical value of ${splitString[i]} is ${newIndex}`)
	}
}
let newValue = prompt("Please Enter only string")
alpha(newValue);