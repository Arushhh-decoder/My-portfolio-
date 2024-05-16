var partners= document.getElementById('partners');
var services = document.getElementById('services');

partners.addEventListener('click', function() {
  $(partners).toggleClass("active");
  $(".parent:not(#clients)").toggleClass("invisible");
}, false);

services.addEventListener('click', function() {
  $(services).toggleClass("active");
  $(".parent:not(#services)").toggleClass("invisible");
}, false);