import Button from './Button.js';
import Input from './Input.js';

export default function TodoInput({ $target, handleCreate, handleRemove }) {
  this.$target = $target;
  this.handleCreate = handleCreate; // TODO this 바인딩이 필요한가?
  this.handleRemove = handleRemove; // TODO this 바인딩이 필요한가?

  const $form = document.createElement('form');
  const input = new Input({ $form, $target: $form });
  const createButton = new Button({
    $target: $form,
    text: '저장',
    type: 'submit',
  });
  const removeButton = new Button({
    $target: $form,
    text: '삭제',
    type: 'button',
    onClick: this.handleRemove,
  });

  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!input.value) return;
    input.setValue();

    this.handleCreate(input.value);
  });

  this.render = () => {
    this.$target.append($form);
  };

  this.render();
}
