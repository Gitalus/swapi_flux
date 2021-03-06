import React, { useContext, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext';

export const PlanetCard = ({ name }) => {

    const { store, actions } = useContext(Context);

    const handleFav = () => {

        if (checkFav()) {
            actions.removeFav(name);
        } else {
            actions.addFav({
                type: 'planet',
                name
            });
        }
    }

    const checkFav = () => {
        return store.favs.find(item => item.name === name)
    }

    const fav = useMemo(() => checkFav(), [store.favs])

    return (
        <div className='card'>
            <Link to={`/planet/${name}`} className="link-card">
                <img
                    src={`../assets/imgs/planets/${name}.jpg`}
                    alt={name}
                    className='card-img-top'
                />
            </Link>
            <div className='card-body'>
                <div className="row">
                    <div className="col-10">
                        <Link to={`/planet/${name}`} className="link-card">
                            <h5 className='card-title'>{name}</h5>
                        </Link>
                    </div>
                    <div className="col-2"><i className={fav ? "fas fa-star" : "far fa-star"} onClick={handleFav}></i></div>
                </div>
            </div>
        </div>
    )
}
