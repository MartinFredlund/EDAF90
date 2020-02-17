import React, {Component} from 'react';
import Salad from './Salad';

class ComposeSalad extends Component {
    constructor(props){
        super(props);
        this.state = {
          foundation: '',
          protein: [],
          extra: [],
          dressing: ''
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.handleCheckboxes = this.handleCheckboxes.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSelect(event){
      event.target.parentElement.classList.add("was-validated");
      this.setState({[event.target.name]: event.target.value});
    }
    handleCheckboxes(event) {
      event.target.parentElement.classList.add("was-validated");
      event.target.checked ?
      this.setState({[event.target.name] : [...this.state[event.target.name], event.target.value]}) :
      this.setState({[event.target.name] : this.state[event.target.name].filter(function(inventory){
        return inventory !== event.target.value;
        })
    });
  }
  resetForm(){
    this.setState({
      foundation: '',
      protein: [],
      extra: [],
      dressing: ''});
  }
  

  handleSubmit(event) {
    event.preventDefault();
    event.target.classList.add("was-validated");
    if(event.target.checkValidity() === true) { 
      let salad = new Salad();
      salad.addFoundation(this.state.foundation);
      salad.addDressing(this.state.dressing);
      Object.values(this.state.protein).forEach(protein=>(
        salad.addProtein(protein)));
      Object.values(this.state.extra).forEach(extra =>(
        salad.addExtra(extra)));
      salad.setPrice();
      this.props.updateSalad(salad); 
      this.resetForm();
      this.props.history.push('/orders');
    }
  }

  render() {
    console.log(this.state);
    const inventory = this.props.inventory;
    
    if (!inventory) {
      alert("inventory is undefined in ComposeSalad");
    }
    let foundations = Object.keys(inventory).filter(
      name => inventory[name].foundation
    );
    let proteins = Object.keys(inventory).filter(
        name => inventory[name].protein
        );
    let extras = Object.keys(inventory).filter(
        name => inventory[name].extra
        );
    let dressings = Object.keys(inventory).filter(
        name => inventory[name].dressing
        );
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="foundationSelect">Select foundation</label>
            <select required className="form-control" id="foundationSelect" value= {this.state.foundation.value} name="foundation" required onChange={this.handleSelect}>
                <option value = ''>Välj en bas</option>
                {foundations.map(name => (
                <option value={name} type="radio" key={name}>{name} + {this.props.inventory[name].price}</option>
                ))}
            </select>
            <div className="invalid-feedback">required, select one</div>
        </div>
        <div> 
          <label>
             <h4>Välj protein</h4>  
                {proteins.map(name => (
                <div> 
                    <input type="checkbox" id={name} name="protein" value={name} checked={this.state.protein.includes(name) || false} onChange={this.handleCheckboxes}/>
                        <label htmlFor={name}>{name} + {this.props.inventory[name].price}</label>
                </div>
                ))}
          </label>
        </div>
        <div>
          <label>
            <h4>Välj extra</h4>
              {extras.map(name => (
                <div>
                <input type="checkbox" id={name} name="extra" value={name} checked={this.state.extra.includes(name) || false} onChange={this.handleCheckboxes}/>
                    <label htmlFor={name}>{name} + {this.props.inventory[name].price}</label>
                </div>
              ))}
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="foundationSelect">Select foundation</label>
          <select required className="form-control" id="foundationSelect" value= {this.state.foundation.value} name="dressing" required onChange={this.handleSelect}>
            <option value = ''>Välj en dressing</option>
              {dressings.map(name => (
              <option value={name} type="radio" key={name}>{name} + {this.props.inventory[name].price}</option>
              ))}
          </select>
          <div className="invalid-feedback">required, select one</div>
        </div>       
        <input type="submit" value="Submit"/>
     </form>

    );
  }
}

export default ComposeSalad;

{/* <div className="container">
        <h4>Välj bas</h4>
        <ul>
          {foundations.map(name => (
            <li key={name}>{name}</li>
          ))}
        </ul>
    </div> */}