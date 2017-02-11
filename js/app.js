if (navigator.serviceWorker){
  navigator.serviceWorker.register('./service-worker.js', {scope: './'})
.then(function(registration){
  console.log('cool that registered properly');
})
.catch(function(err){
  console.log('oh no error', err);
})
}else{
  console.log('no sw on this browser');
}
