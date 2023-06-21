//your JS code here. If required.
   function login() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const rememberMe = document.getElementById('checkbox').checked;

      if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }

      alert(`Logged in as ${username}`);
    }

    function loginAsExistingUser() {
      const savedUsername = localStorage.getItem('username');
      alert(`Logged in as ${savedUsername}`);
    }