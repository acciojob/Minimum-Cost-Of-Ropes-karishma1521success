
//your code here
console.log(document.getElementsByTagName('input')[0]);

let arrRope = [];
function ropes(arr, n){
	while(arr.length != 0){ 
    let add = 0;
	for(let i=1; i<=2; i++){
	//find 1st min value
	let min1 = Math.max();
	let minIndex = 0;
	arr.forEach(function (value,index){
		if(value < min1){ 
			min1 = value;
			minIndex = index;
		}
	}
   let minRope1 = arr.splice(minIndex,1);
	add = add + minRope1;
	}

	arrRope.push(add);
	}

	// now add all the elements of arrRope
	let cost = 0;
	arrRope.forEach((value) => {
		cost = cost + value;
	})

	document.getElementById('result').innerHTML = cost;
				
	)
}
