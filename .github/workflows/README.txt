Ahmad Wirad - Portfolio Website
================================

PROJECT STRUCTURE
-----------------
portfolio.html/
├── index.html            - Semantic markup & page layout
├── css/
│   └── style.css         - All styles, variables, 3D hover effects, and component styles
├── js/
│   └── main.js           - Hero scroll animation & interactive scripts
├── images/               - Image assets folder (add your photos here)
└── README.txt            - Documentation and quick customization guide


WHAT TO CUSTOMIZE & WHERE TO ADD
------------------------------------------------------------------
1. Color Theme & Variables:
   - File: css/style.css (Section 01: DESIGN TOKENS & COLOR THEME)
   - Change the hex values under `:root` (--background, --card, --accent, etc.).

2. Background Designs & Ambient Effects:
   - File: css/style.css (Section 03: BACKGROUND DESIGNS & EFFECTS)
   - Contains comments and sample code for adding ambient radial glows, dot grids, 
     or gradient mesh backgrounds.

3. 3D Card Hover Effects (Cornerstone-04 Style):
   - File: css/style.css (Section 09: SKILLS & Section 10: PROJECTS)
   - Customize perspective, tilt angles (rotateX/rotateY), and pop-out height (translateZ).

4. Adding New Cards:
   - File: index.html
   - Search for "[WHERE TO ADD NEW" to find exact insertion points for:
     * Business Experience cards (inside .projects-grid)
     * Skill cards (inside .skills-grid)
     * Project cards (inside .projects-grid)
   - Any new card using class="project-card" or class="skill-card" automatically 
     inherits the 3D hover effect!

5. Adding New UI Components:
   - CSS: css/style.css (Section 13: NEW / CUSTOM COMPONENTS AREA)
     Pre-formatted with example classes for Stat Boxes and Pill Badges.
   - HTML: index.html
     Search for "[WHERE TO ADD NEW FULL SECTIONS]" to insert new sections.

6. Hero Photos:
   - Add photo-1.jpeg and photo-2.jpeg into the images/ folder
     (these crossfade into each other as you scroll down the hero).

7. Contact Links:
   - File: index.html
   - Search for "TODO" to replace email, LinkedIn, and GitHub links.


HOW TO RUN / DEPLOY
-------------------
Just double-click index.html to view in your browser, or deploy the folder directly
to GitHub Pages, Netlify, Vercel, or any web server.
