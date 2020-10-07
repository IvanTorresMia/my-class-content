

$(".search").on("click", function() {
    var userInput = $("#userInput").val();
    var apiKey = "xBUBYZjOuTGYfCnVPdMKTU9aPknowH0X"
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userInput + "&api-key=" + apiKey;
    
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
            
            var articleArr = response.response.docs;
            for(i = 0; i < articleArr.length; i++) {
                var currentAr = articleArr[i].subsection_name;
                var optionEl = $("<option>").text(currentAr);
                $("select").append(optionEl);
                
                var articleDiv = $(".headLines")
                var articleCard = $("<div>");
                articleCard.attr("class", "card")
                var webURL = response.response.docs[i].web_url;
                var anchorTag = $("<a>")
                anchorTag.text("Click Here!");
                anchorTag.attr("href", webURL);

                articleCard.append(anchorTag);
                articleDiv.append(articleCard);


            }



        })


})