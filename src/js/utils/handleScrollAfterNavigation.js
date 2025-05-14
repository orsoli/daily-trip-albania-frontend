export function handleScrollAfterNavigation(scrollContainer) {
  const savedPositions = new Map();

  return (to, from) => {
    if (!scrollContainer.value) return;

    // Save the scroll position when leaving the page
    if (from.fullPath) {
      savedPositions.set(from.fullPath, {
        top: scrollContainer.value.scrollTop,
      });
    }

    // Check if there is a saved position for the page we are navigating to
    const savedPosition = savedPositions.get(to.fullPath);

    if (savedPosition) {
      // If saved position exists, scroll to it
      scrollContainer.value.scrollTo({
        top: savedPosition.top,
        behavior: "auto",
      });
    } else {
      // If no saved position exists, scroll to the top of the page
      scrollContainer.value.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
}
