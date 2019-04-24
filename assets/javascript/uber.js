// script input
var lat = request.get("lat");
var lng = request.get("lng");
var url = "https://api.uber.com/v1/products";
var token = "M0q6dX9nEgLVRH6NvQ2vJGiWygJ-thzKR1AcU5-i";

// send Ajax request
var res = XHR2.send("GET", url + "?latitude="+lat+"&longitude="+lng, {
 "headers": {
 "Authorization": "Token " + token
 }
});
// response
response.success(res, "application/json");


//https://api.uber.com/v1.2/products?access_token=<TOKEN>&latitude=XXX&longitude=XXX
