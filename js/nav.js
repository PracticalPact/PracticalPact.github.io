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
            ["tutorials/CDCTWorkflow.html", "CI/CD"],
            ["tutorials/consumer.html", "Consumer"],
            ["tutorials/ContractError.html", "Contract Testing"],
            ["tutorials/InfrastructureSetup.html", "Contract Broker"],
            ["tutorials/LocalTestingPactBroker.html", "Contract Error Handling"],
            ["tutorials/OASService.html", "Contract Testing"],
            ["tutorials/provider.html", "Provider"],
            ["tutorials/testing-gateways.html", "Testing Gateways", [
                ["tutorials/gateway-setup.html", "Setting Up Gateway Tests"],
                ["tutorials/gateway-consumer.html", "Writing Consumer Tests"],
                ["tutorials/gateway-cicd.html", "Gateway CI/CD"],
            ]],
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

    function renderLinks(links) {
        return links.map(([href, label, children]) => `
      <a href="${base}${href}"${href.endsWith(current) ? ' class="active"' : ''}>${label}</a>
      ${children ? `<div class="sidebar-sub">${renderLinks(children)}</div>` : ""}
    `).join("");
    }

    document.querySelector(".sidebar").innerHTML = `
    <h2>${s.title}</h2>
    ${renderLinks(s.links)}
  `;
}