import React from "react";

class ComposeSalad extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          foundation: '',
          protien: [],
          extra: [],
          dressing: ''
        };

        this.handleChange = this.handleInputChangeFoundation.bind(this);
    }
    handleInputChangeFoundation(event){
        const target = target.event;
        const value = target.value;
        this.setState({
            foundation: value
        });
    }
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
             <select value= {this.state.foundation.value} onChange={this.handleInputChangeFoundation}>
                {/* {foundations.map(name => (
                <option key={name}>{name} + {this.props.inventory[name].price}</option>
                ))} */}
             </select>
         </label>
         <div> 
          <label>
             <h4>Välj protien</h4>  
                {protiens.map(name => (
                <div> 
                    <input  type="checkbox" id={name} name={name} value={name} onChange={this.handleInputChange}/>
                        <label htmlFor={name}>{name} + {this.props.inventory[name].price}</label>
                </div>
                ))}
          </label>
        <div>
          <label>
            <h4>Välj extra</h4>
              {extras.map(name => (
                <div>
                <input  type="checkbox" id={name} name={name} value={name} onChange={this.handleInputChange}/>
                    <label htmlFor={name}>{name} + {this.props.inventory[name].price}</label>
            </div>
              ))}
          </label>
        </div>
        <div>
        <label>
             <h4>Välj dressing</h4>
             <select value= {this.state.foundation.value} onChange={this.handleInputChange}>
                {dressings.map(name => (
                <option key={name}>{name} + {this.props.inventory[name].price}</option>
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