async function loginFormHandler(event) {
  event.preventDefault();

  const user = document.querySelector('#user-login').value;
  const password = document.querySelector('#password-login').value;

  if (user && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        user,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/acctselection/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

