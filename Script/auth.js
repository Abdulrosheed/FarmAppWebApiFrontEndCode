var adminToken = localStorage.getItem('admin');
var farmerToken = localStorage.getItem('farmer');
var farmInspectorToken = localStorage.getItem('farmInspector');
var companyToken = localStorage.getItem('company');
var token = localStorage.getItem('token')

if(token==null ) window.location.href= '/Html/homePage.html';