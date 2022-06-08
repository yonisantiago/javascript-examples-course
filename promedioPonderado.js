//Weighted arithmetic mean (Media ponderada)
//Weighted arithmetic mean 

const notes = [
    {course: 'Math',
    note: 10,
    credit: 2
    },
    {course: 'English',
    note: 8,
    credit: 1
    },
    {course: 'Spanish',
    note: 9,
    credit: 1
    },
]

const noteWithCredit = notes.map(function(noteObject){
   return  noteObject.note * noteObject.credit   
});

const sumOfNotesWithCredit = noteWithCredit.reduce(
    function(sum = 0, note){
        return sum + note
    }
);

const credits = notes.map(function(noteObject){
    return noteObject.credit
} );

const sumOfCredits = credits.reduce(
    function(sum = 0, credit){
        return sum + credit
    }
);

const WeightedMean = sumOfNotesWithCredit / sumOfCredits;
