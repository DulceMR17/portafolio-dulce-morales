const headStyles = [
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
    "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;700&display=swap",
    "../css/base.css",
    "../css/layout.css",
    "../css/navbar.css",
    "../css/footer.css",
    "../css/responsive.css"
];

function loadStyles() {
    headStyles.forEach(url => {
        const link = document.createElement("link");
        if (url.startsWith("http")) {
            link.rel = url.includes("gstatic") ? "preconnect" : (url.includes("fonts.googleapis") && url.includes("css2") ? "stylesheet" : "preconnect");
            if (url.includes("gstatic")) link.crossOrigin = "anonymous";
        } else {
            link.rel = "stylesheet";
        }
        link.href = url;
        document.head.appendChild(link);
    });
}

loadStyles();