class Routine
{
    lines = [];
    id;

    constructor(id, lines)
    {
        this.id = id;

        for (var i = 0; i < lines.length; i++)
        {
            this.lines.push(lines[i]);
        }
    }
}

var currentRoutine;
var routineList = new Array();

function addRoutineClick()
{
    var ul = document.getElementById("arealist");
    var textarea = document.createElement("textarea");
    textarea.className = "textarea";
    textarea.rows = "1";
    textarea.appendChild(document.createTextNode("Item"));
    ul.appendChild(textarea);
}

function saveRoutineClick()
{
    var areas = document.getElementsByClassName("textarea");
    var lines = [];

    for (var i = 0; i < areas.length; i++)
        lines.push(areas[i].value);

    var routine = new Routine(routineList.length, lines);
    routineList.push(routine);

    window.localStorage.setItem("routine_list", JSON.stringify(routineList));
    url_redirect("routines.html");
}

function cancelRoutineClick()
{
    url_redirect("routines.html");
}

function url_redirect(url){
    var X = setTimeout(function(){
        window.location.replace(url);
        return true;
    },300);

    if( window.location = url ){
        clearTimeout(X);
        return true;
    } else {
        if( window.location.href = url ){
            clearTimeout(X);
            return true;
        }else{
            clearTimeout(X);
            window.location.replace(url);
            return true;
        }
    }
    return false;
};

function ready()
{
    currentRoutine = window.localStorage.getItem("current_routine");
    if (currentRoutine == null)
    {
        currentRoutine = -1;
        window.localStorage.setItem("current_routine", currentRoutine);
    }

    routineList = JSON.parse(window.localStorage.getItem("routine_list"));
    if (routineList == null)
    {
        routineList = new Array();
        window.localStorage.setItem("routine_list", JSON.stringify(routineList));
    }
}