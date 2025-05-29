async function fetchPersons() {
    try {
      const res = await fetch('https://randomuser.me/api/?results=10&nat=us,es,br');
      const data = await res.json();
      const people = data.results;
  
      const listContainer = document.getElementById('person-list');
      listContainer.innerHTML = ''; 
  
      people.forEach((person, index) => {
        const div = document.createElement('div');
        div.className = 'person';
        div.style.animationDelay = `${index * 250}ms`; 
        div.innerHTML = `
          <img src="${person.picture.medium}" alt="Foto">
          <div class="info">
            <strong>Nombre:</strong> ${person.name.first} ${person.name.last} <br>
            <strong>Género:</strong> ${person.gender} <br>
            <strong>Ubicación:</strong> ${person.location.city}, ${person.location.country} <br>
            <strong>Correo:</strong> ${person.email} <br>
            <strong>Fecha de nacimiento:</strong> ${new Date(person.dob.date).toLocaleDateString()}
          </div>
        `;
        listContainer.appendChild(div);
      });
  
    } catch (error) {
      console.error('Error al obtener datos:', error);
      document.getElementById('person-list').innerText = 'Error al cargar los datos.';
    }
  }
  function handleReload() {
    const btn = document.getElementById('reload-btn');
  
    for (let i = 0; i < 6; i++) {
      const star = document.createElement('span');
      star.textContent = '✨';
      star.className = 'star';
      star.style.left = `${btn.offsetLeft + btn.offsetWidth / 2}px`;
      star.style.top = `${btn.offsetTop + btn.offsetHeight / 2}px`;
  
      star.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
      star.style.setProperty('--y', `${Math.random() * -150 - 50}px`);
  
      document.body.appendChild(star);
  
      setTimeout(() => {
        star.remove();
      }, 1000);
    }
  
    fetchPersons();
  }
  
  fetchPersons();
  