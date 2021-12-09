// Calculate weighted mean 

const notes = [
    {
        course: "Español",
        notes: 10,
        credit: 2,
    },
    {
        course: "Fisica",
        notes: 8,
        credit: 5,
    },
    {
        course: "Matematicas",
        notes: 7,
        credit: 5,
    },


];

const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;

