import glob
import os

html_files = glob.glob("c:/Users/nivas/Pictures/java dev/billing/fab/*.html")

for file_path in html_files:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    new_content = content.replace('src="assets/js/firebase-init.js?v=2"', 'src="assets/js/firebase-init.js?v=3"')
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)

print("Added cache buster to all HTML files.")
