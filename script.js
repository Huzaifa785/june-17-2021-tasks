/*
June 17, 2021
Task
    1)
    var obj = [
          { person: "Name 1", age: "2", company: "GUVI" },
          { person: "Name 2", age: "5", company: "GUVI geek" },
          { person: "Name 3", age: "8", company: "GUVI geek network" },
        ]
    use the above JSON to iterate over all for loops (for, for in, for of, forEach)
    2)
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://restcountries.eu/rest/v2/all");
        xhr.onload = function () {
          var data = JSON.parse(this.response);
          console.log(data);
        };
        xhr.send();
    use the restcountries API url ->  https://restcountries.eu/rest/v2/all
    and diplay all the country flags in console
    3) 
    use the same restcountries and print all countries name, region, sub region and population.
    4) read about the difference between window, screen and document in javascript
*/

// Answer 1
// var obj = [
//     { person: "Name 1", age: "2", company: "GUVI" },
//     { person: "Name 2", age: "5", company: "GUVI geek" },
//     { person: "Name 3", age: "8", company: "GUVI geek network" },
//   ]
// for loop
// for (i=0; i<obj.length; i++) {
//     console.log(obj[i])
// }

// for in loop
// for (i in obj) {
//     console.log(obj[i])
// }

// for of loop
// for (i of obj) {
//     console.log(i)
// }

// for each loop
// obj.forEach(i => {
//   console.log(i)  
// })
// --------------------------------------------------------------------------------- //

// Answer 2
// var xhr = new XMLHttpRequest();
//         xhr.open("GET", "https://restcountries.eu/rest/v2/all");
//         xhr.onload = function () {
//           var data = JSON.parse(this.response);
//         //   console.log(data);
//           for (let d = 0; d < data.length; d++) {
//               const element = data[d].flag;
//               console.log(element);

              
//           }
//         };
//         xhr.send();
// --------------------------------------------------------------------------------- //

// Answer 3
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var data = JSON.parse(this.response);
  for (let i = 0;  i < data.length; i++) {
    const country = data[i].name;    
    const region = data[i].region;    
    const subregion = data[i].subregion;    
    const population = data[i].population;
    console.log("Conutry:", country, ", ", "Region:", region, ", ", "Sub_Region:", ", ", subregion, "Population:", ", ", population)    
  }
};
xhr.send();