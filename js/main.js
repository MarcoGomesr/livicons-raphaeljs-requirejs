require.config({
 paths:{
  'eve' : 'eve',
  'raphael' : 'raphael.min', 
  'livicons' : 'livicons-demo-1.3.min',
  'jquery': 'jquery'

 },
 shim:{
  'eve': {
    exports: "eve"
  },

  'raphael': {
    deps: ["eve", "jquery"],
  },

  'livicons': {
    deps: ["raphael" ]
  
     

  }



 }
});


require([ "livicons" ], function(livicons) {
  

});