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
  "title": "Survey Leve De Profundidade",
  "description": "Prototipo browser-side para mapa de profundidade e survey visual com fallback heuristico leve.",
  "topics": [
    "depth-estimation",
    "transformers-js",
    "webgpu",
    "computer-vision",
    "edge-ai",
    "react",
    "typescript",
    "profundidade",
    "visao-computacional",
    "github-pages",
    "portugues-brasil",
    "educacao-tecnologica",
    "telecomunicacoes"
  ],
  "deploy": true,
  "tagline": "Leitura visual de profundidade para corredores, campo e ambientes tecnicos usando inferencia local opcional.",
  "type": "depth",
  "accent": "#315f72",
  "secondary": "#8e6a35"
};
