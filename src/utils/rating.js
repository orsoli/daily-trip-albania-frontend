// src/utils/rating.js

export function calculateStars(rating, maxStars = 5) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = maxStars - full - half;
  return { full, half, empty };
}
