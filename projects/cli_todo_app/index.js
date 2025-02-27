import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const tasks = [];

const showMenu = () => {
    console.log("\n1. Add Task");
    console.log("2. Show Task");
    console.log("3. Exit");

    // Get input from the user  
    rl.question("Select an option: ", handleQuestion)

}

const handleQuestion = (question) => {
    if (question === "1") {
        rl.question("Add your task: ", (task) => {
            tasks.push(task);
            console.log("Task is added ", task);
            // again show menu
            showMenu();
        })
    }
    else if (question === "2") {
        console.log("Your Task List");
        tasks.forEach((task, index) => {
            console.log(`${index + 1}: ${task}`);
        })
        showMenu();
    }
    else if (question === "3") {
        console.log("Thanks for using me, Good Bye");
        rl.close()
    }
    else {
        console.log("Please choose a valid option");
        showMenu()
    }
}


showMenu();