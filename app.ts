document.addEventListener("DOMContentLoaded", () => {
    const editableElements = document.querySelectorAll(".editable");

    editableElements.forEach(element => {
        element.addEventListener("input", (event: Event) => {
            const target = event.target as HTMLElement;
            // Save the updated content in real-time (localStorage, server call, etc.)
            const content = target.innerHTML;

            // For now, we'll just log the content change to the console
            console.log(`Updated content in ${target.id}: ${content}`);
        });
    });

    // Function to make sections editable on click (optional if using contenteditable)
    function makeEditable(elementId: string) {
        const element = document.getElementById(elementId);
        if (element) {
            element.contentEditable = "true";
            element.focus();
        }
    }
});
