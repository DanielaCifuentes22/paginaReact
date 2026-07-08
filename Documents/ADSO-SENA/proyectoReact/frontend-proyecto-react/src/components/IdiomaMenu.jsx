import { useState } from "react";

function IdiomaMenu(){
  const [Idioma, setIdioma] = useState("es");

  const handleChange = (e) => {
    setIdioma(e.target.value);
    console.log("Idioma seleccionado:", e.target.value);

    // Aquí más adelante puedes cambiar el idioma de la aplicación
  };

  return (
    <select value={Idioma} onChange={handleChange}>
      <option value="es">🇨🇴 Español</option>
      <option value="en">🇺🇸 English</option>
      <option value="fr">🇫🇷 Français</option>
    </select>
  );
}

export default IdiomaMenu;