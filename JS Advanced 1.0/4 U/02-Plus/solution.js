function solve() {
  
  let text = document.getElementById("text").value;
  let namingConvention = document.getElementById("naming-convention").value;
  let resultSpan = document.getElementById("result");

  
  function toCamelCase(str) {
      return str
          .toLowerCase()
          .split(' ')
          .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
          .join('');
  }

 
  function toPascalCase(str) {
      return str
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join('');
  }

  
  let result;
  if (namingConvention === "Camel Case") {
      result = toCamelCase(text);
  } else if (namingConvention === "Pascal Case") {
      result = toPascalCase(text);
  } else {
      result = "Error!";
  }


  resultSpan.textContent = result;
}
