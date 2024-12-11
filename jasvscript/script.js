function includeHTML() {
    const elements = document.querySelectorAll("[data-include]");
    elements.forEach(async (element) => {
        const file = element.getAttribute("data-include");
        if (file) {
            try {
                const response = await fetch(file);
                if (!response.ok) throw new Error(`Could not load ${file}`);
                const content = await response.text();
                element.innerHTML = content;
            } catch (error) {
                element.innerHTML = `Error loading ${file}`;
            }
        }
    });
}

// Run the includeHTML function after DOM is loaded
document.addEventListener("DOMContentLoaded", includeHTML);
