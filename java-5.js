 const users = [
  {
    first_name: 'Mike',
    location: 'London'
  },
  {
    first_name: 'Tim',
    location: 'US'
  },
  {
    first_name: 'John',
    location: 'Australia'
  }
];
let name=users.map(function(value){
   return value.first_name+" lives in "+value.location;
 });
  console.log (name)
  