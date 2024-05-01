import '../styles/Components.scss';
import '../styles/Homepage.scss';

function Homepage () {
    return <main className='homepage'>
        <div className="homepage__cover"></div>
        <div className='homepage__wrapper'>
            <p className='homepage__text'>
            ¡Bienvenidos a CSSpresso Corner! Sumérgete en una experiencia sensorial única donde el aroma del café recién tostado se mezcla con el cálido ambiente de nuestra cafetería. En cada taza de nuestro exquisito café, encontrarás el equilibrio perfecto entre pasión, calidad y creatividad. Descubre un lugar donde cada sorbo es una aventura, cada bocado es un deleite y cada encuentro es una conexión. ¡Ven y déjate envolver por la magia de CSSpresso Corner, donde cada momento se convierte en un placer inolvidable!
            </p>
        </div>
        <button className='btn homepage__btn--1'>Ver carta</button>
        <button className='btn homepage__btn--2'>Conócenos</button>
    </main>
};

export default Homepage;