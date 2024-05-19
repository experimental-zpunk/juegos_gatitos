alert("😺😺😺 BIENVENIDO A LOS JUEGOS DE GATITO MAS DIVERTIDOS DE INTERNET 😺😺😺");


document.getElementById('solveButton').addEventListener('click', function(){
    this.style.display = 'none'; //ocultar el boton
    document.getElementById('message').style.display = 'block'; //muestra el mensaje
})

async function fetchIpInfo() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        document.getElementById('info').innerHTML = 
        `
          <p><strong>IP:</strong> ${data.ip}</p>
          <p><strong>Ciudad:</strong> ${data.city}</p>
          <p><strong>Región:</strong> ${data.region}</p>
          <p><strong>País:</strong> ${data.country_name}</p>
          <p><strong>Ubicación:</strong> Latitud ${data.latitude}, Longitud ${data.longitude}</p>
        `;
    } catch (error) {
        document.getElementById('info').innerHTML = "No se pudo obtener la informacion";
    }
}

fetchIpInfo();