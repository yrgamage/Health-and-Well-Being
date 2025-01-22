// Function to preview feedback form data
function previewFeedback() {
    // Get the feedback form
    var form = document.getElementById("feedbackForm");
    // Initialize preview content with a heading
    var previewContent = "<h2>Preview Feedback</h2>";

    // Append form field values to the preview content
    previewContent += "<p><strong>Name:</strong> " + form.elements["Name"].value + "</p>";
    previewContent += "<p><strong>Email:</strong> " + form.elements["Email"].value + "</p>";
    previewContent += "<p><strong>First Time Visiting:</strong> " + form.elements["firstTimeVisiting"].value + "</p>";
    previewContent += "<p><strong>Service Satisfaction:</strong> " + form.elements["rate"].value + "</p>";
    previewContent += "<p><strong>How Found:</strong> " + form.elements["howFound"].value + "</p>";
    previewContent += "<p><strong>Device Used:</strong> " + form.elements["deviceUsed"].value + "</p>";
    previewContent += "<p><strong>Comment:</strong> " + form.elements["comment"].value + "</p>";
    previewContent += "<p><strong>Informative and Easy:</strong> " + form.elements["informativeAndEasy"].value + "</p>";
    previewContent += "<p><strong>Improvements:</strong> " + form.elements["improvements"].value + "</p>";

    // Display the preview content in the designated HTML element
    document.getElementById("previewFeedbackContent").innerHTML = previewContent;

    // Show the preview modal
    document.getElementById("previewModal").style.display = "block";
}
// Function to close the preview modal
function closePreviewModal() {
    // Hide the preview model
    document.getElementById("previewModal").style.display = "none";
}

