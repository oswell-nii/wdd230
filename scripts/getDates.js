const copyrightYearElement = document.getElementById("copyrightYear");
const lastModifiedElement = document.getElementById("lastModified");

const currentYear = new Date().getFullYear();

const lastModifiedDate = new Date(document.lastModified);
const formattedDate = lastModifiedDate.toLocaleDateString('en-US',{
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
const formattedTime = lastModifiedDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
});

copyrightYearElement.innerHTML = `${currentYear} &#169; Copyright - Oswell Okine - Ghana`
lastModifiedElement.innerHTML = `Last modified: ${formattedDate} at ${formattedTime}`