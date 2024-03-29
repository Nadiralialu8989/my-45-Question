// Lowercase
var personName = "Aneesha";
console.log("lowercase:", personName.toLowerCase());
// Uppercase
console.log("uppercase:", personName.toLocaleUpperCase());
// Titlecase
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
