var index = 0;

function documentColors() {
    var colors = ["red", "blue", "green", "purple", "indigo", "orange"];
    document.getElementsByTagName("body")[0].style.background = colors[index++]; 

    if (index >= colors.length) { 
        index = 0;
    }
}


