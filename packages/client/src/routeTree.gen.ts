/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutIndexImport } from './routes/_layout/index'
import { Route as LayoutDashboardImport } from './routes/_layout/dashboard'
import { Route as LayoutAboutImport } from './routes/_layout/about'

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutDashboardRoute = LayoutDashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutAboutRoute = LayoutAboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => LayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/about': {
      id: '/_layout/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof LayoutAboutImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/dashboard': {
      id: '/_layout/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof LayoutDashboardImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutAboutRoute: typeof LayoutAboutRoute
  LayoutDashboardRoute: typeof LayoutDashboardRoute
  LayoutIndexRoute: typeof LayoutIndexRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutAboutRoute: LayoutAboutRoute,
  LayoutDashboardRoute: LayoutDashboardRoute,
  LayoutIndexRoute: LayoutIndexRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutRouteWithChildren
  '/about': typeof LayoutAboutRoute
  '/dashboard': typeof LayoutDashboardRoute
  '/': typeof LayoutIndexRoute
}

export interface FileRoutesByTo {
  '/about': typeof LayoutAboutRoute
  '/dashboard': typeof LayoutDashboardRoute
  '/': typeof LayoutIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/_layout/about': typeof LayoutAboutRoute
  '/_layout/dashboard': typeof LayoutDashboardRoute
  '/_layout/': typeof LayoutIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/about' | '/dashboard' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/about' | '/dashboard' | '/'
  id:
    | '__root__'
    | '/_layout'
    | '/_layout/about'
    | '/_layout/dashboard'
    | '/_layout/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/about",
        "/_layout/dashboard",
        "/_layout/"
      ]
    },
    "/_layout/about": {
      "filePath": "_layout/about.tsx",
      "parent": "/_layout"
    },
    "/_layout/dashboard": {
      "filePath": "_layout/dashboard.tsx",
      "parent": "/_layout"
    },
    "/_layout/": {
      "filePath": "_layout/index.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
