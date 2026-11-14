# Reusing the resources feature

This folder contains the academy's resource pages, CLAT guides and practice
features, styles, and supporting content data. It can be copied into another
React app that uses React Router.

Mount the resource routes inside the host app's `<Routes>`:

```jsx
import { ResourceRoutes } from "./resources";

<Routes>
  <Route path="/resources/*" element={<ResourceRoutes />} />
</Routes>
```

The host app needs `react-router-dom` and `lucide-react`. The pages use Tailwind
utility classes, so the host app's Tailwind setup must scan this folder. The
resources also link to icons and downloadable documents under `public/icons`;
copy that folder into the host app's `public/icons` directory. The
feature's links expect academy paths such as `/courses`, `/contact`,
`/clatmocktest`, `/jeemocktest`, and `/mock#cuet-mock`; adjust those links if the
host app uses different routes. `ResourceSidebar` and `ResourceFaq` are also
exported for use in host pages. Pass a `courseCatalog` to `ResourceSidebar` when
using its course-related links.
