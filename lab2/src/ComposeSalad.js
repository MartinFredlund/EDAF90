import React from "react";

class ComposeSalad extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          foundation: 'Sallad',
          protien: 'Kyckling',
          extra: 'Avokado',
          dressing: 'Ceasardressing'
        };
        this.stateProtien()
        this.handleChange = this.handleChange.bind(this);
    }
    handleInputChange(event){
        const target = target.event;
    }
    handleSubmit(event) {
    alert('value: ' + this.stateFoundation.value);
    event.preventDefault();
    }

  render() {
    const inventory = this.props.inventory;
    // test for correct ussage, the parent must send this datastructure
    if (!inventory) {
      alert("inventory is undefined in ComposeSalad");
    }
    let foundations = Object.keys(inventory).filter(
      name => inventory[name].foundation
    );
    let protiens = Object.keys(inventory).filter(
        name => inventory[name].protien
    );
    return (
     <form onSubmit={this.handleSubmit}>
         <label>
             Foundation:
             <select value= {this.state.value} onChange={this.handleChange}>
                <option value="Sallad">Sallad</option>
                <option value="Pasta">Pasta</option>
                <option value="Sallad + Pasta">Sallad och Pasta</option>
                <option value="Sallad + Matvete">Sallad och Matvete</option>
                </select>
         </label>
         <label>
             Protien: 

         </label>
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