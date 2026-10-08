# Portfolio

Personal portfolio, Angular 19.

```bash
npm install
npm start        # http://localhost:4200
npm run build    # output in dist/portfolio/browser
```

Content lives in `src/app/data/profile.ts`.

## CV

The same data also drives a printable CV at `/cv`, styled like the site and laid out
for A4.

```bash
npm run cv       # builds the site and writes Tommaso-Cirillo-CV.pdf
```

The script uses Puppeteer to open `/cv` from the production build and save it as a PDF.
Phone number and personal website stay out of the repo: copy `cv.private.example.json`
to `cv.private.json` and fill it in. It's gitignored, and only the PDF script reads it.

You can also open `/cv` in the browser and use *print / save pdf*. That version shows
only the public contacts.

When deploying, the host has to fall back to `index.html` for unknown paths, or `/cv`
returns a 404.
