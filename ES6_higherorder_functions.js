const courses = ['javascript', 'html', 'css', 'bootstrap'];

courses.forEach(
	(item, index, courses) => {
		console.log(index + ' ' + item);
	}
);

const courseName = courses.filter(tempVar => tempVar === 'html');
console.log(courseName);

const arrOfCourses = [
	{id: 1, name: 'html'},
	{id: 2, name: 'javascript'},
	{id: 3, name: 'css'},
]

const courseName = arrOfCourses.filter(tempVar => tempVar.name === 'css');
console.log(courseName);

const courseName = courses.indexOf('css');
console.log(courseName);

const numbers = [2, 6, 8];
const courseName = courses.map(tempVar => tempVar.length > 5);
const dividedNum = numbers.map(tempVar => tempVar/2);
console.log(courseName);
console.log(dividedNum);

const stringSum = courses.reduce((sum, tempVar) => sum + tempVar, ' ');
const numSum = numbers.reduce((sum, tempVar) => sum + tempVar, 0);
console.log(stringSum);
console.log(numSum);

const courseName = arrOfCourses.find(tempVar => tempVar.name === 'javascript')
console.log(courseName.id);