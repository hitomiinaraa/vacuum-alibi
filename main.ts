// One line, at most 200 characters.
// The Vacuum's Alibi entry (Node 22, standard library only).
// The line is the whole entry: a robot vacuum explains, in flat deadpan,
// why it missed a spot. One line, nothing else.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line =
  'Spot missed. My sensors detected the dust was already unionized, and I do not cross picket lines.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.txt');

mkdirSync(outDir, { recursive: true });
writeFileSync(target, line + '\n');
