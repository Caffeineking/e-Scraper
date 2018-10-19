$(document).on("click", ".scrapeNow", function () {
    
  console.log("you made it");

  $.ajax({
    method: "GET",
    url: "/scrape/"
  }).then(function () {
    $.getJSON("/articles", function (data) {
      console.log(data);
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        // Display the apropos information on the page
        $("#articles").append("<div class='card'><p data-id='" +
          data[i]._id + "'>" +
          "<h5 class='card-header'>" + data[i].title +
          "</br>" + "<a href='"+ data[i].link+"''class='btn btn-primary' target='_blank'>" + "Link" + "</a>" + "</p>");
      }
    })
  })
})