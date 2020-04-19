
function divisible(number) {
    let change = [];

    for (let i = 1; i <= number; i++) {
        let n = i;

        if (i % 2 === 0) {   
            n = "yu";
        }
        if (i % 3 === 0) {
            if (n != i) {
                n = n + "-gi"
            }
            else{
                n = "gi";
            }
        }
        if (i % 5 === 0) {
            if (n != i) {
                n = n + "-oh"
            }
            else{
                n = "oh";
            }
        }
        
        change.push(n);
    }
    console.log(change)
}
divisible(100)