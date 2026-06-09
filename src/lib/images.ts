/**
 * A tiny, inline SVG used as a blur placeholder for every <Image>. It shows an
 * instant, on-brand cream tone while the real (remote) image streams in, which
 * dramatically improves perceived loading speed.
 */
const placeholderSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><rect width="100%" height="100%" fill="#e9e0cf"/></svg>`;

export const BLUR_DATA_URL = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  placeholderSvg,
)}`;
