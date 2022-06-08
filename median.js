const list1 = [500, 4000, 600, 700, 900000000];
list1.sort((a, b) => a - b); // sorting list of numbers

const medianList1 = parseInt(list1.length / 2);

function calculateMeanAritmetic(list){
    
    const sumList = list.reduce(
        function (valueAcumulated = 0, newElement) {
            return valueAcumulated + newElement;
        }
    )

    const promedioList =  sumList / list.length;
    
    return promedioList;
}

function isPar(number){
    if(number % 2 === 0){
        return true;
    } else {
        return false;
    }
}

let median;

if (isPar(list1.length)){
    //const medianList1 = (list1[medianList1] + list1[medianList1 - 1]) / 2;

    const element1 = list1[medianList1 - 1];
    const element2 = list1[medianList1];

    const meanElement1and2 = calculateMeanAritmetic([element1, element2]);

    median = meanElement1and2;

} else {
     median = list1[medianList1];
}