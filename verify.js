function verifyCode() {
    var inputCode = document.getElementById('verificationCode').value;

    // Check if the input is a 4-digit number
    if (/^\d{4}$/.test(inputCode)) {
        document.getElementById('result').innerText = 'Verification successful!';
        document.getElementById('result').style.color = 'green';
        document.getElementById('tryAgain').style.display = 'none';
    } else {
        document.getElementById('result').innerText = 'Error! Please enter a valid 4-digit code.';
        document.getElementById('result').style.color = 'red';
        document.getElementById('tryAgain').style.display = 'block';
    }
}

