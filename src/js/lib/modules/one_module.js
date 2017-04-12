define(function() {
  console.log('one_module loaded');
  return {
      one_module: function() {
          $(document).ready(function() {
            console.log("one module");
          }); //end document ready
          var Content = {
            contentdiv : document.getElementById('content'),
            elemStyles : function() {
              //apply style to #content
              this.contentdiv.setAttribute('style','background-color:green;height:100px;');
              this.contentdiv.createTextNode('This is Javascript!');
            },
          };
          var Css = {
            clred : 'red',
            clrblue : 'blue'
          };
          function contStyle() {
            Content.elemStyles();
          }
          contStyle();
      } //end one_module method as function
  }; //end return
}); //end define()
