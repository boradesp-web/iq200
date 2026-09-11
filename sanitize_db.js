const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(process.cwd(), 'database.json');

if (fs.existsSync(DB_FILE)) {
  console.log('Sanitizing database.json...');
  let content = fs.readFileSync(DB_FILE, 'utf8');

  // Replace fictional people names & titles in blogs/databases
  content = content.replaceAll('Prof. Marcus Vance', 'IQ200 Editorial Team');
  content = content.replaceAll('Dr. Evelyn Carter (Neuroscience)', 'Science Content Team');
  content = content.replaceAll('Dr. Evelyn Carter', 'Science Content Team');
  content = content.replaceAll('Dr. Evelyn Vance', 'Curriculum Development Team');
  content = content.replaceAll('S. Ramanujan Jr., Dean of Metrics', 'IQ200 Evaluation Lead');
  content = content.replaceAll('S. Ramanujan Jr.', 'Academy Assessor');
  content = content.replaceAll('Dr. Susanne Jaeggi', 'Susanne Jaeggi');
  content = content.replaceAll('Mensa Test patterns', 'Cognitive Test patterns');
  content = content.replaceAll('Mensa Scholar', 'Pioneer Thinker');
  content = content.replaceAll('certified-iq-test', 'cognitive-challenge-test');

  // Replace certifications, accredited, etc.
  content = content.replaceAll('Certified Mensa-Style IQ Test', 'Cognitive Skill Challenge');
  content = content.replaceAll('Certified IQ Test', 'Cognitive Skill Challenge');
  content = content.replaceAll('IQ200 Certified Tests', 'Olympiad Practice Tests');
  content = content.replaceAll('Validated IQ Evaluations', 'Cognitive Skill Challenges');
  content = content.replaceAll('Validated IQ Score', 'Cognitive Score');

  fs.writeFileSync(DB_FILE, content, 'utf8');
  console.log('database.json sanitized successfully.');
} else {
  console.log('database.json not found, nothing to sanitize.');
}
