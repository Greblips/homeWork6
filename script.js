// Задание 1

const arr1  = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr1.length; i++) {
	console.log(arr1[i] );
	if (arr1[i] == 10) break;
};

 // Задание 2

const arr2 = [1, 5, 4, 10, 0, 3];
console.log(arr2.indexOf(4));

// Задание 3

const arr3 = [1, 3, 5, 10, 20];

console.log(arr3.join(' '))

// через оператор ...

console.log(...arr3);


// Задание 4



let numbers = []

const arrRandom = (arr, length, min, max) =>{
  for (let i=0; i < length; i++) {
    arr[i] = Math.round(Math.random()*(max-min) + min);
   
  }
}
arrRandom(numbers, 10 , 0, 10 ) 
console.log(numbers)


 const numbersOdd = numbers.filter(oddItem => {
    return oddItem % 2 === 0
})

console.log(numbersOdd)

// Задание 5

const arr4 = [];

for (let i = 0; i < 3; i++) {
	arr4[i] = []; // создаем подмассив
	
	for (let j = 0; j < 3; j++) {
		arr4[i].push(1); // заполняем подмассив числом 1
	}
}

console.log(arr4);


// Задание 6

const arr5 =  [1, 1, 1]
arr5.push(2,2,2)

console.log(arr5)

// Задание 7


const arr6 = [9, 8, 7, 'a', 6, 5]
arr6.sort().splice(-1)


console.log(arr6)


// Задание 8

const arr7 = [9, 8, 7, 6, 5]

const userNumber = Number(prompt('Ведите число'));

const findNumber = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === userNumber) {
      return console.log('число есть в массиве')
    }
  }

  return console.log('Числа нет в массиве')
};

console.log(findNumber(arr7))




//  Задание 9

const  userString = 'abcdef'

const reverseString = userString.split('').reverse().join('')

console.log(reverseString)

// Задание 10



const numbers2 = []; 
arrRandom(numbers2, 6 , 1, 10 ) 
console.log(numbers2)


  const getAverage = (numbers2) => {
	const sum = numbers2.reduce((acc, number) => acc + number, 0);
	const length = numbers2.length;
	return sum / length;
  }

  console.log(getAverage(numbers2))


// Задание 11

const arr8 =[[1, 2, 3,],[4, 5, 6]]

console.log(arr8.flat());



 // Задание 12


const numbers3 = []; 

arrRandom(numbers3, 10 , 1, 10 ) 
console.log(numbers3)


for (let i = 0; i < numbers3.length-1; i++) { // изменил счетчик до предпосленео значения значения,теперь оно не выводится
	console.log(`сумма ${i}-го и ${i+1}-го элемента равна ${numbers3[i]+numbers3[i+1]}`);
	

}
  console.log(`[${numbers3.join(', ')}]`)




















