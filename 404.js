console.log("Seems like the page you were looking for is gone. Please try again later.");
window.addEventListener("load", () => {
  setTimeout(() => {
    if(location.pathname=="/"&&document.title.includes("404")&&document.body.innerText.includes("The page you requested could not be found. It may have been moved or removed.")) location.href=location.href;
  }, 500);
});
