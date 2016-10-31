$(document).ready(function() {
  
  $("#row1").css("background-color", "#FFF");
  $("#random").css("background-color", "#FFF");
  
  $("#random").on("click", function() {
    
  window.open("https://en.wikipedia.org/wiki/Special:Random");  
  })
  
  
   $("#searchButton").on("click", function() {
      var searchWord = document.getElementById("searchBox").value;
      var wikiAPI = "https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=7&search="+searchWord+"&callback=?" 
     //window.open(wikiAPI);
   $.getJSON(wikiAPI, function(json){
     var randomNumber=Math.floor(Math.random()*6) + 1;
     $("#main1").html("<p class=main1><a href=" +json[3][0]+">"+searchWord+"</a>"+ " ==> "+json[2][randomNumber] +"</p>");
     
  })
  $("#main1").slideDown("slow");
  })
  
});
