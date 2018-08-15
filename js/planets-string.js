(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsWithBr = planetsArray.join("<br>");

    var planetsToList = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";
    console.log(planetsToList);
    // var newArry = [];
    // for(var i = 0; i < planetsArray.length; i++){
    //     // newArry.push("<br>");
    //     newArry.push(planetsArray[i]);
    //     newArry.push("<br>");
    // }
    // String.prototype.replaceAll = function(search, replacement) {
    //     var target = this;
    //     return target.split(search).join(replacement);
    // };
    // newArry = newArry.join(",");
    // newArry = newArry.replaceAll(",", "");
    // console.log(newArry);
    // var ul = [];
    // for(var i = 0; i < planetsArray.length; i++){
    //     ul.push("<li>");
    //     ul.push(planetsArray[i]);
    //     ul.push("</li>");
    // }
    // ul.unshift("<ul>");
    // ul.push("</ul>");
    // ul = ul.join(",");
    // ul = ul.replaceAll(",", "");
    // console.log(ul);
})();
