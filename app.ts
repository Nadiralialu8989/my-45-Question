// Lowercase
let personName: string ="Aneesha"
console.log("lowercase:", personName.toLowerCase());

// Uppercase

console.log("uppercase:", personName.toLocaleUpperCase());

// Titlecase
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));