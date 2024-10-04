
function product_Of_Odds(m, n) {
    if (m > n) {
        console.log("Invalid range: M is greater than N.");
        return 1;
    }

    let product = 1;
    for (let i = m; i <= n; i++) {
        if (i % 2 !== 0) {
            product *= i;
        }
    }

    return product;
}


console.log(product_Of_Odds(3, 9)); 
// Output: 945 (product of 3 * 5 * 7 * 9)
console.log(product_Of_Odds(9, 3));
 // Output: Invalid range: M is greater than N. 1
