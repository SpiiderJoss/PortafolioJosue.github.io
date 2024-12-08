document.getElementById('downloadCvBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del enlace
  
    const link = document.createElement('a');
    link.href = 'CV_Montalván_Zavala_Josué.pdf';
    link.download = 'CVJosueMontalvanZavala.pdf';
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    // Aquí puedes agregar cualquier otra lógica que necesites, por ejemplo, registrar la descarga
  });

  document.getElementById('downloadCvBtn1').addEventListener('click', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del enlace
  
    const link = document.createElement('a');
    link.href = 'Josu CV español.pdf';
    link.download = 'CVJosueMontalvanZavala.pdf';
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    // Aquí puedes agregar cualquier otra lógica que necesites, por ejemplo, registrar la descarga
  });
  