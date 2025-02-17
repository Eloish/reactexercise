const Cards= ({nom,prenom,age,bio,statut}) =>{

    return (
    <div className="card">
        <h3>{nom}{prenom}</h3>
        <div>
            <p>{bio}</p>
            <ul>
                <li>Age:{age}</li>
                <li>Statut:{statut}</li>
            </ul>
        </div>
        <div>
        </div>
    </div>
    )
   
}
export default Cards;