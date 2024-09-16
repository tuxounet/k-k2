#!/usr/bin/env node
import path from "path";
import fs from "fs";
import { Command } from "commander";
import apply from "./commands/apply";
import clean from "./commands/clean";
import list from "./commands/list";
import create from "./commands/create";

export function run(argv: string[]): void {
  const packageJson = path.join(__dirname, "..", "package.json");
  const obj = JSON.parse(fs.readFileSync(packageJson, "utf-8"));

  console.log(" /$$   /$$  /$$$$$$ ");
  console.log("| $$  /$$/ /$$__  $$");
  console.log("| $$ /$$/ |__/  \\ $$");
  console.log("| $$$$$/    /$$$$$$/");
  console.log("| $$  $$   /$$____/ ");
  console.log("| $$\\  $$ | $$      ");
  console.log("| $$ \\  $$| $$$$$$$$");
  console.log("|__/  \\__/|________/");
  console.log("K2 Build System CLI by github:@tuxounet", obj.version);

  const program = new Command();
  program.version(obj.version);
  program.description("K2 Build System CLI");

  program.addCommand(create());
  program.addCommand(list());
  program.addCommand(apply());
  program.addCommand(clean());
  console.warn(argv);
  program.parse(argv);
  program.showHelpAfterError();
}

process.env.JEST_WORKER_ID === undefined && run(process.argv);
