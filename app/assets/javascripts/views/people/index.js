modulejs.define("people.index", ["routes"], function(routes) {
  return function() {
    "use strict";

    var tbody = $("tbody"),
        btnLoad = $("button#load");

    btnLoad.click(function() {
      var promise;

      btnLoad.attr("disabled", "disabled");
      promise = $.get(routes.people_path({"format": "json"}));

      promise.done(function(data) {
        var html = "";

        data && data.forEach(function(person) {
          html += JST["templates/people/tr"]({
            name: person.name,
            state: person.state,
            country: person.country,
            show_url: routes.person_path(person.id),
            edit_url: routes.edit_person_path(person.id),
            destroy_url: routes.person_path(person.id)
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
