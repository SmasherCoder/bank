async function loginFormHandler(event) {
  event.preventDefault();

  const user = document.querySelector('#user-login');
  const password = document.querySelector('#password-login');

  if (user && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        user_name,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/accountselection/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

