// 封装单向链表类
function linkedList() {
	// 内部节点类
	function Node(data) {
		// 数据
		this.data = data;
		// 指针
		this.next = null;
	}
	// 属性
	// 头指针
	this.head = null;
	// 长度
	this.length = 0;

	// 链表方法
	// 一.往链表尾部追加元素
	linkedList.prototype.append = function(data) {
		// 创建一个新节点
		let newNode = new Node(data);
		if (this.head === null) {
			// 情况1：链表为空
			this.head = newNode;
		} else {
			// 情况2：链表不为空
			// 1.获取当前节点
			let currentNode = this.head;
			while (currentNode.next) {
				// 2.循环更新当前节点
				currentNode = currentNode.next;
			}
			// 3.循环完毕就找到最后一个节点了，直接指向新节点
			currentNode.next = newNode;
		}
		// 更新一下数量
		this.length += 1;
	};

	// 二.toString方法
	linkedList.prototype.toString = function() {
		// 1.定义当前节点
		let currentNode = this.head;
		let listString = '';
		// 2.循环获取节点
		while (currentNode) {
			// 拼接数据
			listString += currentNode.data + ' ';
			// 更新当前节点
			currentNode = currentNode.next;
		}
		return listString;
	};

	// 三.insert插入方法
	/**
	 * @param {position} 位置信息
	 * @param {data} 数据
	 */
	linkedList.prototype.insert = function(position, data) {
		// 对position进行越界判断
		if (position < 0 || position > this.length) return false;

		// 创建节点
		let newNode = new Node(data);

		// 情况一：在第一个位置插入节点
		if (position === 0) {
			newNode.next = this.head;
			this.head = newNode;
		} else {
			let index = 0;
			// 目标节点
			let currentNode = this.head;
			// 目标节点前一个节点
			let previous = null;
			// 找到插入位置的前一个节点
			while (index++ < position) {
				previous = currentNode;
				currentNode = currentNode.next;
			}
			// 插入
			newNode.next = currentNode;
			previous.next = newNode;
		}

		// 记录长度
		this.length += 1;
		return true;
	};

	// 四.get获取指定位置数据信息
	/**
	 * @param {position} 位置
	 */
	linkedList.prototype.get = function(position) {
		// 1.越界判断
		if (position < 0 || position >= this.length) return null;

		// 2.获取对应节点数据
		let index = 0;
		let currentNode = this.head;
		while (index++ < position) {
			currentNode = currentNode.next;
		}
		return currentNode.data;
	};

	// 五.indexOf获取指定内容在链表中的下标
	/**
	 * @param {data} 数据
	 */
	linkedList.prototype.indexOf = function(data) {
		// 定义变量
		let currentNode = this.head;
		let index = 0;
		// 循环寻找
		while (currentNode) {
			if (currentNode.data === data) {
				// 找到返回index
				return index;
			}
			currentNode = currentNode.next;
			index++;
		}
		// 如果没找到就直接返回-1
		return -1;
	};

	// 六.update方法
	/**
	 * @param {position} 位置
	 * @param {data} 要更新的数据
	 */
	linkedList.prototype.update = function(position, data) {
		// 越界判断
		if (position < 0 || position >= this.length) return false;

		let currentNode = this.head;
		let index = 0;
		// 循环找出下标对节点
		while (index++ < position) {
			currentNode = currentNode.next;
		}
		// 修改节点data
		currentNode.data = data;
		return true;
	};

	// 七.removeAt方法，移除指定下标节点
	/**
	 * @param {position} 位置
	 */
	linkedList.prototype.removeAt = function(position) {
		// 越界判断
		if (position < 0 || position >= this.length) return null;

		let currentNode = this.head;
		// 情况一: 删除第一个节点
		if (position === 0) {
			// this.head = currentNode.next;
			// 等同于上面
			this.head = this.head.next;
		} else {
			let index = 0;
			let previous = null;
			// 1.循环找出指定position位置元素
			while (index++ < position) {
				previous = currentNode;
				currentNode = currentNode.next;
			}
			// 2.直接跳过position的元素
			previous.next = currentNode.next;
		}
		// 3.长度减1
		this.length -= 1;

		return currentNode.data;
	};

	// 八:remove方法，根据数据删除，使用分装好的方法即可

	linkedList.prototype.remove = function(data) {
		/**
		 * @function indexOf 根据数据获取位置
		 * @function removeAt 根据position删除数据
		 */
		let position = this.indexOf(data);
		return this.removeAt(position);
	};

	// 九:isEmpty方法，判空
	linkedList.prototype.isEmpty = function() {
		return this.length === 0;
	};

	// 十:size返回链表中节点个数
	linkedList.prototype.size = function() {
		return this.length;
	};
}
