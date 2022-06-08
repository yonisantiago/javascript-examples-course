// const list1 = [
//     1,
//     2,
//     3,
//     1,
//     2,
//     3,
//     2,
//     4,
//     2,
//     2,
//     1,
// ];


function calculateMode(list1){

    const list1Count = {};
    // how many times an element apears in the list
    list1.map(
        function(element) {
            if(list1Count[element]) {
                list1Count[element] += 1;
            } else {
            list1Count[element] = 1;
            }
            
        }
    );

    const list1Array = Object.entries(list1Count).sort(
        function(elementA, elementB) {
        return elementA[1] - elementB[1];
        }
    ); // converting the object to an array

    const mode = list1Array[list1Array.length - 1];
    return mode;
}