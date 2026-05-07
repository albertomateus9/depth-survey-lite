export type ProjectType = 'fresnel' | 'ocr' | 'colors' | 'gesture' | 'occupancy' | 'depth' | 'benchmark' | 'telemetry';

export type ProjectConfig = {
  slug: string;
  title: string;
  tagline: string;
  type: ProjectType;
  deploy: boolean;
  topics: string[];
  description: string;
  accent: string;
  secondary: string;
};

export const project: ProjectConfig = {
  "slug": "depth-survey-lite",
  "title": "Depth Survey Lite",
  "tagline": "Browser-side depth-map survey prototype with heuristic fallback and optional Transformers.js hook.",
  "type": "depth",
  "deploy": false,
  "topics": [
    "depth-estimation",
    "transformers-js",
    "webgpu",
    "computer-vision",
    "edge-ai",
    "react",
    "typescript"
  ],
  "description": "Browser-side depth-map survey prototype with heuristic fallback and optional Transformers.js hook.",
  "accent": "#315f72",
  "secondary": "#8e6a35"
};
