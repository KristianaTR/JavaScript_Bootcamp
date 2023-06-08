// --1-- function with if statements
function suggestBreakfastOption(weekday) {
    if (weekday === 'Monday') {
      return 'Start your week with a healthy bowl of oatmeal and fresh fruits.';
    } else if (weekday === 'Tuesday') {
      return 'How about some scrambled eggs and whole wheat toast to fuel your day?';
    } else if (weekday === 'Wednesday') {
      return 'Indulge in a classic breakfast with pancakes and maple syrup.';
    } else if (weekday === 'Thursday') {
      return 'Try a protein-packed breakfast with Greek yogurt and granola.';
    } else if (weekday === 'Friday') {
      return 'Celebrate the end of the week with a breakfast burrito and avocado.';
    } else if (weekday === 'Saturday') {
      return 'Enjoy a leisurely brunch with a stack of waffles and crispy bacon.';
    } else if (weekday === 'Sunday') {
      return 'Treat yourself to a hearty breakfast of eggs benedict and roasted potatoes.';
    } else {
      return 'Invalid weekday. Please provide a valid weekday (e.g., "Monday", "Tuesday", etc.).';
    }
  }

  console.log(suggestBreakfastOption('Tuesday'));

// --2-- function with at least 3 arguments
function greetingMessage (title, name, surName) {
    return `Hello, ${title}. ${name} ${surName}!`
}

console.log(greetingMessage('Ms', 'Kristiana', 'Tatarcuka'));

// --3-- function with object key & value pairs
function displayAnimalSatus (animal) {
    let message; 

    if (animal.isAdopted) {
        message = `Animal with id: ${animal.id} is a ${animal.type} ${animal.age} years old and it is Adopted.`
    } else {
        message = `Animal with id: ${animal.id} is a ${animal.type} ${animal.age} years old and it is Available for adoption.`
    }

    return message;
}

let animal = {
    id: 00225,
    type: 'dog',
    breed: 'Labrador',
    age: 3,
    name: 'Buddy',
    isAdopted: false,
}

console.log(displayAnimalSatus(animal));