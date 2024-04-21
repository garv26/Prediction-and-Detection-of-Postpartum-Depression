function validateForm() {
    // Array of all question groups
    var questions = [
        "What is your age group?",
        "What is the age of your baby?",
        "How many children do you have?",
        "Highest level of Education",
        "Employment Status",
        "Type of Family",
        "Annual Income of the Family",
        "Do you feel good about yourself as a person?",
        "Do you feel worthwhile?",
        "Do you feel you have a number of good qualities as a person?",
        "Had any thoughts of harming yourself?",
        "Have you felt depressed DURING your pregnancy?",
        "How mild or severe would you consider your depression was during pregnancy",
        "Have you talked to your provider about depression during pregnancy?",
        "Have you felt anxious during your pregnancy?",
        "How long did you feel anxious?",
        "Have you ever been depressed BEFORE pregnancy?",
        "Have you been under a physician’s care for depression before being pregnant?",
        "Did the physician prescribe any medication for your depression before being pregnant?",
        "Was your pregnancy planned?",
        "Are you satisfied with your marriage/relationship?",
        "Are you currently experiencing any marital/ relationship problems?",
        "Do you feel you receive adequate emotional and instrumental (help with household chores and child care) support from your partner?",
        "Do you feel you can rely on your partner when you need help?",
        "Do you feel you can confide in your partner, family and friends?",
        "Is your infant experiencing any health problems?",
        "Are you having problems with your baby feeding?",
        "Are you having problems with your baby sleeping?",
        "Would you consider your baby irritable or fussy?",
        "Since your new baby was born, how often have you felt down, depressed, or hopeless?",
        "Since your new baby was born, how often have you had little interest or little pleasure in doing things?"
    ];

    // Check each question group for at least one checked radio button
    for (var i = 0; i < questions.length; i++) {
        var radios = document.querySelectorAll('input[name="' + questions[i] + '"]:checked');
        if (radios.length === 0) {
            alert("Please select an option for '" + questions[i] + "'");
            return false; // Prevent form submission
        }
    }
    return true; // Allow form submission
}
