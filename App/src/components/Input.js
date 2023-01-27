export default function Input({ $target }) {
  this.$target = $target;
  this.value = '';

  const $input = document.createElement('input');

  $input.addEventListener('keyup', (e) => {
    const { value } = e.target;
    this.value = value;
  });

  this.setValue = (value = '') => {
    $input.value = value;
  };

  this.render = () => {
    this.$target.append($input);
  };

  this.render();
}
