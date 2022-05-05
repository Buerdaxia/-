// 前提：我们这个优先级队列是升序的
function PriorityQueue() {
	// 优先队列元素
	function QueueElement(element, priority) {
		this.element = element;
		this.priority = priority;
	}
	// 属性
	this.items = [];
	// 方法
	// 1.插入方法
	PriorityQueue.prototype.enqueue = function(el, pr) {
		// 1.创建QueueElement对象
		let queueEl = new QueueElement(el, pr);
		// 2. 根据情况进入队列
		if (this.items.length === 0) {
			// 情况1：队列为空
			this.items.push(queueEl);
		} else {
			// 是否已经进队列的标识
			let added = false;
			// 情况2：队列不空
			for (let i = 0; i < this.items.length; i++) {
				// 情况2.1 如果找到一个大于自己的那我就放你前面
				if (queueEl.priority < this.items[i].priority) {
					// 直接利用splice方法夺舍，你的位置属于我辣，你往后稍稍
					this.items.splice(i, 0, queueEl);
					added = true;
					break;
				}
			}
			// 如果added为false说明上面循环走完都没有进入队列，直接把他丢入队尾
			if (!added) {
				this.items.push(queueEl);
			}
		}
	};
	// 2.移除队列第一个元素
	PriorityQueue.prototype.dequeue = function() {
		// 数组的shift()方法直接删除数组第一个并且所有元素前移
		return this.items.shift();
	};
	// 3.查看队列第一个元素(最早进入队列的元素)
	PriorityQueue.prototype.front = function() {
		return this.items[0];
	};
	// 4.判断队列是否为空
	PriorityQueue.prototype.isEmpty = function() {
		return this.items.length === 0;
	};
	// 5.查看队列中元素个数
	PriorityQueue.prototype.size = function() {
		return this.items.length;
	};
	// 6.toString()方法
	PriorityQueue.prototype.toString = function() {
		let String = '';
		for (let i = 0; i < this.items.length; i++) {
			String += this.items[i].element + '-' + this.items[i].priority + ' ';
		}
		return String;
	};
}
// 实例化
let pq = new PriorityQueue();
