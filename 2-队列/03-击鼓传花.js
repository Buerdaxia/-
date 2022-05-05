class Queue {
	items = [];
	enqueue(element) {
		this.items.push(element);
	}

	dequeue() {
		return this.items.shift();
	}

	front() {
		return this.items[0];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	size() {
		return this.items.length;
	}

	toString() {
		return this.items.join(' ');
	}
}

// 击鼓传花
// 几个盆友围成一圈儿，规定好一个数字，开始数数，数到规定数字的
// 人淘汰，最后剩下的人胜利，请问最后一个人的位置
function passGame(nameList, num) {
	let queue = new Queue();
	// 1.将所有名称进入队列
	nameList.forEach(item => {
		queue.enqueue(item);
	});
	// 2.开始计数，不是num时候放入队尾，如果是num从队列中删除
	while (queue.size() > 1) {
		// 不是num时候放入队尾
		for (let i = 0; i < num - 1; i++) {
			// 让出队的重新进入队列
			queue.enqueue(queue.dequeue());
		}
		// 如果是num从队列中删除
		queue.dequeue();
	}

	// 3. 获取剩下那个人
	console.log('最后剩下的人', queue.front());

	return nameList.indexOf(queue.front());
}
