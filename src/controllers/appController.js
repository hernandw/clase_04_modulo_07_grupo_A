

/* const home = (req, res) => {
  res.render("home", {
    pageTitle: "Inicio",
    
  
  });
}; */

const about = (req, res) => {
  res.render("about", {
    pageTitle: "Sobre Nosotros",
  });
};

const contact = (req, res) => {
  res.render("contact", {
    pageTitle: "Pagina de Contacto",
  });
};

export {  about, contact };
