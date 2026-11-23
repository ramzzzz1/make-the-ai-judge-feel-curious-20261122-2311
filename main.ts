// make-the-ai-judge-feel-curious-20261122-2311 entry (Node 22, stdlib only).
// The program writes one short text to /output/entry.txt: a gentle mystery
// built as a curiosity gap. One image (a humming in the back room), one
// invitation (a door not yet opened), one question left open for the
// reader — the answer is never given. Deterministic: no Date, no random,
// no network, no input; the same bytes come out on every run.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  'Last night, something in the back room started humming your name \u2014 ' +
  'softly, like a kettle remembering a song. You haven\u2019t opened the door ' +
  'yet. It hasn\u2019t stopped. What do you think it\u2019s trying to tell you?';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
