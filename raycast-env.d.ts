/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Max Search Depth - Maximum directory depth for search */
  "maxDepth": string,
  /** Show Hidden Files - Include hidden files in search results */
  "showHiddenFiles": boolean,
  /** Exclude Patterns - Comma-separated folders to exclude */
  "excludePatterns": string,
  /** Custom Search Paths - Format: Name1:/path1,Name2:/path2 (e.g., Homebrew:/opt/homebrew,Local:/usr/local) */
  "customSearchPaths"?: string,
  /** Default Search Scope - Default directory scope for searches */
  "defaultSearchScope": "home" | "all" | "downloads" | "documents" | "applications" | "config",
  /** Default Search Mode - Pattern matching mode */
  "defaultSearchMode": "regex" | "glob"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `index` command */
  export type Index = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `index` command */
  export type Index = {}
}

