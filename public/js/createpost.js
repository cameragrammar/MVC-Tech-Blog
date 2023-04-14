document.addEventListener("DOMContentLoaded", () => {
  const createPostForm = document.getElementById("create-post-form");

  createPostForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(createPostForm);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      // Redirect to the dashboard after successful post creation
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error:", error);
      // Handle error, e.g., show an error message
    }
  });
});
