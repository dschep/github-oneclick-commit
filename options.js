const getFromStorage = (keys) => {
  if (chrome.storage) {
    return new Promise((resolve, reject) => chrome.storage.local.get(keys, resolve));
  } else {
    return browser.storage.local.get(keys);
  }
};
const setToStorage = (object) => {
  if (chrome.storage) {
    return new Promise((resolve, reject) => chrome.storage.local.set(object, resolve));
  } else {
    return browser.storage.local.set(object);
  }
};
function saveOptions(e) {
  e.preventDefault();
  setToStorage({
    buttons: document.querySelector("#buttons").value,
  });
}

function restoreOptions() {
  function setCurrentChoice({buttons}) {
    console.log(buttons)
    document.querySelector("#buttons").value = buttons || [
      'Fix bug in IE',
      '¯\\_(ツ)_/¯',
      'Should work now',
      'WTAF',
    ].join('\n');
  }

  getFromStorage('buttons').then(setCurrentChoice);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("#buttons").onchange = saveOptions;
