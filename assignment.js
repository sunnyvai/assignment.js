
//--------------------------1st math kilometerToMeter ----------------------




            function kilometerToMeter(kilometer){

                var meter = (kilometer * 1000);
                return meter;
            } 

            var result = kilometerToMeter(70)
            console.log (result)

// basic math is 1 kilometer is 1000 meter

//------------------------2nd math  budgetCalculator-----------------//

function budgetCalculator (watch,mobile,laptop){


    if (watch,mobile,laptop > 0) {

        var firstPart = (watch * 50);

        var secondPart = (mobile * 100);

        var thirdPart = (laptop * 500);   

        var totalPrice = firstPart + secondPart + thirdPart;

      
    }
      

      return totalPrice; 

      
  }
        console.log(budgetCalculator(10,9,8)); 


           

//   -------------------- 3rd math hotelCost ----------------------------//

            function hotelCost(day){

                var totalCost = 0;
                
                if (day <=10) {
                    totalCost = day * 100
                }

                else if (day <= 20) {
                    var firstPart = 10 * 100
                    var remaining = day -10
                    var secondPart = remaining * 80
                    totalCost = firstPart + secondPart
                }

                else {
                    var firstPart = 10 * 100
                    var secondPart = 10 * 80
                    var remaining = day - 10
                    var thirdPart = remaining * 50

                    totalCost = firstPart + secondPart + thirdPart

                }
                return totalCost

            }

                var result = hotelCost(21)
                console.log(result)


    // ----------------- 4th math   megaFriend ------------------------------//





                function megaFriend(name) {

                    var wordSpan = 0;
                    var largest;
                    
                    for (var i = 0; i < name.length; i++) {

                    if (name[i].length > wordSpan) {
                        wordSpan = name[i].length;
                        largest = name[i];
                    }
                    }
                    return largest;
                    }
                    
                    var friend = megaFriend(["nisan","shahed","simi", "naya", "jax"]);


                    console.log(friend);  


// -------------------------the end ---------------------------//
                    







