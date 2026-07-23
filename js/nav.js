const sidebars = {
    docs: {
        title: "Practical Pact - A Consumer Driven Contract Testing method",
        links: [
            ["index.html", "Welcome"],
            ["pages/getting-started.html", "Getting Started"],
            ["pages/cdct.html", "CDCT With Pact"],
            ["pages/cdct-briefly.html", "CDCT Briefly"],
            ["pages/contracts-briefly.html", "Contracts Briefly"],
            ["pages/broker.html", "Pact Broker"],
            ["pages/cicd.html", "CI/CD"],
        ]
    },
    tutorials: {
        title: "Tutorials",
        links: [
            ["tutorials/index.html", "Introduction"],
            ["tutorials/CDCTWorkflow.html", "CDCT Workflow"],
            ["tutorials/ContractError.html", "Contract Error"],
            ["tutorials/create-consumer-contract.html", "Create Consumer Contract"],
            ["tutorials/provider.html", "Handle Contracts as Provider"],
            ["tutorials/InfrastructureSetup.html", "Infrastructure Setup"],
            ["tutorials/LocalTestingPactBroker.html", "Local Testing Pact Broker"],
            ["tutorials/OASService.html", "OAS Service"],
            ["tutorials/testing-gateways.html", "Testing Gateways", [
                ["tutorials/gateway-cicd.html", "Gateway CI/CD Small Example"],
                ["tutorials/gateway-setup.html", "Setting Up Gateway Tests"],
                ["tutorials/gateway-consumer.html", "Writing Consumer Tests"],
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