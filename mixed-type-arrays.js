// Task 1: Create the Profile
let userProfile = [
    "Danny DeVito",   
    80,               
    "Premium",        
    "New Jersey, USA",  
    ["Acting", "Stand-Up"] 
];

console.log(userProfile);

// Task 2
console.log("User's Name:", userProfile[0]); 
console.log("Second Hobby:", userProfile[4][1]);

// Task 3
userProfile[1] = 81;  // Update Danny's age
userProfile[4].push("Hiking"); // Adding a new hobby

// Task 4: Updated User Profile
console.log("Updated User Profile:", userProfile);