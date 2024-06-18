document.addEventListener('DOMContentLoaded', function() {
    const userType = 'seller'; // This can be 'consumer', 'agent', or 'seller'
    const consumerProgress = [
        { id: 1, title: "Plot A - City Center", percent: 50, steps: ["Contacted Agent and Basic Formalities Done"] },
        { id: 2, title: "Land B - Suburbs", percent: 30, steps: ["Contacted Agent"] }
    ];
    const sellerProgress = [
        { id: 1, title: "Property A - City Center", percent: 50, steps: ["Physical Verification", "Document Verification"] },
        { id: 2, title: "Property B - Suburbs", percent: 70, steps: ["Physical Verification", "Document Verification", "Legal Verification"] }
    ];
    const agentClientsContacted = [
        "Client X - Contacted Details",
        "Client Y - Contacted Details"
    ];
    const agentClientsProgress = [
        { id: 1, client: "Client Z", title: "Plot Progress - City Center", percent: 40, steps: ["Contacted Client", "Physical Verification"] }
    ];

    const userRoleElement = document.getElementById('user-role');
    const convertSellerButton = document.getElementById('convert-seller');
    const consumerProgressSection = document.getElementById('consumer-progress-section');
    const consumerActivitySection = document.getElementById('consumer-activity');
    const agentProgressSection = document.getElementById('agent-progress-section');
    const sellerDashboard = document.getElementById('seller-dashboard');
    const collapsibles = document.querySelectorAll('.collapsible li');

    // Update user role and display relevant sections
    if (userType === 'consumer') {
        userRoleElement.textContent = 'Consumer';
        consumerProgressSection.style.display = 'block';
        consumerActivitySection.style.display = 'block';
        convertSellerButton.style.display = 'block';
        consumerProgress.forEach(progress => {
            addProgressBar('consumer-progress-container', progress, [
                "Contacted Agent and Basic Formalities Done",
                "Physical Verification of Property",
                "Decision to Buy Plot or Not",
                "Negotiation and Related Formalities",
                "Agreements",
                "Registration"
            ]);
        });
    } else if (userType === 'agent') {
        userRoleElement.textContent = 'Agent';
        agentProgressSection.style.display = 'block';
        convertSellerButton.style.display = 'none';
        displayAgentInfo();
    } else if (userType === 'seller') {
        userRoleElement.textContent = 'Seller';
        sellerDashboard.style.display = 'block';
        convertSellerButton.style.display = 'none';
        sellerProgress.forEach(progress => {
            addProgressBar('seller-progress-container', progress, [
                "Physical Verification",
                "Document Verification",
                "Legal Verification",
                "Listing on Website",
                "Interested Buyers",
                "Physical Meeting with Buyers",
                "Agreement",
                "Registration"
            ]);
        });
    }

    function addProgressBar(containerId, progress, steps) {
        const totalSteps = steps.length;
        const completedSteps = progress.steps.length;
        const completionPercent = (completedSteps / totalSteps) * 100;
        const progressBarContainer = document.createElement('div');
        progressBarContainer.classList.add('progress-bar-container');
        progressBarContainer.innerHTML = `
            <div class="property-title">${progress.title}</div>
            <div class="progress-bar" data-step="${completedSteps}/${totalSteps}">
                <div class="progress" style="width: ${completionPercent}%"></div>
            </div>
            <div class="details">
                ${steps.map((step, index) => `
                    <div class="step ${index < completedSteps ? 'completed' : ''}">
                        ${step}
                    </div>
                `).join('')}
            </div>
        `;
        progressBarContainer.addEventListener('click', function() {
            const details = this.querySelector('.details');
            details.style.display = details.style.display === 'block' ? 'none' : 'block';
        });
        document.getElementById(containerId).appendChild(progressBarContainer);
    }

    // Display agent-specific information
    function displayAgentInfo() {
        const clientsContactedList = document.getElementById('clients-contacted');
        agentClientsContacted.forEach(client => {
            const li = document.createElement('li');
            li.textContent = client;
            li.addEventListener('click', function() {
                toggleDetails(this, client);
            });
            clientsContactedList.appendChild(li);
        });

        const clientsProgressList = document.getElementById('agent-progress-container');
        agentClientsProgress.forEach(progress => {
            addProgressBar('agent-progress-container', progress, [
                "Physical Verification of Property",
                "Document Verification",
                "Legal Verification",
                "Allowing Property for Listing",
                "Willing Buyers",
                "Contacting Buyers",
                "Physical Verification with Buyers",
                "Agreement",
                "Registration"
            ]);
        });
    }

    // Toggle details on click for consumer activities
    collapsibles.forEach(item => {
        item.addEventListener('click', function() {
            const details = this.querySelector('.details');
            details.style.display = details.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Example data for properties of interest and agents contacted
    const propertiesOfInterest = [
        { name: "Plot A - City Center", details: "Description of Plot A" },
        { name: "Land B - Suburbs", details: "Description of Land B" }
    ];
    const agentsContacted = [
        { name: "Agent X", id: "12345" },
        { name: "Agent Y", id: "67890" }
    ];

    // Populate properties of interest for consumers
    propertiesOfInterest.forEach(property => {
        const li = document.createElement('li');
        li.textContent = property.name;
        li.addEventListener('click', function() {
            toggleDetails(this, property.details);
        });
        document.getElementById('shortlisted-properties').appendChild(li);
    });

    // Populate agents contacted for consumers
    agentsContacted.forEach(agent => {
        const li = document.createElement('li');
        li.textContent = `${agent.name} (ID: ${agent.id})`;
        li.addEventListener('click', function() {
            toggleDetails(this, `Agent Name: ${agent.name}, Agent ID: ${agent.id}`);
        });
        document.getElementById('agents-contacted').appendChild(li);
    });

    // Function to toggle details visibility
    function toggleDetails(element, detailsText) {
        const details = element.querySelector('.details');
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
        if (!details) {
            const newDetails = document.createElement('div');
            newDetails.classList.add('details');
            newDetails.textContent = detailsText;
            element.appendChild(newDetails);
        }
    }
});
