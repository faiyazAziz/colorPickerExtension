document.addEventListener('click',function(event){
    var targetElement = event.target;
    var color = getComputedStyle(targetElement).backgroundColor;

    chrome.runtime.sendMessage({action: 'clickedColor',color:color});
});