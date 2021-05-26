//

/**
 * @fileoverview Data Structure: Heap (Min Heap)
 *
 * 우선순위 큐를 구현하기 위한 루트노드에 최소값을 저장하는 Binary Heap
 * 즉, 부모 노드는 자식 노드보다 항상 작은 값을 유지해야 한다.
 *
 * chileLeftIndex = (parentIndex * 2) + 1
 * childRightIndex = (parentIndex * 2) + 2
 * parentIndex = (childIndex - 1) / 2
 */

class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  peek = () => this.heap[0];

  insert = (key, value) => {
    const node = { key, value };
    this.heap.push(node);
    this.heapifyUp(); // 배열에 가장 끝에 넣고, 다시 min heap 의 형태를 갖추도록 한다.
  };

  // 최근에 삽입된 노드가 제 자리를 찾아갈 수 있도록 하는 메소드
  heapifyUp = () => {
    let index = this.heap.length - 1; // 계속해서 변하는 index 값
    const lastInsertedNode = this.heap[index];

    // 루트노드가 되기 전까지
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      // 부모 노드의 key 값이 마지막에 삽입된 노드의 키 값 보다 크다면
      // 부모의 자리를 계속해서 아래로 내린다.
      if (this.heap[parentIndex].key > lastInsertedNode.key) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    // break 를 만나서 자신의 자리를 찾은 상황
    // 마지막에 찾아진 곳이 가장 나중에 들어온 노드가 들어갈 자리다.
    this.heap[index] = lastInsertedNode;
  };

  remove = () => {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if (count <= 0) return undefined;
    if (count === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop(); // 끝에 있는 노드를 부모로 만들고
      this.heapifyDown(); // 다시 min heap 의 형태를 갖추도록 한다.
    }

    return rootNode;
  };

  // 변경된 루트노드가 제 자리를 찾아가도록 하는 메소드
  heapifyDown = () => {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];

    // 계속해서 left child 가 있을 때 까지 검사한다.
    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      // 왼쪽, 오른쪽 중에 더 작은 노드를 찾는다
      // rightChild 가 있다면 key의 값을 비교해서 더 작은 값을 찾는다.
      // 없다면 leftChild 가 더 작은 값을 가지는 인덱스가 된다.
      const smallerChildIndex =
        rightChildIndex < count &&
        this.heap[rightChildIndex].key < this.heap[leftChildIndex].key
          ? rightChildIndex
          : leftChildIndex;

      // 자식 노드의 키 값이 루트노드보다 작다면 위로 끌어올린다.
      if (this.heap[smallerChildIndex].key <= rootNode.key) {
        this.heap[index] = this.heap[smallerChildIndex];
        index = smallerChildIndex;
      } else break;
    }

    this.heap[index] = rootNode;
  };
}

////

// const Heap = require('./Heap')

/**
 * @fileoverview Data Structure: Priority Queue
 *
 * min heap 을 상속해서 구현한 우선순위 큐
 * min heap 의 insert 메소드가 enqueue 가 되고
 * min heap 의 remove 메소드가 dequeue 가 된다.
 */
class PriorityQueue extends Heap {
  constructor() {
    super();
  }

  enqueue = (priority, value) => this.insert(priority, value);
  dequeue = () => this.remove();
  isEmpty = () => this.heap.length <= 0;
}

//

const pq = new PriorityQueue();

// pq.enqueue(1, 99);
// pq.enqueue(3, 1);
// pq.enqueue(2, 2);
// pq.enqueue(10, 100);

// console.log(pq.dequeue());
// console.log(pq.dequeue());
// console.log(pq.dequeue());
// console.log(pq.dequeue());
// console.log(pq.dequeue());

// console.log(pq.remove());
// console.log(pq.isEmpty());
// console.log(pq.remove());
// console.log(pq.isEmpty());
// console.log(pq.remove());

//

function solution(p1, p2, p3) {
  //

  // graph: 노드 정보 배열 (2차, 빈배열)
  // distance: 최단 거리 배열 (초기화: 1e9 ≒ 무한)

  //// 다익스트라 알고리즘: 최소 힙 우선순위 큐 사용

  // 1. '출발 노드' enqueue
  // 2. dequeue
  // 3. '현 위치' 까지 거리 + '다음 노드' 까지의 거리 (출발 노드 + 현 위치 + 다음 노드) 값이 '최단 거리 배열' 의 '다음 노드' 값 보다 작으면, 값을 '최단 거리 배열' 에 저장하고 값과 '다음 노드' 를 enqueue
  // 4. 2 - 3 반복, dequeue 할 노드가 존재하지 않으면 종료

  // 출발 노드: 시작점, 거리 = 0
  // 현 위치: dequeue 된 노드
  // 다음 노드: graph의 현 위치에서 연결된 노드

  const start_node = Number(p1);
  const nodes = Number(p2);
  const arr = [...p3];

  const graph = Array.from(Array(nodes + 1), () => Array());
  const distance = Array.from(Array(nodes + 1), () => 1e9);

  // graph 에 노드 정보 입력
  for (v of arr) {
    graph[v[0]].push([v[1], v[2]]);
  }
  // graph[노드] = [노드, 거리]
  // graph[노드][0] = 노드
  // graph[노드][1] = 거리

  // console.table(graph);

  function dijk(start) {
    pq.enqueue(0, start);
    distance[start] = 0;

    while (!pq.isEmpty()) {
      let tmp = pq.dequeue();
      let dist = tmp.key; // 현재 노드까지 거리
      let now = tmp.value; // 현재 노드
      // console.log(dist);
      if (distance[now] < dist) continue; // 현재 노드까지 거리가 최단 거리 배열 저장값보다 작으면 pass: 체크 배열이 필요없는 이유
      for (v of graph[now]) {
        // 현재 노드에서 연결된 노드들 정보 처리
        let next_node = v[0]; // 다음 노드
        let next_dist = v[1]; // 다음 노드까지 거리
        /////////////////////////
        let cost = dist + next_dist;
        if (cost < distance[next_node]) {
          distance[next_node] = cost;
          pq.enqueue(cost, next_node);
        }
      }
    }
  }

  dijk(start_node);

  // console.log(pq.isEmpty());
  // console.log(graph);
  // console.log(distance);
  // console.log(visited);

  return distance;
}

const in1 = 1; // 시작 노드
const in2 = 6; // 노드 수
const in3 = [
  [1, 2, 2],
  [1, 3, 5],
  [1, 4, 1],
  [2, 3, 3],
  [2, 4, 2],
  [3, 2, 3],
  [3, 6, 5],
  [4, 3, 3],
  [4, 5, 1],
  [5, 3, 1],
  [5, 6, 2],
];
const in4 = 0;
const in5 = 0;

console.log(solution(in1, in2, in3, in4, in5));
// console.table(solution(in1, in2, in3, in4, in5));
