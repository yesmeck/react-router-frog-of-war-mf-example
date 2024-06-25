import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App';

const router = createBrowserRouter(
  [
    {
      id: "root",
      path: "/",
      Component: App,
    }
  ],
  {
    async unstable_patchRoutesOnMiss({ path, patch }) {
      if (path.startsWith("/module-foo")) {
        let { routes } = await import("module_foo/entry");
        console.log(path, routes)
        patch("root", [{
          path: "module-foo",
          children: routes,
        }])
      }
    }
  }
);

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
