(function() {
  const messages = [
    'Fix bug in IE',
    '¯\\_(ツ)_/¯',
    'Should work now',
    'WTAF',
  ];
  const addButtons = () => {
    const commitSummaryInput = document.querySelector('#commit-summary-input');
    if (!commitSummaryInput || commitSummaryInput.classList.contains('oneclicked')) {
      return;
    }
    commitSummaryInput.classList.add('oneclicked');
    messages.reverse().map(msg => {
      const button = document.createElement('button');
      button.className = 'btn btn-default';
      button.textContent = msg;
      button.onclick = event => {
        commitSummaryInput.value = msg;
      }
      commitSummaryInput.parentElement.insertBefore(button, commitSummaryInput.nextSibling);
      commitSummaryInput.parentElement.insertBefore(document.createTextNode(' '), button.nextSibling);
    })
  }
  addButtons()
  setInterval(addButtons, 1000)
})();
