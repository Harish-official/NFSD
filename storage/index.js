// set session storage
function setSessionStorage(key, value) {
  sessionStorage.setItem(key, value);
}

// set local storage
function setLocalStorage(key, value) {
  return localStorage.setItem(key, value);
}

// get session storage
function getSessionStorage(key) {
  return sessionStorage.getItem(key);
}

// get local storage
function getLocalStorage(key) {
  return localStorage.getItem(key);
}

// remove session storage
function removeSessionStorage(key) {
  return sessionStorage.removeItem(key);
}

// remove local storage
function removeLocalStorage(key) {
  return localStorage.removeItem(key);
}
