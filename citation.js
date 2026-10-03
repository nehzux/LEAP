const copyButton = document.querySelector('.copy-citation');
const citation = document.querySelector('#bibtex');
const copyLabel = copyButton.querySelector('[data-copy-label]');
const copyStatus = document.querySelector('.copy-status');

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(citation.textContent.trim());
    copyLabel.textContent = 'Copied!';
    copyStatus.textContent = 'BibTeX copied to clipboard.';
  } catch {
    const range = document.createRange();
    range.selectNodeContents(citation);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = 'Copy the highlighted citation with your keyboard or browser menu.';
  }
});
