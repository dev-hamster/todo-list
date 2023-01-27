export default function Button({
  $target,
  text = '',
  type = 'button',
  onClick,
}) {
  this.$target = $target;
  const $button = document.createElement('button');
  $button.innerText = text;
  $button.type = type;

  if (onClick) {
    $button.addEventListener('click', () => onClick());
  }

  this.render = () => {
    this.$target.append($button);
  };

  this.render();
}
