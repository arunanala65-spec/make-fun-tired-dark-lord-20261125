// The Tired Dark Lord: A 100-Word Villain Monologue — make.fun
// A fantasy villain, secretly just very tired, addresses the hero who has
// come to kill him. The weariness lives in the voice — the draught, the
// knees, the tea — never in a plain announcement that he is weary. He still
// has a scheme and a history: three kingdoms burned, two prophecies
// outlived, and a crown he is quietly ready to hand over.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const monologue =
  "You want the speech. Fine. Stand there, by the brazier — no, the other side, the draught gets in. I have burned three kingdoms, outlived two prophecies, and still the council sends a boy with a sword and a speech about destiny. I had a speech once. It had thunder in it. Now I keep the throne warm and sign the executions before lunch, because after lunch my knees give their own opinions. Take the crown, hero. Take the map, the seal, the dungeons, the ravens. Just — let me finish this tea first. Even dark lords get cold feet. Mine just got there sooner.";

const words = monologue.split(/\s+/).filter(Boolean).length;
if (monologue.length < 1 || monologue.length > 600) {
  throw new Error(`Monologue must be 1-600 characters, got ${monologue.length}`);
}
if (words < 90 || words > 110) {
  throw new Error(`Monologue should be about 100 words, got ${words}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), monologue + "\n", "utf8");
console.log(monologue);
