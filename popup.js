document.addEventListener('DOMContentLoaded', function () {
    var colorPicker = document.getElementById('colorPicker');
    var colorInput = document.getElementById('colorInput');

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTabId = tabs[0].id;

        // Listen for messages from the content script
        chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
            if (sender.tab && sender.tab.id === activeTabId && message.action === 'clickedColor') {
                var clickedColor = message.color;
                colorInput.value = clickedColor;
                colorPicker.value = clickedColor;
            }
        });
    });

    colorInput.addEventListener('input', function () {
        var inputColor = colorInput.value;
        colorPicker.value = inputColor;
        console.log('Input color:', inputColor);
    });

    colorPicker.addEventListener('input', function () {
        var selectedColor = colorPicker.value;
        colorInput.value = selectedColor;
        console.log('Selected color:', selectedColor);
    });
});