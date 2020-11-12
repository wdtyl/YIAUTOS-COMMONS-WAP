class TreeNode {
  value!: number;
  left!: TreeNode;
  right!: TreeNode;

  constructor(value: number) {
    this.value = value;
  }

  add(value: number) {
    if (value <= this.value) {
      if (!this.left) {
        this.left = new TreeNode(value);
      } else {
        this.left.add(value);
      }
    } else {
      if (!this.right) {
        this.right = new TreeNode(value);
      } else {
        this.right.add(value);
      }
    }
  }

  print() {
    this.left && this.left.print();
    console.log('当前值 ==>', this.value);
    this.right && this.right.print();
  }
}

export default class BinaryTree {
  root!: TreeNode;
  list: number[];

  constructor(list: number[]) {
    this.list = list;
    this.buildTree();
  }

  buildTree() {
    if (!this.root) {
      this.root = new TreeNode(this.list[0]);
    }
    this.list.forEach(num => {
      this.root.add(num);
    })
  }

  print() {
    this.root.print();
  }
}
