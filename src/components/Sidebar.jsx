import Avatar from '../img/foto.jpg';
import '../styles/components/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Rodrigo Bastos" />
      <p className="title">Desenvolvedor</p>
      <p>redes sociais</p>
      <p>iformações de contato</p>
      <a href="" className="btn">Download Currículo</a>
    </aside>
  )
}

export default Sidebar