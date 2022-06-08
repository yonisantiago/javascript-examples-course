//Helpers

//checking if is par
function isPar(num){
    return(num % 2 === 0);
}

//Median aritmetica

function calculateMeanAritmetic(list){
    const sumList = list.reduce(
        function (valueAcumulated = 0, newElement) {
            return valueAcumulated + newElement;
        }
    )

    const promedioList =  sumList / list.length;
    
    return promedioList;
}

//end helpers

//Calculator median salary

function medianSalaries(list){
    const median = parseInt(list.length / 2);

    if(isPar(list.length)){
        const medianPerson1 = list[median - 1];
        const medianPerson2 = list[median];

        const median = calculateMeanAritmetic([medianPerson1, medianPerson2]);
        return median; 

    } else {
        const medianPerson = list[median];
        return medianPerson;
    }

}


//median General usa

const salariesUSA = usa.map(
    function (person) {
        return person.salary;
    }
);
//Sorting salaries
const salariesUSASorted = salariesUSA.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);


const medianaGeneralUsa = medianSalaries(salariesUSASorted);

//median top 10% earners

const spliceStart = (salariesUSASorted.length * 90) / 100;
const spliceCount =  salariesUSASorted.length - spliceStart;


const salariesTop10 = salariesUSASorted.splice(
    spliceStart,
    spliceCount
)

const medianaTop10 = medianSalaries(salariesTop10);

console.log({
    medianaGeneralUsa,
    medianaTop10
});