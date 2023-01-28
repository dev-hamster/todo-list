export default function TodoList({
  $target,
  data,
  handleUpdate,
  handleDelete,
}) {
  this.$target = $target;
  this.data = data.filter((item) => !item.isCompleted);
  this.completedData = data.filter((item) => item.isCompleted);
  this.handleUpdate = handleUpdate;
  this.handleDelete = handleDelete;

  this.setState = (newData) => {
    this.data = newData.filter((item) => !item.isCompleted);
    this.completedData = newData.filter((item) => item.isCompleted);

    this.render();
  };

  this.render = () => {
    const $ul = document.createElement('ul');
    $ul.className = 'todo-list';
    const $completedUl = document.createElement('ul');
    $completedUl.className = 'completed-todo-list';

    $completedUl.addEventListener('change', (e) => {
      this.handleUpdate(e.target.value);
    });

    $ul.addEventListener('change', (e) => {
      this.handleUpdate(e.target.value);
    });

    this.data.map((item) =>
      $ul.appendChild(TodoItem({ ...item, handleDelete: this.handleDelete }))
    );
    this.completedData.map((item) =>
      $completedUl.appendChild(
        TodoItem({ ...item, handleDelete: this.handleDelete })
      )
    );

    if (this.$target.querySelector('ul.todo-list')) {
      this.$target.querySelector('ul.todo-list').replaceWith($ul);
    } else {
      this.$target.append($ul);
    }

    if (this.$target.querySelector('ul.completed-todo-list')) {
      this.$target
        .querySelector('ul.completed-todo-list')
        .replaceWith($completedUl);
    } else {
      this.$target.append($completedUl);
    }
  };

  this.render();
}

function TodoItem({ id, text, isCompleted, handleDelete }) {
  const $item = document.createElement('li');
  $item.innerHTML = `
    <label>
      <input type="checkbox" value=${id} />  
      <button>삭제</button>
      ${text}
    </label>
  `;

  $item.querySelector('input').checked = !!isCompleted;
  $item
    .querySelector('button')
    .addEventListener('click', () => handleDelete(id));

  return $item;
}
