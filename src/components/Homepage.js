import '../styles/Components.scss';
import '../styles/Homepage.scss';
import { Link } from 'react-router-dom';

function Homepage () {
    return <main className='homepage'>
        <div className="homepage__cover"></div>
        <div className='homepage__wrapper'>
            <p className='homepage__text'>
            <span className='homepage__title'>¡Bienvenidos a CSSpresso Corner!</span> Sumérgete en una experiencia sensorial única donde el aroma del café recién tostado se mezcla con el cálido ambiente de nuestra cafetería. En cada taza de nuestro exquisito café, encontrarás el equilibrio perfecto entre pasión, calidad y creatividad. Descubre un lugar donde cada sorbo es una aventura, cada bocado es un deleite y cada encuentro es una conexión. ¡Ven y déjate envolver por la magia de CSSpresso Corner, donde cada momento se convierte en un placer inolvidable!
            </p>
        </div>
        <div className="homepage__buttons">
            <Link className='btn homepage__btn--1' to="/menu">Ver carta</Link>
            <Link className='btn homepage__btn--2' to="">Conócenos</Link>
        </div>
    </main>
};

export default Homepage;