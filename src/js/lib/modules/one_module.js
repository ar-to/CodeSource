define(function() {
  console.log('one_module loaded');
  return {
      one_module: function() {
          $(document).ready(function() {
            console.log("one module");
          }); //end document ready
          console.log('it works!!');
      } //end one_module method as function
  }; //end return
}); //end define()
