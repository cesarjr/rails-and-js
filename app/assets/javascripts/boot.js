(function() {
 "use strict";

  $(document).ready(function() {
    var mymodule,
        dispatch_to = $("body").attr("dispatcher"),
        modules = modulejs.state();

    if(modules[dispatch_to]) {
      mymodule = modulejs.require(dispatch_to);
      mymodule();
    }
  });
})();
