// Array Methods:

//     push(): Add element at the end to array.
    //  let books = ["kuran", "Ramayana", "Mahabharata", "Bible"];
    //  console.log(books);
    //  books.push("Bhagavat geeta");
    //  console.log(books);

//      pop(): Remove the last element from an Array.
    //  let books = ["kuran", "Ramayana", "Mahabharata", "Bible"];
    //  console.log(books);
    //  books.pop();
    //  console.log(books);

//      toString(): convert array to string.
        let books = ["kuran", "Ramayana", "Mahabharata", "Bible"];
        let numbers = [25, 78, 90, 35, 23];
        // console.log(books);
        let str = books.toString();
        // console.log(str);
        let numstr = numbers.toString();
        // console.log(numstr);

//      Concat(): join multiple arrays & return result.
        let ramayanas = ["Ram", "Lakshman", "Bharat"];
        let mahabharatas = ["Bhim", "Arjun", "Karna"];
        let geeta = ["Shree krashna", "arjuna"];
        let charactors = ramayanas.concat(mahabharatas,geeta);
        console.log(charactors); 

//      slice(): return a piece of array.
        // slice(startIdx, endIdx);

//      splice(): change original array (add, remove, replace)
        let nums = [54, 45, 67, 76, 87, 78];
        console.log(nums);
        // nums.splice(1,0,44,33); 
        nums.splice(3);
        console.log(nums); 

//      split(): it split/breaks the whole string into an Array.
        let string = "This is a random string";
        let wordArray = string.split(" ");
        console.log(wordArray); // ['This', 'is', 'a', 'random', 'string']
