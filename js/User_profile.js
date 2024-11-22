let currentStep = 0; // Track current step in profile building process
let progress = 0; // Track overall progress percentage

function submitPrompt() {
    const inputField = document.getElementById('input-field');
    const userInput = inputField.value.trim();
    inputField.value = ''; // Clear input field

    switch (currentStep) {
        case 0: // Name input
            document.getElementById('user-name').textContent = userInput;
            progress += 10; // Increment by 10% for name
            break;
        case 1: // Email input
            document.getElementById('user-surname').textContent = userInput;
            progress += 10; // Increment by 20% for surname
            break;
        case 2: // Surname input
            document.getElementById('user-age').textContent = userInput;
            progress += 20; // Increment by 20% for age
            break;
        case 3: // Surname input
            document.getElementById('user-gender').textContent = userInput;
            progress += 20; // Increment by 20% for gender
            break;
        case 4: // Email input
            document.getElementById('user-email').textContent = userInput;
            progress += 20; // Increment by 20% for User email
            break;
        case 5: // Gender input
            document.getElementById('contact-number').textContent = userInput;
            progress += 20; // Increment by 20% for contact number
            break; 
        
       
    }

    updateProgress();
    currentStep++;

    if (currentStep === 6) {
        // Hide prompt container when all steps are completed
        document.getElementById('prompt-container').style.display = 'none';
    } else {
        updatePrompt(currentStep);
    }
}

function updatePrompt(step) {
    const promptDescription = document.getElementById('prompt-description');
    const inputField = document.getElementById('input-field');
    switch (step) {
        case 0:
            promptDescription.textContent = 'Enter your name:';
            inputField.setAttribute('type', 'text');
            break;
        case 1:
            promptDescription.textContent = 'Enter your surname:';
            inputField.setAttribute('type', 'text');
            break;
        case 2:
            promptDescription.textContent = 'Enter your age:';
            inputField.setAttribute('type', 'text');
            break;
        case 3:
            promptDescription.textContent = 'Enter your gender:';
            inputField.setAttribute('type', 'text');
            break;       
        case 4:
            promptDescription.textContent = 'Enter your email:';
            inputField.setAttribute('type', 'email');
            break; 
        case 5:
            promptDescription.textContent = 'Enter your Contact Number:';
            inputField.setAttribute('type', 'text');
            break;    
    

    }
}

function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    const progressPercent = document.getElementById('progress-percent');
    progressBar.style.width = progress + '%';
    progressPercent.textContent = progress + '%';
}
