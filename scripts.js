document.addEventListener("DOMContentLoaded", function() {
    // This function will be called when the DOM is fully loaded

    // Load additional scripts here
    loadScript("additionalScript1.js");
    loadScript("additionalScript2.js");
});

function loadScript(url) {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
}
