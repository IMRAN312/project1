function getCurrentDateTime() {
    // Get current date and time
    const now = new Date();

    // Days of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Format the date
    const formattedDate = `${daysOfWeek[now.getDay()]}, ${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;

    return formattedDate;
  }

  function updateDateTime() {
    // Get the element where you want to display the date and time
    const dateTimeElement = document.getElementById('currentDateTime');

    // Set the innerHTML to the current date and time with italic styling and h3 font
    dateTimeElement.innerHTML = `<h2 style="color:purple;font-style: italic;border:0px solid black;position:relative;width:245px;left:0px;background-color:whitesmoke;">${getCurrentDateTime()}</h2>`;
  }

  // Call the function when the page loads
  window.onload = function () {
    updateDateTime();
  };