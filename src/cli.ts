import { Command } from "commander";
import { input, select } from "@inquirer/prompts";
import { formatType } from "./utils/formatter.js";
import { CHOICE_CONSTANT } from "./constants/index.js";

export const program = new Command();

program
  .command("tmdb-app")
  .version("1.0.0")
  .description(
    "A simple command line interface (CLI) to fetch data from the Movie Database (TMDB) and display it in the terminal",
  );

program
  .option("-t, --type <type>", "playing | popular | top | upcoming", "playing")
  .action(async (options) => {
    const type = formatType(options.type);
    const answer = await select({
      message: "Select your language",
      choices: CHOICE_CONSTANT,
    });

    const page = await input({ message: "Enter page number?" });
    console.log(type, answer, page);
  });
