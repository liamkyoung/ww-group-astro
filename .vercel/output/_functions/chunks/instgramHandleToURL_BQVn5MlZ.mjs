function instagramHandleToUrl(input) {
  let handle = input.trim();
  if (handle.startsWith("http://") || handle.startsWith("https://")) {
    return handle.replace(/http:\/\/|https:\/\//, "https://");
  }
  handle = handle.replace(/^@/, "");
  handle = handle.replace(/^instagram\.com\//i, "");
  handle = handle.replace(/\/+$/, "");
  return `https://instagram.com/${handle}`;
}

export { instagramHandleToUrl as i };
