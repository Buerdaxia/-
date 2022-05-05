import { Stack } from './01.数组实现堆栈(es5).js';

function desToBin(decNumber) {
	let stack = new Stack();
	while (decNumber > 0) {
		// 1.将余数进栈
		stack.push(decNumber % 2);

		// 2.赋值新结果(向下取证只要整数)
		decNumber = Math.floor(decNumber / 2);
	}
	// 以字符串方式返回
	let binaryString = '';
	while (!stack.isEmpty()) {
		binaryString = binaryString + stack.pop();
	}
	return binaryString;
}

console.log(desToBin(100));
