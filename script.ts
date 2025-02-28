import heroes from "./folder1.json";
import * as readline from "readline-sync";

let keuze = "";
do {
  console.log(
    "Welcome to de JSON dat viewer\n\n1. View all data\n2. Filter by ID\n3. Exit\n\n"
  );
  keuze = readline.question("Please enter your choice: ");
  switch (keuze) {
    case "1":
      heroes.forEach((e) => {
        console.log(`${e.heroName} (${e.id})`);
      });
      readline.question("\nPress enter to move on...");
      break;
    case "2":
      const id = readline.question(
        "Please enter the ID you want to filter by: "
      );
      console.log(
        heroes.filter((e) => {
          return e.id === Number(id);
        })
      );
      readline.question("\nPress enter to move on...");
      break;
    case "3":
      break;
    default:
      break;
  }
} while (keuze !== "3");
