# Ziad Mahmoud Emam — Portfolio Website

A real, static portfolio website (HTML/CSS/JS, no frameworks, no build step).
Everything below tells you exactly how to customize it and put it online for free.

---

## 1. Folder structure

```
portfolio/
├── index.html              ← page structure (edit text here)
├── style.css                ← all styling
├── script.js                 ← project data + interactivity (edit projects here)
├── README.md                 ← this file
│
└── assets/
    ├── favicon.png            ← small browser-tab icon
    ├── profile/
    │   └── profile.jpg        ← your photo (currently a placeholder)
    │
    ├── cv/
    │   └── Ziad_Mahmoud_Emam_CV.pdf   ← your CV (currently a placeholder)
    │
    ├── hero/
    │   └── hero-background.jpg   ← hero section background (currently a generated MEP/HVAC drawing placeholder)
    │
    └── projects/
        ├── project-1/  → Administrative Building        (4 placeholder images)
        ├── project-2/  → Residential Tower               (3 placeholder images)
        ├── project-3/  → Call Center                     (3 placeholder images)
        └── project-4/  → Commercial Shops Complex        (3 placeholder images)
```

All the "blueprint grid" placeholder images and the placeholder CV are there
just so the site works and looks complete the moment you open it. Replace
them with your real files using the steps below — nothing else needs to change.

> **Note on Project 2:** its title is "Residential Tower" (matching its
> chilled-water HVAC description) rather than the original "Commercial
> Office Building" label, since the two didn't match — you can rename it
> in `script.js` any time.

---

## 2. Replace your profile photo

1. Prepare a square-ish photo (at least 500×500px works well).
2. Rename it exactly to: `profile.jpg`
3. Drop it into `assets/profile/`, replacing the existing file.
4. Refresh the page — no code changes needed.

(If your file is a `.png`, either convert it to `.jpg`, or open
`index.html`, find `assets/profile/profile.jpg` and change the extension
there too.)

---

## 3. Replace the hero background image

The hero section (behind your photo and name) uses a blurred background image
at `assets/hero/hero-background.jpg`. Right now it's an original MEP/HVAC
engineering-drawing style graphic (ductwork, AHU, piping, a drawing title
block) generated to match the site's navy/steel/brass palette — not a stock
photo.

To use your own image (an HVAC ceiling install, a BIM/MEP coordination
render, a drawing you produced, etc.):

1. Pick a wide image (1920×1080 or similar landscape ratio works best).
2. Name it exactly `hero-background.jpg` (or update the `src` in `index.html`
   under the `HERO BACKGROUND` comment if you use a different name/extension).
3. Place it in `assets/hero/`, replacing the existing file.
4. Refresh — the site already applies a strong blur and a dark navy overlay
   on top of whatever image is there, so your name and photo stay readable
   automatically. No CSS changes needed.

If you want the image sharper or blurrier, open `style.css`, find
`.hero__bg-image`, and adjust the `blur(22px)` value.

## 5. Replace your CV

1. Export your CV as a PDF.
2. Name it exactly: `Ziad_Mahmoud_Emam_CV.pdf`
3. Place it in `assets/cv/`, replacing the placeholder file.
4. The "Download My CV" buttons (one in the nav bar, one in the Contact
   section — the hero section no longer has one) will now download your
   real CV. You don't need to touch any code.

If you ever rename the PDF, open `index.html` and update the two
`href="assets/cv/..."` links to match the new file name.

---

## 6. Add / replace project images

All project text **and** image lists live in one place: the `projects`
array near the top of `script.js`. You do not need to understand
JavaScript to edit it — just follow the patterns already there.

**To replace an existing image:** put a new file in the project's folder
using the same file name (e.g. `assets/projects/project-1/image-2.jpg`)
and it will update automatically.

**To add an extra image to a project:**
1. Add the image file to that project's folder, e.g.
   `assets/projects/project-1/image-5.jpg`
2. Open `script.js`, find that project's `images:` array, and add a new
   line:
   ```js
   images: [
     "assets/projects/project-1/image-1.jpg",
     "assets/projects/project-1/image-2.jpg",
     "assets/projects/project-1/image-3.jpg",
     "assets/projects/project-1/image-4.jpg",
     "assets/projects/project-1/image-5.jpg",   // ← new line
   ],
   ```

**To add a brand-new project:**
1. Create a new folder: `assets/projects/project-5/`
2. Put its images inside.
3. In `script.js`, scroll to the bottom of the `projects` array and copy
   one whole project object (from `{` to `},`), paste it as a new entry,
   and edit its `code`, `title`, `location`, `system`, `summary`,
   `objective`, `process`, `outcome`, `standoutFeatures`, and `images`.
4. Save the file — a new card appears on the site automatically. You do
   not need to edit `index.html` or the gallery/modal logic at all.

---

## 7. Test the website on your computer

You can't just double-click `index.html` for full functionality in every
browser (some browsers block local file requests needed for smooth
navigation). Instead, run a tiny local server — pick whichever you have:

**Option A — VS Code:** install the "Live Server" extension, right-click
`index.html`, choose "Open with Live Server."

**Option B — Python** (already installed on most computers):
```bash
cd portfolio
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

**Option C — Node.js:**
```bash
cd portfolio
npx serve
```

---

## 8. Publish it online for free — GitHub Pages

This is the simplest free option and gives you a public link like:
`https://your-username.github.io/portfolio/`

1. **Create a GitHub account** at github.com if you don't have one.
2. **Create a new repository** — click "New," name it e.g. `portfolio`,
   set it to Public, and create it (no need to add a README there).
3. **Upload your files:**
   - On the repository page, click "Add file" → "Upload files."
   - Drag in `index.html`, `style.css`, `script.js`, `README.md`, and the
     whole `assets` folder (drag the folder itself — GitHub keeps the
     structure).
   - Click "Commit changes."
4. **Turn on GitHub Pages:**
   - Go to the repository's "Settings" tab → "Pages" (left sidebar).
   - Under "Build and deployment," set Source to "Deploy from a branch."
   - Set Branch to `main` and folder to `/ (root)`, then Save.
5. **Get your link:** after a minute, the same Pages settings screen will
   show your live URL, something like:
   `https://your-username.github.io/portfolio/`
   That's the link you send to recruiters.

### Updating the site later
Whenever you want to change something (swap a photo, edit project text,
update your CV):
- Edit the file locally, then re-upload it the same way ("Add file" →
  "Upload files," which overwrites the existing one), **or**
- Use GitHub's web editor (open the file in your repo, click the pencil
  icon, edit, commit).

GitHub Pages automatically republishes your site within a minute or two
of any update — no redeployment step needed.

**Alternative free hosts** if you'd rather not use GitHub Pages: Netlify
Drop (netlify.com/drop — literally drag the `portfolio` folder onto the
page) or Vercel (vercel.com) both work the same way for a static site
like this one.

---

## 9. Quick checklist before sending your link to recruiters

- [ ] Replaced `assets/profile/profile.jpg` with your real photo
- [ ] Replaced `assets/hero/hero-background.jpg` with your own image (optional — the generated one already fits the site)
- [ ] Replaced `assets/cv/Ziad_Mahmoud_Emam_CV.pdf` with your real CV
- [ ] Filled in your real overall grade in the Education section (search `index.html` for "Overall Grade")
- [ ] Replaced all placeholder images in `assets/projects/project-1..4/`
- [ ] Double-checked the Project 2 title/description (see note above)
- [ ] Tested the site locally (Section 7)
- [ ] Published via GitHub Pages (Section 8) and opened the live link
- [ ] Confirmed Email, WhatsApp and LinkedIn all open correctly from the live site
