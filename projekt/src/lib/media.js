const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export function getImageUrl(item) {
  const rawUrl =
    item?.asset?.url ||
    item?.asset?.href ||
    item?.assets?.[0]?.url ||
    item?.assets?.[0]?.href ||
    item?.imageUrl ||
    null;

  if (!rawUrl || typeof rawUrl !== "string") return null;

  // إذا اللينك جاي من localhost من الداتابيس، بدلو بدومين Render
  if (API_BASE_URL) {
    if (rawUrl.startsWith("http://localhost:4000")) {
      return rawUrl.replace("http://localhost:4000", API_BASE_URL);
    }
    if (rawUrl.startsWith("http://127.0.0.1:4000")) {
      return rawUrl.replace("http://127.0.0.1:4000", API_BASE_URL);
    }
  }

  // غير هيك رجعو متل ما هو
  return rawUrl;
}
