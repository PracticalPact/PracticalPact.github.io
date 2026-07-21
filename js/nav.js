const sidebars = {
    docs: {
        title: "Practical Pact - A Consumer Driven Contract Testing method",
        links: [
            ["index.html", "Welcome"],
            ["pages/cdct.html", "CDCT Concept"],
            ["pages/cdct-briefly.html", "CDCT Briefly"],
            ["pages/setup.html", "Project Setup"],
            ["pages/contracts-briefly.html", "Contracts Briefly"],
            ["pages/cicd.html", "CI/CD"],
            ["pages/broker.html", "Pact Broker"],
        ]
    },
    tutorials: {
        title: "Tutorials",
        links: [
            ["tutorials/index.html", "Getting Started"],
            ["tutorials/CDCTWorkflow.html", "CDCT Workflow"],
            ["tutorials/ContractError.html", "Contract Error"],
            ["tutorials/create-consumer-contract.html", "Create Consumer Contract"],
            ["tutorials/InfrastructureSetup.html", "Infrastructure Setup"],
            ["tutorials/LocalTestingPactBroker.html", "Local Testing Pact Broker"],
            ["tutorials/OASService.html", "OAS Service"],
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
    <a href="${base}index.html" class="brand">Practical Pact</a>
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