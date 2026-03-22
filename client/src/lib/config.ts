/** Retorna o caminho da imagem (public/assets) */
export function assetUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return encodeURI(p);
}
