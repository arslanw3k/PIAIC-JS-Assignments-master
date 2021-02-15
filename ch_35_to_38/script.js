
        function titleCase(str) {
            var splitStr = str.toLowerCase().split(' ');
            for (var i = 0; i < splitStr.length; i++) {
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
            }
            return splitStr.join(' ');
        }

        
        function factorize(n) {
            if (n < 0) {
                return -1;
            }
            else if (n == 0) {
                return 1;
            }
            else{
            return n * factorize(n - 1);
            }
        }

        

        let fabNumber = Number(prompt("Enter Number : "));
        console.log(`Factorization of ${fabNumber} is ${factorize(fabNumber)}`);

   