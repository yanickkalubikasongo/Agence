
/* Début style */

const style_cellule = {
    verticalAlign: "baseline"
};
const style_profil = {
    width:'200px'
};
const styleimg = {
    width:'100px',
    height:"100px"
};
const spinner = {
  fontSize:'30px',
  color: '#ff6600'
};
const personexist = {
    fontSize:'20px',
    color:'blue'
};
const divStyle = {
    marginTop:'10px'
};
const seachStyle = {
    marginLeft:'55px'
};

const stylefrom = {
  borderTop: '3px solid #000e38'
};
const seachStylebloc = {
   marginTop:'20px'
};
const stylebtnact = {
    backgroundColor:'#ff6600',
    borderColor:'#ff6600',
    color:'white'
};
const size_button = {
   backgroundColor:'#ff6600',
   borderColor:'#ff6600',
   color:'white'
};
const choix_statut = {
  marginLeft:'137px'
};
const btn = {
  backgroundColor:' #FF9100',
  color:'white'
};
const btn_save = {
  borderRadius:'6px',
  backgroundColor:'#77B5FE',
  color:'white'
};
const msg = {
  backgroundColor:' #FF7F7F',
  color:'white'
};
const style_act_profil = {
  backgroundColor:'#70726E',
  borderColor:'#70726E',
  color:'white'
};
const style_titre_mis_a_jour = {
  color:'#FF6600',
  fontWeight:'bolder'
};
const style_act_modifier = {
  backgroundColor:'#FF6600',
  borderColor:'#FF6600',
  color:'white'
};
const styleentete = {
  backgroundColor:'#000e38',
  color:'white'
};
const blockbtn = {
  backgroundColor:'#FF6600',
  color:'white'
};
const style_lien = {
  color:'#FF6600'
};
const stylePhotoProfil = {
  with:'80px',
  height:'80px',
  marginLeft:'15px'
};

const stylebtnactHidden = {
  display:'none'
}
const stylebtnactVisibility = {
   display:''
}
  
/* Fin style */
  
async function request_global(url,method,data) {
    try {
        const response = await fetch(url, {
            method: method, 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const resultat = await response.json();
        return resultat
    }catch (erreur) {
        console.error("Erreur :", erreur);
    }
}
class Option extends React.Component {
    render() {
        return <option selected={this.props.selected} value={this.props.value}>{this.props.option}</option>
    }
}
class Checkbox extends React.Component {
    render() {
      return (
        <div className="col-md-2" style={choix_statut}>
              <div className="form-check">
                <input className="form-check-input" value={this.props.value} checked={this.props.ch} onClick ={this.props.cl} onChange={this.props.change} name={this.props.name} type={this.props.check} id={this.props.id_for} />
                <label className="form-check-label" for={this.props.id_for}>{this.props.lbl}</label>
              </div>
        </div>
      )
    }
}
class Select_sex extends React.Component {
    render() {
        return (
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Sexe </label>
                <div className="col-sm-9">
                    <select name="sexe" value={this.props.val} disabled={this.props.disabled} onChange={this.props.change} className="form-control">
                        <option value="">Choisir</option>
                        <Option value="M" option="M" />
                        <Option value="F" option="F" />
                    </select>
                </div>
            </div>
        </div>
        )
    }
}
class Devise extends React.Component {
    render() {
        return (
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Devise </label>
                <div className={this.props.tail}>
                    <select name="devise" value={this.props.val} disabled={this.props.disabled} onChange={this.props.change} class="form-control">
                        <Option value="" option="Choisir" />
                        <Option value="USD" option="USD" />
                        <Option value="CDF" option="CDF" />
                        <Option value="EUR" option="EUR" />
                    </select>
                </div>
            </div>
        </div>
        )
    }
}
class Type_credit extends React.Component {
    render() {
        return (
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Type crédit </label>
                <div className={this.props.tail}>
                    <select name="type_credit" value={this.props.val} disabled={this.props.disabled} onChange={this.props.change} class="form-control">
                        <Option value="" option="Choisir" />
                        <Option value="INDUVIDUEL" option="INDUVIDUEL" />
                        <Option value="ORGANISATION " option="ORGANISATION" />
                    </select>
                </div>
            </div>
        </div>
        )
    }
}
class Select extends React.Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">{this.props.libelle} </label>
                    <div className={this.props.tail}>
                        <select name="text" value={this.props.val} disabled={this.props.disabled} onChange={this.props.change} class="form-control">
                            <option>Choisir</option>
                            {this.props.list_item}
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}
class Type_compte1 extends React.Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Type de compte </label>
                    <div className="col-sm-9">
                        <select name="type_compte" value={this.props.val} disabled={this.props.disabled} onChange={this.props.change} class="form-control">
                            <Option value="" option="Choisir" />
                            <Option value="Courant" option="Courant" />
                            <Option value="Epargne" option="Epargne" />
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}
class Type_compte2 extends React.Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Type de compte </label>
                    <div className="col-sm-9">
                        <select name="type_compte" value={this.props.val} disabled={this.props.disabled} onChange={this.props.change} class="form-control">
                            <Option value="Courant" option="Courant" />
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}
class Type_org extends React.Component {
    render() {
        return (
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Sexe </label>
                <div className="col-sm-9">
                <select name="sexe" value={this.props.val} disabled={this.props.disabled} onChange={this.props.change} class="form-control">
                        <Option value="Entreprise" option="Entreprise" />
                        <Option value="ONG" option="ONG" />
                </select>
                </div>
            </div>
        </div>
        )
    }
}
class Input extends React.Component { 
    render() {
        return (
            <div className="col-md-6">
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">{this.props.label} </label>
                    <div className="col-sm-9">
                        <input type={this.props.type} max={this.props.max} min={this.props.min} placeholder={this.props.plc} required data-id={this.props.id_member} onChange={this.props.change} onInput={this.props.inp} onClick={this.props.oncl} onKeypress={this.props.onkey} disabled={this.props.disabled} maxlength={this.props.taille} className={this.props.clas} style={this.props.styl} value={this.props.value} name={this.props.name} />
                    </div>
                </div>
            </div>
        )
    }
}
class Titre extends React.Component { 
    render() {
        return (
            <div className={this.props.taille_paragraphe}>
                <h5 className="card-title">{this.props.libelle_paragraphe}</h5>
            </div>
        )
    }
}
class Commune_update extends React.Component {
    render() {
        return (
            <div className="row">
                <label className="col-sm-3 col-form-label">Commune</label>
                <div className="col-sm-9">
                    <select name="comm" disabled={this.props.comm} onChange={this.props.onChange} className="form-control commune">
                        <Option value="Bandalungwa" option="Bandalungwa" />
                        <Option value="Barumbu" option="Barumbu" />
                        <Option value="Bumbu" option="Bumbu" />
                        <Option value="Gombe" option="Gombe" />
                        <Option value="Kalamu" option="Kalamu" />
                        <Option value="Kasa-Vubu" option="Kasa-Vubu" />
                        <Option value="Kimbanseke" option="Kimbanseke" />
                        <Option value="Kinshasa" option="Kinshasa" />
                        <Option value="Kintambo" option="Kintambo" />
                        <Option value="Kisenso" option="Kisenso" />
                        <Option value="Lemba" option="Lemba" />
                        <Option value="Limete" option="Limete" />
                        <Option value="Lingwala" option="Lingwala" />
                        <Option value="Makala" option="Makala" />
                        <Option value="Maluku" option="Maluku" />
                        <Option value="Masina" option="Masina" />
                        <Option value="Matete" option="Matete" />
                        <Option value="Mont-Ngafula" option="Mont-Ngafula" />
                        <Option value="Ndjili" option="Ndjili" />
                        <Option value="Ngaba" option="Ngaba" />
                        <Option value="Ngaliema" option="Ngaliema" />
                        <Option value="Ngiri-Ngiri" option="Ngiri-Ngiri" />
                        <Option value="Nsele" option="Nsele" />
                        <Option value="Selembao" option="Selembao" />
                    </select>
                </div>
            </div>
        )
    }
}
class Commune extends React.Component {
    render() {
        return (
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Commune</label>
                <div className="col-sm-9">
                    <select name="comm" onChange={this.props.change} class="form-control commune">
                        <Option value="" option="Choisir" />
                        <Option value="Bandalungwa" option="Bandalungwa" />
                        <Option value="Barumbu" option="Barumbu" />
                        <Option value="Bumbu" option="Bumbu" />
                        <Option value="Gombe" option="Gombe" />
                        <Option value="Kalamu" option="Kalamu" />
                        <Option value="Kasa-Vubu" option="Kasa-Vubu" />
                        <Option value="Kimbanseke" option="Kimbanseke" />
                        <Option value="Kinshasa" option="Kinshasa" />
                        <Option value="Kintambo" option="Kintambo" />
                        <Option value="Kisenso" option="Kisenso" />
                        <Option value="Lemba" option="Lemba" />
                        <Option value="Limete" option="Limete" />
                        <Option value="Lingwala" option="Lingwala" />
                        <Option value="Makala" option="Makala" />
                        <Option value="Maluku" option="Maluku" />
                        <Option value="Masina" option="Masina" />
                        <Option value="Matete" option="Matete" />
                        <Option value="Mont-Ngafula" option="Mont-Ngafula" />
                        <Option value="Ndjili" option="Ndjili" />
                        <Option value="Ngaba" option="Ngaba" />
                        <Option value="Ngaliema" option="Ngaliema" />
                        <Option value="Ngiri-Ngiri" option="Ngiri-Ngiri" />
                        <Option value="Nsele" option="Nsele" />
                        <Option value="Selembao" option="Selembao" />
                    </select>
                </div>
            </div>
        </div>
        )
    }
}
class Rep_type_membre extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <select name="marital_status" onChange={this.props.change} className="form-control">
                        <Option value="3" option="Répertoire des Gestionnaires des comptes" />
                        <Option value="4" option="Répertoire des Agents Agence" />
                        <Option value="5" option="Répertoire des Gestionnaires des crédits" />
                        <Option value="6" option="Répertoire des Gérants" />
                        <Option value="8" option="Répertoire des Agents Terrain" />
                    </select>&nbsp;&nbsp;
                </div>
                <div className="col-md-2">
                    <button className="btn" style={blockbtn} onClick={this.props.cl1}><i class="fas fa-search"></i>&nbsp;Rechercher</button><br/><br/>
                </div>
                <div className="col-md-3">
                    <input type="text" className="form-control" onInput={this.props.change_num_piece} placeholder="Entrer Num. Pièce d'identité" />&nbsp;&nbsp;
                </div>
                <div className="col-md-2">
                    <select className="form-control" onChange={this.props.change_type_piece}>
                        {this.props.option}
                    </select>&nbsp;&nbsp;
                </div>
                <div className="col-md-2">
                    <button className="btn" style={blockbtn} onClick={this.props.cl2}><i className="fas fa-search"></i>&nbsp;Rechercher</button>
                </div>
            </div>
        )
    }
}
class Rep_type_transaction extends React.Component {
    render() {
        return (
            <div className="col-md-12" style={stylefrom}><br/>
                <div className="row">
                    <div className="col-md-3">
                        <select name="type_transanction" onChange={this.props.onChange} className="form-control">
                            <Option value="" option="Choisir opération" />
                            <Option value="Depot" option="Dépôt" />
                            <Option value="Retrait" option="Rétrait" />
                            <Option value="Transfert" option="Transfert" />
                        </select>&nbsp;&nbsp;
                    </div>
                    <div className="col-md-2">
                        <input placeholder="Rentrer la date" onInput={this.props.input_date} value={this.props.val_date} className="form-control" type="date" />&nbsp;&nbsp;
                    </div>
                    <div className="col-md-2">
                        <button style={stylebtnact} className="btn" onClick={this.props.clc}><i class="fas fa-fw fa-search"></i>&nbsp;Rech.</button>
                    </div>
                    <div className="col-md-3">
                        <input placeholder="Rentrer la référence Op." title="Rentrer la référence opération" onInput={this.props.input_reference} value={this.props.val_reference} className="form-control" type="text" />&nbsp;&nbsp;
                    </div>
                    <div className="col-md-2">
                        <button style={stylebtnact} className="btn" onClick={this.props.clic}><i class="fas fa-fw fa-search"></i>&nbsp;Rech.</button>
                    </div>
                </div>
            </div>
        )
    }
}
class Liste extends React.Component {
    render() {
        return (
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">{this.props.libelle_list}</label>
                <div className="col-sm-9">
                <select name={this.props.name} value={this.props.value} disabled={this.props.disabled} onChange={this.props.change} className="form-control">
                    <option value="">Choisir</option>
                    {this.props.option}
                </select>
                </div>
            </div>
        </div>
        )
    }
}
class Msg extends React.Component {
    render() {
        return (
            <div className="col-sm-12">
                {this.props.bol}
            </div>
        )
    }
}

class Msg_reussite extends React.Component {
    render() {
        return (
            <div class="alert alert-success alert-dismissible fade show" id="alert" role="alert">
                <span class="badge badge-pill badge-success">Succès</span> {this.props.msg_reu}
            </div>
        )
    }
}
class Msg_erreur extends React.Component {
    render() {
        return (
            <div class="alert alert-danger alert-dismissible fade show" id="alert" role="alert">
                <span class="badge badge-pill badge-danger">Erreur(s)</span> {this.props.msg_err}
            </div>
        )
    }
}
class Membre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prenom              : '',
            nom                 : '',
            postnom             : '',
            sexe                :'',
            date_naissance      :'',
            lieu_naissance      :'',
            telephone           :'',
            chefferie           :'',
            territoire          :'',
            etat_civil          :'',
            province            :'',
            adresse             :'',
            membre              :'',
            agence              :'',
            telephone           :'',
            adresse_electronique:'',
            type_membre         :'',
            type_piece          :'',
            numero_piece        :'',
            state_msg           :'',
            erreur              :[],
            photo               :'',
            bol                 :''
        };
        this.change_prenom               = this.change_prenom.bind(this);
        this.change_chefferie            = this.change_chefferie.bind(this);
        this.change_nom                  = this.change_nom.bind(this);
        this.change_province             = this.change_province.bind(this);
        this.change_territoire           = this.change_territoire.bind(this);
        this.change_postname             = this.change_postname.bind(this);
        this.change_sexe                 = this.change_sexe.bind(this);
        this.change_adresse              = this.change_adresse.bind(this);
        this.change_telephone            = this.change_telephone.bind(this);
        this.change_lieu_naiss           = this.change_lieu_naiss.bind(this);
        this.change_adresse_electronique = this.change_adresse_electronique.bind(this);
        this.change_numero_piece         = this.change_numero_piece.bind(this);
        this.change_type_piece           = this.change_type_piece.bind(this);
        this.change_membre               = this.change_membre.bind(this);
        this.annuler                     = this.annuler.bind(this);
        this.change_date_naiss           = this.change_date_naiss.bind(this);
        this.change_agence               = this.change_agence.bind(this);
        this.change_etat_civil           = this.change_etat_civil.bind(this);
        this.change_photo                = this.change_photo.bind(this);
        this.handleSubmit                = this.handleSubmit.bind(this);
    }
    annuler() {
        this.setState({
            prenom              : '',
            nom                 : '',
            postnom             : '',
            sexe                :'',
            date_naissance      :'',
            lieu_naissance      :'',
            telephone           :'',
            chefferie           :'',
            territoire          :'',
            province            :'',
            adresse             :'',
            membre              :'',
            telephone           :'',
            adresse_electronique:'',
            type_membre         :'',
            type_piece          :'',
            numero_piece        :'',
            photo               :'',
            erreur              :''
        });
    }
    change_agence(event) {
        this.setState({agence: event.target.value});
    }
    async request(url,method,data) {
        try {
            const response = await fetch(url, {
                method: method, 
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const resultat = await response.json();
            return resultat
        }catch (erreur) {
            console.error("Erreur :", erreur);
        }
    }
    change_prenom(event) {
        this.setState({prenom: event.target.value});
    }
    change_photo(event) {
        this.setState({photo: event.target.value});
    }
    change_chefferie(event) {
        this.setState({chefferie: event.target.value});
    }
    change_nom(event) {
        this.setState({nom: event.target.value});
    }
    change_territoire(event) {
        this.setState({territoire: event.target.value});
    } 
    change_postname(event) {
        this.setState({postnom: event.target.value});
    }
    change_province(event) {
        this.setState({province: event.target.value});
    }
    change_sexe(event) {
        this.setState({sexe: event.target.value});
    }
    change_adresse(event) {
        this.setState({adresse: event.target.value});
    }
    change_telephone(event) {
        this.setState({telephone: event.target.value});
    }
    change_adresse_electronique(event) {
        this.setState({adresse_electronique: event.target.value});
    }
    change_lieu_naiss(event) {
        this.setState({lieu_naissance: event.target.value});
    }
    change_date_naiss(event) {
        this.setState({date_naissance: event.target.value});
    }
    change_membre(event) {
        this.setState({type_membre: event.target.value});
    }
    change_type_piece(event) {
        this.setState({type_piece: event.target.value});
    }
    change_etat_civil(event) {
        this.setState({etat_civil: event.target.value});
    }
    change_numero_piece(event) {
        this.setState({numero_piece: event.target.value});
    }
    photo(event) {
        this.setState({photo: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault()
        this.setState({
            state_msg:'',
            erreur   :[]
        })
        var data = new FormData($('#my_member')[0]);

        let fichier = this.state.photo,
            extension = fichier.substring(fichier.length - 4, fichier.length)
        if(extension != '.jpg' && extension != '.png') {
            alert("Veuillez rentrer un fichier .JPG ou .PNG dans le champ 'Photo'")
        }else{
            $.ajax({
                url        : '/personnel/enreg_personnel',
                type       : 'POST',
                contentType: false,
                processData: false,
                cache      : false,
                data       : data
            })
            .done((response)=>{
                if(response.reponse=='r'){
                    this.setState({
                        prenom              : '',
                        nom                 : '',
                        postnom             : '',
                        sexe                :'',
                        date_naissance      :'',
                        lieu_naissance      :'',
                        telephone           :'',
                        chefferie           :'',
                        territoire          :'',
                        etat_civil          :'',
                        province            :'',
                        adresse             :'',
                        membre              :'',
                        agence              :'',
                        telephone           :'',
                        adresse_electronique:'',
                        type_membre         :'',
                        type_piece          :'',
                        numero_piece        :'',
                        state_msg           :'r',
                        erreur              :[],
                        photo               :'',
                        bol                 :''
                    })
                    swal({
                        title: "Succès",
                        text: "Membre LoanMe enregistré avec succès !",
                        icon: "success",
                        button: false,
                    });
                }
                else{
                    let err = response.reponse,
                        erreurs=[]
                    for (let i = 0; i < err.length; i++) {
                        erreurs.push(err[i])
                    }
                    this.setState({
                        state_msg:'e',
                        erreur:erreurs
                    })
                    swal({
                        title: "Erreur",
                        text: ''+erreurs,
                        icon: "error",
                        button:false
                    });
                }
            })
            .fail(function(error){
                this.setState({
                    textMsg     :"",
                    classMsg    :"",
                    typeMsg     :'',
                    showAlertMsg:'',
                    alertMsg    :'',
                    closeMsg    :'',
                    type_btn    :'',
                    bol         :''
                }) 
            })
        }
        return false
    }
    render() { 
        let res = this.props.province,
        listProvince = res.map(item => (
            <Option value={item.id} option={item.libelle} />
        )),
        res_piece = this.props.type_piece,
        listPiece = res_piece.map(item => (
            <Option value={item.id} option={item.libelle} />
        )),
        res_type_membre = this.props.type_membre,
        listTypeMembre = res_type_membre.map(item => (
            <Option value={item.id} option={item.libelle} />
        )),
       res_type_membre2 = this.props.type_membre2,
        listTypeMembre2 = res_type_membre2.map(item => (
            <Option value={item.id} option={item.type_membre} />
        )),
        res_etat_civil = this.props.etat_civil,
        listEtatCivil = res_etat_civil.map(item => (
            <Option value={item.id} option={item.libelle} />
        ))
        return (
            <div className="col-12" style={divStyle}>
                 <div className="card form-card" style={stylefrom}>
                        
                        <div className="card-body">
                            <form method="post" onSubmit={this.handleSubmit} enctype="multipart/form-data" accept-charset="UTF-8" id="my_member">
                                <hr/>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Type d'acteur</label>
                                            <div className="col-sm-9">
                                                <select name="type_membre" value={this.state.type_membre} onChange={this.change_membre} className="form-control">
                                                    <option value="">Choisir</option>
                                                    {listTypeMembre}
                                                    {listTypeMembre2}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <Input label="Prénom" type="text" clas="form-control" taille="15" name="prenom" value={this.state.prenom} inp={this.change_prenom} />
                                    <Input label="Nom" type="text" clas="form-control" taille="15" name="nom" value={this.state.nom} inp={this.change_nom} />
                                    <Input label="Postnom" type="text" clas="form-control" taille="15" name="postnom" value={this.state.postnom} inp={this.change_postname} />
                                    <Liste value={this.state.province} libelle_list="Province" name="province" option={listProvince} change={this.change_province} />
                                    <Select_sex label="Sexe" type="text" clas="form-control" taille="1" val={this.state.sexe} change={this.change_sexe} />
                                    <Input label="Adresse" type="text" clas="form-control" taille="30" name="adresse" value={this.state.adresse} inp={this.change_adresse} />
                                    <Input label="Date de naissance" type="date" clas="form-control" taille="15" name="date_naissance" value={this.state.date_naissance} change={this.change_date_naiss} />
                                    <Input label="Téléphone" type="tel" clas="form-control" taille="15" name="telephone" value={this.state.telephone} inp={this.change_telephone} />
                                    <Input label="Adresse Electronique" type="email" clas="form-control" taille="255" name="email" value={this.state.adresse_electronique} inp={this.change_adresse_electronique} />
                                    <Input label="Lieu de naissance" type="text" clas="form-control" taille="15" name="lieu_naissance" value={this.state.lieu_naissance} inp={this.change_lieu_naiss} />
                                    <Input label="Photo" type="file" value={this.state.photo} inp={this.change_photo} accept=".jpg,.png,.gif" clas="form-control" taille="15" name="photo" />
                                    <Liste value={this.state.type_piece} libelle_list="Type de pièce d'identité" name="piece" option={listPiece} change={this.change_type_piece} />
                                    <Liste value={this.state.etat_civil} libelle_list="Etat-civil" option={listEtatCivil} name="etat_civil" change={this.change_etat_civil} />
                                    <Input label="Numéro pièce d'identité" type="text" clas="form-control" taille="15" name="numero_piece" value={this.state.numero_piece} inp={this.change_numero_piece} />
                                </div><hr/>
                                <div className="form-group m-b-0 text-right">
                                    <button value="Enregistrer" className="btn" style={{background:"#ff6600", color:"#fff", "border-radius":"10px ! important"}}><i class="fas fa-save"></i>&nbsp;Enregistrer </button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        )
    }
}
class Cellule_tableau extends React.Component {
    render() {
      return (
        <th>{this.props.label}</th>
      )
    }
}
class Cellule_corps_tableau extends React.Component {
    render() {
      return (
        <tr>
            <td style={style_cellule}>{this.props.compte}</td>
            <td style={style_cellule}>{this.props.montant}</td>
            <td style={style_cellule}>{this.props.devise}</td>
            <td style={style_cellule}>{this.props.echeance}</td>
            <td style={style_cellule}>{this.props.penalite}</td>
            <td style={style_cellule}>{this.props.pourcentage}</td>
            <td style={style_cellule}>{this.props.statut}</td>
            <td style={style_cellule}>{this.props.action}</td>
        </tr>
      )
    }
}
class Tableau_historique_transaction extends React.Component {
    render() {
      return (
        <tr>
            <td style={style_cellule}>{this.props.type_operation}</td>
            <td style={style_cellule}>{this.props.id_agent}</td>
            <td style={style_cellule}>{this.props.noms}</td>
            <td style={style_cellule}>{this.props.devise}</td>
            <td style={style_cellule}>{this.props.montant}</td>
            <td style={style_cellule}>{this.props.frais}</td>
        </tr>
      )
    }
}
class Cellule_cors_tableau extends React.Component {
    render() {
      return (
        <tr>
          <td>{this.props.num_piece}</td>
          <td>{this.props.type_piece}</td>
          <td>{this.props.denomination}</td>
          <td>{this.props.id_nat}</td>
          <td>{this.props.action}</td>
        </tr>
      )
    }
}
class Cellule_cors_membre extends React.Component {
    render() {
      return (
        <tr>
          <td style={style_cellule}>{this.props.id}</td>
          <td style={style_cellule}>{this.props.prenom}</td>
          <td style={style_cellule}>{this.props.nom}</td>
          <td style={style_cellule}>{this.props.postnom}</td>
          <td style={style_cellule}>{this.props.sexe}</td>
          <td style={style_cellule}>{this.props.telephone}</td>
          <td style={style_cellule}>{this.props.type_membre}</td>
          <td style={style_cellule}>{this.props.action}</td>
        </tr>
      )
    }
}
class Action_membre extends React.Component {
    render() {
        return (
            <div>
                <button type="button" className="btn" onClick={this.props.cl} data-id={this.props.data_id} data-type={this.props.data_type} data-target="#exampleModal1" style={style_act_profil}><i className="fas fa-eye"></i>&nbsp;Détail</button>&nbsp;&nbsp;
                <button type="button" className="btn" onClick={this.props.clc} data-id={this.props.data_id} data-target="#exampleModal2" style={this.props.style}><i className="fas fa-user-edit"></i>&nbsp;Modifier</button>
            </div>
        )
    }
}
class Action_agence extends React.Component {
    render() {
        return (
            <div>
                <button type="button" className="btn" onClick={this.props.clc} data-id={this.props.data_id} data-target={this.props.target} style={this.props.style}><i className="fas fa-edit"></i>&nbsp;Modifier</button>
            </div>
        )
    }
}
class Action_partenaire extends React.Component {
    render() {
        return (
            <div>
                <button type="button" onClick={this.props.cl} data-id={this.props.data_id} data-toggle="modal" data-target="#exampleModal3" style={style_act_profil}>{this.props.libelle}<i className="mdi mdi-eye"></i></button>
            </div>
        )
    }
}
class Detail_utilisateur extends React.Component {
    render() {
        return (
            <div className="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title" id="exampleModalLabel" style={style_titre_mis_a_jour}>PROFIL DU MEMBRE</h6>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" id="modal_user">
                            <div className="row">
                                <span className="photo media-left"><img style={stylePhotoProfil} src={this.props.photo} onError={this.props.err_photo} id="photo" alt="avatar" /></span>
                            </div><br/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Email</p>
                                </div>
                                <div className="col-sm-9">
                                    <span id="adresse_electronique"><a href={"mailto:"+ this.props.email}>{this.props.email}</a></span>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Adresse physique</p>
                                </div>
                                <div className="col-sm-9">
                                    <span id="adresse_physique">{this.props.adresse_physique}</span>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Lieu de naissance</p>
                                </div>
                                <div className="col-sm-9">
                                    <span id="lieu_naissance">{this.props.lieu_naissance}</span>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Date de naissance</p>
                                </div>
                                <div className="col-sm-9">
                                    <span id="date_naissance">{this.props.date_naissance}</span>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Agence/Partenaire</p>
                                </div>
                                <div className="col-sm-9">
                                    <span id="agence">{this.props.structure}</span>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Update_user extends React.Component {
    render() {
        return (
            <div className="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 style={style_titre_mis_a_jour} className="modal-title" id="exampleModalLabel">MISE A JOUR DU MEMBRE</h6>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" id="modal_user">
                            <div className="row">
                                <label className="col-sm-3 col-form-label">Type</label>
                                <div className="col-sm-9">
                                    <select name="marital_status" onChange={this.props.onchange_type_membre} className="form-control marital_status">
                                        <Option selected={this.props.selection2} value="3" option="Gestionnaire des comptes" />
                                        <Option selected={this.props.selection3} value="4" option="Agent Agence" />
                                        <Option selected={this.props.selection4} value="5" option="Gestionnaire des crédits" />
                                        <Option selected={this.props.selection6} value="8" option="Agent Terrain" />
                                    </select>
                                </div>
                            </div><br/>
                            <div className="row">
                                <label className="col-sm-3 col-form-label">Agence</label>
                                <div className="col-sm-9">
                                    <select name="agence" disabled onChange={this.props.onChange_agence} className="form-control">
                                        {this.props.listAgence}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button aria-label="Close" data-dismiss="modal" onClick={this.props.update_membre} className="btn" style={stylebtnact}><i className="fas fa-user-edit"></i>&nbsp;Modifier</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Repertoire_personnel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableau_personnel:[],
            tableau_agence   :[],
            rep_member       :3,
            type_membre      :0,
            id_personnel     :'',
            agence           :0,
            type_piece       :1,
            num_piece        :'',
            id_agence        :0,
            selection2       :'',
            selection3       :'',
            selection4       :'',
            selection5       :'',
            selection6       :'',
            email            :'',
            adresse_physique :'',
            lieu_naiss       :'',
            structure        :'',
            photo            :'',
            one_erreur       :'',
            id_member        :0
        };
        this.search_member    = this.search_member.bind(this);
        this.search_id_member = this.search_id_member.bind(this);
        this.change_member    = this.change_member.bind(this);
        this.input_id         = this.input_id.bind(this);
        this.modifier         = this.modifier.bind(this);
        this.type_membre      = this.type_membre.bind(this);
        this.agence           = this.agence.bind(this);
        this.voir_plus        = this.voir_plus.bind(this);
        this.send_update      = this.send_update.bind(this);
        this.modifier         = this.modifier.bind(this);
        this.num_piece        = this.num_piece.bind(this);
        this.type_piece       = this.type_piece.bind(this);
    }
    async request(url,method,data) {
        try {
            const response = await fetch(url, {
                method: method, 
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const resultat = await response.json();
            return resultat
        }catch (erreur) {
            console.error("Erreur :", erreur);
        }
    }
    change_member(event) {
        this.setState({rep_member : event.target.value}); 
    }
    async voir_plus(event) {
        //event.preventDefault()
        $('#exampleModal1').modal('hide');

        let data = {
            id  :event.target.getAttribute('data-id'),
            type:event.target.getAttribute('data-type'),
        },
        response = await this.request("/personnel/on_personnel","POST",data),
        res = response.result
        res.map(item => (
            this.setState({
                date_naissance   :item.date_naissance,
                email            :item.email,
                adresse_physique :item.adresse_physique,
                lieu_naiss       :item.lieu_naissance,
                structure        :item.denomination,
                photo            :'https://admin.loanmesfn.com/'+item.photo,
                one_erreur       :item.photo
            })
        ))
        if(res !='') $('#exampleModal1').modal('show');
    } 
    replaceImage = (error) => {
        //replacement of broken Image
        error.target.src = this.state.one_erreur;
    }
    input_id(event) {
        this.setState({id_member : event.target.value});
    }
    num_piece(event) {
        this.setState({num_piece : event.target.value});
    }
    type_piece(event) {
        this.setState({type_piece : event.target.value});
    }
    type_membre(event) {
        this.setState({type_membre:event.target.value});
    }
    agence(event) {
        this.setState({id_agence:event.target.value});
    }
    async search_id_member() {
        this.setState({state_msg : 'attente'});
        let data={
                num_piece :this.state.num_piece,
                type_piece:this.state.type_piece,
                rep       :false
            },
            send_membre = await this.request("/partenaire/find_user","POST",data)
        this.setState({tableau_personnel : send_membre.reponse,state_msg:''}); 
    }
    async search_member(event) {

        this.setState({state_msg : 'attente'});

        let data = {
            id  :this.state.rep_member,
            type:1
        }
        this.setState({tableau_personnel : []}); 
        let response = await this.request("/personnel/rep_personnel","POST",data)
        this.setState({tableau_personnel : response.result,state_msg:''}); 
    }
    async modifier(event) {
        //event.preventDefault()
        $('#exampleModal2').modal('hide');
        this.setState({id_personnel:event.target.getAttribute('data-id')}); 

        let data = {
            id:event.target.getAttribute('data-id')
        },
        response = await this.request("/personnel/on_personnel","POST",data),
        res = response.result
        res.map(item => (
            (item.id_type ==3) ? this.setState({selection1:'',selection2:'selected',selection3:'',selection4:'',selection5:'',selection6:'',id_agence:item.id_agence,type_membre:3}) :
            (item.id_type ==4) ? this.setState({selection1:'',selection2:'',selection3:'selected',selection4:'',selection5:'',selection6:'',id_agence:item.id_agence,type_membre:4}) :
            (item.id_type ==5) ? this.setState({selection1:'',selection2:'',selection3:'',selection4:'selected',selection5:'',selection6:'',id_agence:item.id_agence,type_membre:5}) :
            (item.id_type ==6) ? this.setState({selection1:'',selection2:'',selection3:'',selection4:'',selection5:'selected',selection6:'',id_agence:item.id_agence,type_membre:6}) :
            this.setState({selection1:'',selection2:'',selection3:'',selection4:'',selection5:'',selection6:'selected',id_agence:item.id_agence,type_membre:8})
        )) 
        let response_rep_agence = await request_global("/agence/repertoire","POST",{})
        this.setState({tableau_agence:response_rep_agence.result}); 
        if(res !='' && response_rep_agence.result !='') $('#exampleModal2').modal('show');
    }
    async send_update() {
        let data = {
            type        :this.state.type_membre,
            agence      :this.state.id_agence,
            id_personnel:this.state.id_personnel
        }
        await this.request("/personnel/update_personnel","POST",data)

        this.setState({id_member:'',agence:''});
    }
    render() { 
        const { tableau_personnel,tableau_agence } = this.state,
            listMembre = tableau_personnel.map(item => (
                <Cellule_cors_membre 
                    id={item.id} 
                    prenom={item.prenom} 
                    nom={item.nom} 
                    postnom={item.post_nom} 
                    sexe={item.sexe} 
                    telephone={item.telephone} 
                    type_membre={item.libelle} 
                    action={<Action_membre data_type={(item.id_type=='6') ? item.id_type : ''} style={(item.id_type=='6') ? stylebtnactHidden : stylebtnact} clc={this.modifier} cl={this.voir_plus} 
                    data_id={item.id}/>} />
            )),
            res = this.props.piece,
            listTypePiece = res.map(item => (
                <Option value={item.id} option={item.libelle} />
            )),
            listAgence = tableau_agence.map(item => (
                (item.id== this.state.id_agence) ? <Option selected="selected" value={item.id} option={item.denomination}/> : <Option value={item.id} option={item.denomination}/>
            ))
        return (
            <div className="col-12" style={divStyle}>
                <div className="card form-card" style={stylefrom}>
                    <div className="card-body" >
                        <Rep_type_membre option={listTypePiece} change_num_piece={this.num_piece} change_type_piece={this.type_piece} cl1={this.search_member} inp={this.input_id} change={this.change_member} cl2={this.search_id_member} />
                        {(this.state.state_msg == 'attente') ? <i id="sp" className="fas fa-spinner fa-pulse" style={spinner}></i> : '' } 
                        <table className="table table-striped" id="example">
                            <thead style={styleentete}>
                                <Cellule_tableau label="Id" />
                                <Cellule_tableau label="Prénom" />
                                <Cellule_tableau label="Nom" />
                                <Cellule_tableau label="Postnom" />
                                <Cellule_tableau label="Sexe" />
                                <Cellule_tableau label="Téléphone" />
                                <Cellule_tableau label="Type Membre" />
                                <Cellule_tableau label="Action" />
                            </thead>
                            <tbody>
                                {(tableau_personnel!='') ? listMembre :'Aucune Personne'}
                            </tbody>
                            <tfoot>
                            </tfoot>
                        </table>
                        <Detail_utilisateur photo={this.state.photo} err_photo={this.replaceImage} email={this.state.email} adresse_physique={this.state.adresse_physique} lieu_naissance={this.state.lieu_naiss} date_naissance={this.state.date_naissance} structure={this.state.structure}/>
                        <Update_user onchange_type_membre={this.type_membre} onChange_agence={this.agence} update_membre={this.send_update} selection2={this.state.selection2} selection3={this.state.selection3} selection4={this.state.selection4} selection6={this.state.selection6} listAgence={listAgence} />
                    </div>
                </div>
            </div>
        )
    }
}
class Repertoire_partenaire extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                rccm_f:'',
                telephone:'',
                email:'',
                fichier:''
        };
       this.voir_plus = this.voir_plus.bind(this);
    }
    async voir_plus(event) {
        let data = {
            id:event.target.getAttribute('data-id')
        },
        response_rep_part = await request_global("/partenaire/find_organisation","POST",data),
        res = response_rep_part.reponse
        res.map(item => (
            this.setState({
                rccm_f:item.rccm_f,
                telephone: item.telephone,
                email:item.email,
                fichier:'/'+ item.autorisation
            })
        ))
    }
    render() {
        const list_gerant = this.props.tab,
            resGerant = list_gerant.map(item => (
            <Cellule_cors_tableau num_piece={item.numero_piece} type_piece={item.typee} denomination={item.denomination} id_nat={item.id_nat} action={<Action_partenaire cl={this.voir_plus} libelle="Détail" data_id={item.id_org}/>}/>
        ))
        return (
            <div className="col-12" style={divStyle}>
                <div className="col-12">
                    <div className="card form-card">
                        <div className="card-body" >
                            <table className="table table-striped" id="example">
                                <thead>
                                    <Cellule_tableau label="NUM P. IDENTITE G." />
                                    <Cellule_tableau label="TYPE PIECE IDENT." />
                                    <Cellule_tableau label="DENOMINATION" /> 
                                    <Cellule_tableau label="ID. NAT." />
                                    <Cellule_tableau label="ACTION" />
                                </thead>
                                <tbody>
                                   {resGerant}
                                </tbody>
                                <tfoot>
                                </tfoot>
                            </table>
                            
                            <div className="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h3 className="modal-title" id="exampleModalLabel">Profil de la structure</h3>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body" id="modal_user">
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="mb-0">RCCM OU F92</p>
                                                </div>
                                                <div className="col-sm-9">
                                                    <span id="rccm">{this.state.rccm_f}</span>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="mb-0">Tél. Structure</p>
                                                </div>
                                                <div className="col-sm-9">
                                                    <span id="tel">{this.state.telephone}</span>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="mb-0">Email</p>
                                                </div>
                                                <div className="col-sm-9">
                                                    <span id="email">{this.state.email}</span>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="mb-0">Fiche d'autorisation</p>
                                                </div>
                                                <div className="col-sm-9">
                                                    <span><a style={style_lien} id="fichier" href={this.state.fichier}>Lire ficher</a></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Tableau_compte extends React.Component {
    render() {
      return (
        <tr>
          <td>{this.props.numero_compte}</td>
          <td>{this.props.noms}</td>
          <td>{this.props.sexe}</td>
          <td>{this.props.telephone}</td>
          <td>{this.props.type_compte}</td>
          <td>{this.props.agence}</td>
        </tr>
      )
    }
}
class Tableau_compte_organisation extends React.Component {
    render() {
      return (
        <tr>
          <td>{this.props.numero_compte}</td>
          <td>{this.props.organisation}</td>
          <td>{this.props.id_national}</td>
          <td>{this.props.telephone}</td>
          <td>{this.props.agence}</td>
        </tr>
      )
    }
}
class Tableau_agence extends React.Component {
    render() {
      return (
        <tr>
          <td style={style_cellule}>{this.props.numero}</td>
          <td style={style_cellule}>{this.props.denomination}</td>
          <td style={style_cellule}>{this.props.reference}</td>
          <td style={style_cellule}>{this.props.avenue}</td>
          <td style={style_cellule}>{this.props.quartier}</td>
          <td style={style_cellule}>{this.props.commune}</td>
          <td style={style_cellule}>{this.props.telephone}</td>
          <td style={style_cellule}>{this.props.action}</td>
        </tr>
      )
    }
}
class Repertoire_compte_membre extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                id_piece_ident:'',
                id_type_piece:'',
                compte       :[],
                state_msg    :''
        };
        this.id_piece_ident = this.id_piece_ident.bind(this);
        this.id_type_piece  = this.id_type_piece.bind(this);
        this.search_account = this.search_account.bind(this);
    }
    async id_piece_ident(event) {
        event.preventDefault()
        this.setState({id_piece_ident:event.target.value});
    }
    async id_type_piece(event) {
        event.preventDefault()
        this.setState({id_type_piece:event.target.value});
    }
    async search_account(event) {
        event.preventDefault()

        this.setState({state_msg:'attente'});
        let data = {
            id            : 1,
            id_piece      : this.state.id_piece_ident,
            id_type_piece : this.state.id_type_piece
        },
        response_rep_part = await request_global("/adherent/rep_compte","POST",data),
        res = response_rep_part.result
        this.setState({ compte:res,state_msg:'' });
    }
    render() {
        let res_piece = this.props.piece,
            listPiece = res_piece.map(item => (
                <Option value={item.id} option={item.libelle}/>
            )),
            nom='',
            prenom='',
            post_nom='',
            sexe='',
            telephone='',
            im='',
            num_compte =[],
            num_piece_identite='',
            type_piece_identite='',
            name_agence ='',
            date_naissance='',
            email='',
            lieu_naissance='',
            etat_civil='',
            province='',
            photo = '',
            adresse_physique = ''
        function agence(code_agence) {
            let code_agen=''
            code_agen += code_agence
            while (code_agen.length < 4) {
                code_agen = '1'+code_agen
            } 
            return code_agen
        }
        function user_compte(code_user) {
            let code_us=''
            code_us += code_user
            while (code_us.length < 11) {
                code_us = '1'+code_us
            } 
            return code_us
        }
        function partenaire(code_agence) {
            let code_agen=''
            code_agen += code_agence
            while (code_agen.length < 4) {
                code_agen = '0'+code_agen
            } 
            return code_agen
        }
        function user_im(code_user) {
            let code_us=''
            code_us += code_user
            while (code_us.length < 6) {
                code_us = '0'+code_us
            } 
            return code_us
        }
        const { compte } = this.state,
        listCompte = compte.map(item => (
            nom = item.nom,
            post_nom = item.post_nom,
            prenom = item.prenom,
            sexe = item.sexe,
            telephone= item.telephone,
            im= partenaire(item.id_part) +'-'+ user_im(item.id_us),
            num_compte.push(agence(item.id_ag) +'-'+ user_compte(item.id_cmt) +' / '+ item.tp ),
            num_piece_identite = item.numero_piece,
            type_piece_identite = item.type_piece,
            name_agence += item.denomination,
            date_naissance= item.date_naissance,
            email = item.email,
            lieu_naissance = item.lieu_naissance,
            etat_civil = item.etat,
            province = item.prov,
            photo = item.photo,
            adresse_physique = item.adresse_physique
        ))
        
        return (
            <div className="col-12" style={divStyle}>
                <div className="col-12">
                    <div className="card form-card" style={stylefrom} >
                        <div className="card-body" >
                            <div className="row">
                                <div className="col-md-4">
                                    <input value={this.state.id_piece_ident} onInput={this.id_piece_ident} placeholder="Entrer Id pièce d'identité" className="form-control" type="text" />&nbsp;&nbsp;
                                </div>
                                <div className="col-md-4">
                                    <select className="form-control" value={this.state.id_type_piece} onChange={this.id_type_piece}>
                                        <option value="">Choisir</option>
                                        {listPiece}
                                    </select>&nbsp;&nbsp;
                                </div>
                                <div className="col-md-4">
                                    <button className="btn" onClick={this.search_account} style={blockbtn}><i className="fas fa-search"></i>&nbsp;Rechercher Compte</button>
                                </div>
                            </div>
                            {(this.state.state_msg == 'attente') ? <i id="sp" className="fas fa-spinner fa-pulse" style={spinner}></i> : '' } 
                            <br/>
                            {(photo) ? <img style={styleimg} src={'https://admin.loanmesfn.com/'+photo} className="rounded-circle" /> : '' } <br/><br/>
                            <table className="table table-striped" id="example">
                                {(this.state.compte !='') ? <tr><td className="col-1">Prénom</td><td>: {prenom}</td><td className="col-1">Lieu de naissance</td><td>: {lieu_naissance}</td></tr> : '' }
                                {(this.state.compte !='') ? <tr><td className="col-1">Nom</td><td>: {nom}</td><td>Etat-civil</td><td>: {etat_civil}</td></tr>  : '' }
                                {(this.state.compte !='') ? <tr><td className="col-1">Postnom</td><td>: {post_nom}</td><td>Province</td><td>: {province}</td></tr> : '' }
                                {(this.state.compte !='') ? <tr><td className="col-1">Téléphone</td><td>: {telephone}</td><td>Compte</td><td>:<span>&nbsp;{num_compte[0]}<br/>&nbsp; {num_compte[1]} </span></td></tr> : '' }
                                {(this.state.compte !='') ? <tr><td className="col-1">Email</td><td>: {email}</td><td>Adresse Physique</td><td>: {adresse_physique}</td></tr> : '' }
                                {(this.state.compte !='') ? <tr><td className="col-1">Date de naissance</td><td>: {date_naissance}</td><td>IM</td><td>: {im}</td></tr> : '' }
                                {(this.state.compte !='') ? <tr><td className="col-1">Num. pièce d'identité</td><td>: {num_piece_identite}</td><td>Type pièce d'identité</td><td>: {type_piece_identite}</td></tr> : '' }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Repertoire_compte_organisation extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                id_national:'',
                compte     :[],
                state_msg  :''
        };
        this.id_national    = this.id_national.bind(this);
        this.search_account = this.search_account.bind(this);
    }
    async id_national(event) {
        event.preventDefault()
        this.setState({id_national:event.target.value});
    }
    async search_account(event) {
        event.preventDefault()

        this.setState({ state_msg:'attente' });
        let data = {
            id     : 2,
            id_nat : this.state.id_national
        },
        response_rep_part = await request_global("/adherent/rep_compte","POST",data),
        res = response_rep_part.result
        this.setState({ compte:res,state_msg:'' });
    }
    render() {
        let nom='',
            prenom='',
            post_nom='',
            sexe='',
            telephone='',
            im='',
            num_compte =[],
            num_piece_identite='',
            type_piece_identite='',
            etat_civil = '',
            name_agence ='',
            date_naissance='',
            lieu_naissance = '',
            province='',
            autorisation='',
            email='',
            rccm='',
            id_national='',
            denomination='',
            photo = '',
            adresse_physique = ''
        function agence(code_agence) {
            let code_agen=''
            code_agen += code_agence
            while (code_agen.length < 4) {
                code_agen = '1'+code_agen
            } 
            return code_agen
        }  
        function user_compte(code_user) {
            let code_us=''
            code_us += code_user
            while (code_us.length < 11) {
                code_us = '1'+code_us
            } 
            return code_us
        }
        function user_im(code_user) {
            let code_us=''
            code_us += code_user
            while (code_us.length < 6) {
                code_us = '0'+code_us
            } 
            return code_us
        }
        function partenaire(code_agence) {
            let code_agen=''
            code_agen += code_agence
            while (code_agen.length < 4) {
                code_agen = '0'+code_agen
            } 
            return code_agen
        }
        const { compte } = this.state,
        listCompte = compte.map(item => (
            nom = item.nom,
            prenom = item.prenom,
            post_nom = item.post_nom,
            sexe = item.sexe,
            etat_civil = item.etat,
            province = item.dn_prov,
            num_piece_identite = item.numero_piece,
            type_piece_identite = item.type_piece,
            photo = item.photo,
            telephone= item.telephone,
            im= partenaire(item.id_ag) +'-'+ user_im(item.id_us),
            num_compte.push(agence(item.id_ag) +'-'+ user_compte(item.id_cmt) +' / '+ item.tp ),
            name_agence += item.dn,
            date_naissance= item.date_naissance,
            email = item.email,
            lieu_naissance = item.lieu_naissance,
            denomination = item.denomination,
            id_national = item.id_national,
            rccm = item.rccm_f,
            autorisation = item.autorisation,
            adresse_physique = item.adresse_physique
        ))
        return (
            <div className="col-12" style={divStyle}>
                <div className="col-12">
                    <div className="card form-card" style={stylefrom}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-8">
                                    <input value={this.state.id_national} onInput={this.id_national} placeholder="Entrer l'ID National" className="form-control" type="text" />&nbsp;&nbsp;
                                </div>
                                <div className="col-md-4">
                                    <button className="btn" onClick={this.search_account} style={blockbtn}><i className="fas fa-search"></i>&nbsp;Rechercher Compte</button>
                                </div>
                            </div>
                            {(this.state.state_msg == 'attente') ? <i id="sp" className="fas fa-spinner fa-pulse" style={spinner}></i> : '' } 
                            <br/>
                            <div className="row">
                                <div className="col-md-12">
                                    <table className="table table-striped" id="example">
                                    {(this.state.compte !='') ?  <tr><td className="col-1"><b>ETABLISSEMENT</b></td><td></td><td></td><td></td></tr> :'' }
                                    {(this.state.compte !='') ?  <tr><td className="col-1">Téléphone</td><td>: {telephone}</td><td className="col-1">Compte</td><td>:<span>&nbsp;{num_compte[0]}<br/></span></td></tr> :'' }
                                    {(this.state.compte !='') ?  <tr><td className="col-1">Denomination</td><td>: {denomination}</td><td>Autorisation</td><td>: <a href={'https://admin.loanmesfn.com/'+autorisation} target="blank">Document administratif</a> </td></tr> :'' }
                                    {(this.state.compte !='') ?  <tr><td className="col-1">Email</td><td>: {email}</td><td>Adresse Physique</td><td>: {adresse_physique}</td></tr> :'' }
                                    {(this.state.compte !='') ?  <tr><td className="col-1">RCCM</td><td>: {rccm}</td><td>ID National</td><td>: {id_national}</td></tr> :'' }

                                    {(this.state.compte !='') ?  <tr><td className="col-1"><br/><b>GERANT</b></td><td></td><td></td><td></td></tr> :'' }
                                    {(this.state.compte !='') ?  <tr><td className="col-1"><img style={styleimg} src={'https://admin.loanmesfn.com/'+photo} className="rounded-circle" /></td><td></td>
                                            <td colspan="2">
                                                <div className="row"><div className="col-md-4">Noms </div> <div className="col-md-8"> : {prenom} {nom} {post_nom}</div></div>
                                                <div className="row"><div className="col-md-4">Sexe </div> <div className="col-md-8"> : {sexe}</div></div>
                                                <div className="row"><div className="col-md-4">Date de naissance </div> <div className="col-md-8"> : {date_naissance}</div></div>
                                                <div className="row"><div className="col-md-4">Lieu de naissance </div> <div className="col-md-8"> : {lieu_naissance}</div></div>
                                            </td>
                                            
                                            </tr> :'' }
                                    {(this.state.compte !='') ?  <tr><td className="col-1">Type pièce identifié</td><td>: {type_piece_identite}</td><td className="col-1">Num. Pièce</td><td>: {num_piece_identite}</td></tr> :'' }
                                    {(this.state.compte !='') ?  <tr><td className="col-1">Province</td><td>: {province}</td><td> IM</td><td>: {im}</td></tr> :'' }
                                    {(this.state.compte !='') ?  <tr><td className="col-1">Email</td><td colspan="3">: {email}</td></tr> :'' }
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Nouvelle_agence extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                commune     :'',
                telephone   :'',
                avenue      :'',
                quartier    :'',
                denomination:'',
                reference   :'',
                state_msg   :'',
                bol         :'',
                erreur      :[]
        };
        this.change_commune      = this.change_commune.bind(this);
        this.change_denomination = this.change_denomination.bind(this);
        this.change_num_parcelle = this.change_num_parcelle.bind(this);
        this.change_telephone    = this.change_telephone.bind(this);
        this.change_avenue       = this.change_avenue.bind(this);
        this.change_commune      = this.change_commune.bind(this);
        this.change_quartier     = this.change_quartier.bind(this);
        this.send_agence         = this.send_agence.bind(this);
    }
    change_commune(event) {
        this.setState({commune: event.target.value});
    }
    change_denomination(event) {
        this.setState({denomination: event.target.value});
    }
    change_num_parcelle(event) {
        this.setState({reference: event.target.value});
    }
    change_telephone(event) {
        this.setState({telephone: event.target.value});
    }
    change_avenue(event) {
        this.setState({avenue: event.target.value});
    }
    change_quartier(event) {
        this.setState({quartier: event.target.value});
    }
    async send_agence() {
        this.setState({
            state_msg:'attente',
            erreur:[]
        });
        let dataAgence = {
            denomination:this.state.denomination,
            ref_parcelle:this.state.reference,
            commune:this.state.commune,
            telephone:this.state.telephone,
            avenue:this.state.avenue,
            quartier:this.state.quartier
        },
        send_agence = await request_global("/agence/create","POST",dataAgence)
        if(send_agence.result == 'r'){
            this.setState({
                commune     :'',
                telephone   :'',
                avenue      :'',
                quartier    :'',
                denomination:'',
                reference   :'',
                state_msg:'r',
                erreur:[],
                bol:''
            });
        }else{
            let err = send_agence.result,
                erreurs=[]
            for (let i = 0; i < err.length; i++) {
                erreurs.push(err[i])
            }
            this.setState({
                state_msg:'e',
                erreur   :erreurs
            })
        }
    }
    render() { 
        return (
            <div className="col-12" style={divStyle}>
                <div className="card form-card" style={stylefrom}>       
                    <div className="card-body">
                        <Msg bol={ (this.state.state_msg=='r') ? <Msg_reussite msg_reu="Agence enregistrée avec succès" /> : (this.state.state_msg=='e') ? <Msg_erreur msg_err={this.state.erreur}/> : ''} />
                        
                        <hr/>
                        
                        <div className="row">
                            <Input label="Dénomin." clas="form-control" inp={this.change_denomination} value={this.state.denomination} type="text" />
                            <Input label="Téléphone" clas="form-control" inp={this.change_telephone} value={this.state.telephone} type="text" />
                            <Input label="Réf. Parcelle" clas="form-control" inp={this.change_num_parcelle} value={this.state.reference} type="text" />
                            <Input label="Avenue" clas="form-control" inp={this.change_avenue} value={this.state.avenue} type="text" />
                            <Commune change={this.change_commune} clas="form-control" value={this.state.commune} type="text" />
                            <Input label="Quartier" inp={this.change_quartier} clas="form-control" value={this.state.quartier} type="text" />
                        </div>
                        <hr/>
                        {(this.state.state_msg == 'attente') ? <i id="sp" className="fas fa-spinner fa-pulse" style={spinner}></i> : '' }
                        <div className="form-group m-b-0 text-right">
                            <button className="btn" onClick={this.send_agence} style={blockbtn}><i className="fas fa-save"></i>&nbsp;Enregistrer</button>
                        </div>
                    
                    </div>
                </div>
            </div>
        )
    }
}
class Repertoire_agence extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            denomination:'',
            num_residence:'',
            list_agence:[],
            id_agence:0,
            rue:'',
            quartier:'',
            state_msg:'',
            commune:'',
            state_agence:true,
            telephone:''
        };
        this.denomination = this.denomination.bind(this);
        this.num_residence = this.num_residence.bind(this);
        this.rue = this.rue.bind(this);
        this.quartier = this.quartier.bind(this);
        this.commune = this.commune.bind(this);
        this.telephone = this.telephone.bind(this);
        this.update_agence = this.update_agence.bind(this);
        this.modifier = this.modifier.bind(this);
    }
    denomination(event) {
        this.setState({denomination: event.target.value});
    }
    num_residence(event) {
        this.setState({num_residence: event.target.value});
    }
    rue(event) {
        this.setState({rue: event.target.value});
    }
    quartier(event) {
        this.setState({quartier: event.target.value});
    }
    commune(event) {
        this.setState({commune: event.target.value});
    }
    telephone(event) {
        this.setState({telephone: event.target.value});
    }
    async modifier(event) {
        event.preventDefault()
        this.setState({ state_msg:'' });
        $('#exampleModal3').modal('hide');

        let data = {
                id : event.target.getAttribute('data-id')
            },
            res_agence = await request_global("/agence/on_agence","POST",data),
            res        = res_agence.result,
            solde      = await request_global("/agence/solde_agence","POST",data)
        
        res.map(item => (
            this.setState({
                denomination :item.denomination,
                num_residence:item.numero_parcel,
                id_agence    :item.id,
                rue          :item.avenue,
                quartier     :item.quartier,
                commune      :item.commune,
                telephone    :item.telephone,
                state_agence :res_agence.result1
            }),
            document.querySelector('.commune').value = item.commune
        )) 
        this.setState({
            solde_cdf : (solde.result1==null) ? 0 : parseFloat(solde.result1).toFixed(2),
            solde_usd : (solde.result2==null) ? 0 : parseFloat(solde.result2).toFixed(2),
            solde_eur : (solde.result2==null) ? 0 : parseFloat(solde.result3).toFixed(2)
        })
        if(res !='' && solde !='') $('#exampleModal3').modal('show');         
    }
    async update_agence(event) {
        this.setState({ state_msg:'' });
        let data = {
            denomination: this.state.denomination,
            ref_parcelle: this.state.num_residence,
            commune     : this.state.commune,
            telephone   : this.state.telephone,
            avenue      : this.state.rue,
            quartier    : this.state.quartier,
            id          : this.state.id_agence,
        },
        send = await request_global("/agence/update","POST",data),
        res = send.result
        if(res == 'r'){
            this.setState({
                state_msg:'r'
            });
            $('#exampleModal3').modal('hide');
        }else{
            if(res =='deconnexion'){
                window.location.replace("https://agence.loanmesfn.com/")
            }else{
                let err = send.result,
                    erreurs=[]
                for (let i = 0; i < err.length; i++) {
                    erreurs.push(err[i])
                }
                this.setState({
                    state_msg:'e',
                    erreur   :erreurs
                })
            }
        }
    }
    render() {
        let res = this.props.rep_ag,
            listAgence = res.map(item => (
                <Tableau_agence numero={item.id} denomination={item.denomination} reference={item.numero_parcel} avenue={item.avenue} quartier={item.quartier} commune={item.commune} telephone={item.telephone} action={<Action_agence data_id={item.id} clc={this.modifier} style={blockbtn} target="#exampleModal3" />}/>
            ))
        return (
            <div className="col-12" style={divStyle}>
                <div className="col-12">
                    <div className="card form-card" style={stylefrom}>
                        <div className="card-body" >
                            <table className="table table-striped" id="example">
                                <thead style={styleentete}>
                                    <Cellule_tableau label="N°" />
                                    <Cellule_tableau label="Dénomination" />
                                    <Cellule_tableau label="Num. résidence" />
                                    <Cellule_tableau label="Rue" />
                                    <Cellule_tableau label="Quartier" />
                                    <Cellule_tableau label="Commune" />
                                    <Cellule_tableau label="Téléphone" />
                                    <Cellule_tableau label="Action" />
                                </thead>
                                <tbody>
                                    {listAgence}
                                </tbody>
                                <tfoot>
                                </tfoot>
                            </table>
                            <Mise_a_jour_agence 
                                msg_err = {
                                <Msg bol={ (this.state.state_msg=='r') ? <Msg_reussite msg_reu="Mise à jour effectuée succès." /> : (this.state.state_msg=='e') ? <Msg_erreur msg_err={this.state.erreur}/> : ''} />}
                                denomination ={this.denomination} deno={this.state.state_agence} denomination_v={this.state.denomination} 
                                numero={this.state.state_agence}
                                rue          ={this.rue} avenue={this.state.state_agence} rue_v={this.state.rue}
                                quartier     ={this.quartier} quart={this.state.state_agence} quartier_v={this.state.quartier}
                                commune      ={this.commune} commun={this.state.state_agence}
                                telephone    ={this.telephone} tel={this.state.state_agence} telephone_v={this.state.telephone}
                                num          ={this.num_residence} num_v={this.state.num_residence}
                                solde_cdf_v  ={this.state.solde_cdf}
                                solde_usd_v  ={this.state.solde_usd}
                                solde_eur_v  ={this.state.solde_eur}
                                update_agence={this.update_agence}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Mise_a_jour_agence extends React.Component {
    render() { 
        return (
            <div className="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 style={style_titre_mis_a_jour} className="modal-title" id="exampleModalLabel">MISE A JOUR DE L'AGENCE</h6>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" id="modal_user">
                            <div className="row">
                                {this.props.msg_err}
                            </div>
                            <div className="row">
                                <label className="col-sm-3 col-form-label">Dénom.</label>
                                <div className="col-sm-9">
                                    <input type="text" onInput={this.props.denomination} disabled={this.props.deno} value={this.props.denomination_v} className="form-control denomination" />
                                </div>
                            </div><br/>
                            <div className="row">
                                <label className="col-sm-3 col-form-label">Num. Rés.</label>
                                <div className="col-sm-9">
                                    <input type="text" onInput={this.props.num} disabled={this.props.numero} value={this.props.num_v} className="form-control numero" />
                                </div>
                            </div><br/>
                            <div className="row">
                                <label className="col-sm-3 col-form-label">Rue</label>
                                <div className="col-sm-9">
                                    <input type="text" onInput={this.props.rue} disabled={this.props.avenue} value={this.props.rue_v} className="form-control rue" />
                                </div>
                            </div><br/>
                            <div className="row">
                                <label className="col-sm-3 col-form-label">Quartier</label>
                                <div className="col-sm-9">
                                    <input type="text" onInput={this.props.quartier} disabled={this.props.quart} value={this.props.quartier_v} className="form-control quartier" />
                                </div>
                            </div><br/>
                            <Commune_update comm={this.props.commun} onChange={this.props.commune} />
                            <br/>
                            <div className="row">
                                <label className="col-sm-3 col-form-label">Téléphone</label>
                                <div className="col-sm-9">
                                    <input onInput={this.props.telephone} disabled={this.props.tel} value={this.props.telephone_v} className="form-control telephone" />
                                </div>
                            </div><br/>
                            <div className="row">
                                <label className="col-sm-3 col-form-label">Solde CDF</label>
                                <div className="col-sm-9">
                                    <input disabled="true" onInput={this.props.solde_cdf} value={this.props.solde_cdf_v} className="form-control solde_cdf_v" />
                                </div>
                            </div><br/>
                            <div className="row">
                                <label className="col-sm-3 col-form-label">Solde USD</label>
                                <div className="col-sm-9">
                                    <input disabled="true" onInput={this.props.solde_usd} value={this.props.solde_usd_v} className="form-control solde_usd_v" />
                                </div>
                            </div><br/> 
                            <div className="row">
                                <label className="col-sm-3 col-form-label">Solde EUR</label>
                                <div className="col-sm-9">
                                    <input disabled="true" onInput={this.props.solde_eur} value={this.props.solde_eur_v} className="form-control solde_eur_v" />
                                </div>
                            </div><br/>
                        </div>
                        <div className="modal-footer">
                            <button className="btn" style={blockbtn} onClick={this.props.update_agence}><i class="fas fa-edit"></i>&nbsp;Modifier</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Mise_a_jour_config_transaction extends React.Component {
    render() { 
        return (
            <div className="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 style={style_titre_mis_a_jour} className="modal-title" id="exampleModalLabel">MISE A JOUR DE LA CONFIGURATION</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" id="modal_user">
                            <div className="row">
                                <label className="col-sm-3 col-form-label">Minimum</label>
                                <div className="col-sm-9">
                                    <input type="number" onInput={this.props.minimum} value={this.props.minimum_v} className="form-control" />
                                </div>
                            </div><br/>
                            <div className="row">
                                <label className="col-sm-3 col-form-label">Maximum</label>
                                <div className="col-sm-9">
                                    <input type="number" onInput={this.props.maximum} value={this.props.maximum_v} className="form-control" />
                                </div>
                            </div><br/>
                            <div className="row">
                                <label className="col-sm-3 col-form-label">Frais</label>
                                <div className="col-sm-9">
                                    <input type="number" min="1" max="100" onInput={this.props.frais} value={this.props.frais_v} className="form-control" />
                                    <input type="hidden" value={this.props.id_transaction} className="form-control id_config" />
                                </div>
                            </div><br/>
                        </div>
                        <div className="modal-footer">
                            <input value="Modifier" aria-label="Close" data-dismiss="modal" onClick={this.props.update} style={stylebtnact} className="btn btn-primary" type="submit" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Lien extends React.Component {
    render() { 
        return (
            <div>
                <a href="#" style={this.props.style} onClick={this.props.onClick} data-id={this.props.data_id} data-toggle="modal" data-target="#exampleModal4">{this.props.lien}</a>
            </div>
        )
    }
}
class Bouton extends React.Component {
    render() { 
        return (
            <div>
                <button onClick={this.props.clc} data-id={this.props.data_id} className="btn" style={blockbtn}><i className={this.props.icone}></i>&nbsp;{this.props.lbl}</button>
            </div>
        )
    }
}
class Nouveau_compte extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                im              :'',
                id_piece_ident  :'',
                id_type_piece   :'',
                type_compte     :'', 
                type_membre     :'',
                lieu_naiss      :'',
                sexe            :'',
                email           :'',
                etat_civil      :'',
                telephone       :'',
                adresse_physique:'',
                date_naissance  :'',
                img             :'',
                img_replace     :'',
                id_compte       :'',
                id_agence       :'',
                noms            :'',
                id_member       :'',
                id_organisation :'',
                id_nationalite  :'',
                etat            :'',
                state_msg       :'',
                bol             :'',
                membre_patner   :'',
                erreur          :[]
        };
        this.change_im          = this.change_im.bind(this);
        this.id_piece_ident     = this.id_piece_ident.bind(this);
        this.id_type_piece      = this.id_type_piece.bind(this);
        this.type_compte        = this.type_compte.bind(this);
        this.numero_compte      = this.numero_compte.bind(this);
        this.searche_member     = this.searche_member.bind(this);
        this.send               = this.send.bind(this);
        this.change_type_compte = this.change_type_compte.bind(this);
    }
    change_im(event) {
        this.setState({im: event.target.value});
    }
    id_piece_ident(event) {
        this.setState({id_piece_ident: event.target.value});
    }
    id_type_piece(event) {
        this.setState({id_type_piece: event.target.value});
    }
    change_type_compte(event) {
        this.setState({type_compte: event.target.value});
    }
    type_compte(event) {
        this.setState({type_compte: event.target.value});
    }
    numero_compte(event) {
        this.setState({numero_compte: event.target.value});
    }
    async send() {
         this.setState({
            state_msg:'attente',
            erreur   :[]
        });
        let dataCompte = {
            type_compte      :this.state.type_compte,
            id_agence        :1,
            id_member        :this.state.id_member,
            id_partenaire    :this.state.id_organisation,
            membre_partrnaire:this.state.membre_patner,
            type_memb        :this.state.type_membre
        },
        send_compte = await request_global("/adherent/create_compte","POST",dataCompte)
        if(send_compte.r =='r'){
            this.setState({
                id_compte       :send_compte.result,
                
                img             :'',
                img_replace     :'',
                id_piece_ident  :'',
                id_type_piece   :'',
                im              :'',
                noms            :'',
                lieu_naiss      :'',
                sexe            :'',
                email           :'',
                etat_civil      :'',
                telephone       :'',
                adresse_physique:'',
                date_naissance  :'',
                type_membre     :'',

                etat            :'',
                id_member       :'',
                id_organisation :'',

                state_msg       :'r',
                erreur          :[],
                bol             :''
            })
            swal({
                title: "Succès",
                text: "Compte crée avec succès.",
                icon: "success",
                button: false,
            }); 
        }else{
            if(send_compte.result =='deconnexion'){
                window.location.replace("https://agence.loanmesfn.com/")
            }else{
                let err    = send_compte.result,
                    erreurs=[]
                for (let i = 0; i < err.length; i++) {
                    erreurs.push(err[i])
                }
                this.setState({
                    state_msg:'e',
                    erreur   :erreurs
                })
                swal({
                    title: "Erreur",
                    text: ''+erreurs,
                    icon: "error",
                    button:false
                });
            }
        }
    }
    replaceImage = (error) => {
        //replacement of broken Image
        error.target.src = this.state.img_replace;
    }
    async searche_member() {
        this.setState({
            lieu_naiss      :'',
            sexe            :'',
            email           :'',
            etat_civil      :'',
            telephone       :'',
            adresse_physique:'',
            date_naissance  :'',
            type_membre     :'',
            img             :'',
            img_replace     :'',
            id_member       :'',
            state_msg       :'attente',
            type_compte     :'', 
            id_organisation :'',
            etat            :2
        });
        let data={
            im        :this.state.im,
            num_piece :this.state.id_piece_ident,
            type_piece:this.state.id_type_piece
        },
        searche_adherent = await request_global("/adherent/get_adherent_by_im_id_piece","POST",data),
        res = searche_adherent.result
        if(res==''){
            this.setState({
                im            :'',
                id_piece_ident:'',
                numero_compte :'',
                noms          :'',
                etat          :2,
                state_msg     :''
            });
            swal({
                title: "Erreur",
                text: 'Aucun membre n\'est trouvé',
                icon: "error",
                button:false
            });
        }else{
            res.map((item)=>{
                if(item.etat_us == 1){
                    (item.id_type == 6) ? this.setState({ type_compte:'Courant' }) : this.setState({ type_compte:'Courant' })
                    this.setState({
                        noms            :item.nom+' '+item.post_nom+' '+item.prenom,
                        etat            :1,
                        membre_patner   :(item.membre_partrnaire) ? true : false,
                        lieu_naiss      :item.lieu_naissance,
                        sexe            :item.sexe,
                        email           :item.email,
                        etat_civil      :item.eta,
                        telephone       :item.telephone,
                        adresse_physique:item.adresse_physique,
                        date_naissance  :item.date_naissance,
                        type_membre     :item.id_type,
                        img             :'https://admin.loanmesfn.com/'+ item.photo,
                        img_replace     :item.photo,
                        id_member       :item.id_user,
                        id_organisation :item.id_org,
                        state_msg       :''
                    });
                }else{
                    swal({
                        title: "Erreur",
                        text: 'Cet utilisateur est désactivé',
                        icon: "error",
                        button:false
                    });
                    this.setState({state_msg :''});
                }
            })
        }
    }
    render() {
        let res = this.props.piece,
            listPiece = res.map(item => (
                <Option value={item.id} option={item.libelle}/>
            ))
        return (
            <div className="col-12" style={divStyle}>
                <div className="card form-card" style={stylefrom}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <input value={this.state.id_piece_ident} onInput={this.id_piece_ident} placeholder="Entrer Id pièce d'identité" className="form-control" type="text" />&nbsp;&nbsp;
                            </div>
                            <div className="col-md-3">
                                <select className="form-control" value={this.state.id_type_piece} onChange={this.id_type_piece}>
                                    <option value="">Choisir</option>
                                    {listPiece}
                                </select>&nbsp;&nbsp;
                            </div>
                            <div className="col-md-3">
                                <input value={this.state.im} onInput={this.change_im} placeholder="Entrer Id National OU IM" className="form-control" type="text" />&nbsp;&nbsp;
                            </div>
                            <div className="col-md-3">
                                <button className="btn" onClick={this.searche_member} style={blockbtn}><i className="fas fa-search"></i>&nbsp;Rechercher</button>
                            </div>    
                            <br/>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-md-6">
                               { (this.state.img) ? <img style={styleimg} src={this.state.img} onError={this.replaceImage} className="rounded-circle" />:''}
                            </div>
                        </div><br/>
                        {(this.state.state_msg == 'attente') ? <i id="sp" className="fas fa-spinner fa-pulse" style={spinner}></i> : '' } 
                        <div className="row">
                            <Input disabled="true" label="Noms" plc="Prénom Nom Postnom" clas="form-control" value={this.state.noms} type="text" />
                            <Input disabled="true" label="lieu de naissance" plc="Lieu de naissance" clas="form-control" value={this.state.lieu_naiss} type="text" />
                            <Input disabled="true" label="Sexe" plc="Sexe" clas="form-control" value={this.state.sexe} type="text" />
                            <Input disabled="true" label="Email" plc="email" clas="form-control" value={this.state.email} type="text" />
                            <Input disabled="true" label="Etat-civil" plc="Etat-civil" clas="form-control" value={this.state.etat_civil} type="text" />
                            <Input disabled="true" label="Téléphone" plc="Téléphone" clas="form-control" value={this.state.telephone} type="text" />
                            <Input disabled="true" label="Adresse Physique" plc="Adresse Physique" clas="form-control" value={this.state.adresse_physique} type="text" />
                            <Input disabled="true" label="Date de naissance" plc="Date de naissance" clas="form-control" value={this.state.date_naissance} type="text" />
                            {(this.state.membre_patner == true) ? 
                            <Type_compte1 disabled={this.state.sexe_disabled} label="Type de Compte" clas="form-control" val={this.state.type_compte} change={this.change_type_compte} type="text" /> : 
                            <Type_compte2 disabled={this.state.sexe_disabled} label="Type de Compte" clas="form-control" val={this.state.type_compte} change={this.change_type_compte} type="text" /> }
                        </div>
                        <hr/> 
                        {(this.state.state_msg == 'attente') ? <i id="sp" className="fas fa-spinner fa-pulse" style={spinner}></i> : '' } 
                        <div className="form-group m-b-0 text-right">
                            <button className="btn" onClick={this.send} style={blockbtn}><i className="fas fa-save"></i>&nbsp;Créer Compte</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Credit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prenom            :'',
            state_msg         :'',
            erreur            :[],
            nom               :'',
            num_compte        :'',
            id_compte         :'',
            post_nom          :'',
            adresse_physique  :'',
            lieu_naissance    :'',
            date_naissance    :'',
            sexe              :'',
            province          :'',
            telephone         :'',
            num_piece_identite:'',
            id_type           :'',
            etat_civil        :'',
            id_user           :'',

            // Identité temoin

            prenom_temoin            :'',
            nom_temoin               :'',
            post_nom_temoin          :'',
            adresse_physique_temoin  :'',
            lieu_naissance_temoin    :'',
            date_naissance_temoin    :'',
            sexe_temoin              :'',
            province_temoin          :'',
            telephone_temoin         :'',
            num_piece_identite_temoin:'',
            etat_civil_temoin        :'',
            profession_temoin        :'',
            type_piece               :'',
            id_temoin                :0,
            email                    :'',
            disabled                 :false,

            // Besoin de crédit

            montant        :0,
            devise         :'',
            pourcentage    :0,
            frais_penalite :0,
            delai          :2
        };

        // Temoin 

        this.prenom_temoin            = this.prenom_temoin.bind(this);
        this.email                    = this.email.bind(this);
        this.nom_temoin               = this.nom_temoin.bind(this);
        this.post_nom_temoin          = this.post_nom_temoin.bind(this);
        this.adresse_physique_temoin  = this.adresse_physique_temoin.bind(this);
        this.lieu_naissance_temoin    = this.lieu_naissance_temoin.bind(this);
        this.date_naissance_temoin    = this.date_naissance_temoin.bind(this);
        this.sexe_temoin              = this.sexe_temoin.bind(this);
        this.province_temoin          = this.province_temoin.bind(this);
        this.telephone_temoin         = this.telephone_temoin.bind(this);
        this.num_piece_identite_temoin= this.num_piece_identite_temoin.bind(this);
        this.etat_civil_temoin        = this.etat_civil_temoin.bind(this);
        this.profession_temoin        = this.profession_temoin.bind(this);
        this.type_piece               = this.type_piece.bind(this);

        // Frais de penalité

        this.montant        = this.montant.bind(this);
        this.devise         = this.devise.bind(this);
        this.pourcentage    = this.pourcentage.bind(this);
        this.frais_penalite = this.frais_penalite.bind(this);
        this.searche_member = this.searche_member.bind(this);
        this.searche_temoin = this.searche_temoin.bind(this);
        this.num_compte     = this.num_compte.bind(this);
        this.request        = this.request.bind(this);
        this.delai          = this.delai.bind(this);
        this.send           = this.send.bind(this);
    }
    email(event) {
        this.setState({email: event.target.value});
    }
    prenom_temoin(event) {
        this.setState({prenom_temoin: event.target.value});
    }
    type_piece(event) {
        this.setState({type_piece: event.target.value});
    }
    nom_temoin(event) {
        this.setState({nom_temoin: event.target.value});
    }
    post_nom_temoin(event) {
        this.setState({post_nom_temoin: event.target.value});
    }
    adresse_physique_temoin(event) {
        this.setState({adresse_physique_temoin: event.target.value});
    }
    lieu_naissance_temoin(event) {
        this.setState({lieu_naissance_temoin: event.target.value});
    }
    date_naissance_temoin(event) {
        this.setState({date_naissance_temoin: event.target.value});
    }
    sexe_temoin(event) {
        this.setState({sexe_temoin: event.target.value});
    }
    province_temoin(event) {
        this.setState({province_temoin: event.target.value});
    }
    telephone_temoin(event) {
        this.setState({telephone_temoin: event.target.value});
    }
    num_piece_identite_temoin(event) {
        event.preventDefault()
        this.setState({num_piece_identite_temoin: event.target.value});
    }
    etat_civil_temoin(event) {
        this.setState({etat_civil_temoin: event.target.value});
    }
    profession_temoin(event) {
        this.setState({profession_temoin: event.target.value});
    }
    num_compte(event) {
        this.setState({num_compte: event.target.value});
    }
    async searche_member(event) {
        event.preventDefault()

        this.setState({
            erreur    :[],
            state_msg :'attente'
        });
        let data = {
                compte:this.state.num_compte
            },
            searche_compte     = await request_global("/agence/search_compte","POST",data),
            res                = searche_compte.result,
            search_pourcentage = await request_global("/agence/select_poucentage_depot","POST",{}),
            res_pourcentage    = search_pourcentage.result

        if(res==''){
            this.setState({
                prenom            :'',
                nom               :'',
                post_nom          :'',
                adresse_physique  :'',
                lieu_naissance    :'',
                date_naissance    :'',
                sexe              :'',
                province          :'',
                telephone         :'',
                num_piece_identite:'',
                id_user           :'',
                etat_civil        :'',
                state_msg         :'',
                id_temoin         :0
            });
        }else{
            res_pourcentage.map((item)=>{
                this.setState({
                    pourcentage    :item.pourcentage_credit,
                    frais_penalite :item.penalite_remboursement
                });
            })
            res.map((item)=>{
                this.setState({
                    prenom            :item.prenom,
                    id_user           :item.id_user,
                    nom               :item.nom,
                    id_compte         :item.id_cmt,
                    post_nom          :item.post_nom,
                    adresse_physique  :item.post_nom,
                    lieu_naissance    :item.lieu_naissance,
                    date_naissance    :item.date_naissance,
                    sexe              :item.sexe,
                    province          :item.lb,
                    telephone         :item.telephone,
                    num_piece_identite:item.numero_piece,
                    etat_civil        :item.eta,
                    id_type           :(item.id_membre) ? 2 : 1,
                    state_msg         :''
                });
            })
        }
    }
    async request(url,method,data) {
        try {
            const response = await fetch(url, {
                method: method, 
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const resultat = await response.json();
            return resultat
        }catch (erreur) {
            console.error("Erreur :", erreur);
        }
    }
    async searche_temoin(event) {
        event.preventDefault()
        this.setState({
            erreur    :[],
            state_msg :'attente'
        });
        
        let data = {
                num_piece :this.state.num_piece_identite_temoin,
                type_piece:this.state.type_piece
            },
            send = await this.request("/partenaire/find_temoin","POST",data),
            res  = send.reponse
        if(res==''){
            this.setState({
                prenom_temoin            :'',
                nom_temoin               :'',
                post_nom_temoin          :'',
                adresse_physique_temoin  :'',
                lieu_naissance_temoin    :'',
                date_naissance_temoin    :'',
                sexe_temoin              :'',
                province_temoin          :'',
                telephone_temoin         :'',
                num_piece_identite_temoin:'',
                etat_civil_temoin        :'',
                type_piece               :'',
                state_msg                :'',
                email                    :'',
                disabled                 :false
            });
        }else{
            res.map((item)=>{
                this.setState({
                    prenom_temoin            :item.prenom,
                    id_temoin                :item.id_tem,
                    nom_temoin               :item.nom,
                    post_nom_temoin          :item.post_nom,
                    adresse_physique_temoin  :item.adresse_physique,
                    lieu_naissance_temoin    :item.lieu_naissance,
                    date_naissance_temoin    :item.date_naissance,
                    sexe_temoin              :item.sexe,
                    province_temoin          :item.id_prov,
                    telephone_temoin         :item.telephone,
                    num_piece_identite_temoin:item.numero_piece,
                    etat_civil_temoin        :item.id_etat,
                    type_piece               :item.id_type_piece_ident,
                    email                    :item.email,
                    disabled                 :true,
                    state_msg                :''
                });
            })
        } 
    }
    async send(event) {
        event.preventDefault()
        this.setState({
            erreur    :[],
            state_msg :'attente'
        });
        
        let data = {
                compte                 :this.state.num_compte,
                id_user                :this.state.id_user,
                id_cmt                 :this.state.id_compte,
                nom_temoin             :this.state.nom_temoin,
                id_temoin              :this.state.id_temoin,
                postnom_temoin         :this.state.post_nom_temoin,
                prenom_temoin          :this.state.prenom_temoin,
                adresse_physique_temoin:this.state.adresse_physique,
                lieu_naissance_temoin  :this.state.lieu_naissance,
                date_naissance_temoin  :this.state.date_naissance,
                sexe_temoin            :this.state.sexe_temoin,
                province_temoin        :this.state.province_temoin,
                telephone_temoin       :this.state.telephone_temoin,
                numero_piece_temoin    :this.state.num_piece_identite_temoin,
                type_piece_temoin      :this.state.type_piece,
                etat_civil             :this.state.etat_civil_temoin,
                montant                :this.state.montant,
                devise                 :this.state.devise,
                delai                  :this.state.delai,
                taux                   :this.state.pourcentage,
                penalite               :this.state.frais_penalite,
                id_type                :this.state.id_type,
                email                  :this.state.email
            },
            send= await this.request("/agence/send_credit","POST",data),
            res = send.result

        if(res =='r'){
            this.setState({
                state_msg         :'r',
                prenom            :'',
                nom               :'',
                num_compte        :'',
                post_nom          :'',
                adresse_physique  :'',
                lieu_naissance    :'',
                date_naissance    :'',
                sexe              :'',
                province          :'',
                telephone         :'',
                num_piece_identite:'',
                id_type           :'',
                etat_civil        :'',

                // Identité temoin

                prenom_temoin            :'',
                nom_temoin               :'',
                post_nom_temoin          :'',
                adresse_physique_temoin  :'',
                lieu_naissance_temoin    :'',
                date_naissance_temoin    :'',
                sexe_temoin              :'',
                province_temoin          :'',
                telephone_temoin         :'',
                num_piece_identite_temoin:'',
                etat_civil_temoin        :'',
               // type_piece               :'',
                id_temoin                :0,
                email                    :'',
                disabled                 :false,

                // Besoin de crédit

                montant        :0,
                devise         :'',
                delai          :6
            })
        }
        else{
            let err    = send.result,
                erreurs=[]
            for (let i = 0; i < err.length; i++) {
                erreurs.push(err[i])
            }
            this.setState({
                state_msg:'e',
                erreur   :erreurs
            })
        }
    }
    montant(event) {
        this.setState({montant: event.target.value});
    }
    delai(event) {
        this.setState({delai: event.target.value});
    }
    frais_penalite(event) {
        this.setState({frais_penalite: event.target.value});
    }
    devise(event) {
        this.setState({devise: event.target.value});
    }
    pourcentage(event) {
        this.setState({pourcentage: event.target.value});
    }
    render() {
        let res_etat_civil= this.props.etat_civil,
            listEtatCivil = res_etat_civil.map(item => (
                <Option value={item.id} option={item.libelle} />
            )),
            res_type_piece = this.props.res_type_piece,
            list_type_piece= res_type_piece.map(item => (
                <Option value={item.id} option={item.libelle} />
            )),
            res_province = this.props.province,
            list_province= res_province.map(item => (
                <Option value={item.id} option={item.libelle} />
            ))
        return (
            <div className="col-12" style={divStyle}>
                <div className="card form-card" style={stylefrom}>
                    <Msg bol={ (this.state.state_msg=='r') ? <Msg_reussite msg_reu="Crédit attribué avec succès" /> : (this.state.state_msg=='e') ? <Msg_erreur msg_err={this.state.erreur}/> : ''} />
                    <div className="card-body">
                            
                        <div className="row">
                            <div className="col-md-2">
                                <Titre taille_paragraphe="col-md-12" libelle_paragraphe="Débiteur" />&nbsp;&nbsp;
                            </div>
                            <div className="col-md-4">
                                <input value={this.state.num_compte} onInput={this.num_compte} placeholder="Entrer Numéro de compte" className="form-control" type="text" />&nbsp;&nbsp;
                            </div>
                            <div className="col-md-2">
                                <button className="btn" onClick={this.searche_member} style={size_button} ><i class="fas fa-fw fa-search"></i>&nbsp;Rechercher</button>
                            </div>
                        </div>
                        {(this.state.state_msg == 'attente') ? <i id="sp" className="fas fa-spinner fa-pulse" style={spinner}></i> : '' } 
                        <hr/>
                        <div className="row">
                            <Input disabled="true" label="Prénom" plc="Prénom" clas="form-control" value={this.state.prenom} type="text" />
                            <Input disabled="true" label="Nom" plc="Nom" clas="form-control" value={this.state.nom} type="text" />
                            <Input disabled="true" label="Postnom" plc="Postnom" clas="form-control" value={this.state.post_nom} type="text" />
                            <Input disabled="true" label="Adresse physique" plc="Adresse physique" clas="form-control" value={this.state.adresse_physique} type="text" />
                            <Input disabled="true" label="Lieu de naissance" plc="lieu de naissance" clas="form-control" value={this.state.lieu_naissance} type="text" />
                            <Input disabled="true" label="Date de naissance" plc="date de naissance" clas="form-control" value={this.state.date_naissance} type="text" />
                            <Input disabled="true" label="Sexe" plc="Sexe" clas="form-control" value={this.state.sexe} type="text" />
                            <Input disabled="true" label="Province" plc="Province" clas="form-control" value={this.state.province} type="text" />
                            <Input disabled="true" label="Téléphone" plc="Téléphone" clas="form-control" value={this.state.telephone} type="text" />
                            <Input disabled="true" label="Numero pièce" plc="Numero pièce" clas="form-control" value={this.state.num_piece_identite} type="text" />
                            <Input disabled="true" label="Etat-civil" plc="Etat-civil" clas="form-control" value={this.state.etat_civil} type="text" />
                        </div>
                    </div>
                    <hr/>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-2">
                                <Titre taille_paragraphe="col-md-12" libelle_paragraphe="Témoin" />&nbsp;&nbsp;
                            </div>
                            <div className="col-md-4">
                                <select className="form-control" value={this.state.type_piece} onChange={this.type_piece}>
                                    <option value="">Choisir type de pièce d'identité</option>
                                    {list_type_piece}
                                </select>&nbsp;&nbsp;
                            </div>
                            <div className="col-md-4">
                                <input value={this.state.num_piece_identite_temoin} onInput={this.num_piece_identite_temoin} placeholder="Entrer Numéro pièce d'identité" className="form-control" type="text" />&nbsp;&nbsp;
                            </div>
                            <div className="col-md-2">
                                <button className="btn" onClick={this.searche_temoin} style={size_button} ><i class="fas fa-fw fa-search"></i>&nbsp;Rechercher</button>
                            </div>
                        </div>
                        {(this.state.state_msg == 'attente') ? <i id="sp" className="fas fa-spinner fa-pulse" style={spinner}></i> : '' } 
                        <hr/><br/>
                        <div className="row">
                            <Input disabled={this.state.disabled} label="Prénom" plc="Prénom" clas="form-control" inp={this.prenom_temoin} value={this.state.prenom_temoin} type="text" />
                            <Input disabled={this.state.disabled} label="Nom" plc="Nom" clas="form-control" inp={this.nom_temoin} value={this.state.nom_temoin} type="text" />
                            <Input disabled={this.state.disabled} label="Postnom" plc="Postnom" clas="form-control" inp={this.post_nom_temoin} value={this.state.post_nom_temoin} type="text" />
                            <Input disabled={this.state.disabled} label="Adresse physique" plc="Adresse physique" inp={this.adresse_physique_temoin} clas="form-control" value={this.state.adresse_physique_temoin} type="text" />
                            <Input disabled={this.state.disabled} label="Lieu de naissance" plc="lieu de naissance" inp={this.lieu_naissance_temoin} clas="form-control" value={this.state.lieu_naissance_temoin} type="text" />
                            <Input disabled={this.state.disabled} label="Date de naissance" plc="date de naissance" inp={this.date_naissance_temoin} clas="form-control" value={this.state.date_naissance_temoin} type="date" />
                            <Select_sex change={this.sexe_temoin} disabled={this.state.disabled} val={this.state.sexe_temoin} />
                            <Input disabled={this.state.disabled} label="Téléphone" plc="Téléphone" clas="form-control" inp={this.telephone_temoin} value={this.state.telephone_temoin} type="text" />
                            <Input disabled={this.state.disabled} label="Numero pièce" plc="Numero pièce" clas="form-control" inp={this.num_piece_identite_temoin} value={this.state.num_piece_identite_temoin} type="text" />
                            <Liste disabled={this.state.disabled} value={this.state.etat_civil_temoin} libelle_list="Etat-civil" option={listEtatCivil} name="etat_civil" change={this.etat_civil_temoin} />
                            <Input disabled={this.state.disabled} label="Email" plc="Adresse électronique" inp={this.email} clas="form-control" value={this.state.email} type="email" />
                            <Select disabled={this.state.disabled} list_item={list_province} libelle="Province" tail="col-sm-9" change={this.province_temoin} val={this.state.province_temoin} />
                        </div>
                    </div>
                    <hr/>
                    <div className="card-body">
                        <div className="row">
                            <Titre taille_paragraphe="col-md-12" libelle_paragraphe="Besoin de crédit" />
                        </div>
                            <hr/><br/>
                        <div className="row">
                            <Input label="Montant" plc="Montant" clas="form-control" inp={this.montant} value={this.state.montant} type="number" />
                            <Devise tail="col-sm-9" label="Devise" clas="form-control" val={this.state.devise} change={this.devise} type="text" />
                            <Input label="Délai" max="12" min="2" plc="Délai" clas="form-control" inp={this.delai} value={this.state.delai} type="number" />
                            <Input disabled="true" id="pourcentage" label="% Taux d'Intérêt" plc="% Intérêt" clas="form-control" value={this.state.pourcentage} type="number" />
                            <Input disabled="true" id="penalite" label="% Penalité" plc="Frais Penalité" clas="form-control" value={this.state.frais_penalite} type="number" />
                            <Input disabled="true" label="Type crédit" clas="form-control" value={(this.state.id_type == 1) ? 'ORGANISATION' : 'INDIVIDUEL' } type="text" />
                        </div>
                        <hr/>
                        {(this.state.state_msg == 'attente') ? <i id="sp" className="fas fa-spinner fa-pulse" style={spinner}></i> : '' } 
                        <div className="form-group m-b-0 text-right">
                            <button className="btn" onClick={this.send} style={stylebtnact}><i class="fas fa-save"></i>&nbsp;Créditer</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Repertoire_credit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liste_creance :[]
        };
        this.update_credit = this.update_credit.bind(this);
        this.search_interval = this.search_interval.bind(this);
    }
    async update_credit(event) {
        event.preventDefault()
        
        let data = {
                id_credit:event.target.getAttribute('data-id')
            },
            send = await request_global("/agence/update_credit","POST",data),
            res = send.result
        if(res){
            this.setState({
                liste_creance : res
            });
        }
    }
    async search_interval(event) {
        event.preventDefault()
        
        let data = {
                date_one:this.state.date_one,
                date_two:this.state.date_two
            },
            send = await this.request("/partenaire/find_temoin","POST",data),
            res = send.reponse
        if(res==''){
            this.setState({
                date_one :'',
                date_two :''
            });
        }else{
            res.map((item)=>{
                this.setState({
                    date_one :'',
                    date_two :''
                });
            })
        } 
    }
    render() {
        let res_creance = this.props.res_creance,
            list_creance= ''

        const { liste_creance } = this.state
        let one_list = (liste_creance !='') ? liste_creance : res_creance

            list_creance = one_list.map(item => (
                <Cellule_corps_tableau
                    compte  ={item.compte} 
                    montant ={item.montant} 
                    devise ={item.devise} 
                    penalite={item.penalite_remboursement+ ' %'} 
                    echeance={item.echance+ ' Mois'}
                    pourcentage={item.pourcentage_credit+ ' %'}
                    statut  ={(item.etat == 0) ? 'Non Soldé' : 'Soldé'}
                    action  = {(item.etat == 0) ? <Bouton data_id={item.id_cr} clc={this.update_credit} lbl="Solder" icone="fas fa-wallet" /> : ''}
                />
            ))
        return (
            <div className="col-12" style={divStyle}>
                <div className="col-12">
                    <div className="card form-card">
                        <div className="card-body" >
                            <table className="table table-striped" id="example">
                                <thead style={styleentete}>
                                    <Cellule_tableau label="Compte" />
                                    <Cellule_tableau label="Montant" />
                                    <Cellule_tableau label="Devise" />
                                    <Cellule_tableau label="Echéance" />
                                    <Cellule_tableau label="Penalité" />
                                    <Cellule_tableau label="Taux d'intérêt" />
                                    <Cellule_tableau label="Statut" />
                                    <Cellule_tableau label="Action" />
                                </thead>
                                <tbody>
                                    {list_creance}
                                </tbody>
                                <tfoot>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Nouveau_depot extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                numero_compte:'',
                montant      :1,
                devise       :'',
                state_msg    :'',
                state_mdp    :false,
                mdp          :'',
                bol          :'',
                erreur       :[]
        };
        this.numero_compte= this.numero_compte.bind(this);
        this.montant      = this.montant.bind(this);
        this.mdp          = this.mdp.bind(this);
        this.devise       = this.devise.bind(this);
        this.send         = this.send.bind(this);
    }
    mdp(event) {
        this.setState({mdp: event.target.value});
    }
    numero_compte(event) {
        let val = event.target.value,
            chaine1 = '',
            chaine2 = ''

        for (let i = 0; i < val.length; i++) {
            if(val[i] == '0' || val[i] == '1' || val[i] == '2' || val[i] == '3' || val[i] == '4' || val[i] == '5' || val[i] == '6' || val[i] == '7' || val[i] == '8' || val[i] == '9' ){
                chaine1 += val[i]
            }         
        }
        for (let i = 0; i < chaine1.length; i++) {
            if(i < 15) {
                if(i == 3) chaine2 += chaine1[i] + '-'
                else chaine2 += chaine1[i]  
            }  
        }
        this.setState({numero_compte: chaine2});
    }
    montant(event) {
        let val = event.target.value,
            chaine1 = ''

        for (let i = 0; i < val.length; i++) {
            if(val[i] == '0' || val[i] == '1' || val[i] == '2' || val[i] == '3' || val[i] == '4' || val[i] == '5' || val[i] == '6' || val[i] == '7' || val[i] == '8' || val[i] == '9' ){
                if(i < 9) chaine1 += val[i]
            }         
        }
        this.setState({montant: chaine1});
    }
    devise(event) {
        this.setState({devise: event.target.value});
    }
    async send() {
        swal("Saisir le mot de passe:", {
            content: {
                element: "input",
                attributes: {
                    placeholder: "Votre mot de passe",
                    type: "password",
                },
            },
        })
        .then(async (element) => {
            let dataMdp = {
                mdp:element
            }
            let check_mdp = await request_global("/agence/check_mdp","POST",dataMdp)

            if(check_mdp.result == 1){
                this.setState({
                    state_msg:'attente',
                    erreur   :[]
                });
                let dataDepot = {
                    compte :this.state.numero_compte,
                    montant:this.state.montant,
                    devise :this.state.devise,
                    type   :'Dépôt'
                },
                send_compte = await request_global("/agence/nouveau_depot","POST",dataDepot)
                
                if(send_compte.result =='r'){
                    this.setState({
                        numero_compte:'',
                        montant      :'',
                        devise       :'',
                        state_msg    :'r',
                        erreur       :[],
                        bol          :''
                    })
                }else{
                    if(send_compte.result =='deconnexion'){
                        window.location.replace("https://agence.loanmesfn.com/")
                    }else{
                        let err    = send_compte.result,
                            erreurs=[]
                        for (let i = 0; i < err.length; i++) {
                            erreurs.push(err[i])
                        }
                        this.setState({
                            state_msg:'e',
                            erreur   :erreurs
                        })
                    }
                }
                this.setState({state_mdp: false});
            }else{
                swal({
                    title: "Erreur",
                    text: 'Mot de passe incorrect',
                    icon: "error",
                    button:false
                });
                this.setState({ state_msg :''})
            }
        });
    }
    render() {
        return (
            <div className="col-12" style={divStyle}>
                <div className="card form-card" style={stylefrom}>
                    <div className="card-body">
                        <Msg bol={ (this.state.state_msg=='r') ? <Msg_reussite msg_reu="Dépôt réussi." /> : (this.state.state_msg=='e') ? <Msg_erreur msg_err={this.state.erreur}/> : ''} />
                            <div class="row">
                                <Input label="Num. Compte" taille="16" plc="xxxx-xxxxxxxxxxx" clas="form-control" inp={this.numero_compte} value={this.state.numero_compte} type="text" />
                                <Input label="Montant" clas="form-control" plc="000000000" min="1" inp={this.montant} value={this.state.montant} type="text" />
                                <Devise tail="col-sm-9" label="Devise" clas="form-control" val={this.state.devise} change={this.devise} type="text" />
                            </div>
                            <hr/>
                            {(this.state.state_msg == 'attente') ? <i id="sp" className="fas fa-spinner fa-pulse" style={spinner}></i> : '' }
                            <div className="form-group m-b-0 text-right block_btn">
                                <button className="btn" style={blockbtn} onClick={this.send}><i class="fas fa-save"></i>&nbsp;Déposer</button>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Nouveau_retrait extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                numero_compte:'',
                montant      :1,
                devise       :'',
                state_msg    :'',
                bol          :'',
                otp          :'',
                password     :'',
                state_otp    :'',
                erreur       :[]
        };
        this.numero_compte= this.numero_compte.bind(this);
        this.montant      = this.montant.bind(this);
        this.password     = this.password.bind(this);
        this.devise       = this.devise.bind(this);
        this.send         = this.send.bind(this);
        this.otp          = this.otp.bind(this);
    }
    password(event) {
        this.setState({password: event.target.value});
    }
    numero_compte(event) {
        let val = event.target.value,
            chaine1 = '',
            chaine2 = ''

        for (let i = 0; i < val.length; i++) {
            if(val[i] == '0' || val[i] == '1' || val[i] == '2' || val[i] == '3' || val[i] == '4' || val[i] == '5' || val[i] == '6' || val[i] == '7' || val[i] == '8' || val[i] == '9' ){
                chaine1 += val[i]
            }         
        }
        for (let i = 0; i < chaine1.length; i++) {
            if(i < 15) {
                if(i == 3) chaine2 += chaine1[i] + '-'
                else chaine2 += chaine1[i]  
            }  
        }
        this.setState({numero_compte: chaine2});
    }
    otp(event) {
        this.setState({otp: event.target.value});
    }
    montant(event) {
        let val = event.target.value,
            chaine1 = ''

        for (let i = 0; i < val.length; i++) {
            if(val[i] == '0' || val[i] == '1' || val[i] == '2' || val[i] == '3' || val[i] == '4' || val[i] == '5' || val[i] == '6' || val[i] == '7' || val[i] == '8' || val[i] == '9' ){
                if(i < 6) chaine1 += val[i]
            }         
        }
        this.setState({montant: chaine1});
    }
    devise(event) {
        this.setState({devise: event.target.value});
    }
    async send() {
        this.setState({
            state_msg:'attente',
            erreur   :[]
        });
        let dataRetrait = {
            compte   :this.state.numero_compte,
            montant  :this.state.montant,
            devise   :this.state.devise,
            otp      :this.state.otp,
            password :this.state.password,
            state_otp:this.state.state_otp,
            type     :'Retrait'
        },
        send_compte = await request_global("/agence/nouveau_retrait","POST",dataRetrait)
        if(send_compte.result =='r'){
            this.setState({
                numero_compte:'',
                montant      :'',
                devise       :'',
                state_msg    :'r',
                erreur       :[],
                otp          :'',
                state_otp    :false,
                bol          :''
            })
        }else{
            if(send_compte.result =='deconnexion'){
                window.location.replace("https://agence.loanmesfn.com/")
            }else{
                if(send_compte.result =='otp_on'){
                    this.setState({ state_otp:true,state_msg:'' })
                }else{
                    let err    = send_compte.result,
                        erreurs=[]
                    for (let i = 0; i < err.length; i++) {
                        erreurs.push(err[i])
                    }
                    this.setState({
                        state_msg:'e',
                        erreur   :erreurs,
                        state_otp:false
                    })
                }
            }
        }
    }
    render() {
        return (
            <div className="col-12" style={divStyle}>
                <div className="card form-card" style={stylefrom}>
                    <div className="card-body">
                        <Msg bol={ (this.state.state_msg=='r') ? <Msg_reussite msg_reu="Retrait réussi." /> : (this.state.state_msg=='e') ? <Msg_erreur msg_err={this.state.erreur}/> : ''} />
                        
                        <div className="row">
                            {(this.state.state_otp == true) ? '' : <Input label="Num. Compte" taille="16" plc="xxxx-xxxxxxxxxxx" clas="form-control" inp={this.numero_compte} value={this.state.numero_compte} type="text" /> }
                            {(this.state.state_otp == true) ? '' : <Input label="Montant" plc="000000" min="1" clas="form-control" inp={this.montant} value={this.state.montant} type="text" /> }
                            {(this.state.state_otp == true) ? '' : <Devise tail="col-sm-9" label="Devise" clas="form-control" val={this.state.devise} change={this.devise} type="text" /> }
                        </div>
                        <div className="row">
                            {(this.state.state_otp == true) ? <Input label="Votre mot de passe" min="0" clas="form-control" inp={this.password} value={this.state.password} type="password" /> :''}
                            {(this.state.state_otp == true) ? <Input label="OTP" min="0" clas="form-control" inp={this.otp} value={this.state.otp} type="text" /> :''}
                        </div>
                        <hr/> 
                    
                        {(this.state.state_msg == 'attente') ? <i id="sp" className="fas fa-spinner fa-pulse" style={spinner}></i> : '' }
                    
                        <div className="form-group m-b-0 text-right block_btn">
                            <button className="btn" style={blockbtn} onClick={this.send}><i class="fas fa-save"></i>&nbsp;Retirer</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Nouveau_transfert extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                expeditaire  :'',
                recipiandaire:'',
                montant      :1,
                devise       :'',
                state_msg    :'',
                otp          :'',
                state_otp    :'',
                bol          :'',
                password     :'',
                erreur       :[]
        };
        this.expeditaire  = this.expeditaire.bind(this);
        this.password     = this.password.bind(this);
        this.recipiandaire= this.recipiandaire.bind(this);
        this.montant      = this.montant.bind(this);
        this.devise       = this.devise.bind(this);
        this.send         = this.send.bind(this);
        this.otp          = this.otp.bind(this);
    }
    password(event) {
        this.setState({password: event.target.value});
    }
    expeditaire(event) {
        let val = event.target.value,
            chaine1 = '',
            chaine2 = ''

        for (let i = 0; i < val.length; i++) {
            if(val[i] == '0' || val[i] == '1' || val[i] == '2' || val[i] == '3' || val[i] == '4' || val[i] == '5' || val[i] == '6' || val[i] == '7' || val[i] == '8' || val[i] == '9' ){
                chaine1 += val[i]
            }         
        }
        for (let i = 0; i < chaine1.length; i++) {
            if(i < 15) {
                if(i == 3) chaine2 += chaine1[i] + '-'
                else chaine2 += chaine1[i]  
            }  
        }
        this.setState({expeditaire: chaine2});
    }
    recipiandaire(event) {
        let val = event.target.value,
            chaine1 = '',
            chaine2 = ''

        for (let i = 0; i < val.length; i++) {
            if(val[i] == '0' || val[i] == '1' || val[i] == '2' || val[i] == '3' || val[i] == '4' || val[i] == '5' || val[i] == '6' || val[i] == '7' || val[i] == '8' || val[i] == '9' ){
                chaine1 += val[i]
            }         
        }
        for (let i = 0; i < chaine1.length; i++) {
            if(i < 15) {
                if(i == 3) chaine2 += chaine1[i] + '-'
                else chaine2 += chaine1[i]  
            }  
        }
        this.setState({recipiandaire: chaine2});
    }
    montant(event) {
        let val = event.target.value,
            chaine1 = ''

        for (let i = 0; i < val.length; i++) {
            if(val[i] == '0' || val[i] == '1' || val[i] == '2' || val[i] == '3' || val[i] == '4' || val[i] == '5' || val[i] == '6' || val[i] == '7' || val[i] == '8' || val[i] == '9' ){
                if(i < 6) chaine1 += val[i]
            }         
        }
        this.setState({montant: chaine1});
    }
    otp(event) {
        this.setState({otp: event.target.value});
    }
    devise(event) {
        this.setState({devise: event.target.value});
    }
    async send() {
        this.setState({
            state_msg:'attente',
            erreur   :[]
        });
        let dataTransfert = {
            exp      :this.state.expeditaire,
            rec      :this.state.recipiandaire,
            montant  :this.state.montant,
            devise   :this.state.devise,
            otp      :this.state.otp,
            password :this.state.password,
            state_otp:this.state.state_otp,
            type     :'Transfert'
        },
        send_compte = await request_global("/agence/nouveau_transfert","POST",dataTransfert)

        if(send_compte.result =='r'){
            this.setState({
                expeditaire  :'',
                recipiandaire:'',
                montant      :0,
                devise       :'',
                state_msg    :'r',
                otp          :'',
                state_otp    :false,
                erreur       :[],
                bol          :''
            })
        }else{
            if(send_compte.result =='otp_on'){
                this.setState({ state_otp:true,state_msg :'' })
            }else{
                if(send_compte.result =='deconnexion'){
                    window.location.replace("https://agence.loanmesfn.com/")
                }else{
                    let err    = send_compte.result,
                        erreurs=[]
                    for (let i = 0; i < err.length; i++) {
                        erreurs.push(err[i])
                    }
                    this.setState({
                        state_msg:'e',
                        erreur   :erreurs,
                        state_otp:false
                    })
                }
            }
        }
    }
    render() {
        return (
            <div className="col-12" style={divStyle}>
                <div className="card form-card" style={stylefrom}>
                    <div className="card-body">
                        <Msg bol={ (this.state.state_msg=='r') ? <Msg_reussite msg_reu="Transfert réussi." /> : (this.state.state_msg=='e') ? <Msg_erreur msg_err={this.state.erreur}/> : ''} />
                        <div className="row">
                            {(this.state.state_otp == true) ? '' : <Input label="Num. Compte Exp." taille="16" plc="xxxx-xxxxxxxxxxx" clas="form-control" inp={this.expeditaire} value={this.state.expeditaire} type="text" /> }
                            {(this.state.state_otp == true) ? '' : <Input label="Num. Compte Rec." taille="16" plc="xxxx-xxxxxxxxxxx" clas="form-control" inp={this.recipiandaire} value={this.state.recipiandaire} type="text" /> }
                            {(this.state.state_otp == true) ? '' : <Input label="Montant" plc="000000" min="1" clas="form-control" inp={this.montant} value={this.state.montant} type="text" /> }
                            {(this.state.state_otp == true) ? '' : <Devise tail="col-sm-9" label="Devise" clas="form-control" val={this.state.devise} change={this.devise} type="text" /> }
                            
                            {(this.state.state_otp == true) ? <Input label="Votre mot de passe" clas="form-control" inp={this.password} value={this.state.password} type="password" /> :''}
                            {(this.state.state_otp == true) ? <Input label="OTP" min="0" clas="form-control" inp={this.otp} value={this.state.otp} type="text" /> :''}
                        </div>
                        <hr/>
                        {(this.state.state_msg == 'attente') ? <i id="sp" className="fas fa-spinner fa-pulse" style={spinner}></i> : '' }
                        <div className="form-group m-b-0 text-right block_btn">
                            <button className="btn" style={blockbtn} onClick={this.send}><i class="fas fa-save"></i>&nbsp;Transferer</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Demande_sode extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                numero_compte:'',
                devise       :'',
                solde        :'',
                state_msg    :'',
                bol          :'',
                erreur       :[]
        };
        this.numero_compte= this.numero_compte.bind(this);
        this.devise       = this.devise.bind(this);
        this.send         = this.send.bind(this);
    }
    numero_compte(event) {
        let val = event.target.value,
            chaine1 = '',
            chaine2 = ''

        for (let i = 0; i < val.length; i++) {
            if(val[i] == '0' || val[i] == '1' || val[i] == '2' || val[i] == '3' || val[i] == '4' || val[i] == '5' || val[i] == '6' || val[i] == '7' || val[i] == '8' || val[i] == '9' ){
                chaine1 += val[i]
            }         
        }
        for (let i = 0; i < chaine1.length; i++) {
            if(i < 15) {
                if(i == 3) chaine2 += chaine1[i] + '-'
                else chaine2 += chaine1[i]  
            }  
        }
        this.setState({numero_compte: chaine2});
    }
    devise(event) {
        this.setState({devise: event.target.value});
    }
    async send() {
        swal("Saisir le mot de passe:", {
            content: {
                element: "input",
                attributes: {
                  placeholder: "Votre mot de passe",
                  type: "password",
                },
            },
        })
        .then(async (element) => {
            let dataMdp = {
                    mdp:element
                },
                check_mdp = await request_global("/agence/check_mdp","POST",dataMdp)

            if(check_mdp.result == 1){
                this.setState({
                    state_msg:'attente',
                    erreur   :[]
                });
                let dataSolde = {
                    compte :this.state.numero_compte,
                    devise :this.state.devise
                },
                send_solde = await request_global("/agence/demande_solde","POST",dataSolde)

                if(send_solde.result =='r'){
                    this.setState({
                        solde  : parseFloat(send_solde.solde).toFixed(2),
                        state_msg:'r',
                        erreur :[],
                        bol    :''
                    })
                }else{
                    if(send_solde.result =='deconnexion'){
                        window.location.replace("https://agence.loanmesfn.com/")
                    }else{
                        let err    = send_solde.result,
                            erreurs=[]
                        for (let i = 0; i < err.length; i++) {
                            erreurs.push(err[i])
                        }
                        this.setState({
                            state_msg:'e',
                            erreur   :erreurs
                        })
                    }
                }
            }else{
                swal({
                    title: "Erreur",
                    text: 'Mot de passe introuvable',
                    icon: "error",
                    button:false
                });
            }
        })
    }
    render() {
        return (
            <div className="col-12" style={divStyle}>
                <div className="card form-card" style={stylefrom}>
                    <div className="card-body">
                        <Msg bol={ (this.state.state_msg=='e') ? <Msg_erreur msg_err={this.state.erreur}/> : ''} />
                        <div className="row">
                            <Input label="Num. Compte" plc="xxxx-xxxxxxxxxxx" taille="16" clas="form-control" inp={this.numero_compte} value={this.state.numero_compte} type="text" />
                            <Devise tail="col-sm-9" label="Devise" clas="form-control" val={this.state.devise} change={this.devise} type="text" />
                            <Input label="Solde" disabled="true" clas="form-control" value={this.state.solde} type="text" />
                        </div>
                        <hr/>
                        {(this.state.state_msg == 'attente') ? <i id="sp" className="fas fa-spinner fa-pulse" style={spinner}></i> : '' }
                        <div className="form-group m-b-0 text-right block_btn">
                            <button className="btn" style={blockbtn} onClick={this.send}><i class="fas fa-wallet"></i>&nbsp;Voir solde</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Action_historique extends React.Component {
    render() {
        return (
            <div>
                <button type="button" className="btn" onClick={this.props.cl} data-id={this.props.data_id} data-type={this.props.data_type} data-target="#exampleModal1" style={style_act_profil}><i className="fas fa-eye"></i>&nbsp;Détail</button>&nbsp;
            </div>
        )
    }
}
class Historique_transaction extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                date_                 :'',
                type_operation        :'',
                heure_un              :'',
                historique_transaction:[],
                state_msg             :'',
                ref_operation         :'',
                reference             :'',
                btn_search            :'',
                heure_deux            :0
        };
        this.date_            = this.date_.bind(this);
        this.heure_un         = this.heure_un.bind(this);
        this.heure_deux       = this.heure_deux.bind(this);
        this.type_operation   = this.type_operation.bind(this);
        this.search_transac   = this.search_transac.bind(this);
        this.ref_operation    = this.ref_operation.bind(this);
        this.search_reference = this.search_reference.bind(this);
    }
    type_operation(event) {
        this.setState({type_operation: event.target.value, btn_search:false});
    }
    date_(event) {
        this.setState({date_: event.target.value});
    }
    heure_un(event) {
        this.setState({heure_un: event.target.value});
    }
    heure_deux(event) {
        this.setState({heure_deux: event.target.value});
    }
    async ref_operation(event) {
        this.setState({ref_operation:event.target.value});
    }
    async search_reference(event) {
        swal("Saisir le mot de passe:", {
            content: {
                element: "input",
                attributes: {
                  placeholder: "Votre mot de passe",
                  type: "password",
                },
            },
        })
        .then(async (element) => {
            let dataMdp = {
                    mdp:element
                },
                check_mdp = await request_global("/agence/check_mdp","POST",dataMdp)
            if(check_mdp.result == 1){
                
                this.setState({state_msg: 'attente'});
                let data = {
                    type         :2,
                    ref_operation:this.state.ref_operation
                },
                transct = await request_global("/agence/search_transact","POST",data)
                if(transct.result == 'deconnexion') window.location.replace("https://agence.loanmesfn.com/")
                else{
            
                    let donnee = transct.result,
                        ref = ''
                    donnee.map(item => (
                        ref = item.ref
                    ))
                    if((ref[0]+ref[1]) == 'D-') this.setState({ type_operation : 'Depot' });
                    if((ref[0]+ref[1]) == 'R-') this.setState({ type_operation : 'Retrait' });
                    if((ref[0]+ref[1]) == 'T-') this.setState({ type_operation : 'Transfert' });
                    this.setState({historique_transaction : transct.result, btn_search:true,state_msg:''});
                }
            }else{
                swal({
                    title: "Erreur",
                    text: 'Mot de passe introuvable',
                    icon: "error",
                    button:false
                });
            }
        })
    }
    async search_transac(event) {
        event.preventDefault()

        swal("Saisir le mot de passe:", {
            content: {
                element: "input",
                attributes: {
                  placeholder: "Votre mot de passe",
                  type: "password",
                },
            },
        })
        .then(async (element) => {
            this.setState({state_msg: 'attente'});
            
            let dataMdp = {
                    mdp:element
                },
                check_mdp = await request_global("/agence/check_mdp","POST",dataMdp)
            if(check_mdp.result == 1){
                if(this.state.type_operation !=''){
                    let data = {
                        type          :1,
                        date_         :this.state.date_,
                        type_operation:this.state.type_operation,
                        heure_un      :this.state.heure_un,
                        heure_deux    :this.state.heure_deux
                    },
                    transct = await request_global("/agence/search_transact","POST",data)
                    if(transct.result == 'deconnexion') window.location.replace("https://agence.loanmesfn.com/")
                    else this.setState({historique_transaction : transct.result, btn_search:true,state_msg:''});
                }else this.setState({state_msg: ''});
            }else{
                swal({
                    title: "Erreur",
                    text: 'Mot de passe introuvable',
                    icon: "error",
                    button:false
                });
            }
        })
    }
    render() {
        const { historique_transaction } = this.state,
            list_trans= historique_transaction.map(item => (
                <Tableau_historique_transaction 
                    type_operation={(this.state.type_operation=='Depot')?'Dépôt':(this.state.type_operation=='Retrait')?'Rétrait':(this.state.type_operation=='Transfert') ? 'Transfert':''} 
                    id_agent={item.id_user}
                    noms  ={item.prenom +' '+ item.nom +' '+ item.post_nom}
                    devise={item.devise}
                    montant={parseFloat(item.mont).toFixed(2)} 
                    frais={parseFloat(item.pourc).toFixed(2)} 
                />
            ))
        return (
            <div className="col-12" style={divStyle}>
                <div className="card form-card">
                    <Rep_type_transaction onChange={this.type_operation} val_reference={this.state.ref_operation} input_reference={this.ref_operation} input_date={this.date_} val_date={this.state.date_} clc={this.search_transac} clic={this.search_reference} />
                    <div className="card-body">
                        <table className="table table-striped" id="example">
                            <thead style={styleentete}>
                                <Cellule_tableau label="Type Opération" />
                                <Cellule_tableau label="ID Agent" />
                                <Cellule_tableau label="Noms(prénom nom postnom)" />
                                <Cellule_tableau label="Devise" />
                                <Cellule_tableau label="Montant" />
                                <Cellule_tableau label="Frais" />
                            </thead>
                            <tbody>
                                {(this.state.btn_search==true && list_trans !='') ? list_trans : 'Aucune information'}
                            </tbody>
                            <tfoot>
                            </tfoot>
                        </table>
                        {(this.state.state_msg == 'attente') ? <i id="sp" className="fas fa-spinner fa-pulse" style={spinner}></i> : '' }
                    </div>
                </div>
            </div>
        )
    }
}
let membre                  = document.querySelector('.nouveau_membre'),
    personnel               = document.querySelector('.rep_personnel'),
    contenaire              = document.querySelector('.corps'),
    new_agence              = document.querySelector('.nouvelle-agence'),
    rep_agence              = document.querySelector('.repertoire-agence'),
    rep_compte_organisation = document.querySelector('.repertoire-compte-organisation'),
    new_compte              = document.querySelector('.nouveau-compte'),
    rep_compte              = document.querySelector('.repertoire-compte'),
    new_creance             = document.querySelector('.nouveau-creance'),
    rep_creance             = document.querySelector('.repertoire-creance'),
    depot                   = document.querySelector('.nouveau-depot'),
    retrait                 = document.querySelector('.retrait'),
    transfert               = document.querySelector('.transfert'),
    part                    = document.querySelector('.partenaire'),
    gest_credit             = document.querySelector('.gest_credit'),
    gest_compte             = document.querySelector('.gest_compte'),
    compte_epargne          = document.querySelector('.compte_epargne'),
    compte_courant          = document.querySelector('.compte_courant'),
    nb_agent_agence         = document.querySelector('.agent_agence'),
    nb_agent_terrain        = document.querySelector('.agent_terrain'),
    solde                   = document.querySelector('.solde'),
    historique_trans        = document.querySelector('.historique-transaction'),
    nb_credits              = document.querySelector('.nb_credit'),
    somme_depot_cdf         = document.querySelector('.somme_depot_cdf'),
    somme_depot_usd         = document.querySelector('.somme_depot_usd'),
    somme_depot_eur         = document.querySelector('.somme_depot_eur'),
    somme_retrait_cdf       = document.querySelector('.somme_retrait_cdf'),
    somme_retrait_usd       = document.querySelector('.somme_retrait_usd'),
    somme_retrait_eur       = document.querySelector('.somme_retrait_eur'),
    somme_transfert_cdf     = document.querySelector('.somme_transfert_cdf'),
    somme_transfert_usd     = document.querySelector('.somme_transfert_usd'),
    somme_transfert_eur     = document.querySelector('.somme_transfert_eur'),
    solde_cdf               = document.querySelector('.solde_cdf'),
    solde_usd               = document.querySelector('.solde_usd'),
    solde_eur               = document.querySelector('.solde_eur'),
    modifier_profil         = document.querySelector('#modifier_profil'),
    msg_err                 = document.querySelector('.msg_err')

modifier_profil.addEventListener('click',async (e)=>{
    e.preventDefault()
    msg_err.textContent=''
    let data_profil = {
        adresse_electronique:document.querySelector('#adresse_electronique').value,
        adresse_physique    :document.querySelector('.adresse_physique').value,
        telephone           :document.querySelector('#telephone').value
    },
    profil_user = await request_global("/personnel/profil_user","POST",data_profil),
    res_profil = profil_user.result

    if(res_profil =='deconnexion') window.location.replace("https://agence.loanmesfn.com/")

    if(res_profil == 'r') $('#profilModal').modal('hide');
    msg_err.textContent = (res_profil[0] !='r') ? res_profil[0] : ''
},false) 

/* Début Tableau de Bord */

// Tableau de bord des Personnel 
if(membre){ 
//document.querySelector('.libelle_titre').textContent = 'TABLEAU DE BORD'
    $.ajax({
        url        : '/agence/tableau_de_bord',
        type       : 'POST', 
        contentType: false,
        processData: false, 
        cache      : false
    })
    .done((response)=>{
        part.textContent = response.nb_partenaire
        gest_credit.textContent = response.nb_gest_credit
        gest_compte.textContent = response.nb_gest_compte
        compte_courant.textContent = response.compte_courant
        compte_epargne.textContent = response.compte_epargne
        nb_agent_agence.textContent = response.nb_agent_agence
        nb_agent_terrain.textContent = response.nb_agent_terrain
    })
    .fail(function(error){
        alert('Erreur Inconnu 2')
    })
}
// Tableau de bord des  gestionnaires des comptes
if(compte_epargne){ 
    //document.querySelector('.libelle_titre').textContent = 'TABLEAU DE BORD'
    $.ajax({
        url        : '/agence/tableau_de_bord',
        type       : 'POST', 
        contentType: false,
        processData: false, 
        cache      : false
    })
    .done((response)=>{
        compte_courant.textContent = response.compte_courant
        compte_epargne.textContent = response.compte_epargne
    })
    .fail(function(error){
        alert('Erreur Inconnu 2')
    })
}
// Tableau de bord des  gestionnaires des crédits
if(nb_credits){
    //document.querySelector('.libelle_titre').textContent = 'TABLEAU DE BORD'
    $.ajax({
        url        : '/agence/tableau_de_bord',
        type       : 'POST', 
        contentType: false,
        processData: false, 
        cache      : false
    })
    .done((response)=>{
        nb_credits.textContent = response.nb_credits
    })
    .fail(function(error){
        alert('Erreur Inconnu 2')
    })
}
// Tableau de bord des Agents des agences
if(somme_depot_cdf){
    //document.querySelector('.libelle_titre').textContent = 'TABLEAU DE BORD'
    $.ajax({
        url        : '/agence/tableau_de_bord',
        type       : 'POST', 
        contentType: false,
        processData: false, 
        cache      : false
    })
    .done((response)=>{
        let depot_cdf = ((response.nb_somme_depot_cdf) ? parseFloat(response.nb_somme_depot_cdf).toFixed(2) : ' 0.00')+ ' CDF',
            depot_usd = ((response.nb_somme_depot_usd) ? parseFloat(response.nb_somme_depot_usd).toFixed(2) : "0.00")+ ' USD',
            depot_eur = ((response.nb_somme_depot_eur) ? parseFloat(response.nb_somme_depot_eur).toFixed(2) : "0.00")+ ' EUR',
            retrait_cdf = ((response.nb_somme_retrait_cdf) ? parseFloat(response.nb_somme_retrait_cdf).toFixed(2) : '0.00')+ ' CDF',
            retrait_usd = ((response.nb_somme_retrait_usd) ? parseFloat(response.nb_somme_retrait_usd).toFixed(2) : '0.00')+ ' USD',
            retrait_eur = ((response.nb_somme_retrait_eur) ? parseFloat(response.nb_somme_retrait_eur).toFixed(2) : '0.00')+ ' EUR',
            transfert_cdf = ((response.nb_somme_transfert_cdf) ? parseFloat(response.nb_somme_transfert_cdf).toFixed(2) : '0.00')+ ' CDF',
            transfert_usd = ((response.nb_somme_transfert_usd) ? parseFloat(response.nb_somme_transfert_usd).toFixed(2) : '0.00')+ ' USD',
            transfert_eur = ((response.nb_somme_transfert_eur) ? parseFloat(response.nb_somme_transfert_eur).toFixed(2) : '0.00')+ ' EUR',
            solde_portefeuil_cdf = ((response.solde_portefeuil_cdf) ? parseFloat(response.solde_portefeuil_cdf).toFixed(2) : '0.00')+ ' CDF',
            solde_portefeuil_usd = ((response.solde_portefeuil_usd) ? parseFloat(response.solde_portefeuil_usd).toFixed(2) : '0.00')+ ' USD',
            solde_portefeuil_eur = ((response.solde_portefeuil_eur) ? parseFloat(response.solde_portefeuil_eur).toFixed(2) : '0.00')+ ' EUR'
            
        somme_depot_cdf.textContent = depot_cdf
        somme_depot_usd.textContent = depot_usd
        somme_depot_eur.textContent = depot_eur
        somme_retrait_cdf.textContent = retrait_cdf
        somme_retrait_usd.textContent = retrait_usd
        somme_retrait_eur.textContent = retrait_eur
        somme_transfert_cdf.textContent = transfert_cdf
        somme_transfert_usd.textContent = transfert_usd
        somme_transfert_eur.textContent = transfert_eur
        solde_cdf.textContent = solde_portefeuil_cdf
        solde_usd.textContent = solde_portefeuil_usd
        solde_eur.textContent = solde_portefeuil_eur
    })
    .fail(function(error){
        alert('Erreur Inconnu 2')
    })   
}

/* Fin Tableau de Bord */

/* HISTORIQUE DES TRANSACTION */ 
if(historique_trans){
    historique_trans.addEventListener('click',async (e)=>{
        e.preventDefault()
        contenaire.innerHTML = ''
        document.querySelector('.libelle_titre').textContent = 'HISTORIQUE DES TRANSACTIONS'

        let root = ReactDOM.createRoot(document.querySelector('.corps'));
        root.render(<Historique_transaction />);
    },false)
}

/* DEMANDE DE SOLDE */ 

if(solde){
    // Tableau de Bord

    solde.addEventListener('click',async (e)=>{
        e.preventDefault()
        contenaire.innerHTML = ''
        document.querySelector('.libelle_titre').textContent = 'DEMANDE DE SOLDE'

        let root = ReactDOM.createRoot(document.querySelector('.corps'));
        root.render(<Demande_sode />);
    },false)
}
/* NOUVEAU RETRAIT */ 
if(transfert){
    transfert.addEventListener('click',async (e)=>{
        e.preventDefault()
        contenaire.innerHTML = ''
        document.querySelector('.libelle_titre').textContent = 'TRANSFERT D\'ARGENT'

        let root = ReactDOM.createRoot(document.querySelector('.corps'));
        root.render(<Nouveau_transfert />);
    },false)
}
/* NOUVEAU RETRAIT */ 
if(retrait){
    retrait.addEventListener('click',async (e)=>{
        e.preventDefault()
        contenaire.innerHTML = ''
        document.querySelector('.libelle_titre').textContent = 'RETRAIT D\'ARGENT'

        let root = ReactDOM.createRoot(document.querySelector('.corps'));
        root.render(<Nouveau_retrait />);
    },false)
}

/* NOUVEAU DEPOT */ 
if(depot){
    depot.addEventListener('click',async (e)=>{
        e.preventDefault()
        contenaire.innerHTML = ''
        document.querySelector('.libelle_titre').textContent = 'DEPÔT D\'ARGENT'

        let root = ReactDOM.createRoot(document.querySelector('.corps'))
        root.render(<Nouveau_depot />);
    },false)
}

/* REPERTOIRE DES CREANCES */ 
if(rep_creance){
    rep_creance.addEventListener('click',async (e)=>{
        e.preventDefault()
        contenaire.innerHTML = '<div class="row"><i class="fas fa-spinner fa-pulse" style="color:#ff6600;font-size:100px;margin-top:170px;margin-left:490px;"></i></div>'
        document.querySelector('.libelle_titre').textContent = 'REPERTOIRE DES CREDITS'

        let res_creance = await request_global("/agence/rep_creance","POST",{}),
            res = res_creance.result,
            root = ReactDOM.createRoot(document.querySelector('.corps'));
        root.render(<Repertoire_credit res_creance={res} />);
    },false)
}
/* REPERTOIRE DES COMPTES DES ORGANISATIONS */ 
if(new_creance){
    new_creance.addEventListener('click',async (e)=>{
        e.preventDefault()
        contenaire.innerHTML = '<div class="row"><i class="fas fa-spinner fa-pulse" style="color:#ff6600;font-size:100px;margin-top:170px;margin-left:490px;"></i></div>'
        document.querySelector('.libelle_titre').textContent = 'NOUVEAU CREDIT'

        let res_etat_civil = await request_global("/agence/rep_etat_civil","POST",{}),
            res_etat = res_etat_civil.result,
            res_type_piece = await request_global("/agence/rep_type_piece","POST",{}),
            res_type = res_type_piece.result,
            res_province = await request_global("/agence/rep_province","POST",{}),
            province = res_province.result,
            root = ReactDOM.createRoot(document.querySelector('.corps'));
        root.render(<Credit etat_civil={res_etat} res_type_piece={res_type} province={province} />);
    },false)
}
    /* REPERTOIRE DES COMPTES DES ORGANISATIONS */ 
if(rep_compte_organisation){
    rep_compte_organisation.addEventListener('click',async (e)=>{
        e.preventDefault()
        contenaire.innerHTML = '<div class="row"><i class="fas fa-spinner fa-pulse" style="color:#ff6600;font-size:100px;margin-top:170px;margin-left:490px;"></i></div>'
        document.querySelector('.libelle_titre').textContent = 'RECHERCHE D\'UN COMPTE PARTENAIRE'

        let res_type_piece_identite = await request_global("/agence/rep_type_piece","POST",{}),
            res_type_piece = res_type_piece_identite.result,
            root = ReactDOM.createRoot(document.querySelector('.corps'))
        root.render(<Repertoire_compte_organisation piece={res_type_piece} />);
    },false)
}

/* NOUVEAU COMPTE */
if(new_compte){
    new_compte.addEventListener('click',async(e)=>{
        e.preventDefault()
        contenaire.innerHTML = '<div class="row"><i class="fas fa-spinner fa-pulse" style="color:#ff6600;font-size:100px;margin-top:170px;margin-left:490px;"></i></div>'
        document.querySelector('.libelle_titre').textContent = 'NOUVEAU COMPTE'

        let res_type_piece_identite = await request_global("/agence/rep_type_piece","POST",{}),
            res_type_piece = res_type_piece_identite.result   
   
    const root = ReactDOM.createRoot(document.querySelector('.corps'));
    root.render(<Nouveau_compte piece={res_type_piece} />);
    },false)
}

/* REPERTOIRE DES COMPTES MEMBRE */ 
if(rep_compte){
    rep_compte.addEventListener('click',async (e)=>{
        e.preventDefault()
        contenaire.innerHTML = '<div class="row"><i class="fas fa-spinner fa-pulse" style="color:#ff6600;font-size:100px;margin-top:170px;margin-left:490px;"></i></div>'
        document.querySelector('.libelle_titre').textContent = 'REPERTOIRE DES COMPTES'

        let root = ReactDOM.createRoot(document.querySelector('.corps')),
            res_type_piece_identite = await request_global("/agence/rep_type_piece","POST",{}),
            res_type_piece = res_type_piece_identite.result 
            
        if(res_type_piece =='deconnexion') window.location.replace("https://agence.loanmesfn.com/")
        root.render(<Repertoire_compte_membre piece={res_type_piece} />);
    },false)
}

/* REPERTOIRE DES COMPTES */ 
if(rep_agence){
    rep_agence.addEventListener('click',async (e)=>{
        e.preventDefault()
        document.querySelector('.libelle_titre').textContent = 'REPERTOIRE DES AGENCES'
        contenaire.innerHTML = '<div class="row"><i class="fas fa-spinner fa-pulse" style="color:#ff6600;font-size:100px;margin-top:170px;margin-left:490px;"></i></div>'

        let response_rep_agence = await request_global("/agence/repertoire","POST",{}),
            res = response_rep_agence.result,
            root = ReactDOM.createRoot(document.querySelector('.corps'));
        root.render(<Repertoire_agence rep_ag={res} />);
    },false)
}

/* NOUVEAU AGENCE */
if(new_agence){
    new_agence.addEventListener('click',(e)=>{
        e.preventDefault()
        document.querySelector('.libelle_titre').textContent = 'NOUVELLE AGENCE'
        contenaire.innerHTML = ''

        const root = ReactDOM.createRoot(document.querySelector('.corps')); 
        root.render(<Nouvelle_agence />);
    },false)
}

/* NOUVEL UTILISATEUR */
if(membre){
    membre.addEventListener('click',async(e)=>{
        e.preventDefault()
        
        contenaire.innerHTML = '<div class="row"><i class="fas fa-spinner fa-pulse" style="color:#ff6600;font-size:100px;margin-top:170px;margin-left:490px;"></i></div>'
        document.querySelector('.libelle_titre').textContent = 'NOUVEAU UTILISATEUR'

        let response_rep_agence = await request_global("/agence/repertoire","POST",{}),
            res = response_rep_agence.result,
            listAgence = res.map(item => (
                <Option value={item.id} option={item.denomination}/>
            )),
            res_membre = await request_global("/agence/rep_province","POST",{}),
            res_m = res_membre.result,
            res_type_piece_identite = await request_global("/agence/rep_type_piece","POST",{}),
            res_type_piece = res_type_piece_identite.result,
            res_type_membre = await request_global("/agence/rep_type_membre","POST",{}),
            res_ = res_type_membre.result,
            res_2  = res_type_membre.result2,
            res_etat_civil = await request_global("/agence/rep_etat_civil","POST",{}),
            res_etat = res_etat_civil.result

        const root = ReactDOM.createRoot(document.querySelector('.corps'));
        root.render(<Membre etat_civil={res_etat} agence={listAgence} type_piece={res_type_piece} province={res_m} type_membre={res_} type_membre2={res_2} />);
    },false)
}

/* REPERTOIRE DES PERSONNEL */  
if(personnel){
    personnel.addEventListener('click',async (e)=>{
        e.preventDefault()
        document.querySelector('.libelle_titre').textContent = 'REPERTOIRE DES UTILISATEURS'
        contenaire.innerHTML = '<div class="row"><i class="fas fa-spinner fa-pulse" style="color:#ff6600;font-size:100px;margin-top:170px;margin-left:490px;"></i></div>'

        const root = ReactDOM.createRoot(document.querySelector('.corps')),
            res_type_piece_identite = await request_global("/agence/rep_type_piece","POST",{}),
            res_type_piece = res_type_piece_identite.result
        root.render(<Repertoire_personnel piece={res_type_piece} />);
    },false)
}

function changerstatut(s){
    s.setAttribute('data-statut','c')
}
async function check_statut(){
    let stat = document.getElementById('statut_user')
    if(stat.getAttribute('data-statut') == 'c') stat.setAttribute('data-statut','d')
    else{
        await request_global("/deconnexion","POST",{})
        window.location.replace("https://agence.loanmesfn.com/")
    }
}
setInterval(check_statut,300000) // 5 min