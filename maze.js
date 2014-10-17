var loser = false;  

window.onload = function() {
    $("start").onclick = start;
    $("start").onmouseover = hover;
    $("end").onmouseover = end;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
};

function hover(){
    if(loser === null){
        loser = false;
        $("status").textContent = "The trial has started!!!!";
    }
}

function overBoundary() {
    loser = true;
    $("status").textContent = "You've failed the mouse trial!!! :'(";
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addClassName("youlose");
    }
}

function start() {
    loser = false;
    $("status").textContent = "The trial has started!!!!";
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].removeClassName("youlose");
    }
}

function end() {
    if (!loser) {
        $("status").textContent = "Congratulations! You've cleared the mouse trial!!! :]";
    }
        
}
/*function end(){
    if(loser){
        alert("You have failed!!! >:( ");
    }
}*/
