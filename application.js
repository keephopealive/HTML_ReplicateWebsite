/* jQuery File */


$(document).ready(function(){
$("p").text("CHANGED CONTENT IN THE MIDDLE OF THE PAGE BY JQUERY");
$("#homebutton").click(function(){
$("#homebutton").animate({
    width: "50%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "10em",
    borderWidth: "100px"
	}, 1500);
});
