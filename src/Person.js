require('dotenv').config();
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser : true, useUnifiedTopology : true });
let mongoose = require('mongoose');

let User = mongoose.model('User',
{
    fname: String,
    lname: String,
    age: Number,
    favoriFood: [{
        breakfast: String,
        dinner: string
    }]
})

let person = new user(
    {
        fname: 'Souleymane',
        age: 28,
        favoriFood: [{
            breakfast: 'ragout',
            dinner: 'foutou'
        }]
    }
);

person.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })
// la sauvegarde dois etre effectuer avec succes

// creation de multipersonne

let manyPerson = new user([
    {
        fname: 'Emanuel',
        lname: 'Ogidan',
        age: 29,
        favoriFood: [{
            breakfast: 'Amala',
            dinner: 'rice'
        }]},
        {
        fname: 'Irie Lou',
        lname: 'Charlote',
        age: 20,
        favoriFood: [{
        breakfast: 'CkickenSoupe',
        dinner: 'IceCream'
        }]
        },
    {
        fname: 'Ayeni',
        lname: 'Blessing',
        age: 23,
        favoriFood: [{
            breakfast: 'Alloco',
            dinner: 'RiceGras'
        }]
    },
    {
        fname: 'Caie',
        lname: 'Gertrude',
        age: 27,
        favoriFood: [{
            breakfast: 'Alloco',
            dinner: 'RiceFtGraine'
        }]
    },
]);

// ici est la sauvegarde.
manyPerson.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })

// les recherches de prenoms.

mongoose.find([{
    
    lname: 'Gertrude',
    lname: 'Blessing',
    lname: 'Charlote',
    lname: 'Ogidan',

}])
.then(doc => {
    console.log(doc)
})
.catch(err => {
    console.error(err)
})

// recherche avec model.findOne food comme mo cle

mongoose.findOne({
    favoriFood:[{
        breakfast: 'Alloco',
        dinner: 'RiceFtGraine'

    }]
})
.then(doc => {
    console.log(doc)
})
.catch(err => {
    console.error(err)
})

// recherche par id 
/*
mongoose.findById({
    _id : objectId('')
})
.then(doc => {
    console.log(doc)
})
.catch(err => {
    console.error(err)
})

*/

// mise a jour de document

mongoose.findOneAndUpdate({
    fname: 'Souleymane',
age: 28},
{
    fname: 'petter',
        age: 27,
},
{
    new : true, //return updtade
    runValidator : true // validate before update
})
.then(doc => {
    console.log(doc)
})
.catch(err => {
    console.error(err)
})
/*supprimer un fichier par le id

mongoose.findByIdAndRemove([
    _id : objectId('')
]) 
.then(doc => {
    console.log(doc)
})
.catch(err => {
    console.error(err)
})
*/