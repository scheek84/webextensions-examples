browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!tab.url.match(/^about:/)) {
    browser.pageAction.show(tab.id);
  }
});
const targetNode = document.querySelector("#someElement");
const observerOptions = {
  childList: true,
  attributes: true,
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);

/* some time later… */

observer.disconnect();