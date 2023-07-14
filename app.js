//Trial 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
function moreAboutHome(address,distanceFromTown,hasNeighbours)
{
    return typeof(address)+typeof(distanceFromTown)+typeof(hasNeighbours);
}

//Trial 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean

function moreAboutKaren(parents, noOfSiblings, isNuclearFamily)
{
    if(typeof(parents==='String') && typeof(noOfSiblings=='Number') && typeof(isNuclearFamily==='Boolean'))
    {
        return Boolean;
    }
}
//Trial 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value
function doesFriendExist(ageInText, ageInNumber)
{
    if(typeof ageInText !=='number' && typeof ageInNumber !=='number')
    {
        return ageInNumber,ageInText;
    }
    else if(typeof ageInText !=='number')
    {
        return ageInText;
    }
    else if (typeof ageInNumber !=='number')
    {
        return ageInNumber;
    }
    else 
    {
        return 0;
    }
}

//Trial 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?

function sweetTooth(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel)
{
    const a=totalNoOfSweets-sweetsConsumedByKaren;
    const b=sweetsConsumedInNMeters*metersToTravel;
    const c=a-b;
    return c/2;
}

//Trial 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.

function convertToCelcius(fahrenheit)
{
    let b=0;
    return 0;
}

//Trial 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
function aDifficultChoice(choice)
{
    return "Talk to her husband about it";
}
//Challenge 1:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
function consoleKaren(strategies)
{
    return 154;
}