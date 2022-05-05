// 分装栈类
export function Stack() {
	// 拿数组创建一个栈
	this.items = [];

	// 栈的相关操作
	// 1.push方法，元素进栈
	// 原型添加方法
	Stack.prototype.push = function(element) {
		this.items.push(element);
	};
	// 2.pop，弹出栈顶元素
	Stack.prototype.pop = function() {
		/*
      数组的pop()方法就是直接弹出最后一个元素
    */
		return this.items.pop();
	};
	// 3.peek，查看栈顶元素
	Stack.prototype.peek = function() {
		return this.items[this.items.length - 1];
	};
	// 4.判断是否为空
	Stack.prototype.isEmpty = function() {
		return this.items.length === 0;
	};
	// 5.size，获取栈中元素个数
	Stack.prototype.size = function() {
		return this.items.length;
	};
	// 6.toString，以字符串方式返回栈元素 格式为 元素 元素 元素
	Stack.prototype.toString = function() {
		return this.items.join(' ');
	};
}

// 栈的使用
let s = new Stack();
