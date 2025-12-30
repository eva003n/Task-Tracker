#!/usr/bin/env node

import commandTable from "../src/commands.js";
import { showHelp } from "../src/handlers.js";






const tokenizer = (args) => {
  try {
    parseArguments(args.slice(2)); // node[0], index.js[1], ...[2]
  } catch (error) {
    console.error(`Error occurred during tokenization: ${error.message}`);
  }
};


// parse commands
const parseArguments = (tokens) => {
  if (!Array.isArray(tokens)) return showHelp();
  try {
    const commandArguments = {
      command: tokens[0],
      subCommands: [],
      flags: {},
    };

    const subArgs = tokens.slice(1); // create a new array for subcommands
    // parse subcommands
    for (const subArg of subArgs) {
      // exclude flags
      if (!subArg.startsWith("--")) {
        commandArguments.subCommands.push(subArg);
      }
    }

    // parse flags
    for (const arg of tokens) {
      if (arg.startsWith("--")) {
        let flags = arg.replace("--", ""); // remove "--"
        flags = flags.split("=").entries(); // [key, value]
        flags = Object.fromEntries(flags); // create object from key and value

        commandArguments.flags = flags;
      }
    }

     dispatch(commandArguments);
  } catch (error) {
    console.error(`Error occured while parsing arguments ${error.message}`);
  }
};

const dispatch = async (parsed) => {
  try {
    // if the command doesnt exist show usage help
    if (!commandTable.has(parsed.command)) {
      // show help
      return showHelp();
    }

    const hahdlerFunction = commandTable.get(parsed.command);

    if (typeof hahdlerFunction === "function") {
      await hahdlerFunction(parsed);
    }
  } catch (error) {
    console.error(`Error executing command ${error.message}`);
  }
};


// tokenize each command and store in array
tokenizer(process.argv);

