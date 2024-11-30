document.getElementById('downloadResume').addEventListener('click', function () {
    // Path to your resume file
    const resumeUrl = '../Resume/Resume1.pdf';

    // Create an anchor element
    const link = document.createElement('a');
    link.href = resumeUrl;

    // Set the download attribute to prompt download
    link.download = 'Resume1.pdf';

    // Trigger the download
    link.click();
});