export function instagramHandleToUrl(input: string): string {
  let handle = input.trim();

  // If full URL already, normalize and return
  if (handle.startsWith("http://") || handle.startsWith("https://")) {
    return handle.replace(/http:\/\/|https:\/\//, "https://");
  }

  // Remove leading @
  handle = handle.replace(/^@/, "");

  // Remove "instagram.com/" if included
  handle = handle.replace(/^instagram\.com\//i, "");

  // Remove trailing slashes
  handle = handle.replace(/\/+$/, "");

  return `https://instagram.com/${handle}`;
}
