import fs from 'fs';
import { execSync } from 'child_process';

console.log("\n\n==========================================");
console.log("RUNNING AUTOMATED REPAIR SCRIPT");
console.log("==========================================\n");

try {
    if (fs.existsSync('.next')) {
        console.log("[1/2] Deleting corrupted Next.js cache (.next folder)...");
        fs.rmSync('.next', { recursive: true, force: true });
        console.log("      Cache cleared successfully.");
    } else {
        console.log("[1/2] Cache already clear.");
    }
} catch(e) {
    console.error("      Failed to delete cache:", e.message);
}

try {
    console.log("[2/2] Resolving Next.js Turbopack missing binary bug...");
    const src = 'node_modules/lightningcss-win32-x64-msvc/lightningcss.win32-x64-msvc.node';
    const dest = 'node_modules/lightningcss/lightningcss.win32-x64-msvc.node';
    
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log("      Successfully injected the native binary into the expected fallback path!");
    } else {
        console.log("      Binary not found at source, make sure npm install worked.");
    }
} catch(e) {
    console.error("      Failed to copy binary:", e.message);
}

console.log("\n==========================================");
console.log("REPAIR COMPLETE. STARTING SERVER NOW...");
console.log("==========================================\n\n");
