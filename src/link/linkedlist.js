import { LinkedNode } from './linkedNode'
export default class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }
  push(element){//向链表尾部添加一个新元素
    let node = new LinkedNode(element),//创建node节点
        current;
    if(!this.count){//代表链表为空，向链表中添加第一个元素
      this.head =  node;//head指向新节点
    }else{
      current = this.head;//从头部查起，
      while( current.next != undefined ){//循环，当current的next为undefined或者null，则查到了尾部，否则要按指针查下去
        current = current.next;
      }
      current.next = node;//将最后一项next赋值为新元素，建立起链接
    }    
    this.count++;//增加链表长度
    return this.count//返回链表长度
  }
  isEmpty(){//链表是否为空
    return this.count === 0
  }
  size(){//链表大小
    return this.count
  }
  getHead(){//获取head
    return this.head
  }
  

}
