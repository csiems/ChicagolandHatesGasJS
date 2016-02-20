var Marker = function(searchData) {
  this.station_name = searchData.station_name;
  this.latitude = searchData.latitude;
  this.longitude = searchData.longitude;
  this.fuel_type_code = searchData.fuel_type_code;
  this.street_address = searchData.street_address;
  this.state = searchData.state;
  this.zip = searchData.zip;
};

exports.User = User;
