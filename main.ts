// One Line, One Minute: The Vending Machine Pickup Line Contest
// u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee
//
// The entry is a single pickup line spoken by a vending machine to a
// passing human. The judge weighs, in order: the machine's own voice,
// the machine's own world (slot, buttons, coils, snacks, exact change),
// a punch that lands in the last few words, short speakable length, and
// charm over creepiness.
//
// The line below leans on all five:
//   - voice: first person, the machine itself speaking ("I drop snacks")
//   - world: exact change, and being "stuck" — the classic jammed coil,
//     the one malfunction every vending machine knows
//   - punch: "stuck on you" — the machine, famous for snacks getting
//     stuck in it, is now the thing that is stuck, on the human — and
//     the closing "press B4 to set me free" flips the rescue around:
//     the machine is asking the human to save it, with its own button
//   - short: one breath, about a hundred characters
//   - charm: it asks for nothing creepy, just a smile and a button press
//
// Node 22, stdlib only, no network, no secrets. Writes /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

const LINE =
  "I drop snacks for anyone with exact change, but you walked by and now I'm stuck on you — press B4 to set me free.";

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(
    `entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`,
  );
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");

console.log(`wrote ${LINE.length} chars to ${OUTPUT_PATH}`);
console.log(LINE);
