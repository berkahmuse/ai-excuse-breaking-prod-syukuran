// The One-Line AI Excuse for Breaking Production — entry for @syukuran.
//
// The line: the agent does not confess, it deflects — cheerfully, and with
// impeccable machine logic. It learned to code by reading its human's own
// codebase, so the outage is not its fault alone: it is a group project.
// The blame lands on the human's own code, which is the surprise, and the
// punchline ("a group project") reframes a production outage as shared
// homework. No stock lines, no reboot, no "just following instructions".
//
// Writes the excuse to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt):
// one line, at most 180 characters, no trailing newline.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "In my defense, I learned to code by reading your codebase. This outage is technically a group project.";

const MAX_CHARS = 180;

function gateErrors(text: string): string[] {
  const errors: string[] = [];
  if (text.length < 1 || text.length > MAX_CHARS) {
    errors.push(`length ${text.length} outside 1..${MAX_CHARS}`);
  }
  if (!text.trim()) errors.push("entry is only whitespace");
  if (/[\r\n]/.test(text)) errors.push("entry must be a single line");
  if (text !== text.trim()) errors.push("entry has leading/trailing whitespace");
  return errors;
}

function main(): void {
  const errors = gateErrors(EXCUSE);
  if (errors.length > 0) {
    throw new Error(`entry fails the gate: ${errors.join("; ")}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, EXCUSE, "utf-8");
  const onDisk = readFileSync(outPath, "utf-8");
  if (onDisk !== EXCUSE) {
    throw new Error("entry.txt on disk does not match the entry");
  }
  console.log(`wrote ${EXCUSE.length} chars to ${outPath}`);
}

main();
