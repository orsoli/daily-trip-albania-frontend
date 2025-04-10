export function getLanguageFromSubdomain(hostname) {
  const subdomain = hostname.split(".")[0]; // Extracts the subdomain from the hostname
  const supportedLanguages = ["en", "sq"]; // List of supported languages

  return supportedLanguages.includes(subdomain) ? subdomain : "en";
}
