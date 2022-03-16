function solution(nodeinfo) {
    class Node {
        constructor(value, x, y) {
            this.value = value;
            this.leftChild = null;
            this.rightChild = null;
            this.x = x;
            this.y = y;
        }
    }
    class Tree {
        constructor() {
            this.root = null;
        }
        insert(node, parent) {
            if (!this.root && !parent) {
                this.root = node;
                return;
            }
            if (!parent) {
                parent = this.root;
            }
            while (parent) {
                if (parent.x > node.x) {
                    if (parent.leftChild) {
                        parent = parent.leftChild;
                        continue;
                    } else {
                        parent.leftChild = node;
                        break;
                    }
                }
                if (parent.x < node.x) {
                    if (parent.rightChild) {
                        parent = parent.rightChild;
                        continue;
                    } else {
                        parent.rightChild = node;
                        break;
                    }
                }
            }
        }
        preOrder(root = this.root, arr = []) {
            // 전위순회
            if (root) {
                arr.push(root.value);
            }
            if (root?.leftChild) {
                this.preOrder(root.leftChild, arr);
            }
            if (root?.rightChild) {
                this.preOrder(root.rightChild, arr);
            }
            return arr;
        }
        postOrder(root = this.root, arr = []) {
            if (root?.leftChild) {
                this.postOrder(root.leftChild, arr);
            }
            if (root?.rightChild) {
                this.postOrder(root.rightChild, arr);
            }
            if (root) {
                arr.push(root.value);
            }
            return arr;
        }
    }
    const tree = new Tree();
    nodeinfo = nodeinfo.map((node, i) => [...node, i + 1]);
    nodeinfo.sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < nodeinfo.length; i++) {
        const [x, y, index] = nodeinfo[i];
        const node = new Node(index, x, y);
        tree.insert(node, null);
    }
    console.log(tree.root.toString());
    return [tree.preOrder(), tree.postOrder()];
}

console.log(
    solution([
        [5, 3],
        [11, 5],
        [13, 3],
        [3, 5],
        [6, 1],
        [1, 3],
        [8, 6],
        [7, 2],
        [2, 2],
    ])
);
// [[7,4,6,9,1,8,5,2,3],[9,6,5,8,1,4,3,2,7]]
