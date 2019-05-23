if(true)
{
    var x = 3;
}
console.log(x);

/*
if(true)
{
    const y = 3;
}
//ReferenceError: y is not defined
// const 와 let은 블록 스코프를 가지므로 블록 밖에서는 변수에 접근 할수 없음 
console.log(y);
*/

// const a = 0;    //TypeError: Assignment to constant variable.
// a = 1;

// let b = 0;
// b = 1;
// console.log(b);

//const c;    //SyntaxError: Missing initializer in const declaration
//한번 초기화 했던 변수에 다른값을 대입할 경우 let을 사용 
//변하지 않는 값을 사용할때는 const 
//js에서는 한번 초기화 했던 변수에 다른 값을 대입 하는 경우는 의외로 적음 

var num1 = 1;
var num2 = 2;
var result = 3;
var string1 = num1 + ' 더하기' + num2 + '는 \'' + result + '\'';
console.log(string1);

const num3 = 1;
const num4 = 2;
const result2 = 3;
const string2 = `${num3} 더하기 ${num4}는 '${result2}'`;
console.log(string2);

var sayNode = function(){
    console.log('Node');
};
var es = 'ES';
var oldObject = {
    sayJS: function(){
        console.log('JS');
    },
    sayNode : sayNode,
};
oldObject[es + 6] = 'Fantastic';
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);

const newObject = {
    sayJS() {
        console.log('JS');
    },
    sayNode,
    [es + 6]: 'Fantastic',
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);