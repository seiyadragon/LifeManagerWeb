var routineList;

function addClick()
{
    window.localStorage.setItem("current_routine", null)
    url_redirect("routine.html");
}

function editClick()
{
    url_redirect("routine.html");
}

function delClick()
{
    var currentRoutine = window.localStorage.getItem("current_routine");

    for (var i = 0; i < routineList.length; i++)
        if (routineList[i].id == currentRoutine.id)
            routineList.splice(i);
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

function between(x, min, max)
{
    return x >= min && x <= max;
}

function ready()
{
    var ul = document.getElementById("routine_list");
    routineList = JSON.parse(window.localStorage.getItem("routine_list"));
    if (routineList == null)
        routineList = [];
    
    var liList = [];
        
    for (var x = 0; x < routineList.length; x++)
    {
        var currentRoutine = window.localStorage.getItem("current_routine");
        var li = document.createElement("li");
        li.id = "li" + routineList.length;

        for (var y = 0; y < routineList[x].lines.length; y++)
        {
            var child = document.createElement("h3");
            if (y > 0)
            {
                child = document.createElement("h6");
                child.appendChild(document.createTextNode(y.toString() + ": " + routineList[x].lines[y]));
            }
            else
            {
                child.appendChild(document.createTextNode("Routine: " + routineList[x].lines[y]));
            }

            li.appendChild(child);
        }

        liList.push(li);
        ul.appendChild(liList[liList.length - 1]);
    }

    for (var i = 0; i < liList.length; i++)
    {
        liList[i].onclick = function()
        {
            window.localStorage.setItem("current_routine", liList[i]);
        }
    }
}