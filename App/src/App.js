import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js';

const data = [
  {
    id: 1,
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'JS 복습하기',
    isCompleted: false,
  },
];

export default function App() {
  this.data = data;

  const $app = document.querySelector('#app');
  const todoInput = new TodoInput({
    $target: $app,
    handleCreate: (text) => {
      const newData = [...this.data, { id: this.data.length + 1, text }];
      this.data = newData;
      todoList.setState(this.data);
    },
    handleRemove: () => {
      this.data = [];
      todoList.setState(this.data);
    },
  });
  const todoList = new TodoList({
    $target: $app,
    data: this.data,
    handleUpdate: (id) => {
      const idx = id - 1;
      const newData = [...this.data];
      newData[idx] = {
        ...newData[idx],
        isCompleted: !newData[idx].isCompleted,
      };
      this.data = newData;

      todoList.setState(this.data);
    },
    handleDelete: (id) => {
      const newData = [...this.data].filter(({ id: _id }) => _id !== id);
      this.data = newData;
      todoList.setState(this.data);
    },
  });
}
