#!/usr/bin/env node

import { roll } from "../lib/roll.js"
import minimist from "minimist"

const args = minimist(process.argv.slice(2));

const sides_resp = args.sides || 6
const dice_resp = args.dice || 2
const rolls_resp = args.rolls || 1

console.log(JSON.stringify(roll(sides_resp, dice_resp, rolls_resp)));