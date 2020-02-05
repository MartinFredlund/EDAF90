import React from "react";

class ComposeSalad extends React.Component {
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
    }
    handleSelect(event){
        this.setState({[event.target.name]: event.target.value});
        console.log(event.target.value);
    }
    handleCheckboxes(event) {
      event.target.checked ?
      this.setState({[event.target.name] : [...this.state[event.target.name], event.target.value]}) :
      this.setState({[event.target.name] : this.state[event.target.name].filter(function(inventory){
        return inventory !== event.target.value;
        })
    });
    handleSubmit(event) {
    alert('value: ' + this.stateFoundation.value);
    event.preventDefault();
    }

  render() {
    console.log(this.state);
    const inventory = this.props.inventory;
    // test for correct ussage, <the parent must send this datastructure
    if (!inventory) {
      alert("inventory is undefined in ComposeSalad");
    }
    let foundations = Object.keys(inventory).filter(
      name => inventory[name].foundation
    );
    let protiens = Object.keys(inventory).filter(
        name => inventory[name].protein
        );
    let extras = Object.keys(inventory).filter(
        name => inventory[name].extra
        );
    let dressings = Object.keys(inventory).filter(
        name => inventory[name].dressing
        );
    return (
     <form onSubmit={this.handleSubmit}>
         <label>
             <h4>Välj bas</h4>
             <select value= {this.state.foundation.value} name="foundation" required onChange={this.handleSelect}>
                <option disabled defaultValue hidden>Välj en bas</option>
                {foundations.map(name => (
                <option value={name} type="radio" key={name}>{name} + {this.props.inventory[name].price}</option>
                ))}
             </select>
         </label>
         <div> 
          <label>
             <h4>Välj protien</h4>  
                {protiens.map(name => (
                <div> 
                    <input type="checkbox" id={name} name="protein" value={name} checked={this.state.proteins.includes(name) || false} onChange={this.handleCheckboxes}/>
                        <label htmlFor={name}>{name} + {this.props.inventory[name].price}</label>
                </div>
                ))}
          </label>
        <div>
          <label>
            <h4>Välj extra</h4>
              {extras.map(name => (
                <div>
                <input type="checkbox" id={name} name="extra" value={name} checked={this.state.extras.includes(name) || false} onChange={this.handleCheckboxes}/>
                    <label htmlFor={name}>{name} + {this.props.inventory[name].price}</label>
            </div>
              ))}
          </label>
        </div>
        <div>
        <label>
             <h4>Välj dressing</h4>
             <select value= {this.state.foundation.value} name="dressing" required onChange={this.handleSelect}>
                <option disabled defaultValue hidden>Välj en dressing</option>
                {dressings.map(name => (
                <option value={name} type="radio" key={name}>{name} + {this.props.inventory[name].price}</option>
                ))}
             </select>
         </label>
        </div>
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