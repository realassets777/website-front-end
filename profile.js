document.addEventListener('DOMContentLoaded', function() {
    const userType = 'consumer'; // This can be 'consumer' or 'agent'
    const consumerProgress = [
        { id: 1, title: "Plot A Progress", percent: 50 },
        { id: 2, title: "Land B Progress", percent: 30 }
    ];
    const agentClientsContacted = [
        "Client X - Contacted Details",
        "Client Y - Contacted Details"
    ];
    const agentClientsProgress = [
        { id: 1, client: "Client Z", title: "Plot Progress", percent: 40 }
    ];

    const userRoleElement = document.getElementById('user-role');
    const progressContainer = document.getElementById('progress-container');
    const consumerProgressSection = document.getElementById('consumer-progress-section');
    const consumerActivitySection = document.getElementById('consumer-activity');
    const agentActivitySection = document.getElementById('agent-activity');
    const collapsibles = document.querySelectorAll('.collapsible li');

    // Update user role and display relevant sections
    if (userType === 'consumer') {
        userRoleElement.textContent = 'Consumer';
        consumerProgressSection.style.display = 'block';
        consumerActivitySection.style.display = 'block';
        consumerProgress.forEach(progress => {
            addProgressBar(progress);
        });
    } else if (userType === 'agent') {
        userRoleElement.textContent = 'Agent';
        agentActivitySection.style.display = 'block';
        displayAgentInfo();
    }

    // Function to add a progress bar
    function addProgressBar(progress) {
        const progressBarContainer = document.createElement('div');
        progressBarContainer.classList.add('progress-bar-container');
        progressBarContainer.innerHTML = `
            <h4>${progress.title}</h4>
            <div class="progress-bar">
                <div class="progress" style="width: ${progress.percent}%;"></div>
            </div>
            <p>${progress.percent}% completed</p>
        `;
        progressContainer.appendChild(progressBarContainer);
    }

    // Display agent-specific information
    function displayAgentInfo() {
        const clientsContactedList = document.getElementById('clients-contacted');
        agentClientsContacted.forEach(client => {
            const li = document.createElement('li');
            li.textContent = client;
            clientsContactedList.appendChild(li);
        });

        const clientsProgressList = document.getElementById('clients-progress');
        agentClientsProgress.forEach(progress => {
            const li = document.createElement('li');
            li.textContent = `${progress.client} - ${progress.title}`;
            li.addEventListener('click', function() {
                const details = this.querySelector('.details');
                if (details) {
                    details.style.display = details.style.display === 'block' ? 'none' : 'block';
                } else {
                    const newDetails = document.createElement('div');
                    newDetails.classList.add('details');
                    newDetails.textContent = `${progress.title}: ${progress.percent}% completed`;
                    this.appendChild(newDetails);
                    newDetails.style.display = 'block';
                }
            });
            clientsProgressList.appendChild(li);
        });
    }

    // Toggle details on click for consumer activities
    collapsibles.forEach(item => {
        item.addEventListener('click', function() {
            const details = this.querySelector('.details');
            if (details) {
                details.style.display = details.style.display === 'block' ? 'none' : 'block';
            } else {
                const newDetails = document.createElement('div');
                newDetails.classList.add('details');
                newDetails.textContent = "Detailed information about " + this.textContent;
                this.appendChild(newDetails);
                newDetails.style.display = 'block';
            }
        });
    });
});
