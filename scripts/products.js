//Karanvir's file
/**
 * Uses the fetch API to read form the local text file. 
 */
fetch('text files/products.txt')
 .then(response => response.text())
 .then(text => {
   console.log(text)
   text=text.split('\n')
   console.log("splitting by lines")
   
   text.splice(0, 2)
    console.log("removed first 2 elements")
   
   var listOfProducts=[]
   var textBeingWritten=[]
   for (var i = 0; i < text.length; i++){
     console.log("splitting by ---")
    let dataFromTextforPoducts = text[i].split("---");
    let name= dataFromTextforPoducts[0];
    console.log("name:" + name)

    let price= parseFloat(dataFromTextforPoducts[1]);
    console.log("price:" + price)

    let link= dataFromTextforPoducts[2];
    console.log("link:" + link)

    let charity= dataFromTextforPoducts[3]; 
    console.log("charity:" + charity)

    let moneyDonation= parseInt(dataFromTextforPoducts[4]); 
    console.log("moneyDonation:" + moneyDonation)
    
    let product= new Product(name, price, link, charity,moneyDonation)
    console.log("product:" + product)

    listOfProducts.push(product)
   }

   console.log(listOfProducts)

   /**
    * Sorts the items from the lowest to highest price
    * @returns the sorted list of items. 
    */
  
   listOfProducts.sort((firstElement, secondElement) => {
    return firstElement.price - secondElement.price;
  })
   console.log("sorted "+ listOfProducts)

//Writes out each product's information
  for (var i = 0; i < listOfProducts.length; i++){
    var donationType= listOfProducts[i].typeOfDonation()
   console.log("donationType "+ donationType)
   console.log("pushing in text to be written ")

    textBeingWritten.push("<br>" +"Item Number:"+ i+"<br>" + "Name: "+ listOfProducts[i].name +'<br>'+"Price: $"+ listOfProducts[i].price+"<br>"+ "Charity:" + listOfProducts[i].charity +'<br>'+ "link: " + "<a href="+ listOfProducts[i].link+ " >Item link</a>"+ '<br>'+ donationType+'<br>');
    if (i==0){
      console.log("image number "+ i)

      var image = document.createElement("img");
      image.src = 'productImages/item0ofList.jpg';
      image.style.width= "125px"
      document.getElementById('itemDisplay2').appendChild(image);
      var br = document.createElement("br");
      document.getElementById('itemDisplay2').appendChild(br);
  }
  else if (i==1){
      console.log("image number "+ i)
      var image = document.createElement("img");
      image.src = 'productImages/item1ofList.jpg';
      image.style.width= "150px"
      document.getElementById('itemDisplay2').appendChild(image);
      var br = document.createElement("br");
      document.getElementById('itemDisplay2').appendChild(br);
  }
    else if (i==2){
        console.log("image number "+ i)
        var image = document.createElement("img");
        image.src = 'productImages/item2ofList.jpg';
        image.style.width= "135px"
        document.getElementById('itemDisplay2').appendChild(image);
        var br = document.createElement("br");
        document.getElementById('itemDisplay2').appendChild(br);
    }
    else if (i==3){
        console.log("image number "+ i)
        var image = document.createElement("img");
        image.src = 'productImages/item3ofList.jpg';
        image.style.width= "125px"
        document.getElementById('itemDisplay2').appendChild(image);
        var br = document.createElement("br");
        document.getElementById('itemDisplay2').appendChild(br);
    }
     else if (i==4){
        console.log("image number "+ i)
        var image = document.createElement("img");
        image.src = 'productImages/item4ofList.jpg';
        image.style.width= "140px"
        document.getElementById('itemDisplay2').appendChild(image);
        var br = document.createElement("br");
        document.getElementById('itemDisplay2').appendChild(br);
    }
     else if (i==5){
        console.log("image number "+ i)
        var image = document.createElement("img");
        image.src = 'productImages/item5ofList.jpg';
        image.style.width= "100px"
        document.getElementById('itemDisplay2').appendChild(image);
        var br = document.createElement("br");
        document.getElementById('itemDisplay2').appendChild(br);
    }
     else if (i==6){
        console.log("image number "+ i)
        var image = document.createElement("img");
        image.src = 'productImages/item6ofList.jpg';
        image.style.width= "150px"
        document.getElementById('itemDisplay2').appendChild(image);
        var br = document.createElement("br");
        document.getElementById('itemDisplay2').appendChild(br);
    }
     else if (i==7){
        console.log("image number "+ i)
        var image = document.createElement("img");
        image.src = 'productImages/item7ofList.png';
        image.style.width= "150px"
        document.getElementById('itemDisplay2').appendChild(image);
        var br = document.createElement("br");
        document.getElementById('itemDisplay2').appendChild(br);
    }
     else if (i==8){
        console.log("image number "+ i)
        var image = document.createElement("img");
        image.src = ' productImages/item8ofList.jpg';
        image.style.width= "150px"
        document.getElementById('itemDisplay2').appendChild(image);
        var br = document.createElement("br");
        document.getElementById('itemDisplay2').appendChild(br);
    }
    console.log("done")
     

 };
 console.log("joining sorted lists by -------s and displaying")
  document.getElementById("itemDisplay").innerHTML = (textBeingWritten.join('-------------------------------------------------------------------------------------------------------------------------------------------------------'))
 });
