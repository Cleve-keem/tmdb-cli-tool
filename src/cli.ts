import { Command } from "commander";

export const program = new Command();

program
  .command("tmdb-app")
  .version("1.0.0")
  .description(
    "A simple command line interface (CLI) to fetch data from the Movie Database (TMDB) and display it in the terminal",
  );
