# Project screenshots go here

Drop your real project images in this folder, then point to them in
`lib/content.ts` by setting `image` on the matching project, e.g.:

```ts
{
  name: "Prism",
  image: "/work/prism.png",   // <- this file, in public/work/
  ...
}
```

Until a project has an `image`, it shows an honest placeholder plate (a tinted
panel with the project's initial), never a fake screenshot.

Recommended: 16:10 ratio, at least 1600x1000, PNG or JPG. next/image optimizes
them automatically, so large source files are fine.
