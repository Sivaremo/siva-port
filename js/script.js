document.getElementById('downloadResume').addEventListener('click', function () {
    // Path to your resume file
    const resumeUrl = '/Resume/Resume1.pdf';

    // Use fetch to retrieve the file
    fetch(resumeUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then(blob => {
            // Create a Blob URL
            const blobUrl = URL.createObjectURL(blob);

            // Create an anchor element
            const link = document.createElement('a');
            link.href = blobUrl;

            // Set the download attribute
            link.download = 'Resume1.pdf';

            // Trigger the download
            link.click();

            // Revoke the Blob URL after use
            URL.revokeObjectURL(blobUrl);
        })
        .catch(error => {
            console.error('Error downloading the file:', error);
            alert('Failed to download the file. Please try again.');
        });
});

