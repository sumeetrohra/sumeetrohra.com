# Agents Guide

This repository treats `src/data/site.json` as the source of truth for site content.

## When data changes

If you update profile, SEO, projects, experience, links, or social data, check and update:

- `src/data/site.json` - primary site data
- `public/site-profile.json` - machine-readable profile snapshot
- `public/llms.txt` - short LLM-facing summary
- `public/llms-full.txt` - extended LLM-facing context

## What stays in sync automatically

- Home page sections that read from `site` data
- Structured data in `src/components/seo/StructuredData.tsx`
- Metadata in `src/app/layout.tsx`

## Update rules

- Keep project names, descriptions, and links identical across all data files.
- If a new project is added, include it in the project list in every context file.
- If SEO copy changes, mirror it in the machine profile and LLM files.
- Prefer minimal edits and avoid duplicating logic that already derives from `src/data/site.json`.
