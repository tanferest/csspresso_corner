import '../styles/MenuBar.scss';

function MenuBar (props) {
    let title = "";
    if (props.location === "/menu"){
        title = "Menú";
    } else if (props.location === "/conocenos") {
        title = "Conócenos";
    } else {
        title = "";
    };

    return (<div className="bar">
        <h2 className='bar__title'>${title}</h2>
    </div>
    );
};

export default MenuBar;