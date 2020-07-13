document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector("body").style.visibility = "hidden"; 
        document.querySelector("#loaderAnim").style.visibility = "visible"; 
    } else { 
        $("#loaderAnim").fadeOut()
        $("body").fadeIn("slow")
        document.querySelector("#loaderAnim").style.visibility = "none"; 
        document.querySelector("body").style.visibility = "visible"; 
    } 
};