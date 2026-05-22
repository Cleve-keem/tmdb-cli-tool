import { Command } from "commander";
import { input, select } from "@inquirer/prompts";
import { formatType } from "./utils/formatter.js";
import { VALID_OPTIONS } from "./constants/index.js";
import { validateType } from "./utils/validators.js";
import fetchTMDBMovie from "./services/fetch-movie.js";

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
    validateType(options.type);
    const type = formatType(options.type);
    const lang = await select({
      message: "Select your language",
      choices: VALID_OPTIONS,
    });
    const page = await input({ message: "Enter page number?" });

    const display = await fetchTMDBMovie(type!, lang, page);

    console.log(display);
  });
