document.addEventListener('submit', (e) => {
  if (e.target.matches('#login')) {
    e.preventDefault();
    let $form = e.target;
    if (!$form.user.value) return window.alert('Debes completar el usuario');
    if (!$form.user.value.includes('@'))
      return window.alert('Falta el arroba en el usuario');
    if (!$form.password.value) return window.alert('Debes completar la clave');
    $form.submit();
  }
});
