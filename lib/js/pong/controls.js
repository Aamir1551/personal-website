document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 38:
            paddle1y -=10;
            break;
        case 40:
            paddle1y +=10;
            break;
        case 87:
            paddle2y -=10;
            break;
        case 83:
            paddle2y +=10;
            break;     
    }
};