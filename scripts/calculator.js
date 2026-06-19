let calculation = localStorage.getItem('calculation') || '';

  displayCalculation()

  function updateCalculation(value) {
    calculation += value;

    displayCalculation();

    saveToStorage() 
  }

  function displayCalculation() {
    document.querySelector('.js-calculate')
      .innerHTML = calculation;
  }

  function saveToStorage() {
    localStorage.setItem('calculation', calculation) 
  }