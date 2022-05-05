// 创建队列类
function Queue() {
	// 属性
	this.items = [];

	// 方法
	// 1.进入队列
	Queue.prototype.enqueue = function(element) {
		this.items.push(element);
	};

	// 2.移除队列第一个元素
	Queue.prototype.dequeue = function() {
		// 数组的shift()方法直接删除数组第一个并且所有元素前移
		return this.items.shift();
	};
	// 3.查看队列第一个元素(最早进入队列的元素)
	Queue.prototype.front = function() {
		return this.items[0];
	};
	// 4.判断队列是否为空
	Queue.prototype.isEmpty = function() {
		return this.items.length === 0;
	};
	// 5.查看队列中元素个数
	Queue.prototype.size = function() {
		return this.items.length;
	};
	// 6.toString()方法
	Queue.prototype.toString = function() {
		return this.items.join(' ');
	};
}

// 使用
let queue = new Queue();
