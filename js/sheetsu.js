      function successFunc(data) {
        console.log(data[0].Name);
        var myData = data[0].Name;
        var price1 = document.getElementById('first-pro-price').innerHTML= myData;

      }
      // Get all rows where column 'score' is '42'
      var searchQuery = {
        Name: "Cayan-15",
      };
      Sheetsu.read("https://sheetsu.com/apis/v1.0su/106fbe632776", {
        search: searchQuery
      }, successFunc);
