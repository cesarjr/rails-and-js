modulejs.define("people.index", function() {
  return function() {
    "use strict";

    var tbody = $("tbody"),
        btnLoad = $("button#load");

    btnLoad.click(function() {
      var promise;

      btnLoad.attr("disabled", "disabled");
      promise = $.get("/people.json");

      promise.done(function(data) {
        var html = "";

        data && data.forEach(function(person) {
          html += JST["templates/people/tr"]({
            name: person.name,
            state: person.state,
            country: person.country,
            show_url: "/people/" + person.id,
            edit_url: "/people/" + person.id + "/edit",
            destroy_url: "/people/" + person.id
          });
        });

        tbody.html(html);
      });

      promise.fail(function(error) {
        alert("fail");
        alert("status text:" + error.statusText);
      });

      promise.always(function() {
        btnLoad.removeAttr("disabled");
      });
    });
  };
});
