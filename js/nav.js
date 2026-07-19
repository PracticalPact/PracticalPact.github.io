const sidebars = {
    docs: {
        title: "Consumer Driven Contract Testing - A CDCT method",
        links: [
            ["index.html", "Welcome"],
            ["pages/cdct.html", "CDCT Concept"],
            ["pages/setup.html", "Project Setup"],
            ["pages/contracts.html", "Contracts"],
            ["pages/infrastructure.html", "Infrastructure"],
            ["pages/gateways.html", "Gateways"],
            ["pages/cicd.html", "CI/CD"],
            ["pages/local-tests.html", "Local Tests"],
            ["pages/broker.html", "Pact Broker"],
            ["pages/workflow.html", "Team Workflow"],
        ]
    },
    tutorials: {
        title: "Tutorials",
        links: [
            ["tutorials/index.html", "Getting Started"],
            ["tutorials/first-contract.html", "Writing Your First Contract"],
            ["tutorials/broker-setup.html", "Setting Up the Broker"],
        ]
    }
};

function renderNav(section, base = "") {
    document.querySelector(".topbar").innerHTML = `
    <a href="${base}index.html" class="brand">CDCT Method</a>
    <a href="${base}index.html">Guides</a>
    <a href="${base}tutorials/index.html">Tutorials</a>
  `;
    const s = sidebars[section];
    const current = location.pathname.split("/").pop();
    document.querySelector(".sidebar").innerHTML = `
    <h2>${s.title}</h2>
    ${s.links.map(([href, label]) =>
        `<a href="${base}${href}"${href.endsWith(current) ? ' class="active"' : ''}>${label}</a>`
    ).join("")}
  `;
}