function DoublyLinkedList() {
	// 属性
	// 头
	this.head = null;
	// 尾
	this.tail = null;
	// 长度
	this.length = 0;
	// 内部节点类
	function newNode(data) {
		this.data = data;
		this.prev = null;
		this.next = null;
	}
	DoublyLinkedList.prototype.append = function(data) {
		const newNode = new newNode(data);
		if (this.length === 0) {
			// 情况一：双向链表为空
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length += 1;
	};
}
