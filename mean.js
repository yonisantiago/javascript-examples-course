// Salary list
// Language: javascript

// //const list1 = [500, 600, 700, 900]

// let sumList1 = 0;

// for(let i = 0; i < list1.length; i++){
//     //sumList1 += list1[i];
//     sumList1 = sumList1 + list1[i];
//     console.log(sumList1);
// }

// const promedioList1 = sumList1 / list1.length;

function calculateMeanAritmetic(list){
    // Using FOR Cycle
    // let sumList = 0;
    // for(let i = 0; i < list.length; i++){
    //     sumList = sumList + list[i];
    // }

    //Using array.reduce method (reduce is a method of array) 
    
    const sumList = list.reduce(
        function (valueAcumulated = 0, newElement) {
            return valueAcumulated + newElement;
        }
    )

    const promedioList =  sumList / list.length;
    
    return promedioList;
}